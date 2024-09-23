import * as React from 'react'
import * as PillStyles from './Pill.module.css'

function Pill({ text, colour }) {
    return (
        <div className={`${PillStyles.pill} ${PillStyles[colour]}`}><span className={`${PillStyles.dot} ${PillStyles[colour]}`} />{text}</div>
    )
}

export default Pill