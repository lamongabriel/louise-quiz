import { Routes, Route } from "react-router-dom"
import { Answers } from "./pages/Answers"
import { Home } from "./pages/Home"
import { Quiz } from "./pages/Quiz"

function App() {
  return (
    <div className="w-full h-full min-h-screen">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/quiz" element={ <Quiz/> } />
        <Route path="/answers" element={ <Answers/> } />
      </Routes>
    </div>
  )
}

export default App