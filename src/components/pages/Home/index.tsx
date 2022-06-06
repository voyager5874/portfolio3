import './index.scss';
import {Link} from "react-router-dom";
import ava from '../../../assets/images/ava-real1.jpg'
import {PageCaption} from "../../pageCaption";

export const Home = () => {
    return (
        <div className="home-page">
            <div className="text-zone">
                <PageCaption delay={18} duration={6000} text={"Hi,#I'm Aleksandr Savkin#Frontend Developer"}/>
                <h2>/ React / Redux / Typescript /</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
            <img src={ava} alt="developer" className="dev-main-photo"/>
            {/*<Photo/>*/}

        </div>


    );
};
