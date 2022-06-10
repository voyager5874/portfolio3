import styles from "./Portfolio.module.scss";
import {PageHeading} from "components/PageHeading";
import socNetwork from "assets/images/social-network-thumb-2.png";
import taskTracker from "assets/images/task-tracker-thumb.png";
import recursion from "assets/images/portfolio-thumb.png";
import darkImg from "assets/images/pug-img-dark.png";
import {loremIpsum} from "react-lorem-ipsum";

export const Portfolio = () => {
    return (
        <div className={styles.portfolioPage}>
            <PageHeading delay={5} duration={1500} text={"Portfolio"}/>
            <div className={styles.projectsContainer}>
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
                <Project title={"Some project"}
                         description={loremIpsum({avgWordsPerSentence: 3})[0]}
                         image={darkImg}
                         appLink={""} codeLink={""}/>
                <Project title={"Recursion"}
                         description={loremIpsum({avgWordsPerSentence: 3})[0]}
                         image={recursion}
                         appLink={""} codeLink={"https://github.com/voyager5874/portfolio3"}/>
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
        <div className={styles.projectCard}>
            <div className={styles.imageWrapper}>
                <div className={styles.linksContainer}>
                    <a className={styles.projectLink} target={"_blank"} rel="noreferrer" href={appLink}>view app</a>
                    <a className={styles.projectLink} target={"_blank"} rel="noreferrer" href={codeLink}>view code</a>
                </div>
                <div className={styles.imageContainer} style={{backgroundImage: `url(${image})`}}>
                </div>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
