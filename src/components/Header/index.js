import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <span>MBCFlix</span>
      <nav>
        <a href="#">Home</a>
        <a href="#">Assistir</a>
      </nav>
    </header>
  )
}

export default Header;