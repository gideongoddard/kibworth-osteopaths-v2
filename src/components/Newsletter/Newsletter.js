import React, { useEffect } from "react"
import * as NewsletterStyles from "./Newsletter.module.css"

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
    }, [])

    return (
        <div className={NewsletterStyles.formWrapper}>
            <div id="hubspotForm"></div>
        </div>
    )
}

function Newsletter() {
    return (
        <>
        <div className={NewsletterStyles.container} id="newsletter-subscribe">
            <div className={NewsletterStyles.intro}>
                <h2>Get <strong>top tips</strong> & our latest news direct to your inbox!</h2>
                <p>Subscribe to the Kibworth Osteopaths & Pilates newsletter. We'll only share what we think you'll find useful but if it isn't for you, you can unsubscribe at any time.</p>
            </div>
            <HubSpotForm region="eu1" portalId="27185733" formId="ab6b5de1-c7bc-448d-8785-0550e4d4dbf6" />
        </div>
        </>
    )
}

export default Newsletter