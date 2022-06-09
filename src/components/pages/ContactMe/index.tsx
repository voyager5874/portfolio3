import './index.scss';
import {useRef} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LatLngTuple} from "leaflet";
import {PageHeading} from "components/PageHeading";

const coordinates = [53.13018331050917, 45.030724178479495] as LatLngTuple

export const ContactMe = () => {
        const form = useRef<HTMLFormElement>(null)

        const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            if (!form.current || !process.env.REACT_APP_EMAILJS_SERVICE_ID
                || !process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                || !process.env.REACT_APP_EMAILJS_TEMPLATE_ID) {
                toast.error('emailjs tokens not found')
                return
            }

            toast.promise(
                emailjs
                    .sendForm(
                        process.env.REACT_APP_EMAILJS_SERVICE_ID,
                        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                        form.current,
                        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                    ),
                {
                    pending: 'Your message is being sent',
                    success: 'Successfully sent',
                    error: "Sorry, couldn't sent the message"
                }
            )
        }

        return (
            <>
                <div className="contact-page">
                    <div className="text-zone">
                        <PageHeading delay={18} duration={3100} text="Contact me"/>
                        <p>
                            If you have a question, don't
                            hesitate to contact me using the form or any other media shared.
                        </p>
                        <div className="contact-form">
                            <form ref={form} onSubmit={sendEmail}>
                                <label className="half">
                                    <input placeholder="Name" type="text" name="from_name" required/>
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

                            </form>
                        </div>
                    </div>
                    <div className="map-wrap">
                        <div className="info-map">
                            Aleksandr Savkin
                            <br/>
                            Penza city, Russia
                        </div>
                        <MapContainer center={coordinates} zoom={15}>
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
                <ToastContainer
                    position="bottom-left"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover={false}
                    theme={"dark"}
                />
            </>
        );
    }
;
