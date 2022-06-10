import styles from "./About.module.scss"
import {PageHeading} from "components/PageHeading";
import {loremIpsum} from "react-lorem-ipsum";

export const About = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.pageLeft}>
                <PageHeading delay={10} duration={2000} text={"About me"}/>
                <p>
                    {loremIpsum({p: 1, avgWordsPerSentence: 3})}
                </p>
            </div>
            <div className={styles.pageRight}>

            </div>
        </div>
    );
};
