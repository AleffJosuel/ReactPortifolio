const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080'

interface ApiErrorBody {
  status: number
  error: string
  message: string
  path: string
  details: string[]
}

export class ApiError extends Error {
  status: number
  details: string[]

  constructor(body: ApiErrorBody) {
    super(body.message)
    this.status = body.status
    this.details = body.details
  }
}

interface RequestOptions extends Omit<RequestInit, 'headers'> {
  adminToken?: string
  headers?: Record<string, string>
}

/**
 * Single fetch wrapper used by every api/*.ts module, so header handling
 * and error parsing exist in exactly one place.
 */
export async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { adminToken, headers, ...rest } = options

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(adminToken ? { 'X-Admin-Token': adminToken } : {}),
      ...headers,
    },
  })

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as ApiErrorBody | null
    if (body) {
      throw new ApiError(body)
    }
    throw new Error(`Request failed with status ${response.status}`)
  }

  // Some endpoints (e.g. POST /api/contact) return a 2xx status with an
  // empty body -- response.json() throws on empty input, so parse only
  // when there's actually a body to parse.
  const text = await response.text()
  return (text ? JSON.parse(text) : undefined) as T
}
