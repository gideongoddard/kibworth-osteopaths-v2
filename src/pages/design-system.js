import React from "react"
import DesignSystemSection from "../components/DesignSystem/DesignSystemSection/DesignSystemSection"
import Panels from "../components/DesignSystem/Panels/Panels"
import Panel from "../components/DesignSystem/Panel/Panel"
import DesignSystemStyles from "./design-system.module.css"
import TypeScale from "../components/DesignSystem/TypeScale/TypeScale"
import Button from "../components/Button/Button"
import Title from "../components/Title/Title"
import Layout from "../components/layout/Layout"

export default function StyleGuide() {
    return (
        <Layout>
          <Title
            title="Website design system"
            subtitle={`"Systematise everything"`}
          />
          <DesignSystemSection
            heading="Type scale"
            description="The type scale consists of 7 font sizes, each of which is a calculation combining 'px' and 'vw' units. Larger sizes scale up and down more than smaller sizes."
          >
            <TypeScale addedClass={DesignSystemStyles.xxl} />
            <TypeScale addedClass={DesignSystemStyles.xl} />
            <TypeScale addedClass={DesignSystemStyles.l} />
            <TypeScale addedClass={DesignSystemStyles.m} />
            <TypeScale addedClass={DesignSystemStyles.s} />
            <TypeScale addedClass={DesignSystemStyles.xs} />
            <TypeScale addedClass={DesignSystemStyles.xxs} />
          </DesignSystemSection>
          <DesignSystemSection
            heading="Colour palette"
            description="The colour palette consists of a set of shades of primary, accent & neutral colours. Each is on a scale that starts at 100 and ends at 900 with intermediate shades evenly distributed between those values."
          >
            <h3>Primary</h3>
            <Panels>
              <Panel addedClass={DesignSystemStyles.primary100} />
              <Panel addedClass={DesignSystemStyles.primary200} />
              <Panel addedClass={DesignSystemStyles.primary300} />
              <Panel addedClass={DesignSystemStyles.primary400} />
              <Panel addedClass={DesignSystemStyles.primary500} />
              <Panel addedClass={DesignSystemStyles.primary600} />
              <Panel addedClass={DesignSystemStyles.primary700} />
              <Panel addedClass={DesignSystemStyles.primary800} />
              <Panel addedClass={DesignSystemStyles.primary900} />
            </Panels>
            <h3>Accent</h3>
            <Panels>
              <Panel addedClass={DesignSystemStyles.accent100} />
              <Panel addedClass={DesignSystemStyles.accent200} />
              <Panel addedClass={DesignSystemStyles.accent300} />
              <Panel addedClass={DesignSystemStyles.accent400} />
              <Panel addedClass={DesignSystemStyles.accent500} />
              <Panel addedClass={DesignSystemStyles.accent600} />
              <Panel addedClass={DesignSystemStyles.accent700} />
              <Panel addedClass={DesignSystemStyles.accent800} />
              <Panel addedClass={DesignSystemStyles.accent900} />
            </Panels>              
            <h3>Neutral</h3>
            <Panels>
              <Panel addedClass={DesignSystemStyles.neutral100} />
              <Panel addedClass={DesignSystemStyles.neutral200} />
              <Panel addedClass={DesignSystemStyles.neutral300} />
              <Panel addedClass={DesignSystemStyles.neutral400} />
              <Panel addedClass={DesignSystemStyles.neutral500} />
              <Panel addedClass={DesignSystemStyles.neutral600} />
              <Panel addedClass={DesignSystemStyles.neutral700} />
              <Panel addedClass={DesignSystemStyles.neutral800} />
              <Panel addedClass={DesignSystemStyles.neutral900} />
            </Panels>
          </DesignSystemSection>
          <DesignSystemSection
            heading="Shadows"
            description="There are 5 box shadows to represent different levels of elevation from the page."
          >
            <Panels style={{marginTop: 40, justifyContent: "space-between", backgroundColor: "var(--neutral-200)", padding: "5%", borderRadius: 10}}>
              <Panel addedClass={DesignSystemStyles.xSmallShadow} />
              <Panel addedClass={DesignSystemStyles.smallShadow} />
              <Panel addedClass={DesignSystemStyles.mediumShadow} />
              <Panel addedClass={DesignSystemStyles.largeShadow} />
              <Panel addedClass={DesignSystemStyles.xLargeShadow} />
            </Panels>
          </DesignSystemSection>
          <DesignSystemSection
            heading="Buttons"
            description="There are 3 core button styles: Primary is the default; Accent is for buttons that are key CTAs; Neutral is for buttons that are to be de-emphasized."
          >
            <div className={DesignSystemStyles.buttonContainer}>
              <Button type="primary" to="#">Primary button</Button>
              <Button type="accent" to="#">Accent button</Button>
              <Button type="neutral" to="#">Neutral button</Button>
            </div>
          </DesignSystemSection>
        </Layout>
    )
  }