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
   
          <a href="https://kredibit.de/launchpad/" className={styles.card}>
            <h3>LaunchPad &rarr;</h3>
            <p>Expand your branches in our 30+ global locations.</p>
          </a>
          <a
            href="https://kredibit.de/"
            className={styles.card}
          >
            <h3>SMB Credits &rarr;</h3>
            <p>
              Apply for our special credits for SMBs & Startups.
            </p>
          </a>
          <a
            href="https://kredibit.de/about/"
            className={styles.card}
          >
            <h3>Partners & Investors &rarr;</h3>
            <p>Discover investment & partnership opportunities.</p>
          </a>
       
        <a href="https://accounts.zoho.com/signin?servicename=VirtualOffice" className={styles.card}>
            <h3>Virtual Office &rarr;</h3>
            <p>Login to our virtual office here.</p>
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
