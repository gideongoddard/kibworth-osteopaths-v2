import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import TxtImg from "../components/TxtImg/TxtImg"

function Covid({ data }) {
    return (
        <Layout>
            <Helmet>
                <title>Latest COVID-19 information | Kibworth Osteopaths & Pilates</title>
            </Helmet>
            <Title title="Latest COVID-19 information" subtitle="Making the clinic a safe place for you to come for treatment." />
            <section>
                <TxtImg
                imgSrc={data.open.childImageSharp.fluid}
                imgAlt="Osteopaths are open"
            >
                <h2>Hello, and I hope you're well.</h2>
                <p>I wanted to offer you reassurance that the clinic is a safe place to come for treatment. Strict adherence to guidelines regarding PPE is adhered to by all members of staff as well as thorough cleaning of the surgery daily. We ask that patients wear a face covering unless in the case of medical exemption.</p>
                <p>Please contact me for any further information.</p>
                <p>Emily <span role="img" aria-label="Open Hands Sign Emoji, representing openness.">🤲</span></p>
            </TxtImg>
        </section>
        </Layout>
    )
}

export const query = graphql`
    query {
        open: file(relativePath: {eq: "images/osteos-are-open.png"}) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 72) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default Covid