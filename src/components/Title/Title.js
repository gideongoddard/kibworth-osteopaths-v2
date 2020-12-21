import React from "react"
import TitleStyles from "./Title.module.css"
import Button from "../Button/Button"

export default function Title(props) {
    return (
        <section className={TitleStyles.section}>
            <div style={{backgroundImage: `url(${props.backgroundImage})`, color: props.backgroundImage ? "white" : "var(--neutral-800", minHeight: props.backgroundImage ? 400 : 250, backgroundPosition: props.backgroundPosition}}>
                <h1>{props.title}</h1>
                {
                    props.subtitle ? (
                        <h2>{props.subtitle}</h2>
                    ) : <></>
                }            
                {
                    props.button ? (
                        <Button type={props.buttonType} to={props.buttonTo}>{props.buttonText}</Button>
                    ) : <></>
                }
            </div>
        </section>
    )
}