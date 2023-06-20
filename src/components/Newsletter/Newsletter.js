import React, { useEffect } from "react"
import * as NewsletterStyles from "./Newsletter.module.css"
import { graphql, useStaticQuery } from "gatsby";
import Button from "../Button/Button";

const HubSpotForm = props => {
    const {region, portalId, formId} = props;
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js-eu1.hsforms.net/forms/embed/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: region,
                    portalId: portalId,
                    formId: formId,
                    target: '#hubspotForm'
                })
            }
        })
    }, [region, portalId, formId])

    return (
        <div className={NewsletterStyles.formWrapper}>
            <div id="hubspotForm"></div>
        </div>
    )
}

function Newsletter() {
    const data = useStaticQuery(graphql`
        query {
            file(name: {eq: "KOPI Spring 2023 Newsletter"}) {
                publicURL
            }
        }
    `)

    return (
        <>
        <div className={NewsletterStyles.container} id="newsletter-subscribe">
            <div className={NewsletterStyles.intro}>
                <h2>Get <strong>top tips</strong> & our latest news direct to your inbox!</h2>
                <p>Subscribe to the Kibworth Osteopaths & Pilates newsletter. We'll only share what we think you'll find useful but if it isn't for you, you can unsubscribe at any time.</p>
                <div className={NewsletterStyles.downloadContainer}>
                    <p style={{marginBottom: 0}}>If you missed out on our latest newsletter, you can get up to speed by downloading and reading it here.</p>
                    <Button type="primary" contact={false} to={data.file.publicURL} download={true}>Spring 2023 newsletter</Button>
                </div>
            </div>
            <HubSpotForm region="eu1" portalId="27185733" formId="ab6b5de1-c7bc-448d-8785-0550e4d4dbf6" />
        </div>
        </>
    )
}

export default Newsletter