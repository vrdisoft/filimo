'use client'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Header } from './Header'

export const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen  bg-black">
        <Header />
        <main>{children}</main>
      </div>
    </QueryClientProvider>
  )
}
