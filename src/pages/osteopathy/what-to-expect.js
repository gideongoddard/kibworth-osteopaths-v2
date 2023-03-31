import React from "react"
import Layout from "../../components/Layout/Layout"
import Title from "../../components/Title/Title"
import BreadcrumbBar from "../../components/BreadcrumbBar/BreadcrumbBar"
import ExpectStyles from "./what-to-expect.module.css"
import Box from "../../components/Box/Box"
import { Helmet } from "react-helmet"

export default function WhatToExpect() {
    const parentPages = [{name: "Home", path: "/"}, {name: "Osteopathy", path: "/osteopathy"}]

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Find out what to expect and how we'll ensure the best care for you when you book an Osteopathy appointment with us." />
                <title>What to expect | Kibworth Osteopaths & Pilates</title>
                <html lang="en"></html>
            </Helmet>
            <Title title="What to expect" />
            <BreadcrumbBar currentPage="What to expect" parentPages={parentPages} />
            <section className={ExpectStyles.goc}>
                <div className={ExpectStyles.narrowContainer}>
                    <h2>What happens when you visit an Osteopath?</h2>
                    <p>This great video from General Osteopathic Council explains what happens when you visit an osteopath, what a treatment is likely to cost and how to find an Osteopath near you.</p>
                    <div className="videoWrapper">
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hBbHWThGkkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
            <section>
                <div className={ExpectStyles.narrowContainer}>
                    <h2>How it works</h2>
                    <p>New patients will usually have an initial appointment for consultation and treatment lasting around 1 hour, with any subsequent appointments for treatment lasting around 30 minutes.</p>
                    <p>Here's how you can expect things to work:</p>
                    <Box heading="Case history">
                        <p>A case history is taken about your symptoms so that the Osteopath has a complete understanding of what has happened, why, and when.</p>
                        <p>Then a full medical history about your general medical is taken so that you are kept safe throughout. This also helps the Osteopath understand you as a whole person, not just the symptomatic part of you.</p>
                    </Box>
                    <Box heading="Physical examination">
                        <p>An examination of the area that is causing problems is needed so wearing gym clothing is ideal.</p>
                        <p>Osteopaths are trained to examine areas of the body using a highly developed sense of touch to identify the body's points of weakness or excessive strain.</p>
                    </Box>
                    <Box heading="Explanation">
                        <p>It will then be explained to you what the injury is, why it has happened, and a treatment plan will be discussed. Treatment plans usually consist of short, medium and long term goals, and these are unique to each patient.</p>
                        <p>Informed patient consent is very important to me, and this is an on-going process. No treatment will ever be given without a through explanation of what can be done and how - i.e. the techniques that would be most safe and effective for you.</p>
                    </Box>
                    <Box heading="Treatment">
                        <p>During the initial appointment, treatment is usually provided using a combination of soft-tissue release work for tight muscles, tendons or ligaments, specific joint mobilisation techniques and much more.</p>
                        <p>Advice on self-help is provided to help keep the recovery process active - e.g. stretches, ice or heat, ergonomic advice.</p>
                        <p>Any subsequent treatments are then 30 minutes, unless an injury is complex or there are multiple injury sites, then more time may be required.</p>
                        <p>Self-help advice is regularly updated to keep the recovery process moving forward as injury moves towards total recovery. Advice is given on what can be done to keep symptom reoccurrace risk at a minimum.</p>
                    </Box>
                </div>
            </section>
        </Layout>
    )
}