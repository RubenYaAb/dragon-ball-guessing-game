import styles from '../styles/score-modal.module.css'

type Props = {
  showFinalScore: boolean,
  score: number,
  maxScore: number
}

export default function FinalScoreModal (props: Props): JSX.Element {
  const {showFinalScore, score, maxScore} = props;

  return (
    <dialog open={showFinalScore} className={styles.scoreModal}>
      <p><span>PUNTUACIÓN FINAL:</span>{score}/{maxScore}</p>
    </dialog>
  )
}