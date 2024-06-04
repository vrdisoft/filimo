import './globals.css'

import type { Metadata } from 'next'

import { Layout } from '@/containers/layout'

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
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
