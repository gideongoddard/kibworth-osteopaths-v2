import React from "react"
import TitleStyles from "./Title.module.css"
import Button from "../Button/Button"

export default function Title(props) {
    return (
        <div className={TitleStyles.container} style={{backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : `none`, color: props.backgroundImage ? "white" : "var(--neutral-800", minHeight: props.backgroundImage ? 'calc(var(--space-12) + 15vw)' : 'calc(var(--space-12) + 3vw)', backgroundPosition: props.backgroundPosition, padding: props.backgroundImage ? "calc(6em + 5vw) 5%" : "calc(4em + 1.5vw) 5%"}}>
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
    )
}