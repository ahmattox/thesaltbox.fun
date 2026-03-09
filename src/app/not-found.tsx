import styles from './not-found.module.css'

import { Metadata } from 'next'
import Link from 'next/link'

import * as Typography from '@/components/general/Typography'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <Typography.PrimaryHeading>404: Page not found</Typography.PrimaryHeading>
      <p>
        <Link href="/">Back home</Link>
      </p>
    </div>
  )
}
