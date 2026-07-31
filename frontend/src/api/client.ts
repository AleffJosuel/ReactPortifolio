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
  /** Aborts the request after this many ms so a stalled backend can't hang the UI forever. */
  timeoutMs?: number
}

// Generous default: the free-tier backend can take ~40s to wake from sleep
// (cold start), so the timeout must sit comfortably above that.
const DEFAULT_TIMEOUT_MS = 90_000

/**
 * Single fetch wrapper used by every api/*.ts module, so header handling
 * and error parsing exist in exactly one place.
 */
export async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { adminToken, headers, timeoutMs = DEFAULT_TIMEOUT_MS, ...rest } = options

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  let response: Response
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...rest,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(adminToken ? { 'X-Admin-Token': adminToken } : {}),
        ...headers,
      },
    })
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('A requisição demorou demais e foi cancelada. Tente novamente.')
    }
    throw error
  } finally {
    clearTimeout(timeoutId)
  }

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
