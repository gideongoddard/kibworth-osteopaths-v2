import React from "react"
import CardStyles from "./Card.module.css"
import Img from "gatsby-image"
import Button from "../Button/Button"
import { Link } from "gatsby"

export default function Card(props) {
    return (
        <div className={CardStyles.card}>
            <Img className={CardStyles.cardImg} fluid={props.imgSrc} alt={props.imgAlt} />
            <div className={CardStyles.txtContainer}>
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
                {
                    props.linkType === "button" ? (
                        <Button type="primary" to={props.linkTo} style={{width: "100%", fontSize: "var(--type-xxs)", padding: 15}}>{props.linkText}</Button>
                    ) : (
                        <Link to={props.linkTo}>{props.linkText}</Link>
                    )
                }
            </div>
        </div>
    )
}