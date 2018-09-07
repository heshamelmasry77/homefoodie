import React from 'react'
import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

export default ({children, title = 'HomeFoodie - Matches cravers with creators.'}) => {
  return (
    <div>
      <Wrapper>
        <Head>
          <title>{title}</title>
        </Head>
        <header>
          <Nav />
        </header>

        <main>
          {children}
        </main>

        <Footer />
      </Wrapper>
    </div>
  )
}
