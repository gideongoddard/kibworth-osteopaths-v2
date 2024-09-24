import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout/Layout'
import Title from '../components/Title/Title'
import BreadcrumbBar from '../components/BreadcrumbBar/BreadcrumbBar'
import Cards from '../components/Cards/Cards'
import Download from '../components/Download/Download'

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
                        <Download category="posture" heading="Ergonomic Guidelines for Computer Users" description="Sit ipsum proident qui ipsum tempor ipsum cillum magna adipisicing ipsum nisi." link="#" />
                        <Download category="infant-feeding" heading="Advice Sheet: Infant Feeding Guide" description="Exercitation officia minim officia nisi exercitation in laborum ut exercitation nisi quis." link="#" />
                        <Download category="infant-feeding" heading="Advice Sheet: Laid Back Feeding Position" description="Minim commodo sunt reprehenderit consectetur ullamco culpa sint dolor nostrud ipsum dolor." link="#" />
                        <Download category="infant-feeding" heading="Advice Sheet: Cross Cradle Feeding Position" description="Commodo sint veniam eu sunt ad cupidatat voluptate sint exercitation tempor sit cupidatat." link="#" />
                        <Download category="infant-feeding" heading="Advice Sheet: Rugby Hold Feeding Position" description="Labore fugiat fugiat officia consequat do commodo eu cupidatat sit sint laboris amet." link="#" />
                    </Cards>
                </div>
            </section>
        </Layout>
    )
}

export default Resources