import "./index.scss";
import {useEffect, useRef, useState} from "react";
// @ts-ignore
import TagCloud from "TagCloud"
// const TagCloud = require('TagCloud');
import Loader from 'react-loaders';
import {PageCaption} from "../../pageCaption";
import LoremIpsum from "react-lorem-ipsum";


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

const CLOUD_MIN_RADIUS = 200
const CLOUD_MAX_RADIUS = 400

export const Skills = () => {
    const cloudContainer = useRef<HTMLDivElement>(null)
    const [cloudRadius, setCloudRadius] = useState(CLOUD_MIN_RADIUS)

    const handleRadiusUpdate = (radius: number) => {
        if (radius > CLOUD_MIN_RADIUS && radius < CLOUD_MAX_RADIUS ) {
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
        // console.log(tagInstance)
        return () => {
            tagInstance.destroy()
        }
    }, [cloudRadius])

    useEffect(() => {
        if(!cloudContainer.current) return
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
            // setCloudRadius((cloudContainer.current.clientHeight) / 2)
            // console.log('width', cloudContainer.current.clientWidth)
            // console.log('height', cloudContainer.current.clientHeight)
            // console.log('window', window.innerHeight)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <>
            <div className="skills-page">
                <div className={"text-zone"}>
                    <PageCaption delay={20} duration={3500} text={"Tools I'm using"}/>
                    <LoremIpsum p={2} random={false}/>
                </div>

                <div ref={cloudContainer} className="tagcloud"/>
            </div>

            <Loader type={"pacman"} active/>
        </>
    )
};
