import styles from './page.module.css'

import { Metadata } from 'next'

import { Layout } from '@/components/layout/Layout'
import { Header } from '@/components/layout/Header'
import { Schedule } from '@/components/Schedule'
import { Footer } from '@/components/Footer'
import { EventDetails } from '@/components/EventDetails'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title:
    'The Salt Box - A Two-Day Magic: The Gathering Cube Event in Baltimore, MD',
  description: 'A Two-Day Magic: The Gathering Cube Event in Baltimore, MD',
  openGraph: {
    title: 'The Salt Box',
    description: 'A Two-Day Magic: The Gathering Cube Event in Baltimore, MD',
    images: {
      url: 'http://thesaltbox.fun/the-salt-box-og.jpg',
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <Header />

        <div className={styles.mainContent}>
          <EventDetails />

          <div className={styles.schedule}>
            <Schedule />
          </div>
        </div>

        <div className={styles.secondaryContent}>
          <FAQ />
        </div>

        <Footer />
      </div>
    </Layout>
  )
}
