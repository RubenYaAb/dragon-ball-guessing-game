import RefreshIcon from "./icons/refresh-icon"
import styles from "../styles/score.module.css"

type Props = {
  score: number,
  maxScore: number,
  countWrongAnswers: number,
  resetGameHandler: () => void
}

function Score({ score, maxScore, resetGameHandler, countWrongAnswers }: Props): JSX.Element {

  return (
    <section className={styles.scoreSection}>
      <div className={styles.scoreContainer} >
        <p><span>PUNTUACIÓN:</span> {score}/{maxScore}</p>
        <p><span>ACERTADOS:</span>{score}</p>
        <p><span>FALLADOS:</span>{countWrongAnswers}</p>
        <button
          className="hover-button"
          onClick={resetGameHandler}
        >
          <RefreshIcon width='20px' height='20px' />
          REINICIAR
        </button>
      </div>
    </section>
  )
}

export default Score