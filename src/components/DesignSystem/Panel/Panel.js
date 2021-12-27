import React from "react"
import PanelStyles from "./Panel.module.css"

export default function Panel(props) {
    return <div className={`${PanelStyles.panel} ${props.addedClass}`} style={{border: props.border ? '1px solid var(--secondary-300)' : 'none'}}>{props.children}</div>
}