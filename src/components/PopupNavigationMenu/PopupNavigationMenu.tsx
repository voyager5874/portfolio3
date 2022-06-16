import styles from "./PopupNavigationMenu.module.scss";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faTools, faUser} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {CSSTransition} from "react-transition-group";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";

export const PopupNavigationMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <>
            <CSSTransition in={menuOpen}
                           timeout={2000}
                           mountOnEnter
                           unmountOnExit
                           classNames={{
                               enterActive: styles.enterActive,
                               exitActive: styles.exitActive,
                           }}>
                <div className={styles.popupNavMenu}>
                    <button onClick={handleMenuOpen} className={styles.popupClose}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                    <nav>
                        <NavLink to="/home"
                                 className={({isActive}) => isActive ? styles.active : ''}
                                 onClick={handleMenuOpen}
                        >
                            <FontAwesomeIcon icon={faHome}/>
                        </NavLink>
                        <NavLink to="/portfolio"
                                 className={({isActive}) => isActive ? `${styles.active} ${styles.portfolioLink}` : styles.portfolioLink}
                                 onClick={handleMenuOpen}
                        >
                            <FontAwesomeIcon icon={faBriefcase}/>
                        </NavLink>
                        <NavLink to="/skills"
                                 className={({isActive}) => isActive ? `${styles.active} ${styles.skillsLink}` : styles.skillsLink}
                                 onClick={handleMenuOpen}
                        >
                            <FontAwesomeIcon icon={faTools}/>
                        </NavLink>
                        <NavLink to="/about"
                                 className={({isActive}) => isActive ? `${styles.active} ${styles.aboutLink}` : styles.aboutLink}
                                 onClick={handleMenuOpen}
                        >
                            <FontAwesomeIcon icon={faUser}/>
                        </NavLink>
                        <NavLink to="/contact"
                                 className={({isActive}) => isActive ? `${styles.active} ${styles.contactLink}` : styles.contactLink}
                                 onClick={handleMenuOpen}
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
            </CSSTransition>
            <button onClick={handleMenuOpen} className={styles.popupOpen}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
        </>
    );
};
