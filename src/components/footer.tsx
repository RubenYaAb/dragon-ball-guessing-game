import CodeIcon from "./icons/code-icon"
import MailIcon from "./icons/mail-icon"
import ServerIcon from "./icons/server-icon"
import styles from "../styles/footer.module.css"

export default function Footer(): JSX.Element {

  return (
    <footer className={styles.footer}>
      <p>
        <CodeIcon width='20px' height='20px' />
        Desarrollado por Rubén Yáñez Aballe
      </p>
      <p>
        <MailIcon width='20px' height='20px' />
        Contacto:
        <a href="mailto:ruben.ya.ab@gmail.com">ruben.ya.ab@gmail.com</a>
      </p>
      <p>
        <ServerIcon width='20px' height='20px' />
        API:
        <a href="https://web.dragonball-api.com/" target="_blank">
          https://web.dragonball-api.com/
        </a>
      </p>
    </footer>
  )
}