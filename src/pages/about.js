import React from "react"
import Title from "../components/Title/Title"
import BreadcrumbBar from "../components/BreadcrumbBar/BreadcrumbBar"
import TxtImg from "../components/TxtImg/TxtImg"
import { graphql } from "gatsby"
import Testimonial from "../components/Testimonial/Testimonial"
import AboutStyles from "./about.module.css"
import Bookings from "../components/Bookings/Bookings"
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
            <Title title="About" />
            <BreadcrumbBar currentPage="About" parentPages={parentPages} />
            <TxtImg imgSrc={data.emilySkeleton.childImageSharp.fluid} imgAlt="Emily standing with a skeleton" imgRotate={true}>
                <h4>Hello, and thank you for visiting my website!</h4>
                <p>I qualified as an Osteopath in 2009 from the University College of Osteopathy (formerly the Brisitsh School of Osteopathy) and immediately began to work in Leicester in a well established practice, under experienced Osteopaths.</p>
                <p>I worked there for 11 years, and learned invaluable skills, adding to those gained on my degree. In 2017 I decided it was time to spread my wings, so, I opened Kibworth Osteopaths & Pilates at the Kibworth Medical Centre.</p>
                <p>The practice has is now located just a few minutes away at The Manor in Tur Langton, which provides a dedicated space just for my patients.</p>
                <p><strong>- Emily Coombes (B'Ost Registered Osteopath)</strong></p>
            </TxtImg>
            <Testimonial quote="Emily is a fabulous therapist. As a qualified therapist myself I'm picky about who I'll let work on me, and I have no hesitation in recommending Emily. 5 stars all the way!" />
            <section className={AboutStyles.section}>
              <div className={AboutStyles.narrowContainer}>
                <p>I can honestly say I love my job, and no two days are ever the same, I remember in one day my youngest patient was 9 days old, and the oldest was 99 years old! It is a privilege when people say 'help', and I understand that this can take courage, and requires trust in me.</p>
                <p>I enjoy working out what somebody has done injury-wise, and I am passionate about rehabilitation as well as injury prevention. This is why in 2019 I trained with HFE to become a Pilates instructor, and qualified in 2020 as a Pre/Post natal Pilates instructor.</p>
              </div>
            </section>
            <TxtImg imgSrc={data.emilySunset.childImageSharp.fluid} imgAlt="Emily with her husband at sunset" backgroundColor="var(--neutral-200)">
              <p>I am blessed to be married to my best friend who is superman to me. In 2011 we began the greatest adventure, I had our son, closely followed by our daughter in 2012. Being a parent opened my eyes to a new world, which is when I trained in Cranial Osteopathy, as well as learning a huge amount about treating pregnant patients.</p>
              <p>In my spare time, I am either outside with my family and dogs, walking or camping, or I am curled up with a book and my cat!</p>
            </TxtImg>
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