import styles from "./Skills.module.scss";
import {useEffect, useRef, useState} from "react";
// @ts-ignore
import TagCloud from "TagCloud"
// const TagCloud = require('TagCloud');
import Loader from 'react-loaders';
import {PageHeading} from "components/PageHeading";
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
                    <PageHeading delay={12} duration={2600} text={"My skill set"}/>
                    <p>
                        The main area of my experience as a frontend developer is SPA
                        websites (React, Redux, JS/TS).
                        I build web apps with key principles of software development in
                        mind: KISS, DRY, SOLID.</p>
                    <p>
                        I've worked with different APIs rendering data into view, employed
                        routing via react-router,
                        built responsive layouts with
                        animations ✨, created universal UI components, implemented login
                        pages using formik.
                    </p>
                    <p>On my previous job I had to coordinate technical objectives with
                        customers at the start of a design project.👨‍💼 My responsibility
                        was to get an approvement of prototypes tests results.
                        I wrote test programs and other technical documentation
                        related to prototypes and final products. I also was responsible
                        for review manufacturers requests. I guess those were analytical
                        activities.🤔</p>
                    {/*🧑‍💼*/}
                    {/*👨‍💼*/}
                    {/*🤔*/}
                    {/*🤓*/}
                    <p>
                        I don’t like to define myself by the work I’ve done. I define
                        myself by the work I want to do.
                        Skills can be taught, personality is inherent. I prefer to keep
                        learning, continue challenging
                        myself, and do interesting things that matter🙃
                    </p>

                </div>
                <div ref={cloudContainer} className={"tagcloud"}/>
            </div>
            <Loader type={"ball-scale"} active={isLoading}/>
        </>
    )
};
