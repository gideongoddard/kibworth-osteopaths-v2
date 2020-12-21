import React from "react"
import CardsStyles from "./Cards.module.css"

export default function Cards(props) {
    return (
        <div className={CardsStyles.gridContainer}>
            {props.children}
        </div>
    )
}