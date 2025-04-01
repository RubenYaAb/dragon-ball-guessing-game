import { useEffect, useRef, useState } from 'react'
import getAllCharacters from './axios/get-all-characters'
import Header from './components/main-logo'
import Score from './components/score'
import GameMessages from './components/game_messages'
import { Character } from './lib/types'
import ImageContainer from './components/containers/image-container'
import GameControls from './components/game-controls'
import NamesListContainer from './components/containers/names-list-container'
import FinalScoreModal from './components/final-score-modal'
import Footer from './components/footer'
import WrongDeviceMessage from './components/wrong-device-message'
import styles from './styles/game-container.module.css'

function App() {
  const [characterList, setCharacterList] = useState<Character[]>([])
  const [isError, setIsError] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)
  const [countWrongAnswers, setCountWrongAnswers] = useState<number>(0)
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState<number>(0)
  const [wrongAnswer, setWrongAnswer] = useState<boolean>(false)
  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false)
  const [answer, setAnswer] = useState<string>('')
  const [isImageBlurred, setIsImageBlurred] = useState<boolean>(true)
  const [showFinalScore, setShowFinalScore] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const characterListLength = useRef<number>(0)

  useEffect(() => {
    if (isPlaying) return

    getAllCharacters()
      .then((response) => {
        if (response) {
          setCharacterList(response)
          setCurrentCharacterIndex(Math.floor(Math.random() * response.length))
          characterListLength.current = response.length
          setIsPlaying(true)
        }
        else setIsError(true)
      })
  }, [characterList, isPlaying])

  const nextCharacter = (): void => {
    setCurrentCharacterIndex(Math.floor(Math.random() * (characterList.length - 1)))
    setCharacterList(prev => {
      const newList = prev.filter(character =>
        character.id !== prev[currentCharacterIndex].id
      )
      return newList
    })
    if (characterList.length === 1) setShowFinalScore(true)
  }

  const checkAnswer = (name: string): void => {
    if (!name) return
    if (name.toLowerCase() === characterList[currentCharacterIndex].name.toLowerCase())
      correctAnswerHandler()
    else
      wrongAnswerHandler()
  }

  const correctAnswerHandler = (): void => {
    setScore(prev => prev + 1)
    setIsImageBlurred(false);
    setCorrectAnswer(true)
    setTimeout(() => {
      setCorrectAnswer(false)
      setAnswer('')
      setIsImageBlurred(true)
      nextCharacter()
    }, 2000)
  }

  const wrongAnswerHandler = (): void => {
    setWrongAnswer(true)
    setCountWrongAnswers(prev => prev + 1)
    setIsImageBlurred(false)
    setTimeout(() => {
      setWrongAnswer(false)
      setAnswer('')
      setIsImageBlurred(true)
      nextCharacter()
    }, 2000)
  }

  const resetGameHandler = (): void => {
    setIsPlaying(false)
    setScore(0)
    setShowFinalScore(false)
    setCountWrongAnswers(0)
  }

  return (
    <>
      <Header />
      {
        window.innerWidth < 1440
          ?
          <WrongDeviceMessage />
          :
          <>
            <main>
              <div className={styles.gameContainer}>
                <NamesListContainer
                  characterList={characterList}
                  setAnswer={setAnswer}
                />
                <ImageContainer
                  isError={isError}
                  characterList={characterList}
                  currentCharacterIndex={currentCharacterIndex}
                  isBlurred={isImageBlurred}
                />
                <Score
                  score={score}
                  maxScore={characterListLength.current}
                  resetGameHandler={resetGameHandler}
                  countWrongAnswers={countWrongAnswers}
                />
              </div>
              <GameControls
                checkAnswer={checkAnswer}
                answer={answer}
                setAnswer={setAnswer}
                characterList={characterList}
              />
              <GameMessages
                wrongAnswer={wrongAnswer}
                correctAnswer={correctAnswer}
              />
              <FinalScoreModal
                showFinalScore={showFinalScore}
                score={score}
                maxScore={characterListLength.current}
              />
            </main>
            <Footer />
          </>
      }
    </>
  )
}

export default App
