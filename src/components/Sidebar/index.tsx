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
                <NavLink to="/home">
                    <FontAwesomeIcon icon={faHome}/>
                </NavLink>
                <NavLink className={"about-link"} to="/about">
                    <FontAwesomeIcon icon={faUser}/>
                </NavLink>
                <NavLink
                    className={"skills-link"}
                    to="/skills"
                >
                    <FontAwesomeIcon icon={faTools}/>
                </NavLink>
                <NavLink
                    className={"contact-link"}
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope}/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/aleksandr-savkin-8802b7129/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/voyager5874"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://t.me/xander58"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faTelegram}/>
                    </a>
                </li>

            </ul>
        </div>
    );
};


