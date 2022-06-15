/** @jsxRuntime classic */
/** @jsx jsx */
import styles from "./PageHeading.module.scss";
import {useEffect, useState} from "react";
import {jsx, css} from "@emotion/react";

type PropsType = {
    delay: number
    duration: number
    text: string
    decoratorBefore?: boolean
    decoratorAfter?: boolean
    animatedDecorators?: boolean
    decoratorsDelay?: number
}

export const PageHeading = ({
                                delay,
                                duration,
                                text,
                                decoratorBefore = true,
                                decoratorAfter = true,
                                animatedDecorators = false,
                                decoratorsDelay = 0,
                            }: PropsType) => {
    const [letterClass, setLetterClass] = useState<string>(styles.textAppearanceAnimation)
    const lettersArray = text.split("")
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass(styles.textOnHoverAnimation)
        }, duration)
        return () => clearTimeout(timeoutId)
        //'animationend' event could be used instead of manually setting the time
    }, [duration])
    const componentContainerClass = `${styles.pageCaption} ${decoratorBefore ? styles.withBeforeDecorator : ''} 
    ${decoratorAfter ? styles.withAfterDecorator : ''} ${animatedDecorators ? styles.animatedDecorators : ''}`
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
