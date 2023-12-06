import { Inter } from 'next/font/google'
import './globals.css'

import { AuthContextProvider } from '@/configs/AuthContext'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NEWS-APP',
  description: 'TOP news around the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContextProvider>
        <Navbar/>

        {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
