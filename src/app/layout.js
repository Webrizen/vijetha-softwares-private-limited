import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Vijetha Software's Private Limited | Innovating Your Digital World`,
  description: `Welcome to Vijetha Software's Private Limited, where innovation meets excellence. Discover our cutting-edge software solutions and technology services, tailored to transform your digital landscape. Explore our expertise today.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
