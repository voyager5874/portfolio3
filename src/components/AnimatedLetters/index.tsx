import './index.scss'

type PropsType = {
    letterClass: string
    strArray: Array<string>
    idx: number
}

export const AnimatedLetters = ({ letterClass, strArray, idx }: PropsType) => {
    return (
        <span>
      {strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
    )
}