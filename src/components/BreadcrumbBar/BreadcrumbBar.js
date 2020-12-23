import React from "react"
import BreadcrumbStyles from "./BreadcrumbBar.module.css"
import { Link } from "gatsby"

export default function BreadcrumbBar(props) {
    const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
    
    const parentPages = props.parentPages
    const currentPage = truncate(props.currentPage, 35, '...')

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