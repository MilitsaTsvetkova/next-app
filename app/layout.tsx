import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Navbar from './Navbar'
import AuthProvider from './auth/Provider'
import GoogleAnalytics from './GoogleAnalytics'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })
const poppins = localFont({
  src: '../public/fonts/poppins-regular-webfont.woff2',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  //social media
  openGraph: {
    title: '...',
    description: '...',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' data-theme='lemonade'>
      <GoogleAnalytics />
      <body className={poppins.variable}>
        <AuthProvider>
          <Navbar />
          <main className='p-5'>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
