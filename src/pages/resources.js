import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout/Layout'
import Title from '../components/Title/Title'
import BreadcrumbBar from '../components/BreadcrumbBar/BreadcrumbBar'
import Cards from '../components/Cards/Cards'
import Download from '../components/Download/Download'
import ErgonomicGuidelines from "../downloads/KOPI-ergonomic-guidelines-for-computer-users.pdf"
import InfantFeedingGuide from "../downloads/KOPI-advice-sheet-infant-feeding-guide.pdf"
import RugbyHoldFeeding from "../downloads/KOPI-advice-sheet-rugby-hold-feeding-position.pdf"
import CrossCradleFeeding from "../downloads/KOPI-advice-sheet-cross-cradle-feeding-position.pdf"
import LaidBackFeeding from "../downloads/KOPI-advice-sheet-laid-back-feeding-position.pdf"

function Resources() {
    const parentPages = [{name: "Home", path: "/"}]
    return (
        <Layout>
            <Helmet>
                <title>Free Resources | Kibworth Osteopaths & Pilates</title>
            </Helmet>
            <Title title="Free Resources" subtitle="Helpful guides and advice sheets available to download for free." />
            <BreadcrumbBar parentPages={parentPages} currentPage="Free Resources" />
            <section style={{backgroundColor: 'var(--neutral-100)'}}>
                <div style={{width: 'min(90%, 1400px)', margin: 'auto'}}>
                    <Cards>
                        <Download category="posture" heading="Ergonomic Guidelines for Computer Users" description="A helpful guide to help you sit with good ergonomics in mind." link={ErgonomicGuidelines} />
                        <Download category="infant-feeding" heading="Advice Sheet: Infant Feeding Guide" description="A guide to help you understand if breastfeeding is going well." link={InfantFeedingGuide} />
                        <Download category="infant-feeding" heading="Advice Sheet: Laid Back Feeding Position" description="A guide to help you understand the Laid Back feeding position." link={LaidBackFeeding} />
                        <Download category="infant-feeding" heading="Advice Sheet: Cross Cradle Feeding Position" description="A guide to help you understand the Cross Cradle feeding position." link={CrossCradleFeeding} />
                        <Download category="infant-feeding" heading="Advice Sheet: Rugby Hold Feeding Position" description="A guide to help you understand the Rugby Hold feeding position." link={RugbyHoldFeeding} />
                    </Cards>
                </div>
            </section>
        </Layout>
    )
}

export default Resources