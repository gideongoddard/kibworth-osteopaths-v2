import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout/Layout"
import Title from "../../components/Title/Title"
import BreadcrumbBar from "../../components/BreadcrumbBar/BreadcrumbBar"
import Testimonial from "../../components/Testimonial/Testimonial"
import CrossLink, { Linkage } from "../../components/CrossLink/CrossLink"
import OnlineBooking from "../../components/OnlineBooking/OnlineBooking"
import TxtImg from "../../components/TxtImg/TxtImg"

function PregnancyOsteo({ data }) {
    const parentPages = [{name: "Home", path: "/"}, {name: "Osteopathy", path: "/osteopathy"}]

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                
                <title>Osteopathy & Pregnancy | Kibworth Osteopaths & Pilates</title>
                <html lang="en" />
            </Helmet>
            <Title title="Osteopathy & Pregnancy" />
            <BreadcrumbBar currentPage="Osteopathy & Pregnancy" parentPages={parentPages} />
            <section className="condense">
                <TxtImg imgSrc={data.pregnancy.childImageSharp.fluid} imgAlt="Kinesiology taping on a pregnant woman's baby bump.">
                    <p>The body undergoes a lot of physical changes when pregnant. These changes are needed to allow the baby to grow and develop, prepare your body for labour as well as breast feeding your baby (if you wish to / are able to do so).</p>
                    <p>Pregnancy in today’s busy world can mean women are often balancing the demands of being pregnant alongside working, perhaps have existing children, or maybe an old injury or medical condition to deal with too.</p>
                    <p>As an Osteopath I understand the changes your body is undergoing, and I want you to support you in having an active, healthy, and comfortable pregnancy. This is where my knowledge of both Osteopathy and Pilates can really help benefit you.</p>
                </TxtImg>
                <div style={{width: 'min(90%, 800px)', margin: 'auto'}}>
                    <p>Some women do experience discomfort or pain associated with their pregnancy. Osteopaths are highly trained to safely diagnose, treat and rehabilitate musculoskeletal pain in pregnant patients.</p>
                    <p>Using gentle, safe, and appropriate hands-on Osteopathic techniques, specialist taping techniques using Kinesiology tape, and tailored advice, Osteopathy may help alleviate the following:</p>
                    <h3>Lower back discomfort</h3>
                    <p>This is really common in pregnant patients. As the pregnancy progresses the arch in the lower back (known as the lumber lordosis) increases to help accommodate the growing baby. This can cause soreness in the lower back, sacro-iliac joints and hips. Prolonged discomfort here can lead to irritation of the sciatic nerve.</p>
                    <h3>SPD (Symphysis Pubis Dysfunction  - Pain at the front of the pelvis.</h3>
                    <p>Sadly a lot of women feel that once they have SPD that there is nothing that can be done to help. Osteopathy, alongside the use of supports and appropriate exercsies and advice (including ice packs) can help to greatly reduce some of the symptoms associated with SPD.</p>
                    <h3>Mid Back pain (Thoracic Spine)</h3>
                    <p>As the spinal curve increases in the lower back – this can affect the mid back. The mid back is also having to accommodate increased breast size as well as weight. This can be really fatiguing for the body’s muscles.</p>
                    <h3>Wrists / Carpal Tunnel</h3>
                    <p>Due to increased fluid retention, carpal tunnel is more likely to occur when pregnant. Osteopaths can help to reduce the symptoms associated with carpal tunnel with hands on techniques, advice and exercises.</p>
                    <h3>Swollen feet / ankles</h3>
                    <p>Due to increasing body weight as well as fluid retention, feet and ankles in the expectant mother can become achy and swollen. Keeping your feet in good supportive footwear (trainers are ideal) can be beneficial. Osteopaths could help with this issue too, as well as providing lots of useful exercises and advice too.</p>
                </div>
                <div style={{padding: 'var(--space-4) 0'}}>
                    <Testimonial heading="Emily says:" quote="Being pregnant is an amazing journey, and your body is perfectly designed for it. However, it is also a hard work for the body - supporting both mother and baby, plus carrying more weight. Don’t leave any aches and pains, often patients respond well to a combination of hands-on treatment, and gentle exercises based on my Pilates knowledge." />
                </div>
            </section>
            <OnlineBooking />
            <CrossLink>
                <Linkage to="/pilates/prenatal-postnatal-pilates/">Prenatal & Postnatal Pilates</Linkage>
                <Linkage to="#">Post Natal Check</Linkage>
                <Linkage to="#">New Born Check</Linkage>
                <Linkage to="/blog/pelvic-health-more-than-the-pelvic-floor/">Osteopathy and the pelvic floor</Linkage>
            </CrossLink>
        </Layout>
    )
}

export const query = graphql`
    query {
        pregnancy: file(relativePath: {eq: "images/pregnancy-tape.jpeg"}) {
            childImageSharp {
                fluid(maxWidth: 950, quality: 72) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default PregnancyOsteo