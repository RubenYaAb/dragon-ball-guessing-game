import { Character } from "../../lib/types"
import CharacterImage from "../character-image"
import styles from '../../styles/image-container.module.css'

type Props = {
  isError: boolean,
  characterList: Character[],
  currentCharacterIndex: number,
  isBlurred: boolean
}

export default function ImageContainer(props: Props): JSX.Element {
  const {
    isError,
    characterList,
    currentCharacterIndex,
    isBlurred
  } = props;

  return (
    <div className={styles.imageContainer} >
      {
        isError
          ?
          <p>No se ha podido recuperar la lista de personajes</p>
          :
          <CharacterImage
            character={characterList[currentCharacterIndex]}
            isBlurred={isBlurred}
          />
      }
    </div>
  )
}