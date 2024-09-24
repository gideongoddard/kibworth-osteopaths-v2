import * as React from 'react'
import * as DownloadStyles from './Download.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import Pill from '../Pill/Pill'

const categoryMapping = {
    "posture": {
        name: "Posture",
        colour: "blue",
    },
    "infant-feeding": {
        name: "Infant feeding",
        colour: "red",
    }
}

function Download({ category, heading, description, link }) {
    const categoryInfo = categoryMapping[category] || { name: "General", colour: "grey" }

    return (
        <div className={DownloadStyles.download}>
            <Pill text={categoryInfo.name} colour={categoryInfo.colour} />
            <h3 className={DownloadStyles.heading}>{heading}</h3>
            <p className={DownloadStyles.description}>{description}</p>
            <a className={DownloadStyles.link} href={link} download><FontAwesomeIcon className={DownloadStyles.icon} icon={faDownload} />Download Now</a>
        </div>
    )
}

export default Download