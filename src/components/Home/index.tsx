import './index.scss';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AnimatedLetters} from "../AnimatedLetters";
import ava from '../../assets/images/ava-temp3.jpeg'

const devName = 'Aleksandr Savkin'.split('')
const devNameLength = devName.length
// const devName = [...'Aleksandr Savkin']
const occupation = 'Frontend Developer'.split('')

export const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
        // return clearTimeout(timeOutId)
    }, [])
    return (
        <div className="home-page">
            <div className="text-zone">
                <h1>
                    {'Hi,'.split('').map((letter, index) => <span key={letter + index}
                                                                  className={letterClass}>{letter}</span>)}
                    <br/>
                    {/*{'I am,'.split('').map((letter, index) => <span key={letter + index} className={letterClass}>{letter}</span>)}*/}
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>' </span>
                    <span className={`${letterClass} _16`}>m </span>
                    <img/>
                    <AnimatedLetters letterClass={letterClass} strArray={devName} idx={17}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={occupation} idx={17 + devNameLength}/>
                </h1>
                <h2>/ React / Redux / Typescript /</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
            <img src={ava} alt="developer photo" className="dev-main-photo"/>
            {/*<Photo/>*/}

        </div>


    );
};
