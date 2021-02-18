import React from "react"
import Title from "../components/Title/Title"
import BreadcrumbBar from "../components/BreadcrumbBar/BreadcrumbBar"
import Schedule from "../components/Schedule/Schedule"
import Box from "../components/Box/Box"
import Button from "../components/Button/Button"
import Testimonial from "../components/Testimonial/Testimonial"
import AppointmentsStyles from "./appointments.module.css"
import Map from "../components/Map/Map"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { Helmet } from "react-helmet"

export default function Appointments() {
    const parentPages = [{name: "Home", path: "/"}]
    
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Make an appointment with an Osteopath or book your Pilates classes." />
                <title>Make a booking | Kibworth Osteopaths & Pilates</title>
                <html lang="en"></html>
            </Helmet>
            <Title title="Appointments" />
            <BreadcrumbBar currentPage="Appointments" parentPages={parentPages} />
            <section className={AppointmentsStyles.section}>
                <div className={AppointmentsStyles.container}>
                    <h2>Appointment & class times</h2>
                    <div className={AppointmentsStyles.gridContainer}>
                        <Schedule type="Osteopathy" displayHeading={true} />
                        <Schedule type="Pilates" displayHeading={true} />
                    </div>
                </div>
            </section>
            <section className={AppointmentsStyles.section} style={{paddingBottom: 20, backgroundColor: "var(--primary-100)"}}>
                <div className={AppointmentsStyles.container}>
                    <h2>Fees</h2>
                    <div className={AppointmentsStyles.gridContainer}>
                        <Box heading="Osteopathy fees">
                            <div className={AppointmentsStyles.boxContentContainer}>
                                <p>Adult appointments</p><p>£40</p>
                                <p>Paediatric appointments</p><p>£32</p>
                            </div>
                        </Box>
                        <Box heading="Pilates fees">
                            <div className={AppointmentsStyles.boxContentContainer}>
                                <p>6 x 1hr group class</p><p>£53.40</p>
                                <p className={AppointmentsStyles.lowContrast}><em>Cost per group class</em></p><p className={AppointmentsStyles.lowContrast}><em>£8.90</em></p>
                                <p>1hr one-to-one class</p><p>£35</p>
                            </div>
                        </Box>
                    </div>
                    <div className={AppointmentsStyles.buttonContainer}>
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
            <section className={AppointmentsStyles.section}>
                <div className={AppointmentsStyles.container}>
                    <h2>Where to find us</h2>
                    <div className={AppointmentsStyles.gridContainer}>
                        <div className={AppointmentsStyles.mapContainer}>
                            <p>We're based at <strong>The Manor, Tur Langton</strong> and you can find us as shown on the map below.</p>
                            <Map height="350px" />
                        </div>
                        <div className={AppointmentsStyles.addressContainer}>
                            <p>When arriving, come into The Manor up the drive, turn right and you'll find us on the right-hand side next to Natural Structures. You'll be able to park either in front of the practice or in the customer car park.</p>
                            <Box heading="Kibworth Osteopaths & Pilates">
                                <div className={AppointmentsStyles.address}>
                                    <p>Unit 17</p>
                                    <p>The Manor</p>
                                    <p>Main Street</p>
                                    <p>Tur Langton</p>
                                    <p>Leicestershire</p>
                                    <p>LE8 0PJ</p>
                                </div>
                            </Box>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial quote="I wish I could give more than 5 stars. I can't recommend Emily enough. She's seen both my children and with my daughter she cured her colic within 4 sessions, with me seeing a massive difference from session 1. Emily listens to everything and is thoroughly understanding of your feelings as a parent and never makes you feel that your ideas are not important. She is fantastic!" />
        </>
    )
}