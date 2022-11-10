interface QuestionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function QuestionButton ({title, ...rest}: QuestionButtonProps) {
  return (
    <button className="bg-secondaryPurple text-white py-2 px-4 rounded-lg text-xl hover:scale-105 transition" {...rest}>{title}</button>
  )
}