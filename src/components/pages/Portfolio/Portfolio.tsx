import styles from "./Portfolio.module.scss";
import {PageHeading} from "components/PageHeading";
import {useLoading} from "hooks/useLoading";
import Loader from "react-loaders";
import {Project} from "./Project";
import {projectsData} from "constants/projects";

export const Portfolio = () => {
    const [isLoading] = useLoading()

    return (
        <>
            <div className={styles.portfolioPage}>
                <PageHeading delay={5} duration={1500} text={"Portfolio"}/>
                <div className={styles.projectsContainer}>
                    {projectsData.map(prj => (
                        <Project key={prj.title + prj.codeLink} title={prj.title} image={prj.image}
                                 description={prj.description}
                                 appLink={prj.appLink} codeLink={prj.codeLink}/>))}
                </div>
            </div>
            <Loader type={"ball-scale"} active={isLoading}/>
        </>
    )
};


