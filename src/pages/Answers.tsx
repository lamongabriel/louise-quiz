import { DATA } from '../database/data'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export function Answers(){

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true
    },
    [
      // add plugins here
    ]
  )
  return (
    <div className="w-full h-full min-h-screen bg-primaryGray flex justify-center items-center">
      <div className="bg-primaryPurple flex flex-col py-12 px-8 max-w-[420px] w-full rounded-lg text-center relative mx-2 tablet:my-24">
        <p className='text-white font-bold text-xl mb-6'> Arrasta pro lado</p>
        <div ref={sliderRef} className="keen-slider">
          {DATA.map(question => (
            <div className='keen-slider__slide'>
              <h2 className='mb-2 text-white font-bold text-xl'>{question.question}</h2>
              <p className='text-white'>Resposta: <span className='text-green-400'>{question.options[question.answer]}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}