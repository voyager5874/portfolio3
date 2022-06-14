import styles from "./Home.module.scss";
import ava from "assets/images/ava-real1.jpg";
import {PageHeading} from "components/PageHeading";
import {useEffect, useState} from "react";
import Loader from "react-loaders";

export const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const onPageLoad = () => {
            setIsLoading(false);
        };

        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
            return () => window.removeEventListener("load", onPageLoad);
        }
    }, []);

    return (
        <>
            <div className={styles.homePage}>
                <div className={styles.textZone}>
                    <PageHeading delay={18} duration={5000} text={"Hi,#I'm Aleksandr Savkin"}
                                 animatedDecorators decoratorsDelay={9} decoratorAfter={false}/>
                    <PageHeading delay={27} duration={5000} text={"Frontend Developer"}
                                 animatedDecorators decoratorsDelay={9} decoratorBefore={false}/>
                    <h2>/ React / Redux / Typescript /</h2>
                    <a href={`${process.env.PUBLIC_URL}/SavkinAleksandr_frontend_dev_(React).pdf`} rel="noreferrer"
                       download>
                        Download CV
                    </a>
                </div>
                <img src={ava} alt="developer" className={styles.devMainPhoto}/>
            </div>
            <Loader active={isLoading} type={"ball-grid-pulse"}/>
        </>
    );
};
