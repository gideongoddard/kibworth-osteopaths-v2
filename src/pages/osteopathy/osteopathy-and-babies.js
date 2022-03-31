import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout/Layout"
import Title from "../../components/Title/Title"
import BreadcrumbBar from "../../components/BreadcrumbBar/BreadcrumbBar"
import CrossLink, { Linkage } from "../../components/CrossLink/CrossLink"
import OnlineBooking from "../../components/OnlineBooking/OnlineBooking"

function BabyOsteo() {
    const parentPages = [{name: "Home", path: "/"}, {name: "Osteopathy", path: "/osteopathy"}]

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                
                <title>Osteopathy & Sports Injuries | Kibworth Osteopaths & Pilates</title>
                <html lang="en" />
            </Helmet>
            <Title title="Osteopathy & Babies" />
            <BreadcrumbBar currentPage="Osteopathy & Babies" parentPages={parentPages} />
            <section style={{paddingBottom: 0}}>
                <div style={{width: 'min(90%, 800px)', margin: 'auto'}}>
                <p style={{fontSize: 'var(--type-s)', fontWeight: 500}}>Birth is a natural phenomenon. Whilst a baby is designed to withstand the stress of labour, the process can sometimes be traumatic. Birth trauma is more likely to occur if interventions were needed, such as forceps or an emergency c-section.</p>
                </div>
            </section>
            <section className="condense">
                <div style={{width: 'min(90%, 800px)', margin: 'auto'}}>
                    <h3>What Osteopathy could help with in babies</h3>
                    <p>Common reasons Osteopaths may examine and treat babies include when the baby may have feeding difficulties, irritability or preference to only move their head in one direction.</p>
                    <p>A full paediatric case history is always taken, (this helps to establish if there are any other reasons for your baby’s symptoms) and paediatric checks are conducted (for example checking for tongue-tie). Doing these things ensures that it is appropriate to offer treatment to your baby.</p>
                    <h3>How do Osteopaths treat babies?</h3>
                    <p>When treating babies, Cranial Osteopathy/techniques are preferred as they are safe, gentle and non-invasive. Cranial Osteopathy involves the practitioner feeling the small natural changes of movement in the body called involuntary motion. This feels like tiny expansions and contractions of the body. Disturbance to an individual’s involuntary motion can happen through the birthing process.</p>
                    <p>On average 3-5 appointments are enough, but this can vary depending on the extent of symptoms.</p>
                    <h3>Are there any side effects of Cranial Osteopathy in babies?</h3>
                    <p>In babies, possible side effects could be hunger, tiredness or a full nappy after treatment. Babies generally find the treatment very soothing and tend to sleep through their appointment.</p>
                    <h3>Training required to be a Cranial Osteopath</h3>
                    <p>Having completed her 4-year degree in Osteopathy in 2009, Emily then trained with the Sutherland Cranial College of Osteopathy at post – graduate level to study Cranial Osteopathy. Emily has completed Osteopathic paediatric courses and continues to update and refresh her knowledge.</p>
                </div>
            </section>
            <OnlineBooking />
            <CrossLink>
                <Linkage to="/babies/newborn-check/">The Newborn Check</Linkage>
                <Linkage to="/osteopathy/cranial-osteopathy/">Cranial Osteopathy</Linkage>
                <Linkage to="/womens-health/postnatal-check/">The Postnatal Check</Linkage>
            </CrossLink>
        </Layout>
    )
}

export default BabyOsteo