import styles from "./About.module.scss";
import {PageHeading} from "components/PageHeading";
import {useLoading} from "hooks/useLoading";
import Loader from "react-loaders";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import engineerPic from "assets/images/mechanical-design-500x500.jpg";
// import gymPic from "assets/images/gym.jpg";

import {
    faBiking,
    faDraftingCompass,
    faDumbbell,
    faHiking,
    faLaptopCode,
    faSkiing, faUserGraduate
} from "@fortawesome/free-solid-svg-icons";

export const About = () => {
    const [isLoading] = useLoading()

    return (
        <>
            <div className={styles.aboutPage}>
                <div className={styles.pageLeft}>
                    <PageHeading delay={10} duration={2000} text={"Who I am"}/>
                    <p>
                        Another switcher/wannabe.
                        Worked as a mechanics design engineer for quite a time right after graduation. The delay
                        between input and output was always irritating for me: there was no easy way to fidget with
                        some idea on the go. The rigidness of a state company and the industry itself were another part
                        of dissatisfaction.
                    </p>
                    <p>
                        A bit of a digital product junky and tech fanatic.
                        Over the years, I've used hundreds of web and mobile apps
                        Eventually, I decided that it would be a fun challenge to
                        try designing and building my own. Make something happen by typing some lines is a blast and all
                        that work from home, work from any country stuff (potentially) are appealing.
                    </p>
                    <p>
                        Fitness and overall healthy lifestyle enthusiast.
                        I've been doing gym for over ten years now.
                        I Love to ride a bike for some long distance to see what you barely pay attention to when you're
                        driving.

                    </p>

                    <p>
                        Hope to find a team where I could grow and would be useful.
                    </p>
                </div>
                <div className={styles.pageRight}>
                    <div className={styles.cubeContainer}>
                        <div className={styles.cube}>
                            {/*<div className="face1" style={{backgroundImage: `url(${engineerPic})`}}>*/}
                            <div className={styles.face1}>
                                <FontAwesomeIcon icon={faBiking} color="#DD0031"/>
                            </div>
                            <div className={styles.face2}>
                                <FontAwesomeIcon icon={faDraftingCompass} color="#F06529"/>
                            </div>
                            <div className={styles.face3}>
                                <FontAwesomeIcon icon={faLaptopCode} color="#28A4D9"/>
                            </div>
                            <div className={styles.face4}>
                                <FontAwesomeIcon icon={faUserGraduate} color="#5ED4F4"/>
                            </div>
                            <div className={styles.face5}>
                                <FontAwesomeIcon icon={faDumbbell} color="#EFD81D"/>
                            </div>
                            <div className={styles.face6}>
                                <FontAwesomeIcon icon={faHiking} color="#EC4D28"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type={"ball-scale"} active={isLoading}/>
        </>
    );
};
