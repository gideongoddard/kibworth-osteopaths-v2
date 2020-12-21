import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import Banner from "../images/pilates-banner.jpg"
import BreadcrumbBar from "../components/BreadcrumbBar/BreadcrumbBar"
import TxtImg from "../components/TxtImg/TxtImg"

export default function Pilates({ data }) {
    const parentPages = [{name: "Home", path: "/"}]
    return (
        <Layout>
            <Title title="Pilates" backgroundImage={Banner} />
            <BreadcrumbBar currentPage="Pilates" parentPages={parentPages} />
            <TxtImg imgSrc={data.emily.childImageSharp.fluid} imgAlt="Emily standing with a skeleton">
                <h2>Why Pilates?</h2>
                <p>Emily qualified as a Pilates instructor in 2019, as she wanted to offer more to patients in terms of aftercare post injury recovery, as well as general wellbeing. However, you do not have to be an Osteopathy patient to come to Pilates class, it is open to all!</p>
                <p>Doing Pilates with Emily means you have continued aftercare post injury (if you’ve seen her as an Osteopath), but you also have a highly qualified pair of eyes and hands teaching you, meaning classes are safe and effective.</p>
            </TxtImg>
        </Layout>
    )
}

export const data = graphql`
    query {
        emily: file(relativePath: {eq: "images/emily-skeleton-grey.jpeg"}) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 72) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`