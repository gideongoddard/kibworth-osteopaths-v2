import React from "react"
import BreadcrumbStyles from "./BreadcrumbBar.module.css"
import { Link } from "gatsby"

export default function BreadcrumbBar(props) {
    const parentPages = props.parentPages
    const currentPage = props.currentPage

    return (
        <div className={BreadcrumbStyles.wrapper}>
            <div className={BreadcrumbStyles.content}>
                {
                    parentPages.map(parent => {
                        return (
                            <>
                            <Link to={parent.path}>{parent.name}</Link>
                            <span className={BreadcrumbStyles.separator}>&gt;</span>
                            </>
                        )
                    })
                }
                <span className={BreadcrumbStyles.current}>{currentPage}</span>
            </div>
        </div>
    )
}