import styles from "./Skills.module.scss";
import {useEffect, useRef, useState} from "react";
// @ts-ignore
import TagCloud from "TagCloud"
// const TagCloud = require('TagCloud');
import Loader from 'react-loaders';
import {PageHeading} from "components/PageHeading";
import LoremIpsum from "react-lorem-ipsum";
import {useLoading} from "hooks/useLoading";


type TagCloudOptionsType = Partial<{
    keep: boolean //keep rolling after mouse leave the area
    maxSpeed: 'slow' | 'normal' | 'fast'
    radius: number
    initSpeed: 'slow' | 'normal' | 'fast'
    direction: number
    containerClass: string // why? you have to pass container class to constructor anyway
    itemClass: string
    useContainerInlineStyles: boolean
    useItemInlineStyles: boolean

}>

const TagCloudContainerClassName = ".tagcloud";
const myTags = [
    'React', 'JavaScript', 'Typescript', 'Redux', 'SCSS', 'Axios', 'Material UI', 'CSS', 'HTML',
    'git', 'Formik', 'TDD', 'Storybook', 'Styled Components', 'Redux-thunk', 'Redux toolkit', 'React-router',
];

const CLOUD_MIN_RADIUS = 200
const CLOUD_MAX_RADIUS = 400

export const Skills = () => {
    const cloudContainer = useRef<HTMLDivElement>(null)
    const [cloudRadius, setCloudRadius] = useState(CLOUD_MIN_RADIUS)
    const [isLoading] = useLoading()


    const handleRadiusUpdate = (radius: number) => {
        if (radius > CLOUD_MIN_RADIUS && radius < CLOUD_MAX_RADIUS) {
            setCloudRadius(Math.floor(radius))
        }
        return
    }

    useEffect(() => {
        const tagInstance = TagCloud(TagCloudContainerClassName, myTags, {
            radius: cloudRadius,
            maxSpeed: 'fast',
            initSpeed: 'fast',
        } as TagCloudOptionsType)
        return () => {
            tagInstance.destroy()
        }
    }, [cloudRadius])

    useEffect(() => {
        if (!cloudContainer.current) return
        if (cloudContainer.current.clientWidth < window.innerHeight) {
            handleRadiusUpdate(cloudContainer.current.clientWidth / 2)
        } else {
            handleRadiusUpdate(window.innerHeight / 2)
        }

        function handleResize() {
            if (!cloudContainer.current) return
            if (cloudContainer.current.clientWidth < window.innerHeight) {
                handleRadiusUpdate(cloudContainer.current.clientWidth / 2)
            } else {
                handleRadiusUpdate(window.innerHeight / 2)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <>
            <div className={styles.skillsPage}>
                <div className={styles.textZone}>
                    <PageHeading delay={12} duration={2600} text={"Tools I'm using"}/>
                    <p>
                        The main area of my expertise is
                        front-end development (React, Redux, JS/TS, HTML, CSS) building small and medium web apps
                        and coding interactive layouts.
                    </p>
                    <p>
                        I don’t like to define myself by the work I’ve done. I define myself by the work I want to do.
                        Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging
                        myself, and do interesting things that matter
                    </p>
                    <p>
                        Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing
                        to follow my fascinations wherever they take me. I’m never satisfied to just come up with
                        ideas. Instead I have an almost impulsive need to act on them.

                    </p>
                </div>
                <div ref={cloudContainer} className={"tagcloud"}/>
            </div>
            <Loader type={"ball-scale"} active={isLoading}/>
        </>
    )
};
