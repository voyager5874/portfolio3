import "./portfolio.scss"
import {PageCaption} from "../../pageCaption";
import socNetwork from "../../../assets/images/social-network-thumb-2.png"
import taskTracker from "../../../assets/images/task-tracker-thumb.png"
import darkImg from "../../../assets/images/pug-img-dark.png"
import {loremIpsum} from "react-lorem-ipsum";

export const Portfolio = () => {
    return (
        <div className={"portfolio-page"}>
            <PageCaption delay={5} duration={1500} text={"Portfolio"}/>
            <div className={"projects-container"}>
                <Project title={"Social network"}
                         description={"social network site with profile creation , registered user search, messaging"}
                         image={socNetwork}
                         appLink={"https://voyager5874.github.io/social-network__class-components__ts/#/profile"}
                         codeLink={"https://github.com/voyager5874/social-network__class-components__ts"}/>
                <Project title={"Task tracker"}
                         description={"Web app for managing a task completion progress"}
                         image={taskTracker}
                         appLink={"https://voyager5874.github.io/it-inc-todolist-ts/"}
                         codeLink={"https://github.com/voyager5874/it-inc-todolist-ts"}/>
                <Project title={"Some project"}
                         description={loremIpsum({avgWordsPerSentence: 3})[0]}
                         image={darkImg}
                         appLink={""}
                         codeLink={""}/>
                <Project title={"Some project"}
                         description={loremIpsum({avgWordsPerSentence: 3})[0]}
                         image={darkImg}
                         appLink={""} codeLink={""}/>
                <Project title={"Some project"}
                         description={loremIpsum({avgWordsPerSentence: 3})[0]}
                         image={darkImg}
                         appLink={""} codeLink={""}/>
                <Project title={"Some project"}
                         description={loremIpsum({avgWordsPerSentence: 3})[0]}
                         image={darkImg}
                         appLink={""} codeLink={""}/>
            </div>

        </div>
    )
};

type ProjectPropsType = {
    title: string
    description: string
    image: string
    appLink: string
    codeLink: string
}

const Project = ({title, description, image, appLink, codeLink}: ProjectPropsType) => {
    return (
        <div className={"project-card"}>
            <div className={"image-wrapper"}>
                <div className={"links-container"}>
                    <a className={"project-link"} target={"_blank"} rel="noreferrer" href={appLink}>view app</a>
                    <a className={"project-link"} target={"_blank"} rel="noreferrer" href={codeLink}>view code</a>
                </div>
                <div className={"image-container"} style={{backgroundImage: `url(${image})`}}>
                </div>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
