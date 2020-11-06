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
          Welcome to <a href="https://kreditit.de">Kreditit.de</a>
        </h1>

        <p className={styles.description}>
          Get started by choosing{' '}
          <code className={styles.code}>your case</code>
        </p>

        <div className={styles.grid}>
          <a href="https://servicedesk.kreditit.de" className={styles.card}>
            <h3>Service Desk &rarr;</h3>
            <p>Connect to our virtual office cloud of services.</p>
          </a>

          <a href="https://banking.kreditit.de" className={styles.card}>
            <h3>Neo Banking Solutions &rarr;</h3>
            <p>Learn about our banking and investment solutions.</p>
          </a>

          <a
            href="https://partners.kreditit.de"
            className={styles.card}
          >
            <h3>Partners & Investors &rarr;</h3>
            <p>Discover our investment & partnership opportunities.</p>
          </a>

          <a
            href="https://smb.kreditit.de"
            className={styles.card}
          >
            <h3>SMB Credits &rarr;</h3>
            <p>
              Apply for SMB credits & services. .
            </p>
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
