import './index.scss';
import {AnimatedLetters} from "../AnimatedLetters";
import {useEffect, useRef, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LatLngTuple} from "leaflet";

const pageCaption = "Contact me".split("")

const coordinates = [53.18800463287455, 45.060760577532896] as LatLngTuple

export const ContactForm = () => {
        const [letterClass, setLetterClass] = useState('text-animate')
        const form = useRef<HTMLFormElement>(null)
        useEffect(() => {
            setTimeout(() => {
                // timeOutId =
                setLetterClass('text-animate-hover')
            }, 3000)
            // return clearTimeout(timeOutId)
        }, [])

        const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            if (!form.current) return
            emailjs
                .sendForm(
                    process.env.REACT_APP_EMIAL_SERVICE_ID || '',
                    process.env.REACT_APP_TEMPLATE_ID || '',
                    form.current,
                    process.env.REACT_APP_PUBLIC_KEY
                )
                .then(
                    () => {
                        toast.success('Message successfully sent!', {
                            position: 'bottom-center',
                            autoClose: 3500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'dark',
                        })
                    }
                ).catch(error => {
                toast.error('Failed to send the message, please try again', {
                    position: 'bottom-center',
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                })
            })

        }

        return (
            <>
                <div className="contact-page">
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={pageCaption}
                                delay={15}
                            />
                        </h1>
                        <p>
                            If you have question, don't
                            hesitate to contact me using the form or any other media shared.
                        </p>
                        <div className="contact-form">
                            <form ref={form} onSubmit={sendEmail}>

                                <label className="half">
                                    <input placeholder="Name" type="text" name="name" required/>
                                </label>
                                <label className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </label>
                                <label>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </label>
                                <label>
                                        <textarea
                                            placeholder="Message"
                                            name="message"
                                            required
                                        />
                                </label>
                                <button type="submit" className="flat-button">Send</button>
                                <ToastContainer/>
                            </form>
                        </div>
                    </div>
                    <div className="map-wrap">
                        <div className="info-map">
                            Aleksandr Savkin
                            <br/>
                            Penza, <br/>
                            Penza, <br/>
                            Russia
                            <br/>
                        </div>
                        <MapContainer center={coordinates} zoom={13}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            <Marker position={coordinates}>
                                <Popup>Hello there!</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
                <Loader type="pacman" active/>
            </>
        );
    }
;
