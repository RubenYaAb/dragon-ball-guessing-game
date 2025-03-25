
type Props = {
  showFinalScore: boolean,
  score: number,
  maxScore: number
}

export default function FinalScoreModal (props: Props): JSX.Element {
  const {showFinalScore, score, maxScore} = props;

  return (
    <dialog open={showFinalScore} className="score-modal">
      <p><span>PUNTUACIÓN:</span>{score}/{maxScore}</p>
    </dialog>
  )
}