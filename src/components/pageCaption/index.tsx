import "./index.scss"
import {useEffect, useState} from "react";

export type PageCaptionClassNameType = "text-appearance-animation" | "text-on-hover-animation"

type PropsType = {
    delay: number
    duration: number
    text: string
}

export const PageCaption = ({
                                delay,
                                duration,
                                text,
                                // letterClass,
                            }: PropsType) => {
    const [letterClass, setLetterClass] = useState('text-appearance-animation' as PageCaptionClassNameType)
    const lettersArray = text.split("")
    useEffect(() => {
        setTimeout(() => {
            // timeOutId =
            setLetterClass('text-on-hover-animation')
        }, duration)
        // return clearTimeout(timeOutId)
    }, [])
    return (
        <h1 className="page-caption">
            {/*<span>*/}
            {lettersArray.map((char, i) => (char === "#" ? <br/> :
                    <span key={char + i} className={`${letterClass} _${i + delay}`}>
          {/*<span key={char + i} className={letterClass} style={{animationDelay: `${i + delay}s`}}>*/}
                        {char}
                    </span>
            ))}
            {/*</span>*/}
        </h1>
    );
};
