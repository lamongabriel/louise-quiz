import { ReactNode } from "react"

interface QuestionOptionsProps {
  children: ReactNode
}

export function QuestionOptions ({children}: QuestionOptionsProps) {
  return (
    <div className="flex-col flex gap-2">
      {children}
    </div>
  )
}