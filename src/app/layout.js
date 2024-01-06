import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Imperial Contracting Ottawa',
  description: 'This is a modern and responsive single-page application designed to showcase the services offered by a local contracting business. This web application is built using Next.js, providing a dynamic and engaging user experience built for contracting company.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
