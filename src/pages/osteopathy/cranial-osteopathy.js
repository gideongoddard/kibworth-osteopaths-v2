import React from "react"
import Title from "../../components/Title/Title"
import BreadcrumbBar from "../../components/BreadcrumbBar/BreadcrumbBar"
import CranialStyles from "./cranial-osteopathy.module.css"
import { graphql } from "gatsby"
import TxtImg from "../../components/TxtImg/TxtImg"

export default function CranialOsteopathy({ data }) {
    const parentPages = [{name: "Home", path: "/"}, {name: "Osteopathy", path: "/osteopathy"}]

    return (
        <>
            <Title title="Cranial Osteopathy" />
            <BreadcrumbBar currentPage="Cranial Osteopathy" parentPages={parentPages} />
            <section className={CranialStyles.section}>
                <div className={CranialStyles.narrowContainer}>
                    <h2>What is Cranial Osteopathy?</h2>
                    <p>Cranial Osteopathy is a type of treatment used by Osteopaths which involves using very gentle techniques on the body (usually the head, hence the term Cranial Osteopathy) to release strain or tension in the musculoskeletal system. Cranial Osteopathy can be helpful for many conditions (for example headaches or head trauma injuries) but can be very effective for treating babies and small children.</p>
                </div>
            </section>
            <TxtImg imgSrc={data.cranial.childImageSharp.fluid} alt="Baby hands being held by adult hands" backgroundColor="var(--neutral-200)">
                <p>Watching Cranial Osteopathy is often described as watching someone read a book, it does not look like much is being done. This is because Cranial Osteopathy is very quiet, and very subtle, which is why it can be an effective way of treating babies.</p>
                <p>Birth, whilst being a natural phenomenon, can be traumatic for the baby, whether they are delivered naturally or by c-section. Birth can place a lot of strain on the baby, which can then result in symptoms. Babies that are a multiple birth (twins for example) are incredibly squashed in the womb, and they are more likely to have tension/strains in their body.</p>
            </TxtImg>
            <section className={CranialStyles.section}>
                <div className={CranialStyles.narrowContainer}>
                    <p>Alongside offering practical advice, Osteopaths using cranial osteopathy can help in managing sickness and wind, and feeding difficulties, to name a few common presentations.</p>
                    <p>Here at Kibworth Osteopaths & Pilates, as with adult patients, a full paediatric case history is always taken, (this helps us establish if there are any other reasons for the baby’s symptoms, i.e. lactose intolerance/cow’s milk protein allergy) and paediatric tests are always conducted, for example checking for tongue-tie. Doing these things ensures that no referral is needed to the doctor.</p>
                </div>
            </section>
        </>
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