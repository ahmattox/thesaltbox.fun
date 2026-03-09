import styles from './Header.module.css'

import Link from 'next/link'

import { Logo } from '@/components/layout/Logo'

export function Header() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <Logo />
      </Link>

      <div className={styles.headerDetails}>
        <div>
          A Two-Day <em>Magic: The Gathering</em> Cube Event in Baltimore, MD
        </div>
        <p>May 2 - 3, 2026</p>
      </div>
    </div>
  )
}
