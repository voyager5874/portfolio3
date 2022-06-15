import styles from "./About.module.scss"
import {PageHeading} from "components/PageHeading";
import {loremIpsum} from "react-lorem-ipsum";
import {useLoading} from "hooks/useLoading";
import Loader from "react-loaders";

export const About = () => {
    const [isLoading] = useLoading()

    return (
        <>
            <div className={styles.aboutPage}>
                <div className={styles.pageLeft}>
                    <PageHeading delay={10} duration={2000} text={"About me"}/>
                    <p>
                        I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps
                        in different industries and verticals. Eventually, I decided that it would be a fun challenge to
                        try designing and building my own.

                    </p>
                </div>
                <div className={styles.pageRight}>
                    show some information
                </div>
            </div>
            <Loader type={"ball-scale"} active={isLoading}/>
        </>
    );
};
