import React from "react"
import { Link } from "gatsby"
import BookingsStyles from "./Bookings.module.css"
import Button from "../Button/Button"
import Schedule from "../Schedule/Schedule"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function Bookings() {
    return (
        <section className={BookingsStyles.section}>
            <h2>Make a booking</h2>
            <p><Link to="/appointments">Book online here</Link> or your can get in touch via phone or email. Details of appointment and class times are below.</p>
            <div className={BookingsStyles.container}>
                <div className={BookingsStyles.gridContainer}>
                    <Schedule type="Osteopathy" displayHeading={true} />
                    <Schedule type="Pilates" displayHeading={true} />
                </div>
                <div className={BookingsStyles.buttonContainer}>
                    <Button type="primary" contact={true} to="tel:+447761664325" onClick={e => {
                        trackCustomEvent({
                            category: "contact",
                            action: "click",
                            label: "telephone",
                        })
                    }}>Call now</Button>
                    <Button type="primary" contact={true} to="mailto:info@kibworthosteopaths.co.uk" onClick={e => {
                        trackCustomEvent({
                            category: "contact",
                            action: "click",
                            label: "email",
                        })
                    }}>Email now</Button>
                </div>
            </div>
        </section>
    )
}