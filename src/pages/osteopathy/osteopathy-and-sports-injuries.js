import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout/Layout"
import Title from "../../components/Title/Title"
import BreadcrumbBar from "../../components/BreadcrumbBar/BreadcrumbBar"
import Testimonial from "../../components/Testimonial/Testimonial"
import CrossLink, { Linkage } from "../../components/CrossLink/CrossLink"

function SportsOsteo() {
    const parentPages = [{name: "Home", path: "/"}, {name: "Osteopathy", path: "/osteopathy"}]

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                
                <title>Osteopathy & Sports Injuries | Kibworth Osteopaths & Pilates</title>
                <html lang="en" />
            </Helmet>
            <Title title="Osteopathy & Sports Injuries" />
            <BreadcrumbBar currentPage="Osteopathy & Sports Injuries" parentPages={parentPages} />
            <section>
                <div style={{width: 'min(90%, 800px)', margin: 'auto'}}>
                    <p>The importance of exercise at any age is well proven. We know that exercise benefits the physical body as well as the mind. However, injury can sometimes occur because of your sport no matter how young/old you are, whether you’re an athlete or training to keep fit, or just starting a new hobby. Having to stop what you love is very frustrating, and we understand that.</p>
                    <p style={{margin: 'var(--space-5) auto', fontSize: 'var(--type-m)', fontWeight: 600, fontStyle: 'italic'}}>When it comes to Sports Injuries Osteopaths take a different approach.</p>
                    <p>Osteopaths do not just look at the injured structure, we look deeper into the injury. We want to understand why your injury has occurred, especially if there is not an obvious reason (this way, we could also stop it happening again!) Often, it is to do with not warming up or cooling down properly. Using the wrong equipment for your body can also predispose you to injury (for example your trainers may not be right for your feet, or perhaps your bike needs a professional bike fit, or the kit you’re using in the gym isn’t right for you). Sometimes an injury it is do with wear and tear, but this does not mean it is time to stop!</p>
                    <p>From sudden traumatic onset, or a niggle that has been there for years, Osteopaths are trained to assess, diagnose, and treat injuries from head to toe across a wide range of sports as well as the age of participant. Using a combination of hands-on techniques and often kinesiology tape (which provides continued support to the injury, swelling reduction and structure de-loading for up to 5 days after treatment) Osteopathy can help accelerate your body’s natural recovery process. Individually tailored rehabilitation exercsies begin right away too, as well providing any advice regarding use of ice packs and/or heat packs.</p>
                    <p>We understand that returning to sport after injury can be daunting. Therefore we will always look at injury prevention with you. This includes tailoring your warm-up routine as well as your cool down stretches; providing specific rehabilitation stretches and strengthening exercises to help stabilise the injury; and considering any supports to help the affected area should they be needed. Doing this could not only help reduce the risk of injury happening again, but could also improve your performance, flexibility, and reduce structure fatigue in the future.</p>
                    <div style={{padding: 'var(--space-4) 0'}}>
                       <Testimonial heading="Emily says:" quote="Getting you back doing what you love is my number one goal from the moment you step through my door." />
                    </div>
                </div>
            </section>
            <CrossLink>
                <Linkage to="/blog/staying-fit-in-colder-weather/">Exercising in the cold</Linkage>
                <Linkage to="/blog/discussing-smart-goals/">The importance of SMART Goals</Linkage>
            </CrossLink>
        </Layout>
    )
}

export default SportsOsteo