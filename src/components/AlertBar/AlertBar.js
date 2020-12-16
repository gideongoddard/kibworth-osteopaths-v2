import React from "react"
import AlertBarStyles from "./AlertBar.module.css"

export default function AlertBar({ children }) {
    return (
        <div className={AlertBarStyles.wrapper}>
            <div className={AlertBarStyles.content}>
                {children}
            </div>
        </div>
    )
}