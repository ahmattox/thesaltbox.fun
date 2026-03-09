import styles from './Logo.module.css'

export function Logo() {
  return (
    <img
      src="/salt-box-logo.png"
      width={192}
      className={styles.image}
      alt="The Salt Box"
    />
  )
}
