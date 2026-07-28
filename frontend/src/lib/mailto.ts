/** Builds a mailto: link pre-filled to reply to a contact message -- no outbound email sending is configured, the owner replies from their own inbox. */
export function buildMailtoLink(email: string, name: string): string {
  const subject = encodeURIComponent('Re: contato pelo portfólio')
  const body = encodeURIComponent(`Olá ${name},\n\n`)
  return `mailto:${email}?subject=${subject}&body=${body}`
}
