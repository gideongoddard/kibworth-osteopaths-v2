import React from "react"
import FooterStyles from "./Footer.module.css"
import { Link, StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Img from "gatsby-image"

export default function Footer() {
    return (
        <footer>
            <div className={FooterStyles.container}>
                <div className={FooterStyles.menu}>
                    <h4>Useful links</h4>
                    <ul>
                        <li><Link to="/conditions">Conditions we treat</Link></li>
                        <li><Link to="/osteopathy">About Osteopathy</Link></li>
                        <li><Link to="/osteopathy/cranial-osteopathy">Cranial Osteopathy</Link></li>
                        <li><Link to="/osteopathy/what-to-expect">What to expect</Link></li>
                        <li><Link to="/appointments">Make a booking</Link></li>
                        <li><Link to="/pilates">About Pilates</Link></li>
                        <li><Link to="/pilates/prenatal-postnatal-pilates">Prenatal & Postnatal Pilates</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className={FooterStyles.right}>
                    <div className={FooterStyles.socialLinks}>
                        <a href="https://www.facebook.com/kibworthosteo/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.instagram.com/kibworthosteopaths/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                    <StaticQuery
                        query={graphql`
                            query {
                                hfe: file(relativePath: {eq: "images/hfe-endorsement.png"}) {
                                    childImageSharp {
                                        fixed(width: 125, quality: 72) {
                                            ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
                                goc: file(relativePath: {eq: "images/Emily-Coombes-GOC-Logo.png"}) {
                                    childImageSharp {
                                        fixed(width: 125, quality: 72) {
                                            ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
                            }
                        `}
                        render={data => (
                            <div className={FooterStyles.accreditations}>
                                <Img fixed={data.hfe.childImageSharp.fixed} alt="HFE endorsement" />
                                <Img fixed={data.goc.childImageSharp.fixed} alt="General Osteopathic Council registration mark" />
                            </div>
                        )}
                    />
                </div>
            </div>
            <div className={FooterStyles.bottom}>
                <div className={FooterStyles.copyright}>
                    <span>2020 © - Kibworth Osteopaths & Pilates</span>
                </div>
                <div className={FooterStyles.credit}>
                    <span>Website by <a href="https://gideongoddard.co.uk" target="_blank" rel="noopener noreferrer">Gideon Goddard Digital</a></span>
                </div>
            </div>
        </footer>
    )
}