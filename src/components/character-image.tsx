import { Character } from "../lib/types"

type Props = {
  character: Character,
  isBlurred: boolean
}

function CharacterImage({ character, isBlurred }: Props): JSX.Element {

  return (
    <>
      {
        character &&
        <section>
          <img
            src={character.image}
            alt={character.name}
            width='auto'
            height='400px'
            className={isBlurred ? 'isBlurred' : 'image-shadow'}
          />
        </section>
      }
    </>
  )
}

export default CharacterImage