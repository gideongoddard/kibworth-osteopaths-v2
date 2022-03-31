import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout/Layout"
import Title from "../../components/Title/Title"
import BreadcrumbBar from "../../components/BreadcrumbBar/BreadcrumbBar"
import Testimonial from "../../components/Testimonial/Testimonial"
import OnlineBooking from "../../components/OnlineBooking/OnlineBooking"
import CrossLink, { Linkage} from "../../components/CrossLink/CrossLink"

function PostnatalCheck() {
    const parentPages = [{name: "Home", path: "/"}]

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />

                <title>Postnatal Check | Kibworth Osteopaths & Pilates</title>
                <html lang="en" />
            </Helmet>
            <Title title="The New Mum Postnatal Check" />
            <BreadcrumbBar currentPage="Postnatal Check" parentPages={parentPages} />
            <section style={{paddingBottom: 0}}>
                <div style={{width: 'min(90%, 800px)', margin: 'auto'}}>
                    <p style={{fontSize: 'var(--type-s)', fontWeight: 500}}>The New Mum Postnatal Check is designed for women once they have had their 6-8 week postnatal check with their GP, up to 2 years postpartum (after you’ve had your child / children). Don’t worry if you had your baby / babies longer ago, you can still come for this appointment.</p>
                </div>
            </section>
            <section className="condense">
                <div style={{width: 'min(90%, 800px)', margin: 'auto'}}>
                    <h2>When it comes to women and women’s health, we really do care.</h2>
                    <p>Delivering your baby / babies is physically exhausting for your body. Whether you delivered vaginally or with a c-section, rehabilitation is key to your recovery. We also understand that the demands placed upon your sleep deprived body after having a baby are huge, from carrying your baby / babies to feeding (breast or bottle), this can place strain on your muscles, ligaments and joints.</p>
                    <p>An Osteopathic Postnatal Check ensures that the pregnancy and birth hasn’t caused physical stress, strain or injury to the mother’s body. Most of the time, women recover well from birth, whether they delivered vaginally or via c-section. However sometimes this isn’t the case and your body may feel painful, imbalanced, or weak. Alongside the demands of motherhood, it can feel impossible to find the time to look after your body. It really can be done, and the New Mum Postnatal Check will help get you started.</p>
                    <h3>Included in The New Mum Postnatal Check</h3>
                    <p>This appointment is 90 minutes long. You are welcome to bring your baby and partner with you. Details about your pregnancy (or pregnancies), delivery (or deliveries), and general medical health are taken.</p>
                    <h4>The physical side of the Postnatal Check</h4>
                    <p>Your Osteopath will require you to remove your clothing to your underwear. This is so we can observe your body move as well as look at and palpate your muscles.</p>
                    <ol>
                        <li><strong>Global spinal movement and pelvic alignment check</strong> &ndash; this is not about how flexible you are, this is checking your spine is moving well, and that your pelvis is held is neutral alignment.</li>
                        <li><strong>Check for Diastasis Recti</strong> &ndash; What is diastasis recti? It is common when pregnant that the 2 muscles that run down the middle of your stomach separate at the centre (the Linea Alba) as your growing womb pushes against the muscles. The amount of separation varies in individuals. Most of the time this separation is not an issue, however, if the gap in your midline is more than 2 fingers width you have a separation (diastasis recti), meaning abdominal rehabilitation is recommended. As an Osteopath and Pilates instructor I can rehabilitate and advise on this issue.</li>
                        <li><strong>Feeding postural check (if relevant)</strong> &ndash; When feeding (breast or bottle) your own posture needs to be considered. Ensuring you are properly supported is very important. Feeding with a poor posture can lead to muscle tightness as well as pain. This advice is also available to any bottle-feeding partners too.</li>
                        <li><strong>Suitable Pilates Exercises</strong> &ndash; including abdominal (core) and pelvic floor rehabilitation, spinal strengthening and neck and shoulder stretching. These are all tailored to you and are gradually built up over time. Many of these exercises can be done during daytime feeds, so worrying about dedicating time is already taken care of. Taking the time to do these exercises is really important as they keep help avoid injury when lifting your baby’s car seat, or lifting your baby out of the cot – both of which commonly do injure lower backs especially.</li>
                    </ol>
                    <p>All advice and exercises are emailed out to you on the day of your appointment. Please note if you are concerned about a vaginal or uterine prolapse this is not something I check for, so I will advise you to see you GP.</p>
                    <p>Should any physical stresses, strains or injuries be found this will be discussed and explained to you and Osteopathic treatment offered, which is included in the cost. If any further treatment is recommended this will be explained to you and you have the choice to book another session.</p>
                    <p>Whether treatment is needed or not, a follow up phone call (included in the cost) 2 weeks after your appointment will be booked in, to see how you are getting on with your exercises, and to provide you with an opportunity to ask any questions, or have your exercises updated!</p>
                </div>
                <div style={{padding: 'var(--space-4)'}}>
                    <Testimonial heading="Emily says:" quote="Take the time to gently rehabilitate your body after birth. It has done something amazing - grown a baby and delivered it! It takes 9 months to support and welcome new life into this world, it takes approximately 9 months to recover from this process." />
                </div>
            </section>
            <OnlineBooking />
            <CrossLink>
                <Linkage to="/blog/pelvic-health-more-than-the-pelvic-floor/">The Pelvic Floor</Linkage>
                <Linkage to="#">The Newborn Check</Linkage>
                <Linkage to="/osteopathy/osteopathy-and-pregnancy/">Osteopathy & Pregnancy</Linkage>
                <Linkage to="/pilates/prenatal-postnatal-pilates/">Prenatal & Postnatal Pilates</Linkage>
            </CrossLink>
        </Layout>
    )
}

export default PostnatalCheck