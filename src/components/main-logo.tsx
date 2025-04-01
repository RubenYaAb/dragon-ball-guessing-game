import logo from '/assets/images/dragon-ball-logo.png'
import styles from '../styles/header.module.css'

function Header(): JSX.Element {

  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Dragon Ball Logo"
        width='20%'
        height='auto'
        className='image-shadow'
      />
    </header>
  )
}

export default Header