import React from 'react'
import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ropoko | Portfolio</title>
      </Head>

      <main className={styles.container}>
        <h1>Hello World!</h1>
      </main>
    </div>
  )
}
