import React from "react"
import ContentsStyles from "./Contents.module.css"

export default function Contents(props) {
    return (
        <div className={ContentsStyles.contentsBox}>
            <div className={ContentsStyles.contentsBoxHeading}>
                <h3>{props.heading}</h3>
            </div>
            <div className={ContentsStyles.contentsBoxBody}>
                <ul>
                    {props.contents.map(item => {
                        return (<li key={item.id}><a href={`#faq-${item.id}`}>{item.question}</a></li>)
                    })}
                </ul>
            </div>
        </div>
    )
}