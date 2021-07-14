import React from 'react'
import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ropoko | Portfolio</title>
      </Head>

      <main className={styles.container}>
        <Header />
        <h1>Hello World!</h1>
      </main>
    </div>
  )
}
