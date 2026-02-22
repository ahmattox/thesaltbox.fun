import styles from './not-found.module.css'

import { Metadata } from 'next'
import Link from 'next/link'

import { Layout } from '@/components/layout/Layout'
import * as Typography from '@/components/general/Typography'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFoundPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <Typography.PrimaryHeading>
          404: Page not found
        </Typography.PrimaryHeading>
        <p>
          <Link href="/">Back home</Link>
        </p>
      </div>
    </Layout>
  )
}
