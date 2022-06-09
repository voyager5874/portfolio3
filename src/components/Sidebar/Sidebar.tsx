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
                <NavLink to="/home"
                    //css modules make it complicated
                         className={({isActive}) =>
                             isActive ? styles.active : ''}
                >
                    <FontAwesomeIcon icon={faHome}/>
                </NavLink>
                <NavLink to="/about"
                         className={({isActive}) =>
                             isActive ? `${styles.aboutLink} ${styles.active}` : styles.aboutLink}
                >
                    <FontAwesomeIcon icon={faUser}/>
                </NavLink>
                <NavLink to="/portfolio"
                         className={({isActive}) =>
                             isActive ? `${styles.portfolioLink} ${styles.active}` : styles.portfolioLink}
                >
                    <FontAwesomeIcon icon={faBriefcase}/>
                </NavLink>
                <NavLink to="/skills"
                         className={({isActive}) =>
                             isActive ? `${styles.skillsLink} ${styles.active}` : styles.skillsLink}
                >
                    <FontAwesomeIcon icon={faTools}/>
                </NavLink>
                <NavLink to="/contact"
                         className={({isActive}) =>
                             isActive ? `${styles.contactLink} ${styles.active}` : styles.contactLink}
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


