import React from "react"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import BreadcrumbBar from "../components/BreadcrumbBar/BreadcrumbBar"
import TxtImg from "../components/TxtImg/TxtImg"
import { graphql } from "gatsby"
import Testimonial from "../components/Testimonial/Testimonial"
import Bookings from "../components/Bookings/Bookings"
import { Helmet } from "react-helmet"
import Team from "../components/Team/Team"
import Newsletter from "../components/Newsletter/Newsletter"

export default function About({ data }) {
    const parentPages = [{name: "Home", path: "/"}]
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Kibworth Osteopaths & Pilates was founded in 2017 by Emily Coombes, an experienced Osteopath who is passionate about helping people with injury prevention & rehabilitation." />
                <title>About us | Kibworth Osteopaths & Pilates</title>
                <html lang="en"></html>
            </Helmet>
            <Title title="About us" />
            <BreadcrumbBar currentPage="About us" parentPages={parentPages} />
            <section>
                <TxtImg imgSrc={data.emilyAbout.childImageSharp.fluid} imgAlt="Emily Coombes" imgRotate={true}>
                    <h3>Kibworth Osteopaths & Pilates is a friendly and vibrant practice which is committed to providing the best care for our patients. We always take the time to listen to you, and your body.</h3>
                    <p>We provide safe and effective hands on treatments, working alongside the natural healing processes our amazing body has. We support you through the recovery process step by step, providing top-quality and tailored advice including rehabilitation exercises that are updated as you improve.</p>
                </TxtImg>
            </section>
            <section style={{padding: 'var(--space-6) 0 var(--space-10) 0'}}>
                <Testimonial quote="Emily is a fabulous therapist. As a qualified therapist myself I'm picky about who I'll let work on me, and I have no hesitation in recommending Emily. 5 stars all the way!" />
            </section>
            <section style={{backgroundColor: 'var(--neutral-100)'}}>
                <Team />
            </section>
            <section>
                <Bookings />
            </section>
            <section style={{paddingTop: 0}}>
                <Newsletter />
            </section>
        </Layout>
    )
}

export const data = graphql `
    query {
        emily: file(relativePath: {eq: "images/emily-headshot.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        emilyAbout: file(relativePath: {eq: "images/emily-about.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
        }
    }
`