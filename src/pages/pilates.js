import { graphql } from "gatsby"
import React from "react"
import PilatesStyles from "./pilates.module.css"
import Title from "../components/Title/Title"
import Banner from "../images/pilates-banner.jpg"
import BreadcrumbBar from "../components/BreadcrumbBar/BreadcrumbBar"
import TxtImg from "../components/TxtImg/TxtImg"
import Box from "../components/Box/Box"
import Schedule from "../components/Schedule/Schedule"
import Button from "../components/Button/Button"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { Helmet } from "react-helmet"

export default function Pilates({ data }) {
    const parentPages = [{name: "Home", path: "/"}]
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Regular Pilates can help reduce injury risk, enhance core stability, increase strength and improve posture, flexibility & balance." />
                <title>Pilates | Kibworth Osteopaths & Pilates</title>
                <html lang="en"></html>
            </Helmet>
            <Title title="Pilates" backgroundImage={Banner} />
            <BreadcrumbBar currentPage="Pilates" parentPages={parentPages} />
            <TxtImg imgSrc={data.emily.childImageSharp.fluid} imgAlt="Emily standing with a skeleton">
                <h2>Why Pilates?</h2>
                <p>Emily qualified as a Pilates instructor in 2019, as she wanted to offer more to patients in terms of aftercare post injury recovery, as well as general wellbeing. However, you do not have to be an Osteopathy patient to come to Pilates class, it is open to all!</p>
                <p>Doing Pilates with Emily means you have continued aftercare post injury (if you’ve seen her as an Osteopath), but you also have a highly qualified pair of eyes and hands teaching you, meaning classes are safe and effective.</p>
            </TxtImg>
            <section className={PilatesStyles.section} style={{backgroundColor: "var(--neutral-200)"}}>
                <div className={PilatesStyles.narrowContainer}>
                    <h2>What are the benefits of Pilates?</h2>
                    <p>Regular Pilates can help with all of the following</p>
                </div>
                <div className={PilatesStyles.container}>
                    <div className={PilatesStyles.gridContainer}>
                        <Box heading="Improved posture">
                            <p>All the exercises performed in Pilates classes help to promote skeletal alignment. In addition, they strengthen the muscles which are responsible for good posture.</p>
                        </Box>
                        <Box heading="Improved balance">
                            <p>Many Pilates exercises help to improve balance, this has many practical benefits in your day to day life, such as improved movement co-ordination, increasing agility and reaction times, to name a few.</p>
                        </Box>
                        <Box heading="Reduced injury risk">
                            <p>As mentioned, Pilates does an excellent job of improving posture, as well as strengthening your muscles. It also strengthens joints and improves flexibility. These things combined can help reduce injury that could be picked up doing other sports, or indeed during day to day life.</p>
                        </Box>
                        <Box heading="Enhanced core stability">
                            <p>One of the 6 Pilates Principles is ‘centering’, meaning that all the exercises begin with core engagement. Performing the exercises in this way means that the deep muscles in the abdomen, lower back and pelvic floor are strengthened, so providing the body with a good level of stability.</p>
                        </Box>
                        <Box heading="Improved flexibility">
                            <p>Pilates involves dynamic movements. This means that muscles are gently stretched and lengthened, which increases the range of movement in the joints, which increases your overall flexibility.</p>
                        </Box>
                        <Box heading="Increased strength">
                            <p>Pilates strengthens all the muscles in the body by using a combination of dynamic and static strength training, and no muscles get left out! One of the best things about Pilates is that functional strength is developed as well as muscle endurance which can then benefit day to day life!</p>
                        </Box>
                    </div>
                </div>
            </section>
            <section className={PilatesStyles.section}>
                <div className={PilatesStyles.narrowContainer}>
                    <h2>Classes</h2>
                    <p>Classes are either held at The Fitness Box @ The Manor in Tur Langton or at the Market Harborough Congregational Church.</p>
                </div>
                <div className={PilatesStyles.container}>
                    <div className={PilatesStyles.gridContainer}>
                        <Schedule type="Pilates" displayHeading={false} />
                        <div className={PilatesStyles.txtContainer}>
                            <p>Class sizes are 8 participants per class, and cost £12 per class. One-to-one classes are also available at £35.</p>
                            <p>To avoid disappointment, I request that participants ‘book their mat’ for a 6 week block (total payment for a 6 week block is £72). However, if after 2 sessions you decide that Pilates is not for you, you will be refunded for the classes that have not been used. Classes missed for prolonged illness or injury are also refunded (2 or more).</p>
                            <p>If you think Pilates sounds like something you would like to try or if you have any questions, please get in touch.</p>
                        </div>
                    </div>
                    <div className={PilatesStyles.buttonContainer}>
                            <Button type="primary" contact={true} to="tel:+447761664325" onClick={e => {
                                trackCustomEvent({
                                    category: "contact",
                                    action: "click",
                                    label: "telephone",
                                })
                            }}>Call now</Button>
                            <Button type="primary" contact={true} to="mailto:info@kibworthosteopaths.co.uk" onClick={e => {
                                trackCustomEvent({
                                    category: "contact",
                                    action: "click",
                                    label: "email",
                                })
                            }}>Email now</Button>
                        </div>
                </div>
            </section>
        </>
    )
}

export const data = graphql`
    query {
        emily: file(relativePath: {eq: "images/emily-skeleton-grey.jpeg"}) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 72) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`