import "./index.scss"
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faTools, faUser} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {CSSTransition} from 'react-transition-group';

export const NavigationMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
        // console.log(menuOpen)
    }

    return (
        <>
            <CSSTransition in={menuOpen} timeout={2200} mountOnEnter unmountOnExit classNames={"popup-nav-menu"}>
                <div className={"popup-nav-menu"}>
                    <button onClick={handleMenuOpen} className="flat-button popup-close">
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                    <nav>
                        <NavLink to="/home" onClick={handleMenuOpen}>
                            <FontAwesomeIcon icon={faHome}/>
                        </NavLink>
                        <NavLink className={"about-link"}
                                 to="/about"
                                 onClick={handleMenuOpen}
                        >
                            <FontAwesomeIcon icon={faUser}/>
                        </NavLink>
                        <NavLink
                            className={"skills-link"}
                            to="/skills"
                            onClick={handleMenuOpen}
                        >
                            <FontAwesomeIcon icon={faTools}/>
                        </NavLink>
                        <NavLink
                            className={"contact-link"}
                            to="/contact"
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
            <button onClick={handleMenuOpen} className="flat-button popup-open">
                <FontAwesomeIcon icon={faBars}/>
            </button>
        </>
    );
};
