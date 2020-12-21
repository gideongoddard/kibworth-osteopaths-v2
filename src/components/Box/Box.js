import React from "react"
import BoxStyles from "./Box.module.css"

export default function Box(props) {
    return (
        <div className={BoxStyles.box}>
            <div className={BoxStyles.heading}>
                <h3>{props.heading}</h3>
            </div>
            <div className={BoxStyles.body}>
                {props.children}
            </div>
        </div>
    )
}