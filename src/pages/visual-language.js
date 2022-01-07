import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from "../components/Layout/Layout"
import Button from '../components/Button/Button'
import Panel from '../components/DesignSystem/Panel/Panel'
import Panels from '../components/DesignSystem/Panels/Panels'
import Title from '../components/Title/Title'
import TypeScale from '../components/DesignSystem/TypeScale/TypeScale'
import VisLangSection from '../components/DesignSystem/DesignSystemSection/DesignSystemSection'
import * as VisLangStyles from './visual-language.module.css'

function VisualLanguage() {
    return (
        <Layout>
            <Helmet>
                <title>Visual Language | Kibworth Osteopaths & Pilates</title>
            </Helmet>
            <section className={VisLangStyles.title}>
                <Title title="Visual Language" subtitle="A guide to the systematisation of visual elements that will be used to create a consistent, coherent design.">
                    <h1>Visual Language</h1>
                    <p>A guide to the systematisation of visual elements that will be used to create a consistent, coherent design.</p>
                </Title>
            </section>
            <VisLangSection
                heading="Type scale"
                description="The type scale consists of 7 font sizes, each of which is a calculation using the clamp() function. Larger sizes scale up and down more than smaller sizes."
            >
                <TypeScale addedClass={VisLangStyles.xxl} />
                <TypeScale addedClass={VisLangStyles.xl} />
                <TypeScale addedClass={VisLangStyles.l} />
                <TypeScale addedClass={VisLangStyles.m} />
                <TypeScale addedClass={VisLangStyles.s} />
                <TypeScale addedClass={VisLangStyles.xs} />
                <TypeScale addedClass={VisLangStyles.xxs} />
            </VisLangSection>
            <VisLangSection
                heading="Colour palette"
                description="The colour palette consists of a set of shades of primary, secondary & neutral colours. Each is on a scale that starts at 50 and ends at 900 with intermediate shades evenly distributed between those values."
            >
                <h3>Primary</h3>
                <Panels>
                    <Panel addedClass={VisLangStyles.primary50} />
                    <Panel addedClass={VisLangStyles.primary100} border={true} />
                    <Panel addedClass={VisLangStyles.primary200} />
                    <Panel addedClass={VisLangStyles.primary300} />
                    <Panel addedClass={VisLangStyles.primary400} />
                    <Panel addedClass={VisLangStyles.primary500} />
                    <Panel addedClass={VisLangStyles.primary600} />
                    <Panel addedClass={VisLangStyles.primary700} />
                    <Panel addedClass={VisLangStyles.primary800} />
                    <Panel addedClass={VisLangStyles.primary900} />
                </Panels>
                <h3>Secondary</h3>
                <Panels>
                    <Panel addedClass={VisLangStyles.secondary50} />
                    <Panel addedClass={VisLangStyles.secondary100} border={true} />
                    <Panel addedClass={VisLangStyles.secondary200} />
                    <Panel addedClass={VisLangStyles.secondary300} />
                    <Panel addedClass={VisLangStyles.secondary400} />
                    <Panel addedClass={VisLangStyles.secondary500} />
                    <Panel addedClass={VisLangStyles.secondary600} />
                    <Panel addedClass={VisLangStyles.secondary700} />
                    <Panel addedClass={VisLangStyles.secondary800} />
                    <Panel addedClass={VisLangStyles.secondary900} />
                </Panels>              
                <h3>Neutral</h3>
                <Panels>
                    <Panel addedClass={VisLangStyles.neutral50} />
                    <Panel addedClass={VisLangStyles.neutral100} />
                    <Panel addedClass={VisLangStyles.neutral200} />
                    <Panel addedClass={VisLangStyles.neutral300} />
                    <Panel addedClass={VisLangStyles.neutral400} />
                    <Panel addedClass={VisLangStyles.neutral500} border={true} />
                    <Panel addedClass={VisLangStyles.neutral600} />
                    <Panel addedClass={VisLangStyles.neutral700} />
                    <Panel addedClass={VisLangStyles.neutral800} />
                    <Panel addedClass={VisLangStyles.neutral900} />
                </Panels>
            </VisLangSection>
            <VisLangSection
                heading="Shadows"
                description="There are 3 box shadows to represent different levels of elevation from the page."
            >
                <Panels style={{marginTop: 40, justifyContent: "space-between", backgroundColor: "var(--neutral-200)", padding: "5%"}}>
                    <Panel addedClass={VisLangStyles.lowShadow} />
                    <Panel addedClass={VisLangStyles.mediumShadow} />
                    <Panel addedClass={VisLangStyles.highShadow} />
                </Panels>
            </VisLangSection>
            <VisLangSection
                heading="Buttons"
                description="There are 2 core button styles: Primary is the default; Outline is for buttons that are to be de-emphasized."
            >
                <div className={VisLangStyles.buttonContainer}>
                    <Button external={false} type="primarySolid" to="#">Primary button</Button>
                    <Button external={false} type="primaryOutline" to="#">Outline button</Button>
                </div>
            </VisLangSection>
            <VisLangSection
                heading="Spacing & sizing"
                description="There are 2 scales - fixed and responsive. The first defines spacing and sizing options that are fixed across all screen sizes, the second is a scale that adjusts to the size of the screen."
            >
                <Panel addedClass={`${VisLangStyles.fixedSpace1} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace2} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace3} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace4} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace5} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace6} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace7} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace8} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace9} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace10} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace11} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace12} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace13} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace14} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace15} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.fixedSpace16} ${VisLangStyles.spacePanel}`} />
                <br />
                <Panel addedClass={`${VisLangStyles.space1} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space2} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space3} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space4} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space5} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space6} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space7} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space8} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space9} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space10} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space11} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space12} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space13} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space14} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space15} ${VisLangStyles.spacePanel}`} />
                <Panel addedClass={`${VisLangStyles.space16} ${VisLangStyles.spacePanel}`} />
            </VisLangSection>
        </Layout>
    )
}

export default VisualLanguage