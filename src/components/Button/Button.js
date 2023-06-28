import React from "react"
import { Link } from "gatsby"
import ButtonStyles from "./Button.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

function Button(props) {
    if (props.contact) {
        return <a className={ButtonStyles[props.type]} href={props.to} style={props.style}>{props.children}</a>
    } else if (props.download) {
        return <a className={ButtonStyles[props.type]} href={props.to} style={props.style} download>{props.children} <FontAwesomeIcon icon={faDownload} /></a>
    } else {
        return <Link className={ButtonStyles[props.type]} to={props.to} style={props.style}>{props.children}</Link>
    }
}

export default Button