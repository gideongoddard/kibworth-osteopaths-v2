import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import Banner from "../images/neck-treatment-banner.jpg"
import BreadcrumbBar from "../components/BreadcrumbBar/BreadcrumbBar"
import TxtImg from "../components/TxtImg/TxtImg"
import OsteopathyStyles from "./osteopathy.module.css"
import Testimonial from "../components/Testimonial/Testimonial"
import Cards from "../components/Cards/Cards"
import Card from "../components/Card/Card"
import { Helmet } from "react-helmet"

export default function Osteopathy({ data }) {
    const parentPages = [{name: "Home", path: "/"}]
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Osteopathy looks at the often complex relationships between the different physical structures of the body in order to understand why injury or pain has occured and how to aid recovery." />
                <title>Osteopathy | Kibworth Osteopaths & Pilates</title>
                <html lang="en"></html>
            </Helmet>
            <Title backgroundImage={Banner} backgroundPosition="right" title="Osteopathy" />
            <BreadcrumbBar currentPage="Osteopathy" parentPages={parentPages} />
            <section className={OsteopathyStyles.section}>
                <div className={OsteopathyStyles.narrowContainer}>
                    <h2>What is Osteopathy?</h2>
                    <p>Osteopaths look at the musculoskeletal system as a whole, and understand that the physical structure of the body is related to the function of the body. The musculoskeletal system comprises of your skeleton (joints), muscles, discs, ligaments and tendons. Injury to these structures can affect the function of them, which can then result in pain.</p>
                    <p>Why an injury or pain has occured can be very complex, and Osteopaths understand that this needs to be explored and understood. Most chronic (long term) injuries tend to be due to poor postural habits, or an overuse of structures.</p>
                    <p>Sometimes, why a structure is injured is obvious, for example through sport, or an accident. Busy and stressful lifestyles can also cause muscles to become tight over time, which again can cause loss of correct function and pain.</p>
                </div>
            </section>
            <TxtImg imgSrc={data.hands.childImageSharp.fluid} imgAlt="Baby's hands holding adult's hands" backgroundColor="var(--neutral-200">
                <p>Osteopaths consider all of the predisposing factors to an injury, as well as what is preventing the body from resolving it without intervention (also called maintaining factors). This is why practical advice is often given regarding what can be done to help prevent injuries from reoccurring. This could be stretches, advice with ice and heat, or considering ergonomics.</p>
                <p>Injuries can occur at any age or stage of life. I am qualified to work with patients from birth onwards. Osteopathy is suitable for all of the family, no matter how young or old. See <Link to="/osteopathy/cranial-osteopathy">Cranial Osteopathy</Link> for more information on treatment for babies.</p>
            </TxtImg>
            <section className={OsteopathyStyles.section}>
                <div className={OsteopathyStyles.narrowContainer}>
                    <p>Injuries to the musculoskeletal system are treated by Osteopaths with a variety of hands-on techniques, including specific joint mobilisation, soft tissue release and much more. Here at Kibworth Osteopaths & Pilates, specific taping techniques are also used where appropriate to help support injured structures. Each patient is different, so treatment is tailored to them, as well as any advice offered.</p>
                    <p>Osteopaths train for 4 years at university, and are required to do 30 hours a year of continual professional development, so you can be assured that our knowledge is up to date, and you as well as your family are in safe hands.</p>
                </div>
            </section>
            <Testimonial quote="5 star Osteopath! Emily takes time to listen to individual issues and improves mobility and strength. Highly recommended." />
            <section className={OsteopathyStyles.section} style={{paddingBottom: 20}}>
                <div className={OsteopathyStyles.container}>
                    <h2 style={{textAlign: "center"}}>Osteopathy at Kibworth Osteopaths & Pilates</h2>
                    <Cards>
                        <Card 
                            imgSrc={data.baby.childImageSharp.fluid}
                            imgAlt="Baby lying down"
                            heading="Cranial Osteopathy"
                            description="Find out more about Cranial Osteopathy here at Kibworth Osteopaths & Pilates"
                            linkType="button"
                            linkTo="/osteopathy/cranial-osteopathy"
                            linkText="Cranial Osteopathy"
                        />
                        <Card 
                            imgSrc={data.treatmentRoom.childImageSharp.fluid}
                            imgAlt="Inside of a treatment room"
                            heading="What to expect"
                            description="Find out what to expect when making an appointment with an Osteopath"
                            linkType="button"
                            linkTo="/osteopathy/what-to-expect"
                            linkText="What to expect"
                        />
                        <Card 
                            imgSrc={data.theManor.childImageSharp.fluid}
                            imgAlt="Outside of a Kibworth Osteopaths & Pilates"
                            heading="Appointments"
                            description="All you need to know about bookings at Kibworth Osteopaths & Pilates"
                            linkType="button"
                            linkTo="/appointments"
                            linkText="Book now"
                        />
                    </Cards>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query {
        hands: file(relativePath: {eq: "images/hands.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 72) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        baby: file(relativePath: {eq: "images/baby-lying-down.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 800, quality: 72) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        treatmentRoom: file(relativePath: {eq: "images/treatment-room-card.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 800, quality: 72) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        theManor: file(relativePath: {eq: "images/the-manor-sign-card.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 800, quality: 72) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`