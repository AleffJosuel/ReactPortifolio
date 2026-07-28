import { request } from './client'
import type { ContactMessage, ContactPayload } from '../types/contact'

export function submitContactMessage(payload: ContactPayload): Promise<void> {
  return request<void>('/api/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function fetchContactMessages(adminToken: string): Promise<ContactMessage[]> {
  return request<ContactMessage[]>('/api/contact', { adminToken })
}

export function updateContactResponded(
  id: number,
  responded: boolean,
  adminToken: string
): Promise<ContactMessage> {
  return request<ContactMessage>(`/api/contact/${id}?responded=${responded}`, {
    method: 'PATCH',
    adminToken,
  })
}

export function deleteContactMessage(id: number, adminToken: string): Promise<void> {
  return request<void>(`/api/contact/${id}`, {
    method: 'DELETE',
    adminToken,
  })
}
