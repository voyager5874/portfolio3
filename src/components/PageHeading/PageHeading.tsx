import styles from "./PageHeading.module.scss"
import {useEffect, useState} from "react";

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
    const [letterClass, setLetterClass] = useState<string>(styles.textAppearanceAnimation)
    const lettersArray = text.split("")
    useEffect(() => {
        let timeOutId = setTimeout(() => {
            setLetterClass(styles.textOnHoverAnimation)
        }, duration)
        return () => clearTimeout(timeOutId)
    }, [duration])
    return (
        <h1 className={styles.pageCaption}>
            {lettersArray.map((char, i) => (char === "#" ? <br/> :
                    // <span key={char + i} className={`${letterClass} _${i + delay}`}>
                    <span key={char + i}
                          className={letterClass}
                          style={{animationDelay: `${letterClass === styles.textAppearanceAnimation ? ((i + delay) / 10) : 0}s`}}
                    >
                        {char}
                    </span>
            ))}
        </h1>
    );
};
