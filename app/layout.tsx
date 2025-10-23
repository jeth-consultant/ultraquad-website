import './globals.css'
import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'UltraQuad IT Consulting',
  description: 'Building Intelligent Solutions for the Future',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}