import React from "react"
import { Link } from "gatsby"
import BookingsStyles from "./Bookings.module.css"
import Button from "../Button/Button"
import Schedule from "../Schedule/Schedule"

export default function Bookings() {
    return (
        <div className={BookingsStyles.section}>
            <h2>Make a booking</h2>
            <p className={BookingsStyles.subheading}><Link to="/appointments">Book online here</Link> or your can get in touch via phone or email. Details of appointment and class times are below.</p>
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
        </div>
    )
}