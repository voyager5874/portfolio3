import './index.scss'
// import LogoS from '../../assets/images/logo-s.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faTelegram,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import {faHome, faUser, faEnvelope, faTools} from '@fortawesome/free-solid-svg-icons'
import {Link, NavLink} from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link className="logo" to="/">
                <FontAwesomeIcon icon={faReact} size={"3x"}/>
                {/*<div className="logo-text">Savaa</div>*/}
                {/*<div className="sub-logo">Savkin</div>*/}
            </Link>
            <nav>
                <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/home">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink className={({isActive}) => (isActive ? "about-link active" : "about-link")} to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive ? "skills-link active" : "skills-link")}
                    to="/skills"
                >
                    <FontAwesomeIcon icon={faTools} color="#4d4d4e"/>
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive ? "contact-link active" : "contact-link")}
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/aleksandr-savkin-8802b7129/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/voyager5874"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://t.me/xander58"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faTelegram} color="#4d4d4e"/>
                    </a>
                </li>

            </ul>
        </div>
    );
};


