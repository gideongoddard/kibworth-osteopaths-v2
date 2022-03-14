import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout/Layout"
import Title from "../../components/Title/Title"
import BreadcrumbBar from "../../components/BreadcrumbBar/BreadcrumbBar"
import CranialStyles from "./cranial-osteopathy.module.css"
import { graphql, Link } from "gatsby"
import TxtImg from "../../components/TxtImg/TxtImg"

export default function CranialOsteopathy({ data }) {
    const parentPages = [{name: "Home", path: "/"}, {name: "Osteopathy", path: "/osteopathy"}]

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meat name="description" content="Cranial Osteopathy can help your baby with managing sickness, wind and feeding difficulties, as well as releasing strain and tension in the musculoskeletal system following birth." />
                <title>Cranial Osteopathy | Kibworth Osteopaths & Pilates</title>
                <html lang="en"></html>
            </Helmet>
            <Title title="Cranial Osteopathy" />
            <BreadcrumbBar currentPage="Cranial Osteopathy" parentPages={parentPages} />
            <section>
                <div className={CranialStyles.narrowContainer}>
                    <h2>What is Cranial Osteopathy?</h2>
                    <p>Cranial Osteopathy is a type of treatment used by Osteopaths which involves using very gentle techniques on the body to release strain or tension in the musculoskeletal system. Cranial Osteopathy can be helpful for many conditions and can be very effective for treating babies and small children. Cranial Osteopathy is so named as treatment often mainly involves the head, although other regions are often incorporated into treatment such as the spine and pelvis.</p>
                    <p>Watching Cranial Osteopathy is often described as watching someone read a book, it does not look like much is being done. This is because Cranial Osteopathy is a quiet, subtle way of treating the body. The gentle use of pressure can help to relives strains or areas of physical stress in the body.</p>
                    <p>Cranial Osteopathy involves the practitioner feeling the small natural changes of movement in the body called involuntary motion. This feels like tiny expansions and contractions of the body. Disturbance to an individual’s involuntary motion can happen through significant trauma (a car accident or a fall), through natural trauma (a difficult birth for example) or can build up over time through repeated trauma.</p>
                    <p>Most of the time our body can recover from physical trauma, but occasionally lasting subtle stresses and stains can remain in the injured structures. Overtime, as the ability of the body to continuously compensate for these strains is exhausted, and symptoms may begin to show.</p>
                    <p>In adults, Cranial Osteopathy may be used to help treat headaches, facial pain, and stress. In babies, Cranial Osteopathy can be used for helping with the effects of a difficult birth, irritability and feeding problems.</p>
                    <p>You may also be interested in:</p>
                    <ul>
                        <li><Link to="#">Cranial Osteopathy and babies</Link></li>
                        <li><Link to="#">New-born check</Link></li>
                    </ul>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query {
    cranial: file(relativePath: {eq: "images/cranial-osteopathy.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 72) {
          ...GatsbyImageSharpFluid
        }
      }
    }
}`