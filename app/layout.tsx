import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'


export const metadata: Metadata = {
  title: 'TheBooking',
  description: 'A perfect place to book your next staying',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
