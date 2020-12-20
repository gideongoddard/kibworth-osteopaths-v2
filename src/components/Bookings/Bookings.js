import React from "react"
import BookingsStyles from "./Bookings.module.css"
import Button from "../Button/Button"

export default function Bookings() {
    return (
        <section className={BookingsStyles.section}>
            <h2>Make a booking</h2>
            <div className={BookingsStyles.container}>
                <div className={BookingsStyles.flexContainer}>
                    <div className={BookingsStyles.schedule}>
                        <h3>Osteopathy</h3>
                        <p>Appointments are held at the following times:</p>
                        <div className={BookingsStyles.dayTime}>
                            <p className={BookingsStyles.day}>Mondays:</p><p className={BookingsStyles.time}>08:00 - 14:00</p>
                            <p className={BookingsStyles.day}>Tuesdays:</p><p className={BookingsStyles.time}>10:00 - 18:00</p>
                            <p className={BookingsStyles.day}>Wednesdays:</p><p className={BookingsStyles.time}>09:30 - 13:00</p>
                            <p className={BookingsStyles.day}>Fridays:</p><p className={BookingsStyles.time}>08:00 - 12:00</p>
                        </div>
                    </div>
                    <div className={BookingsStyles.schedule}>
                        <h3>Pilates</h3>
                        <p>Classes are held at the following times:</p>
                        <div className={BookingsStyles.dayTime}>
                            <p className={BookingsStyles.day}>Tuesdays:</p><p className={BookingsStyles.time}>08:00 - 09:00 (The Fitness Box)</p>
                            <p className={BookingsStyles.day}>Wednesdays:</p><p className={BookingsStyles.time}>13:45 - 15:45 (The Fitness Box)</p>
                            <p className={BookingsStyles.day}>Thursdays:</p><p className={BookingsStyles.time}>18:00 - 19:00 & 19:15 - 20:15 (Mkt Harborough Congressional Church)</p>
                        </div>
                        <p>Individual tuition is also available. Please get in touch by phone or email to make arrangements.</p>
                    </div>
                </div>
                <div className={BookingsStyles.buttonContainer}>
                    <Button type="primary" contact={true} to="tel:+447761664325">Call now</Button>
                    <Button type="primary" contact={true} to="mailto:info@kibworthosteopaths.co.uk">Email now</Button>
                </div>
            </div>
        </section>
    )
}