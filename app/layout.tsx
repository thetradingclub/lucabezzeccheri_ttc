// app/layout.tsx
import './globals.css'

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
    <html lang="it">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
