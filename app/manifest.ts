import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arunpandian C - Portfolio',
    short_name: 'Arun Portfolio',
    description: 'Frontend Developer Portfolio showcasing skills, projects, and achievements',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#8b5cf6',
    orientation: 'any',
    categories: ['portfolio', 'developer', 'frontend'], 
    lang: 'en',
    scope: '/',
    display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Get in touch with Arunpandian',
        url: '/#contact',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Projects',
        short_name: 'Projects',
        description: 'View my projects',
        url: '/#projects',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
    ],
  }
}