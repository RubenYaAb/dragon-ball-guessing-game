
type Props = {
  score: number,
  maxScore: number,
  countWrongAnswers: number,
  resetGameHandler: () => void
}

function Score({ score, maxScore, resetGameHandler, countWrongAnswers }: Props): JSX.Element {

  return (
    <section className="score-section">
      <div className="score-container">
        <p><span>PUNTUACIÓN:</span> {score}/{maxScore}</p>
        <p><span>ACERTADOS:</span>{score}</p>
        <p><span>FALLADOS:</span>{countWrongAnswers}</p>
        <button
          className="hover-button"
          onClick={resetGameHandler}
        >
          REINICIAR
        </button>
      </div>
    </section>
  )
}

export default Score