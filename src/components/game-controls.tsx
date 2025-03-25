import { Character } from '../lib/types'
import cloud from '/assets/images/cloud.png'
import sendIcon from '/assets/images/send_icon.png'

type Props = {
  checkAnswer: (name: string) => void,
  answer: string,
  setAnswer: (answer: string) => void,
  characterList: Character[]
}

function GameControls(props: Props): JSX.Element {
  const { checkAnswer, answer, setAnswer, characterList } = props;

  const handleSubmit = (): void => {
    checkAnswer(answer)   
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <section className={`game-controls ${characterList.length === 0 && 'hide'}`}>
      <label htmlFor="name">Nombre del personaje:</label>
      <div className='name-input-container'>
        <input 
          type='text'
          placeholder='Nombre'
          id="name"
          onKeyDown={onKeyDown}
          onChange={(e) => setAnswer(e.target.value)}
          value={answer}  
        />
        <div className='send-button hover-button' onClick={handleSubmit} >
          <input type="image" src={cloud} alt="Login button" defaultValue={answer} />
          <img src={sendIcon} alt="Send button" />
        </div>
      </div>
    </section>
  )
}

export default GameControls