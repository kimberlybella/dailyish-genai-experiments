import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Juicy Word Finder',
  description: 'Find more exciting words for your writing!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
