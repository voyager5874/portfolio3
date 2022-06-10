/** @jsxRuntime classic */
/** @jsx jsx */
import styles from "./PageHeading.module.scss"
import {useEffect, useState} from "react";
import {jsx, css} from '@emotion/react'

type PropsType = {
    delay: number
    duration: number
    text: string
    decorators?: boolean
    animatedDecorators?: boolean
    decoratorsDelay?: number
}

export const PageHeading = ({
                                delay,
                                duration,
                                text,
                                decorators = true,
                                animatedDecorators = false,
                                decoratorsDelay = 0,
                            }: PropsType) => {
    const [letterClass, setLetterClass] = useState<string>(styles.textAppearanceAnimation)
    const lettersArray = text.split("")
    useEffect(() => {
        let timeOutId = setTimeout(() => {
            setLetterClass(styles.textOnHoverAnimation)
        }, duration)
        return () => clearTimeout(timeOutId)
    }, [duration])
    const componentContainerClass = `${styles.pageCaption} ${decorators ? styles.withDecorators : ''} ${animatedDecorators ? styles.animatedDecorators : ''}`
    return (
        <h1 className={componentContainerClass} css={{
            "&::before": {
                animation: `fadeIn 2s ${decoratorsDelay}s forwards`
            },
            "&::after": {
                animation: `fadeIn 2s ${decoratorsDelay}s forwards`
            }
        }}>
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
