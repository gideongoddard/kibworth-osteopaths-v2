import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import AlertBar from "../components/AlertBar/AlertBar"
import HomeStyles from "./index.module.css"
import TxtImg from "../components/TxtImg/TxtImg"
import Button from "../components/Button/Button"
import Testimonial from "../components/Testimonial/Testimonial"
import Bookings from "../components/Bookings/Bookings"

export default function Home({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Kibworth Osteopaths & Pilates offer Osteopathy treatment and Pilates instruction to provide you with the best recovery, rehabilitation and management for a range of injuries and conditions." />
        <title>Kibworth Osteopaths & Pilates | Leicestershire</title>
        <html lang="en"></html>

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kibworth Osteopaths & Pilates",
              "image": "https://kibworthosteopaths.co.uk/static/60b6d0dc5ba941f2b537b952625ffbcd/afb0f/emily-skeleton-color.jpg",
              "@id": "",
              "url": "https://kibworthosteopaths.co.uk",
              "telephone": "07761664325",
              "priceRange": "£8.90 - £40",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Unit 17, The Manor, Main Street",
                "addressLocality": "Tur Langton",
                "postalCode": "LE8 0PJ",
                "addressCountry": "GB"
              },
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Monday",
                "opens": "08:00",
                "closes": "18:00"
              },{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Tuesday",
                "opens": "08:00",
                "closes": "20:00"
              },{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Wednesday",
                "opens": "09:30",
                "closes": "14:30"
              },{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Thursday",
                "opens": "18:00",
                "closes": "19:00"
              },{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "08:00",
                "closes": "14:30"
              }] 
            }
          `}
        </script>
      </Helmet>
      <AlertBar>
        <a href="https://youtu.be/n1K2m3bwL7g" target="_blank" rel="noopener noreferrer"><strong>WATCH:</strong> What to expect from your Osteopathic appointment during COVID-19</a>
      </AlertBar>
      <section className={HomeStyles.heroBanner}>
        <h1>Kibworth Osteopaths & Pilates</h1>
      </section>
      <div style={{margin: 'auto', fontSize: 'var(--type-xxs)', width: 'min(90%, 800px)', lineHeight: '1.6', border: '1px solid var(--secondary-200)', textAlign: 'center', padding: 'var(--space-3)', backgroundColor: 'var(--secondary-50)'}}><Link to="/covid-19">Read our latest COVID-19 information for patients.</Link></div>
      <section className={HomeStyles.welcome}>
          <h2>Providing wholesome, whole-body healthcare for people of all ages in rural Leicestershire.</h2>
          <ul>
            <li>Are you looking to have or return to a more active lifestyle?</li>
            <li>Is pain or injury stopping you doing what you love?</li>
          </ul>
          <p>Whether you have had an injury for minutes or years, we understand it is debilitating and reduces your ability to live an active healthy life. Pain can stop you from working, doing your sport or hobby and reduces your confidence in your physical body.</p>
          <p>Here at Kibworth Osteopaths & Pilates we aim to help our patients reduce pain, improve their mobility and physical strength. With years of clinical experience and expert injury rehabilitation skills, you and your loved ones are in safe and knowledgeable hands.</p>
          <p>Our patients are at the centre of everything we do. We listen carefully to ensure we fully understand your injury. We then provide hands on treatments, create tailored safe and effective exercise rehabilitation programmes, and see our patients through to recovery.</p>
          <Button to="/appointments" type="accent" style={{margin: 'var(--space-2) var(--space-3) var(--space-2) 0'}} contact={false}>Book online now</Button>
          <Button to="/osteopathy/conditions/" type="primary" style={{margin: 'var(--space-2) 0'}} contact={false}>Conditions we treat</Button>
      </section>
      <section className={HomeStyles.osteoSection}>
        <TxtImg
          imgSrc={data.neckTreatment.childImageSharp.fluid}
          imgAlt="Patient receiving neck treatment"
        >
          <h2>What is Osteopathy?</h2>
          <p>Osteopathy is a primary health care service, and is suitable for most people of any age. Osteopathic treatment mainly focuses on relieving pain in the musculoskeletal system (joints, muscles, ligaments, tendons) that may have occurred as a result of injury, trauma, age, or repetitive postural issues to name a few.  All treatments are based on a carefully derived diagnosis which is based on a thorough case history and examination.</p>
          <p>Key to Osteopathy is that the body works as a whole unit - no part of the body works alone. Relevant occupational, environmental and psychosocial factors are always considered when we make our diagnosis.</p>
          <p>Treatment is tailored to each individual patient, using a combination of safe and effective hands-on techniques to work with the body’s natural self healing mechanisms.</p>
          <Button to="/osteopathy" type="primary" contact={false}>About Osteopathy</Button>
        </TxtImg>
      </section>
   {/*   <section>
        <TxtImg imgSrc={data.emily.childImageSharp.fluid} imgAlt="Emily Coombes, Osteopath" imgRotate={true} reverse={true} heading="Emily Coombes (B'Ost Registered Osteopath)">
          <p>Emily was trained at what is now the Univerity College of Osteopathy in London (formerly the British School of Osteopathy) and qualified in 2009. She has extensive experience in structural osteopathy and has attained post-graduate qualifications in:</p>
          <ul>
            <li>Sports Taping</li>
            <li>Cranial Osteopathy</li>
            <li>Pilates instruction for injury rehabilitation, general wellbeing and pre/post natal Pilates</li>
          </ul>
          <p>Osteopaths diagnose and treat musculoskeletal problems/injuries using hands on techniques that can help to reduce pain, and restore normal function.</p>
          <p><em>All Osteopaths must be registered with the <a href="https://www.osteopathy.org.uk/home/" target="_blank" rel="noopener noreferrer">General Oteopathic Council</a>, and are fully insured so you can be sure you and your family are in safe hands.</em></p>
        </TxtImg>
      </section> */}
      <section style={{paddingBottom: 'var(--space-6)'}}>
        <Testimonial  quote="Emily is a fabulous therapist. As a qualified therapist myself I'm picky about who I'll let work on me, and I have no hesitation in recommending Emily. 5 stars all the way!" />
      </section>
      <section>
        <TxtImg imgSrc={data.pilates.childImageSharp.fluid} imgAlt="Woman doing a Pilates pose">
          <h2>Pilates</h2>
          <p>Pilates is known for helping core strength, posture, balance, flexibility, increasing strength, and reducing injury risk. Pilates is also excellent for post injury rehabilitation. Emily is specially trained in pre and post natal Pilates.</p>
          <p>Find out more about Pilates, how it can help you and how to join our classes below.</p>
          <Button to="/pilates" type="primary" contact={false}>About Pilates</Button>
        </TxtImg>
      </section>
      <section className={HomeStyles.awardSection}>
        <TxtImg imgSrc={data.prestige.childImageSharp.fluid} imgAlt="Prestige Award" backgroundColor="var(--primary-500)" color="white" heading="Osteopath of the year!" reverse={true}>
          <p>It's a very proud moment to be able to say that Kibworth Osteopaths have won the Central England Prestige Award for Osteopath of the Year.</p>
          <p>It's wonderful to receive this kind of recognition but hopefully it's a reflection of our approach of always putting patient wellbeing first.</p>
          <Button to="/about" type="primary" style={{marginTop: 'var(--space-2)'}}>About us</Button>
        </TxtImg>
      </section>
      <section>
        <Bookings />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    neckTreatment: file(relativePath: {eq: "images/neck-treatment-tall.jpg"}) {
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
    logo: file(relativePath: {eq: "images/logo.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 72) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`