import styles from './Footer.module.css'

export function Footer() {
  return (
    <div className={styles.container}>
      <p>
        Event Organized by Max Richards
        <br />
        Website by{' '}
        <a href="https://bsky.app/profile/anthony.luckypaper.co">
          Anthony Mattox
        </a>
      </p>
    </div>
  )
}
