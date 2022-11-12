import { useRef, useState } from 'react'

import { QuestionOptions } from '../components/QuestionOptions'
import { QuestionButton } from '../components/QuestionButton'
import { GameEnded } from '../components/GameEnded'

import { DATA, DataProps } from '../database/data'

import louiseIcon from '../assets/user.jpg'

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<DataProps>(DATA[0])
  const [gameEnded, setGameEnded] = useState(false)

  const currentQuestionNumber = useRef(0)
  const answeredCorrectQuantity = useRef(0)

  function resetGame(){
    currentQuestionNumber.current = 0
    answeredCorrectQuantity.current = 0
    setCurrentQuestion(DATA[0])
    setGameEnded(false)
  }

  function handleQuestionAnswered (index: number) {
    if(index === currentQuestion.answer){
      answeredCorrectQuantity.current ++
    }
    if(currentQuestionNumber.current + 1 < DATA.length){
      currentQuestionNumber.current ++
      setCurrentQuestion(DATA[currentQuestionNumber.current])
    } else {
      setGameEnded(true)
    }
  }

  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      {!gameEnded 
        ? 
        <div className="bg-primaryPurple flex flex-col py-12 px-6 max-w-[420px] w-full rounded-lg text-center relative mx-4 tablet:my-24">
          <img className='absolute w-28 h-28 rounded-full border-4 border-primaryPurple top-[-4.6rem] left-[calc(50%-56px)]' src={louiseIcon} alt='Icon Louise' />
          <p className="text-white mb-4">Questão {currentQuestionNumber.current + 1}/{DATA.length}</p>
          <h2 className="mb-16 text-white font-bold text-2xl animate-pulse">{currentQuestion.question}</h2>
          <QuestionOptions>
            {currentQuestion.options.map((option, index) => (
              <QuestionButton
                key={index}
                title={option} 
                onClick={() => handleQuestionAnswered(index)}
              />
            ))}
          </QuestionOptions>
        </div>
        :
        <GameEnded resetGame={resetGame} correctQuantity={(answeredCorrectQuantity.current / DATA.length) * 100}/>
      }
    </div>
  )
}
