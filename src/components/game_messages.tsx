
type Props = {
  wrongAnswer: boolean,
  correctAnswer: boolean
}

function GameMessages({ wrongAnswer, correctAnswer }: Props): JSX.Element {

  if (wrongAnswer) return <p className="message wrong-message">Incorrecto</p>
  if (correctAnswer) return <p className="message correct-message">Correcto</p>

  return <p className="message hide">HIDE</p>
}

export default GameMessages