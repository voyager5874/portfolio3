import "./index.scss"
import {CSSProperties, useState} from "react";
import {Sidebar} from "../Sidebar";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faTools, faUser} from "@fortawesome/free-solid-svg-icons";
import {faHamburger} from "@fortawesome/free-solid-svg-icons/faHamburger";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {CSSTransition, Transition} from 'react-transition-group';

const transitions = {
    entering: {
        animation: 'flipInY 1s forwards',
        // height: '400px',
        // width: '300px',
    },
    entered: {
        // opacity: 1,
        // display: 'block',
        // height: '400px',
        // width: '300px',
    },
    exiting: {
        animation: 'flipOutY 1s forwards',
        // height: '0',
        // width: '0',

    },
    exited: {
        // opacity: '0',
        // display: 'none',
        // height: '0',
        // width: 0,
    }
};

export const NavigationMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
        // console.log(menuOpen)
    }

    return (
        <>
            <Transition in={menuOpen} appear timeout={2000} mountOnEnter unmountOnExit>

                {state =>
                    (<div className={"popup-nav-menu"} style={{
                        // height: 0,
                        // width: 0,
                        // overflow: 'hidden',
                        // transition: 'height 1s',
                        // opacity: 0,
                        // display: 'none',
                        //@ts-ignore
                        ...transitions[state]
                    }}>
                        <button onClick={handleMenuOpen} className="flat-button popup-close"><FontAwesomeIcon
                            icon={faXmark}/></button>
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
                    </div>)}

            </Transition>

            <button onClick={handleMenuOpen} className="flat-button popup-open"><FontAwesomeIcon
                icon={faBars}/></button>

        </>

    );
};
