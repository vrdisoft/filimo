'use client'
import { QueryProviders } from '@/context/QueryClientProvider'

import { Header } from './Header'

export const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <QueryProviders>
      <div className="min-h-screen  bg-black">
        <Header />
        <main>{children}</main>
      </div>
    </QueryProviders>
  )
}
