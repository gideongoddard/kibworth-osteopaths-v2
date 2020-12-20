import React from "react"
import { graphql } from "gatsby"
import AlertBar from "../components/AlertBar/AlertBar"
import Layout from "../components/Layout/Layout"
import HomeStyles from "./index.module.css"
import TxtImg from "../components/TxtImg/TxtImg"
import Button from "../components/Button/Button"
import Testimonial from "../components/Testimonial/Testimonial"
import Bookings from "../components/Bookings/Bookings"

export default function Home({ data }) {
  return (
    <Layout>
      <AlertBar>
        <a href="https://youtu.be/n1K2m3bwL7g" target="_blank" rel="noopener noreferrer"><strong>WATCH:</strong> What to expect from your Osteopathic appointment during COVID-19</a>
      </AlertBar>
      <section className={HomeStyles.heroBanner}>
        <h1>Kibworth Osteopaths & Pilates</h1>
      </section>
      <TxtImg imgSrc={data.neckTreatment.childImageSharp.fluid} imgAlt="Patient receiving neck treatment">
        <h2>What is Osteopathy?</h2>
        <p>Osteopathic treatment focuses on the musculoskeletal system. All treatments are based on a carefully derived diagnosis which is in turn based on a thorough case history and examination.</p>
        <p>Treatment is tailored to each individual patient, using a combination of soft-tissue release work, specific joint mobilisation techniques and much more. Advice on self-help is provided to help keep the recovery process active to help prevent the injury reoccurring or keep long term issues manageable.</p>
        <Button to="/osteopathy" type="primary" contact={false}>About Osteopathy</Button>
      </TxtImg>
      <TxtImg backgroundColor="var(--neutral-200)" imgSrc={data.emily.childImageSharp.fluid} imgAlt="Emily Coombes, Osteopath" imgRotate={true} reverse={true} heading="Emily Coombes (B'Ost Registered Osteopath)">
        <p>Emily was trained at what is now the Univerity College of Osteopathy in London (formerly the British School of Osteopathy) and qualified in 2009. She has extensive experience in structural osteopathy and has attained post-graduate qualifications in:</p>
        <ul>
          <li>Sports Taping</li>
          <li>Cranial Osteopathy</li>
          <li>Pilates instruction for injury rehabilitation, general wellbeing and pre/post natal Pilates</li>
        </ul>
        <p>Osteopaths diagnose and treat musculoskeletal problems/injuries using hands on techniques that can help to reduce pain, and restore normal function.</p>
        <p><em>All Osteopaths must be registered with the <a href="https://www.osteopathy.org.uk/home/" target="_blank" rel="noopener noreferrer">General Oteopathic Council</a>, and are fully insured so you can be sure you and your family are in safe hands.</em></p>
      </TxtImg>
      <Testimonial  quote="Emily is a fabulous therapist. As a qualified therapist myself I'm picky about who I'll let work on me, and I have no hesitation in recommending Emily. 5 stars all the way!" />
      <TxtImg imgSrc={data.pilates.childImageSharp.fluid} imgAlt="Woman doing a Pilates pose">
        <h2>Pilates</h2>
        <p>Pilates is known for helping core strength, posture, balance, flexibility, increasing strength, and reducing injury risk. Pilates is also excellent for post injury rehabilitation. Emily is specially trained in pre and post natal Pilates.</p>
        <p>Find out more about Pilates, how it can help you and how to join our classes below.</p>
        <Button to="/pilates" type="primary" contact={false}>About Pilates</Button>
      </TxtImg>
      <section className={HomeStyles.conditionsSection}>
        <div className={HomeStyles.conditionsContainer}>
          <h2>Conditions we treat</h2>
          <p>We take a very patient-centred approach and will always take the time to understand your individual symptoms before explaining and recommending any particular treatment.</p>
          <p>Commonly treated conditions include:</p>
          <ul>
            <li>Back and neck pain</li>
            <li>Postural problems</li>
            <li>Sporting injuries</li>
            <li>Muscle and joint deterioration</li>
            <li>Restricted mobility</li>
            <li>Occupational ill-health</li>
          </ul>
          <p>More information about these and other conditions that we treat can be found below.</p>
          <Button to="/conditions" type="primary" contact={false}>Find out more</Button>
        </div>
      </section>
      <TxtImg imgSrc={data.prestige.childImageSharp.fluid} imgAlt="Prestige Award" backgroundColor="var(--primary-500)" color="white" heading="Osteopath of the year!" reverse={true}>
        <p>It's a very proud moment to be able to say that Kibworth Osteopaths have won the Central England Prestige Award for Osteopath of the Year.</p>
        <p>It's wonderful to receive this kind of recognition but hopefully it's a reflection of our approach of always putting patient wellbeing first.</p>
      </TxtImg>
      <Bookings />
    </Layout>
  )
}

export const query = graphql`
  query {
    neckTreatment: file(relativePath: {eq: "images/neck-treatment.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 72) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emily: file(relativePath: {eq: "images/emily-skeleton-color.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 475, quality: 72) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pilates: file(relativePath: {eq: "images/pilates.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 72) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prestige: file(relativePath: {eq: "images/prestige-award.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 72) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`