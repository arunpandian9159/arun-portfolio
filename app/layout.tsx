import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arunpandian C - Portfolio',
  description: 'Frontend Developer Portfolio - Arunpandian C',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
