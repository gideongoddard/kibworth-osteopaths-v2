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
            <section className="condense">
                <div style={{width: 'min(90%, 800px)', margin: 'auto'}}>
                    <h3>What is an Osteopathic Newborn Check?</h3>
                    <p>The New-Born check was designed by Emily for parents to have their baby checked Osteopathically following birth. It is primarily for babies from 1 week to 3 months, although you can bring your little one/s anytime you feel ready.</p>
                    <p>Whilst a baby is designed to withstand the stress of labour, the process can sometimes be traumatic for the baby. Birth stress is more likely to occur if interventions were needed, such as forceps or an emergency c-section.</p>
                    <p>An Osteopathic check ensures that birth hasn’t caused minor physical stresses or strains to your baby. Most of the time babies are quick to recover from birth, meaning that Osteopathic treatment is not needed. An Osteopathic New-Born check assess for any stress, and should any stresses or strains be felt this will be discussed and explained to you and cranial osteopathic treatment offered. If further treatment is recommended this will be explained to you and you have the choice to book another session.</p>
                    <h3>What happens in the Newborn Check?</h3>
                    <p>A full paediatric case history is always taken, this includes finding out about pregnancy and delivery, whether you have any concerns (for example with feeding) and your baby’s general medical health. After this, with parental consent, an Osteopathic assessment is carried out, this includes:</p>
                    <ul>
                        <li>Taking paediatric reflexes and checking for tongue-tie (should a tongue tie be present this will be discussed with you and appropriate referrals will be made with your consent).</li>
                        <li>Osteopathic check – this is where the practitioner feels for the small natural changes of movement in the body called involuntary motion. This feels like tiny expansions and contractions of the body. Disturbance to an individual’s involuntary motion can happen through the birthing process.</li>
                        <li>Weight check.</li>
                        <li>Advice on how to help your baby develop their physical skills, including the importance of tummy time and fix and follow exercises to encourage good head movement and control as your baby grows.</li>
                        <li>Most importantly time and space is offered to you, allowing you time to ask any questions you may have about your baby and their physical development.</li>
                    </ul>
                    <p>Should any stresses or strains be felt, this will be fully discussed with you and treatment offered. When treating babies, Cranial Osteopathy/techniques are preferred as they are safe, gentle and non-invasive.</p>
                </div>
            </section>
            <OnlineBooking />
            <CrossLink>
                <Linkage to="/osteopathy/osteopathy-and-babies/">Osteopathy & Babies</Linkage>
                <Linkage to="/osteopathy/cranial-osteopathy/">Cranial Osteopathy</Linkage>
                <Linkage to="/womens-health/postnatal-check/">The Postnatal Check</Linkage>
            </CrossLink>
        </Layout>
    )
}

export default NewbornCheck