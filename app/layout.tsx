import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ErrorBoundary } from '@/components/ui/error-boundary'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // TODO: Change to your production domain
  title: 'Arunpandian C - Portfolio',
  description: 'Frontend Developer Portfolio - Arunpandian C',
  generator: 'Next.js',
  keywords: 'frontend developer, react, javascript, portfolio, web development, mobile responsive', 
  authors: [{ name: 'Arunpandian C' }],
  creator: 'Arunpandian C',
  openGraph: {
    title: 'Arunpandian C - Frontend Developer',
    description: 'Passionate Frontend Developer specializing in React, JavaScript, and modern web technologies',
    url: 'https://arunpandian-portfolio.vercel.app',
    siteName: 'Arunpandian C Portfolio',
    type: 'website',
    images: [
      { 
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arunpandian C - Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arunpandian C - Frontend Developer',
    description: 'Passionate Frontend Developer specializing in React, JavaScript, and modern web technologies',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Arun Portfolio',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8b5cf6' },
    { media: '(prefers-color-scheme: dark)', color: '#8b5cf6' },
  ],
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
