import Logo from "./elements/logo"
import styles from "./header.module.css"
import handleEmailClick from "./elements/handleemailclick"

export default function Header({ bgColor }) {
  
  return (
    <>
    <header 
      className={styles.header}>
      <Logo />
      <button onClick={handleEmailClick}>
        Say Hello
      </button>
    </header>
    <div className={styles.headergradient} style={{backgroundImage: bgColor}}></div>
    </>
  )
}