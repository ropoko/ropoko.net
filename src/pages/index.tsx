import React from 'react'
import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ropoko | Portfolio</title>
      </Head>

      <main>
        <Header />
        <h1>Hello World!</h1>
      </main>
    </div>
  )
}
