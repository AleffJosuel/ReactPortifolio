export interface ContactPayload {
  name: string
  email: string
  message: string
}

export interface ContactMessage {
  id: number
  name: string
  email: string
  message: string
  responded: boolean
  createdAt: string
}
