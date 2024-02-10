import styles from './Header.module.css'
import logo from './assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img 
        src={logo} 
        alt="Imagem de dois triângulos verde, um sobre posto sobre o outro" 
      />
      <strong>Ignite Feed</strong>
    </header>
  )
}