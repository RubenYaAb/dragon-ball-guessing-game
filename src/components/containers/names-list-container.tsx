import { Character } from "../../lib/types"
import styles from '../../styles/names-list-container.module.css'

type Props = {
  characterList: Character[],
  setAnswer: (answer: string) => void
}

export default function NamesListContainer(props: Props): JSX.Element {
  const { characterList, setAnswer } = props;
  const orderCharacterList = characterList.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  }) 

  return (
    <div className={`${styles.namesListContainer} ${characterList.length === 0 && 'hide'}`} >
      <ul>
        {
          orderCharacterList?.map((character) => {
            return (
              <li key={character.id} onClick={() => setAnswer(character.name)}>
                {character.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}