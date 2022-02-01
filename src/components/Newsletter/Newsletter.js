import * as React from "react"

function Newsletter() {
    return (
        <>
            {/* Begin Mailchimp Signup Form */}
            <div id="mc_embed_signup" style={{background: '#fff', clear: 'left', font: '14px Helvetica, Arial, sans-serif'}}>
            <form action="https://kibworthosteopaths.us5.list-manage.com/subscribe/post?u=60dbf62461870b10795c579ca&amp;id=1b7d56c9a4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address </label>
                <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name </label>
                <input type="text" defaultValue="" name="FNAME" className="required" id="mce-FNAME" />
            </div>
            <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Last Name </label>
                <input type="text" defaultValue="" name="LNAME" className="required" id="mce-LNAME" />
            </div>
                <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                    <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_60dbf62461870b10795c579ca_1b7d56c9a4" tabIndex="-1" defaultValue="" /></div>
                    <div className="optionalParent">
                        <div className="clear foot">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                        </div>
                    </div>
                </div>
            </form>
            </div>
            {/* End mc_embed_signup */}
        </>
    )
}

export default Newsletter