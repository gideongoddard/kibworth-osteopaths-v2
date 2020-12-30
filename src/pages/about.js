import React from "react"
import Title from "../components/Title/Title"
import BreadcrumbBar from "../components/BreadcrumbBar/BreadcrumbBar"
import TxtImg from "../components/TxtImg/TxtImg"
import { graphql } from "gatsby"
import Testimonial from "../components/Testimonial/Testimonial"
import AboutStyles from "./about.module.css"
import Bookings from "../components/Bookings/Bookings"
import Team from "../components/Team/Team"
import { Helmet } from "react-helmet"

export default function About({ data }) {
    const parentPages = [{name: "Home", path: "/"}]
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Kibworth Osteopaths & Pilates was founded in 2017 by Emily Coombes, an experienced Osteopath who is passionate about helping people with injury prevention & rehabilitation." />
                <title>About us | Kibworth Osteopaths & Pilates</title>
                <html lang="en"></html>
            </Helmet>
            <Title title="About us" />
            <BreadcrumbBar currentPage="About us" parentPages={parentPages} />
            <TxtImg imgSrc={data.emilySkeleton.childImageSharp.fluid} imgAlt="Emily standing with a skeleton" imgRotate={true}>
                <h4>Hello, and thank you for visiting the website!</h4>
                <p>I qualified as an Osteopath in 2009 from the University College of Osteopathy (formerly the Brisitsh School of Osteopathy) and immediately began to work in Leicester in a well established practice, under experienced Osteopaths.</p>
                <p>I worked there for 11 years, and learned invaluable skills, adding to those gained on my degree. In 2017 I decided it was time to spread my wings, so, I opened Kibworth Osteopaths & Pilates at the Kibworth Medical Centre.</p>
                <p>The practice has is now located just a few minutes away at The Manor in Tur Langton, which provides a dedicated space just for my patients.</p>
                <p><strong>- Emily Coombes (B'Ost Registered Osteopath)</strong></p>
            </TxtImg>
            <Testimonial quote="Emily is a fabulous therapist. As a qualified therapist myself I'm picky about who I'll let work on me, and I have no hesitation in recommending Emily. 5 stars all the way!" />
            <Team />
            <Bookings />
        </>
    )
}

export const data = graphql `
    query {
        emilySkeleton: file(relativePath: {eq: "images/emily-skeleton-color.jpeg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        emilySunset: file(relativePath: {eq: "images/emily-sunset.jpeg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
        }
    }
`