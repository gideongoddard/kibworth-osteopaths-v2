import React from "react"
import Title from "../components/Title/Title"
import BreadcrumbBar from "../components/BreadcrumbBar/BreadcrumbBar"
import PrivacyStyles from "./privacy.module.css"

export default function Privacy() {
    const parentPages = [{name: "Home", path: "/"}]
    return (
        <>
            <Title title="Privacy Policy" />
            <BreadcrumbBar currentPage="Privacy" parentPages={parentPages} />
            <section className={PrivacyStyles.section}>
                <h2>Scope</h2>
                <p>This document refers to personal data, which is defined as information concerning any living person (a natural person who hereafter will be called the Data Subject) that is not already in the public domain.</p>
                <p> The General Data Protection Regulation (GDPR) which is EU wide and far more extensive than its predecessor the Data Protection Act, along with the Privacy and Electronic Communications Regulations (PECR), seek to protect and enhance the rights of EU data subjects. These rights cover the safeguarding of personal data, protection against the unlawful processing of personal data and the unrestricted movement of personal data within the EU and its storage within the EEA.</p>
                <ol>
                    <li>
                        <h3>Your Practice</h3>
                        <p>Kibworth Osteopaths & Pilates, based at Unit 17, The Manor, Main Street, Tur Langton, LE8 0PJ, which hereafter for the purposes of this Privacy Notice will be referred to as the Osteopaths, is pleased to provide the following information:</p>
                    </li>
                    <li>
                        <h3>Who we are</h3>
                        <p>The Osteopaths diagnose and treat health conditions. Treatments are carried out in accordance with the Institute of Osteopathy's <a href="http://www.iosteopathy.org/osteopathy/the-patient-charter/">patient charter</a>. The practice may also provide other treatments, about which our staff will be pleased to provide more details.</p>
                    </li>
                    <li>
                        <h3>Personal Data</h3>
                        <ol class="sublist">
                            <li>For the purposes of providing treatment, Osteopaths may require detailed medical information. We will only collect what is relevant and necessary for your treatment. When you visit our practice, we will make notes which may include details concerning your medication, treatment and other issues affecting your health. This data is always held securely, is not shared with anyone not involved in your treatment, although for data storage purposes it may be handled by pre-vetted staff who have all signed an integrity and confidentiality agreement. To be able to process your personal data it is a condition of any treatment that you give your explicit consent to allow Osteopaths to document and process your personal medical data. Contact details provided by you such as telephone numbers, email addresses, postal addresses may be used to remind you of future appointments and provide reports or other information concerning your treatment. As part of our obligations as primary healthcare practitioners there may be circumstances related to your treatment, on-going care or medical diagnosis that will require the sharing of your medical records with other healthcare practitioners e.g GPs, consultants, surgeons and/or medical insurance companies. Where this is required we will always inform you first unless we are under a legal obligation to comply.</li>
                            <li>For marketing purposes, the Osteopaths may also use the contact details provided by you to respond to your enquiries, including making telephone contact and emailing information to you which the practice believes may be of interest to you.</li>
                            <li>In making initial contact with the practice you consent to Osteopaths maintaining a marketing dialogue with you until you either opt out (which you can do at any time) or we decide to desist in promoting our services. Osteopaths may occasionally also act on behalf of its patients in the capacity of data processor, when we may promote other practitioners based at our premises, who may not be employed by us. Osteopaths do not broker your data and you can ask to be removed from our marketing database by emailing or phoning the practice using the contact details provided at the end of this Privacy Notice.</li>
                            <li>Some basic personal data may be collected about you from the marketing forms and surveys you complete, from records of our correspondence and phone calls and details of your visits to our website, including but not limited to, personally identifying information like Internet Protocol (IP) addresses.</li>
                            <li>Osteopath's website uses cookies, which is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Osteopath's website visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Osteopath's website.</li>
                            <li>Osteopaths will only collect the information needed so that we can provide you with the services you require, the business does not sell or broker your data.</li>
                        </ol>
                    </li>
                    <li>
                        <h3>Legal basis for processing any personal data</h3>
                        <p>To meet our contractual obligations obtained from explicit Patient Consent and legitimate interest to respond to enquiries concerning the services provided.</p>
                    </li>
                    <li>
                        <h3>Legitimate interests persued by Osteopaths</h3>
                        <p>To promote treatments for patients with all types of health problems indicated for osteopathic care.</p>
                    </li>
                    <li>
                        <h3>Consent</h3>
                        <p>Through agreeing to this privacy notice you are consenting to Osteopaths processing your personal data for the purposes outlined. You can withdraw consent at any time by using the postal, email address or telephone number provided at the end of this Privacy Notice.</p>
                    </li>
                    <li>
                        <h3>Disclosure</h3>
                        <p>Osteopaths will keep your personal information safe and secure, only staff engaged in providing your treatment will have access to your patient records, although our administration team will have access to your contact details so that they can make appointments and manage your account. Osteopaths will not disclose your Personal Information unless compelled to, in order to meet legal obligations, regulations or valid governmental requests. The practice may also enforce its Terms and Conditions, including investigating potential violations of its Terms and Conditions to detect, prevent or mitigate fraud or security or technical issues; or to protect against imminent harm to the rights, property or safety of its staff.</p>
                    </li>
                    <li>
                        <h3>Retention Policy</h3>
                        <p>Osteopaths will process personal data during the duration of any treatment and will continue to store only the personal data needed for eight years after the contract has expired to meet any legal obligations. After eight years all personal data will be deleted, unless basic information needs to be retained by us to meet our future obligations to you, such as erasure details. Records concerning minors who have received treatment will be retained until the child has reached the age of 25.</p>
                    </li>
                    <li>
                        <h3>Data storage</h3>
                        <p>All data is held in the United Kingdom. Osteopaths do not store personal data outside the EEA.</p>
                    </li>
                    <li>
                        <h3>Your rights as a data subject</h3>
                        <p>At any point whilst Osteopaths are in possession of, or processing your personal data, all data subjects have the following rights:</p>
                        <ol class="sublist">
                            <li>Right of access - you have the right to request a copy of the information that we hold about you.</li>
                            <li>Right of rectification - you have a right to correct data that we hold about you that is inaccurate or incomplete.</li>
                            <li>Right to be forgotten - in certain circumstances you can ask for the data we hold about you to be erased from our records.</li>
                            <li>Right to restriction of processing - where certain conditions apply you have a right to restrict the processing.</li>
                            <li>Right of portability - you have the right to have the data we hold about you transferred to another organisation.</li>
                            <li>Right to object - you have the right to object to certain types of processing such as direct marketing.</li>
                            <li>Right to object to automated processing, including profiling - you also have the right not to be subject to the legal effects of automated processing or profiling.</li>
                        </ol>
                    </li>
                    <li>
                        <h3>You can request the following information:</h3>
                        <ol class="sublist">
                            <li>Identity and the contact details of the person or organisation (Osteopaths) that has determined how and why to process your data.</li>
                            <li>Contact details of the data protection officer, where applicable.</li>
                            <li>The purpose of the processing as well as the legal basis for processing.</li>
                            <li>If the processing is based on the legitimate interests of Osteopaths and information about these interests.</li>
                            <li>The categories of personal data collected, stored and processed.</li>
                            <li>Recipient(s) or categories of recipients that the data is/will be disclosed to.</li>
                            <li>How long the data will be stored.</li>
                            <li>Details of your rights to correct, erasure, restrict or object to such processing.</li>
                            <li>Information about your right to withdraw consent at any time.</li>
                            <li>How to lodge a complaint with the supervisory authority (ICO).</li>
                            <li>Whether the provision of personal data is a statutory or contractual requirement, or a requirement necessary to enter into a contract, as well as whether you are obliged to provide the personal data and the possible consequences of failing to provide such data.</li>
                            <li>The source of personal data if it wasn't collected directly from you.</li>
                            <li>Any details and information of automated decision making, such as profiling, and any meaningful information about the logic involved, as well as the significance and expected consequences of such processing.</li>
                        </ol>
                    </li>
                    <li>
                        <h3>To access what personal data is held, identification will be required</h3>
                        <p>Osteopaths will accept the following forms of identification (ID) when information on your personal data is requested: a copy of your driving licence, passport, birth certificate and a utility bill not older than three months. A minimum of one piece of photographic ID listed above and a supporting document is required. If Osteopaths is dissatisfied with the quality, further information may be sought before personal data can be released. All requests should be made to <a href="mailto:info@kibworthosteopaths.co.uk" onclick="gtag('event', 'click', {'event_category' : 'contact', 'event_label' : 'email'});">info@kibworthosteopaths.co.uk</a> or by phoning <a href="tel:+447761664325" onclick="gtag('event', 'click', {'event_category' : 'contact', 'event_label' : 'telephone'});">+44 (0)7761664325</a> or writing to us at the address further below.</p>
                    </li>
                    <li>
                        <h3>Complaints</h3>
                        <p>In the event that you wish to make a complaint about how your personal data is being processed by Osteopaths you have the right to complain to us. If you do not get a response within 30 days, you can complain to the ICO.</p>
                    </li>
                </ol>
                <p> The details for each of these contacts are: Emily Coombes Registered Osteopath, Kibworth Osteopaths & Pilates, Unit 17, The Manor, Main Street, Tur Langton, Leicestershire, LE8 0PJ. Telephone: <a href="tel:+447761664325" onclick="gtag('event', 'click', {'event_category' : 'contact', 'event_label' : 'telephone'});">+44 (0)7761664325</a> or email: <a href="mailto:info@kibworthosteopaths.co.uk" onclick="gtag('event', 'click', {'event_category' : 'contact', 'event_label' : 'email'});">info@kibworthosteopaths.co.uk</a></p>
                <p>ICO: Wycliffe House, Water Lane, Wilmslow, SK9 5AF. Telephone: <a href="tel:+443031231113">+44 (0) 303 123 1113</a> or email via: <a href="https://ico.org.uk/global/contact-us/email/">https://ico.org.uk/global/contact-us/email/</a></p>
            </section>
        </>
    )
}