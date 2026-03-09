import './reset.css'
import './globals.css'

import styles from './layout.module.css'

import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

const sansFont = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['500', '800'],
})

export const metadata: Metadata = {
  title: 'The Salt Box',
  description: 'A Two-Day Magic: The Gathering Cube Event in Baltimore, MD',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={sansFont.variable}>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  )
}
