import type { Metadata } from 'next'
import './globals.css'
import { ErrorBoundary } from '@/components/ui/error-boundary'

export const metadata: Metadata = {
  title: 'Arunpandian C - Portfolio',
  description: 'Frontend Developer Portfolio - Arunpandian C',
  generator: 'Next.js',
  keywords: 'frontend developer, react, javascript, portfolio, web development',
  authors: [{ name: 'Arunpandian C' }],
  creator: 'Arunpandian C',
  openGraph: {
    title: 'Arunpandian C - Frontend Developer',
    description: 'Passionate Frontend Developer specializing in React, JavaScript, and modern web technologies',
    url: 'https://arunpandian-portfolio.vercel.app',
    siteName: 'Arunpandian C Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arunpandian C - Frontend Developer',
    description: 'Passionate Frontend Developer specializing in React, JavaScript, and modern web technologies',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
