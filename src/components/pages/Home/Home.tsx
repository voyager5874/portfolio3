import styles from "./Home.module.scss";
import ava from "assets/images/ava-real1.jpg";
import {PageHeading} from "components/PageHeading";

export const Home = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.textZone}>
                <PageHeading delay={18} duration={6000} text={"Hi,#I'm Aleksandr Savkin#Frontend Developer"}
                             animatedDecorators decoratorsDelay={9}/>
                <h2>/ React / Redux / Typescript /</h2>
                <a href={`${process.env.PUBLIC_URL}/SavkinAleksandr_frontend_dev_(React).pdf`} rel="noreferrer"
                   download>
                    Download CV
                </a>
            </div>
            <img src={ava} alt="developer" className={styles.devMainPhoto}/>
            {/*<Photo/>*/}

        </div>


    );
};
