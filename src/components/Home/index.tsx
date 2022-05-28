import './index.scss';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AnimatedLetters} from "../AnimatedLetters";
import ava from '../../assets/images/ava-temp3.jpeg'

const devName = 'Aleksandr Savkin'.split('')
const devNameLength = devName.length
// const devName = [...'Aleksandr Savkin']
const occupation = 'React Frontend Developer'.split('')

export const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 7000)
        // return clearTimeout(timeOutId)
    }, [])
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m </span>
                        <img/>
                    <AnimatedLetters letterClass={letterClass} strArray={devName} idx={15}/>
                        <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={occupation} idx={15 + devNameLength}/>
                    </h1>
                    <h2>/ React Frontend Developer / </h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <img src={ava} alt="developer photo" className="dev-main-photo"/>
                {/*<Photo/>*/}

            </div>

        </>
    );
};
