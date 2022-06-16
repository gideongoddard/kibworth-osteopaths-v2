import React from "react"
import FooterStyles from "./Footer.module.css"
import { Link, StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import Img from "gatsby-image"

export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer>
            <div className={FooterStyles.container}>
                <div className={FooterStyles.menu}>
                    <h4>Useful links</h4>
                    <ul>
                        <li><Link to="/osteopathy/conditions/">Conditions we treat</Link></li>
                        <li><Link to="/osteopathy">About Osteopathy</Link></li>
                        <li><Link to="/osteopathy/cranial-osteopathy">Cranial Osteopathy</Link></li>
                        <li><Link to="/osteopathy/what-to-expect">What to expect</Link></li>
                        <li><Link to="/appointments">Make a booking</Link></li>
                        <li><Link to="/pilates/general-pilates">General Pilates</Link></li>
                        <li><Link to="/pilates/prenatal-postnatal-pilates">Prenatal & Postnatal Pilates</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/covid-19">COVID-19 Guidance</Link></li>
                    </ul>
                </div>
                <div className={FooterStyles.right}>
                    <div className={FooterStyles.socialLinks}>
                        <a href="https://www.facebook.com/kibworthosteo/" rel="noopener noreferrer" target="_blank" aria-label="Kibworth Osteopaths & Pilates Facebook page"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.instagram.com/kibworthosteopaths/" rel="noopener noreferrer" target="_blank" aria-label="Kibworth Osteopaths & Pilates Instagram page"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.youtube.com/channel/UCYV5d_sNakdmQOLiRH_RdCw" rel="noopener noreferrer" target="_blank" aria-label="Kibworth Osteopaths & Pilates YouTube channel"><FontAwesomeIcon icon={faYoutubeSquare} /></a>
                    </div>
                    <StaticQuery
                        query={graphql`
                            query {
                                hfe: file(relativePath: {eq: "images/hfe-endorsement.png"}) {
                                    childImageSharp {
                                        fixed(width: 85, quality: 72) {
                                            ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
                                goc: file(relativePath: {eq: "images/Emily-Coombes-GOC-Logo.png"}) {
                                    childImageSharp {
                                        fixed(width: 85, quality: 72) {
                                            ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
                                cepa: file(relativePath: {eq: "images/prestige-award-2.jpg"}) {
                                    childImageSharp {
                                        fixed(width: 275, quality: 72) {
                                            ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
                                mhfa: file(relativePath: {eq: "images/mhfa.png"}) {
                                    childImageSharp {
                                        fixed(width: 85, quality: 72) {
                                            ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
                            }
                        `}
                        render={data => (
                            <div className={FooterStyles.accreditations}>
                                <Img fixed={data.mhfa.childImageSharp.fixed} alt="MHFA England accreditation logo" />
                                <Img fixed={data.hfe.childImageSharp.fixed} alt="HFE endorsement" />
                                <Img fixed={data.goc.childImageSharp.fixed} alt="General Osteopathic Council registration mark" />
                                <Img className={FooterStyles.cepa} fixed={data.cepa.childImageSharp.fixed} alt="Osteopath of the Year logo" />
                            </div>
                        )}
                    />
                </div>
            </div>
            <div className={FooterStyles.bottom}>
                <div className={FooterStyles.copyright}>
                    <span>{year} © - Kibworth Osteopaths & Pilates</span>
                </div>
                <div className={FooterStyles.credit}>
                    <span>Website by <a href="https://goddard.digital/" target="_blank">Goddard Digital</a></span>
                </div>
            </div>
        </footer>
    )
}