import React from "react"
import BookingsStyles from "./Bookings.module.css"
import Button from "../Button/Button"
import Schedule from "../Schedule/Schedule"

export default function Bookings() {
    return (
        <section className={BookingsStyles.section}>
            <h2>Make a booking</h2>
            <div className={BookingsStyles.container}>
                <div className={BookingsStyles.gridContainer}>
                    <Schedule type="Osteopathy" displayHeading={true} />
                    <Schedule type="Pilates" displayHeading={true} />
                </div>
                <div className={BookingsStyles.buttonContainer}>
                    <Button type="primary" contact={true} to="tel:+447761664325">Call now</Button>
                    <Button type="primary" contact={true} to="mailto:info@kibworthosteopaths.co.uk">Email now</Button>
                </div>
            </div>
        </section>
    )
}