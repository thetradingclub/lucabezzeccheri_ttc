// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Luca Bezzeccheri Trading',
  description: 'Formazione e servizi di trading per trader retail.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-b from-[#050509] via-[#050509] to-[#000000] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
