import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout/Layout"
import Title from "../../components/Title/Title"
import BreadcrumbBar from "../../components/BreadcrumbBar/BreadcrumbBar"
import * as IFCStyles from "./infant-feeding-coaching.module.css"
import { graphql } from "gatsby"
import CrossLink, { Linkage } from "../../components/CrossLink/CrossLink"
import OnlineBooking from "../../components/OnlineBooking/OnlineBooking"
import Testimonial from "../../components/Testimonial/Testimonial"
import TxtImg from "../../components/TxtImg/TxtImg"

export default function IFC({ data }) {
    const parentPages = [{name: "Home", path: "/"}]

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="" />
                <title>Infant Feeding Coaching | Kibworth Osteopaths & Pilates</title>
                <html lang="en" />
            </Helmet>
            <Title title="Infant Feeding Coaching" />
            <BreadcrumbBar currentPage="Infant Feeding Coaching" parentPages={parentPages} />
            <section className="condense">
                <TxtImg
                    imgSrc={data.ifc.childImageSharp.fluid}
                    imgAlt="Infant Feeding Coaching illustration"
                >
                    <h2>What is an Infant Feeding Coach?</h2>
                    <p>Infant Feeding Coaches work with families who are expecting a baby or have a baby (usually less than 3 months old – although this does not have to be the case – older babies can also be seen).</p>
                    <p>Infant Feeding Coaches provide advice regarding feeding (breast, bottle or combination feeding) antenatally as well as postnatally.</p>
                    <p>The role of an Infant Feeding Coach is to support families in their feeding journey.</p>
                    <p>As an Infant Feeding Coach, Emily firmly believes that ‘Fed is Best’ – there is no judgement or expectation on how families decide to feed their baby – you will receive support, encouragement, advice, knowledge and empowerment.</p>
                </TxtImg>
            </section>
            <section className="condense" style={{paddingTop: 'var(--space-4)'}}>
                <div className={IFCStyles.narrowContainer}>                    
                    <h3>Antenatal Support</h3>
                    <p>If families have decided that their feeding goal is to breastfeed, it is important to prepare for this.</p>
                    <p>Infant feeding coaches are qualified to teach colostrum harvesting and are knowledgeable about how to store this safely in preparation for the baby's arrival.</p>
                    <p>If breastfeeding is not how families are planning on feeding their baby – an infant feeding coach can help with regards to bottles and feeding techniques/positions.</p>
                    <p>We encourage all expecting families to link in with local breastfeeding groups, baby groups, as well as seeking out relevant professionals BEFORE the arrival of the baby. This helps establish the web of support that really is valuable.</p>
                    <p>Infant Feeding Coaches also have knowledge regarding the ‘golden hour’ immediately after delivery, and seek to empower families in understanding the physiological importance of this.</p>
                
                    <h3>Postnatal Support</h3>
                    <p>Whether feeding a first baby or perhaps you’ve fed before, all babies are different.</p>
                    <p>Infant Feeding Coaches are there to support families on their feeding journey and provide practical help regarding attachment and positioning, feeding difficulties, supply issues, as well as explaining how breast milk can be pumped and safely stored.</p>
                    <p>Infant feeding coaches can provide help and advice with combination feeding, as well as how to bottle feed a baby (it really isn’t a case of popping the bottle in and off we go).</p>

                    <h3>Safety First. Always.</h3>
                    <p>Infant feeding coaches are highly trained to work within their scope of practice.</p>
                    <p>If we have concerns about a baby’s development, weight or health, we will always refer to your GP, health visitor or an IBCLC.</p>
                </div>
            </section>
            <section style={{paddingBottom: 'var(--space-6)'}}>
                <Testimonial  quote="Since you showed me how to pace-response bottle feed my son is much less colicy." />
            </section>
            <section>
                <div className={IFCStyles.narrowContainer}>
                    <h3>Why Osteopathy and Infant Feeding?</h3>
                    <p>As an Osteopath Emily has supported many families and their babies over the years she has been qualified.</p>
                    <p>Emily gained the qualification of Infant Feeding Coach in 2022 because she wanted to enhance her knowledge around infant feeding (breast and bottle) as well as around positioning and attachment.</p>
                    <p>A lot of babies are brought to Emily in an Osteopathic context with ‘poor latch’ and unsettled behaviour. Her deeper knowledge of positioning and attachment when feeding (breast or bottle) has made treatments much more effective and vastly enhanced the advice she can give to parents.</p>
                    <p>It has even reduced the achy shoulders that can happen when parents are feeding in a position that isn’t quite right for them or their baby.</p>
                </div>
            </section>
            <section style={{backgroundColor: 'var(--neutral-50)', paddingTop: 'var(--space-6)'}}>
                <div className={IFCStyles.narrowContainer}>
                    <h2>FAQs</h2>
                    <h3>Can I book just for IFC advice?</h3>
                    <p>Yes of course! This can be done via the online booking service or by calling me directly.</p>
                    <p>We can also do an Infant feeding assessment and/or any follow – up sessions online on Zoom – so don’t let geographical location stop you reaching out to me.</p>
                    <h3>Can I book both Osteopathy and IFC advice?</h3>
                    <p>Yes – the knowledge and advice I have as an Osteopath and an Infant Feeding Coach are packaged together when I see pregnant patients/paediatric patients. You don’t need to book a separate appointment for this.</p>
                </div>
            </section>
            <OnlineBooking />
            <CrossLink>
                <Linkage to="/babies/newborn-check/">The Newborn Check</Linkage>
                <Linkage to="/womens-health/postnatal-check/">The Postnatal Check</Linkage>
                <Linkage to="/osteopathy/osteopathy-and-babies/">Osteopathy and babies</Linkage>
            </CrossLink>
        </Layout>
    )
}

export const query = graphql`
    query {
        ifc: file(relativePath: {eq: "images/infant-feeding-coach.png"}) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 72) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`