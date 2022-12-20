// Imports
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/404.module.css'

// Maincode
export default function Page404() {
  return <div className={styles.p404}>
    <Head>
      <title>[❌] Page Not Found</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <h1>
      The page you searched for does not exist.<br/>
      <Link href='/'>Go home?</Link>
    </h1>
  </div>
}