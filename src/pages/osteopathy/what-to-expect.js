import React from "react"
import Layout from "../../components/Layout/Layout"
import Title from "../../components/Title/Title"
import BreadcrumbBar from "../../components/BreadcrumbBar/BreadcrumbBar"
import ExpectStyles from "./what-to-expect.module.css"

export default function WhatToExpect() {
    const parentPages = [{name: "Home", path: "/"}, {name: "Osteopathy", path: "/osteopathy"}]

    return (
        <Layout>
            <Title title="What to expect" />
            <BreadcrumbBar currentPage="What to expect" parentPages={parentPages} />
            <section className={ExpectStyles.section}>
                <div className={ExpectStyles.narrowContainer}>
                    <h2>How it works</h2>
                </div>
            </section>
        </Layout>
    )
}