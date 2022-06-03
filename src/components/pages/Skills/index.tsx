import "./index.scss";
import {useEffect} from "react";
// @ts-ignore
import TagCloud from "TagCloud"
// const TagCloud = require('TagCloud');

type TagCloudOptionsType = Partial<{
    keep: boolean
    maxSpeed: 'slow' | 'normal' | 'fast'
    radius: number
    initSpeed: 'slow' | 'normal' | 'fast'
    direction: number
    // containerClass: string
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

    const options: TagCloudOptionsType = {
        radius: 250,
        maxSpeed: 'fast',
        initSpeed: 'fast',
    }
    useEffect(() => {
        const tagInstance = TagCloud(TagCloudContainerClassName, myTags, options)
        return () => {
            tagInstance.destroy()
        }
    }, [])
    return (
        <div className="cloud-wrapper">
            <div className="tagcloud"/>
        </div>

    )
};
