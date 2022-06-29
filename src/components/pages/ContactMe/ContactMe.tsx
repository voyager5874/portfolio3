import styles from './ContactMe.module.scss';
import {useRef} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LatLngTuple} from "leaflet";
import {PageHeading} from "components/PageHeading";
import {useLoading} from "hooks/useLoading";

const coordinates = [53.13018331050917, 45.030724178479495] as LatLngTuple

export const ContactMe = () => {
        const [isLoading] = useLoading()

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
                <div className={styles.contactPage}>
                    <div className={styles.textZone}>
                        <PageHeading delay={18} duration={3100} text="Contact me"/>
                        <p>
                            If you have a question, don't
                            hesitate to contact me using the form or any other media shared.
                        </p>
                        <div className={styles.contactForm}>
                            <form ref={form} onSubmit={sendEmail}>
                                <label className={styles.half}>
                                    <input placeholder="Name" type="text" name="from_name" required/>
                                </label>
                                <label className={styles.half}>
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
                                <button type="submit">Send</button>

                            </form>
                        </div>
                    </div>
                    <div className={styles.mapWrapper}>
                        <div className={styles.mapInfo}>
                            Aleksandr Savkin
                            <br/>
                            Penza city, Russia
                        </div>
                        <MapContainer center={coordinates} zoom={11}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            <Marker position={coordinates}>
                                <Popup>Hello there!</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
                <Loader type="ball-scale" active={isLoading}/>
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
