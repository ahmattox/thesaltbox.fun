import styles from './Layout.module.css'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <div className={styles.container}>
      <main className={styles.content}>{children}</main>
    </div>
  )
}
