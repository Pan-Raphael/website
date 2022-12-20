// Imports
import Head from 'next/head'
import styles from '../styles/about.module.css'

// Maincode
export default function About() {
  return <div className={styles.basic}>
    <Head>
      <title>Digital CV</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <main>Here is a brief look at my work experience and history</main>
  </div>
}