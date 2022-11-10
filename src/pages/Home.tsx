import { useState } from "react"
import { Link, useNavigate  } from "react-router-dom"

export function Home() {

  const navigate = useNavigate()

  const [accepted, setAccepted] = useState(false)

  const handleAccepted = () => {
    setAccepted(true)
    setTimeout(() => {
      navigate('/quiz')
    }, 3000)
  }

  return (
    <div className="w-full h-full min-h-screen bg-primaryGray flex justify-center items-center">
      {!accepted 
        ? <div className="flex flex-col py-12 px-8 max-w-[420px] w-full rounded-lg text-center relative mx-2">
            <h3 className="text-red-400 text-md mb-2">Louise, Louise...</h3>
            <h2 className="mb-5 text-white font-bold text-2xl">Em clima de ENEM</h2>
            <p className="text-white mb-6">Eu queria te fazer umas perguntas mais importantes, e ver se você tem o molho.</p>
            <div className="flex gap-2 justify-between">
              <a href='https://www.google.com/' className="bg-primaryPurple py-2 px-4 text-white rounded transition hover:scale-105">Vou cagar na latinha</a>
              <button onClick={handleAccepted} className="bg-primaryPurple py-2 px-4 text-white rounded transition hover:scale-105">Eu tenho o molho</button>
            </div>
          </div> 
        :
        <p className="text-white animate-bounce">Ok... vamos ver se você é boa mesmo.</p>
      }
    </div>
  )
}
