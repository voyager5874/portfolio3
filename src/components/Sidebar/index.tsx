import './index.scss'
// import LogoS from '../../assets/images/logo-s.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faTelegram,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {Link, NavLink} from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <FontAwesomeIcon icon={faReact} size={"3x"}/>
                {/*<img src={LogoS} alt="Logo"/>*/}
                <div className="sub-logo">Savaa</div>
                {/*<div className="sub-logo">Savkin</div>*/}
            </Link>
            <nav>
                <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink className={({isActive}) => (isActive ? "about-link active" : "about-link")} to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
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
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com"
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


