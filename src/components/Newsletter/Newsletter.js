import * as React from "react"
import * as NewsletterStyles from "./Newsletter.module.css"

function Newsletter() {
    return (
        <div className={NewsletterStyles.container} id="newsletter-subscribe">
            <div className={NewsletterStyles.intro}>
                <h2>Get <strong>top tips</strong> & our latest news direct to your inbox!</h2>
                <p>Subscribe to the Kibworth Osteopaths & Pilates newsletter. We'll only share what we think you'll find useful but if it isn't for you, you can unsubscribe at any time.</p>
            </div>
            {/* Begin Mailchimp Signup Form */}
            <div className={NewsletterStyles.form} id="mc_embed_signup" style={{clear: 'left'}}>
                <form action="https://kibworthosteopaths.us5.list-manage.com/subscribe/post?u=60dbf62461870b10795c579ca&amp;id=1b7d56c9a4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" >
                    <div id="mc_embed_signup_scroll">
                <div className={NewsletterStyles.mcFieldGroup}>
                    <label htmlFor="mce-FNAME">First Name </label>
                    <input type="text" defaultValue="" name="FNAME" required id="mce-FNAME" />
                </div>
                <div className={NewsletterStyles.mcFieldGroup}>
                    <label htmlFor="mce-LNAME">Last Name </label>
                    <input type="text" defaultValue="" name="LNAME" required id="mce-LNAME" />
                </div>
                <div className={NewsletterStyles.mcFieldGroup}>
                    <label htmlFor="mce-EMAIL">Email Address </label>
                    <input type="email" defaultValue="" name="EMAIL" required id="mce-EMAIL" />
                </div>
                    <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                        <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                    </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_60dbf62461870b10795c579ca_1b7d56c9a4" tabIndex="-1" defaultValue="" /></div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={NewsletterStyles.button} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* End mc_embed_signup */}
        </div>
    )
}

export default Newsletter