import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//* import comps
import DefaultMargin from '../components/_layouts/DefaultMargin'
import PageHeader from '../components/_headers/PageHeader'

const Home = () => {

  return (
    <DefaultMargin>
        <PageHeader
          header="Be a better you"
          tagline="Create, enroll, or bring your own course. Be in command of your own growth and education!"
        />
    </DefaultMargin>
  )
}

const OldHome: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Learne</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://alexbeciana.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <span>
            <Image src="/profile-pic.png" alt="Abeciana Logo" width={32} height={32} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
