import styles from '../styles/game-messages.module.css'

type Props = {
  wrongAnswer: boolean,
  correctAnswer: boolean
}

function GameMessages({ wrongAnswer, correctAnswer }: Props): JSX.Element {

  if (wrongAnswer) return <p className={`${styles.message} ${styles.wrongMessage}`}>Incorrecto</p>
  if (correctAnswer) return <p className={`${styles.message} ${styles.correctMessage}`}>Correcto</p>

  return <p className={`${styles.message} hide`}>HIDDEN</p>
}

export default GameMessages