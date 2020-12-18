import React from "react"
import TestimonialStyles from "./Testimonial.module.css"

export default function Testimonial(props) {
    return (
        <section className={TestimonialStyles.section}>
            <div className={TestimonialStyles.container}>
                <h2>Testimonial</h2>
                <div className={TestimonialStyles.quoteBox}>
                    <p><em>{props.quote}</em></p>
                </div>
            </div>
        </section>
    )
}