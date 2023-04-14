import React from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

type Props = {
  children: React.ReactElement | React.ReactElement[]
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen max-w-[1200px] flex-col">
      <Header />
      <main className="flex flex-wrap justify-center grow">{children}</main>
      <Footer />
    </div>
  )
}
