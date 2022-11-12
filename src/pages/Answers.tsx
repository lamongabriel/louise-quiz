import { DATA } from '../database/data'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export function Answers(){

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: false
    },
    []
  )
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <div className="bg-primaryPurple flex flex-col py-12 px-6 max-w-[420px] w-full rounded-lg text-center relative mx-5 tablet:my-24 overflow-hidden">
        <p className='text-white font-bold text-xl mb-6'> Arrasta pro lado</p>
        <div ref={sliderRef} className="keen-slider">
          {DATA.map(question => (
            <div className='keen-slider__slide bg-purple-800 rounded py-4 px-4 flex flex-col items-center justify-center overflow-hidden'>
              <h2 className='mb-2 text-white font-bold text-xl'>{question.question.split('-')[0]}<br/>{question.question.split('-')[1]}</h2>
              <p className='text-white'>Resposta: <span className='text-green-400'>{question.options[question.answer]}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}