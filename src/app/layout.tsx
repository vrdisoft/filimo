import './globals.css'

import type { Metadata } from 'next'

import { Header } from '@/continers/layout/Header'

export const metadata: Metadata = {
  title: 'فیلم و سریال',
  description: 'تماشای آنلاین فیلم و سریال',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="font-IRANSans text-sm ">
        <div className="min-h-screen  bg-black">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
