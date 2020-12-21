import React from "react"
import CardsStyles from "./cards.module.css"
import Card from "../Card/Card"

export default function Cards(props) {
    return (
        <div className={CardsStyles.gridContainer}>
            {props.children}
        </div>
    )
}