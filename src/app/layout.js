import Navbar from '@/components/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['devanagari'],
})

export const metadata = {
  title: `Vijetha Software's Private Limited | Innovating Your Digital World`,
  description: `Welcome to Vijetha Software's Private Limited, where innovation meets excellence. Discover our cutting-edge software solutions and technology services, tailored to transform your digital landscape. Explore our expertise today.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={poppins.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
