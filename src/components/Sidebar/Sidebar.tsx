import styles from "./Sidebar.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faTelegram,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import {faHome, faUser, faEnvelope, faTools} from '@fortawesome/free-solid-svg-icons'
import {Link, NavLink} from 'react-router-dom'
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Link className={styles.logo} to="/">
                <FontAwesomeIcon icon={faReact} size={"3x"}/>
            </Link>
            <nav>
                <NavLink to="/home">
                    <FontAwesomeIcon icon={faHome}/>
                </NavLink>
                <NavLink className={styles.aboutLink} to="/about">
                    <FontAwesomeIcon icon={faUser}/>
                </NavLink>
                <NavLink className={styles.portfolioLink} to="/portfolio">
                    <FontAwesomeIcon icon={faBriefcase}/>
                </NavLink>
                <NavLink
                    className={styles.skillsLink}
                    to="/skills"
                >
                    <FontAwesomeIcon icon={faTools}/>
                </NavLink>
                <NavLink
                    className={styles.contactLink}
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


