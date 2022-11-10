import { useRef } from "react"

interface GameEndedProps {
  correctQuantity: number
  resetGame: () => void
}

import image20 from '../assets/win_20.png'
import image30 from '../assets/win_30.png'
import image50 from '../assets/win_50.png'
import image60 from '../assets/win_60.png'
import image70 from '../assets/win_70.png'
import image80 from '../assets/win_80.png'
import image90 from '../assets/win_90.png'
import image100 from '../assets/win_100.png'

export function GameEnded ({correctQuantity, resetGame}: GameEndedProps) {

  const image = useRef(<img />)
  const title = useRef('')
  const text = useRef('')

  switch (true) {
    case correctQuantity === 100:
      image.current = <img src={image100}/>
      title.current = 'Nunca duvidei, te amo! ❤️❤️'
      text.current = 'Espero que tenha gostado, você me faz tão bem, espero pelo menos ter te feito rir um pouco.'
      break
    case correctQuantity >= 90:
      image.current = <img src={image90}/>
      title.current = 'Caraca muito braba 😎'
      text.current = 'Tá estudada pô, agora quero ver acertar tudo.'
      break
    case correctQuantity >= 80:
      image.current = <img src={image80}/>
      title.current = 'Oburro, tu é sinistra mermo 🤓'
      text.current = 'Amassou, sempre foi inteligente assim ou fez seminário?'
    break
    case correctQuantity >= 70:
      image.current = <img src={image70}/>
      title.current = 'Tá bom, vou reclamar não 🤩'
      text.current = 'Pra quem não estudou, 7 tá ótimo.'
    break
    case correctQuantity >= 60:
      image.current = <img src={image60}/>
      title.current = 'Meia boca né 🧐'
      text.current = 'qual foi tá tirando?'
    break
    case correctQuantity >= 50:
      image.current = <img src={image50}/>
      title.current = 'po metade é sacanagem cmg 🥸'
      text.current = 'tá merecendo uma coça'
    break
    case correctQuantity >= 30:
      image.current = <img src={image30}/>
      title.current = 'menos da metade mano, quem é o outro 😠'
      text.current = 'não fala mais comigo.'
    break
    default:
      image.current = <img src={image20}/>
      title.current = 'TÁ DE SACANAGEM 😡😡'
      text.current = 'é oficial, você tá solteira.'
    break
  }

  return (
    <div className="bg-yellow-500 flex flex-col py-12 px-8 max-w-[420px] w-full rounded-lg text-center relative mx-2">
      <p className="text-white">{correctQuantity.toFixed(0)}%</p>
      <h2 className="text-white font-bold text-xl mb-4">{title.current}</h2>
      <div className="rounded-md overflow-hidden">
        {image.current}
      </div>
      <p className="text-white mt-6">{text.current}</p>
      <button className="w-100 bg-gray-100 text-primaryGray rounded mt-8 py-3 transition hover:scale-105" onClick={resetGame}>Tentar de novo</button>
    </div>
  )
}