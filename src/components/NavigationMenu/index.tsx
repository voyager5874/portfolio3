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


export const NavigationMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            {menuOpen ?
                <div className={"popup-nav-menu"}>
                    <button onClick={() => setMenuOpen(false)} className={"flat-button popup-close"}><FontAwesomeIcon
                        icon={faXmark}/></button>
                    <nav>
                        <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/home">
                            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                        </NavLink>
                        <NavLink className={({isActive}) => (isActive ? "about-link active" : "about-link")}
                                 to="/about">
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
                :
                <button onClick={() => setMenuOpen(true)} className="flat-button popup-open"><FontAwesomeIcon
                    icon={faBars}/></button>
            }
        </>

    );
};
