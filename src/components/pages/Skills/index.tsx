import "./index.scss";
import {useEffect, useRef, useState} from "react";
// @ts-ignore
import TagCloud from "TagCloud"
// const TagCloud = require('TagCloud');
import Loader from 'react-loaders';
import {PageCaption} from "../../pageCaption";


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

const TagCloudContainerClassName = '.tagcloud';
const myTags = [
    'React', 'JavaScript', 'Typescript', 'Redux', 'SCSS', 'Axios', 'Material UI', 'CSS', 'HTML',
    'git', 'Formik', 'TDD', 'Storybook', 'Styled Components', 'Redux-thunk', 'Redux toolkit', 'React-router',
];

export const Skills = () => {
    const cloudContainer = useRef<HTMLDivElement>(null)
    const [cloudRadius, setCloudRadius] = useState(150)

    const options: TagCloudOptionsType = {
        radius: cloudRadius,
        maxSpeed: 'fast',
        initSpeed: 'fast',
    }

    useEffect(() => {
        const tagInstance = TagCloud(TagCloudContainerClassName, myTags, options)
        // console.log(tagInstance)
        return () => {
            tagInstance.destroy()
        }
    }, [cloudRadius])

    useEffect(() => {
        if (cloudContainer.current) setCloudRadius(cloudContainer.current.clientWidth / 2)

        function handleResize() {
            if (!cloudContainer.current) return
            setCloudRadius((cloudContainer.current.clientWidth) / 2)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <>
            <div className="skills-page">
                <PageCaption delay={20} duration={3500} text={"Tools I'm using"}/>
                <div ref={cloudContainer} className="tagcloud"/>
            </div>

            <Loader type={"pacman"} active/>
        </>
    )
};
