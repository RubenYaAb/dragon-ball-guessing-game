import styles from '../styles/wrong-device-message.module.css'

export default function WrongDeviceMessage(): JSX.Element {

  return (
    <div className={styles.wrongDeviceMessage}>
      <p>❌</p>
      <p>Tamaño de pantalla incompatible.</p>
      <p>Estoy trabajando para hacer la aplicación compatible con dispositivos móviles.</p>
      <p>Por ahora, puedes abrila en un dispositivo más grande.</p>
      <p>Disculpa las molestias.</p>
    </div>
  )
}