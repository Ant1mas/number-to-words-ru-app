import React from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

type Props = {
  children: React.ReactElement | React.ReactElement[]
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen w-full max-w-[1200px] flex-col">
      <Header />
      <main className="flex grow flex-wrap justify-center">{children}</main>
      <Footer />
    </div>
  )
}
