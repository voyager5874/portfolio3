import "./index.scss"
import {useEffect, useState} from "react";

export type PageCaptionClassNameType =
    "text-appearance-animation"
    | "text-on-hover-animation"

type PropsType = {
    delay: number
    duration: number
    text: string
}

export const PageHeading = ({
                                delay,
                                duration,
                                text,
                            }: PropsType) => {
    const [letterClass, setLetterClass] = useState<PageCaptionClassNameType>('text-appearance-animation')
    const lettersArray = text.split("")
    useEffect(() => {
        let timeOutId = setTimeout(() => {
            setLetterClass('text-on-hover-animation')
        }, duration)
        return () => clearTimeout(timeOutId)
    }, [duration])
    return (
        <h1 className="page-caption">
            {lettersArray.map((char, i) => (char === "#" ? <br/> :
                    // <span key={char + i} className={`${letterClass} _${i + delay}`}>
                    <span key={char + i}
                          className={letterClass}
                          style={{animationDelay: `${letterClass === 'text-appearance-animation' ? ((i + delay) / 10) : 0}s`}}
                    >
                        {char}
                    </span>
            ))}
        </h1>
    );
};
