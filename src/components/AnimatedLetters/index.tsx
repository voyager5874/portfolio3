import './index.scss'

type PropsType = {
    letterClass: string
    strArray: Array<string>
    delay: number
}

export const AnimatedLetters = ({ letterClass, strArray, delay }: PropsType) => {
    return (
        <span>
      {strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + delay}`}>
          {char}
        </span>
      ))}
    </span>
    )
}