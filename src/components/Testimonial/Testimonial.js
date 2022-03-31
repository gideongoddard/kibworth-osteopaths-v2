import React from "react"
import TestimonialStyles from "./Testimonial.module.css"

export default function Testimonial(props) {
    return (
        <div className={TestimonialStyles.container}>
            <div className={TestimonialStyles.quoteBox}>
                <h3>{props.heading ? `${props.heading}` : `Patient feedback`}</h3>
                <div className={TestimonialStyles.quote}>
                    <p><em>{props.quote}</em></p>
                </div>
            </div>
        </div>
    )
}