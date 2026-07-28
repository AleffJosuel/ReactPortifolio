import type { PropsWithChildren } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

/** Shared shell (Navbar + Footer) for every public page, so each page only renders its own content. */
export function PageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </>
  )
}
