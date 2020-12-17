import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://kreditit.de">KRΞDEBit</a>
        </h1>

        <p className={styles.description}>
          Business & Finance Tools for{' '}
          <code className={styles.code}>Global Citizens</code>
        </p>

        <div className={styles.grid}>
   
          <a href="https://kredibit.de/" className={styles.card}>
            <h3>Smart Banking &rarr;</h3>
            <p>Apply for launchpad or get a credit for your SMB or Startup.</p>
          </a>
          <a
            href="https://kredebit.de/launch"
            className={styles.card}
          >
            <h3>App Launch &rarr;</h3>
            <p>
              Join our list & get notified when our App is available.
            </p>
          </a>
          <a
            href="https://kredibit.de/about/"
            className={styles.card}
          >
            <h3>Partners & Investors &rarr;</h3>
            <p>Discover attractive investment & partnership opportunities.</p>
          </a>
       
        <a href="https://accounts.zoho.com/signin?servicename=VirtualOffice" className={styles.card}>
            <h3>Virtual Office &rarr;</h3>
            <p>For partners & employees. Login to our virtual office here.</p>
          </a>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
