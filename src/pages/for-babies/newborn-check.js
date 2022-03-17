import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout/Layout"
import Title from "../../components/Title/Title"
import BreadcrumbBar from "../../components/BreadcrumbBar/BreadcrumbBar"
import OnlineBooking from "../../components/OnlineBooking/OnlineBooking"
import CrossLink, { Linkage} from "../../components/CrossLink/CrossLink"

function NewbornCheck() {
    const parentPages = [{name: "Home", path: "/"}]

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />

                <title>Newborn Check | Kibworth Osteopaths & Pilates</title>
                <html lang="en" />
            </Helmet>
            <Title title="The Newborn Check" />
            <BreadcrumbBar currentPage="Newborn Check" parentPages={parentPages} />
            <section style={{backgroundColor: 'var(--neutral-50)'}}>
                <div style={{width: 'min(90%, 800px)', margin: 'auto'}}>
                    <p style={{fontSize: 'var(--type-s)'}}>Birth is a natural phenomenon. Whilst a baby is designed to withstand the stress of labour, the process can sometimes be traumatic for the baby. Birth trauma is more likely to occur if interventions were needed, such as forceps or an emergency c-section.</p>
                </div>
            </section>
            <section className="condense">
                <div style={{width: 'min(90%, 800px)', margin: 'auto'}}>
                    <p>The Newborn check was designed by Emily for parents to have their baby / babies checked Osteopathically following birth. It is primarily for babies from 1 week to 3 months &ndash; although you can bring your little one(s) anytime you feel ready.</p>
                    <p>A full paediatric case history is always taken, (including details about the pregnancy and birth) and paediatric checks are conducted (for example checking for tongue-tie). Doing these things ensures that it is appropriate to proceed.</p>
                    <h3>What is an Osteopathic Newborn Check?</h3>
                    <p>An Osteopathic check ensures that birth hasn’t caused minor physical stresses or strains to the baby. Most of the time babies are quick to recover from birth, meaning that Osteopathic treatment is not needed, and no further sessions will be recommended.</p>
                    <p>Should any stresses or strains be felt this will be discussed and explained to you and Osteopathic treatment offered. If further treatment is recommended this will be explained to you and you have the choice to book another session. When treating babies, Cranial Osteopathy techniques are preferred as they are safe, gentle and non-invasive.</p>
                    <p>Weight check</p>
                    <p>Paediatric reflexes check and Tongue tie check – Should a tongue tie be present this will be discussed with you. Emily with your consent will either contact your health visitor or refer you to a private tongue-tie specialist.</p>
                    <p>Advice on how to help your baby develop their physical skills, including the importance of tummy time and fix and follow exercises to encourage good head movement and control as your baby grows.</p>
                    <p>Most importantly time and space is offered allowing you to ask any questions you may have about your baby/s and their physical development.</p>
                </div>
            </section>
            <OnlineBooking />
            <CrossLink>
                <Linkage to="/osteopathy/osteopathy-and-babies/">Osteopathy & Babies</Linkage>
                <Linkage to="/osteopathy/cranial-osteopathy/">Cranial Osteopathy</Linkage>
                <Linkage to="/for-women/postnatal-check/">Postnatal Check</Linkage>
            </CrossLink>
        </Layout>
    )
}

export default NewbornCheck