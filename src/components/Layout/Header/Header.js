import React, { useState } from "react"
import HeaderStyles from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faBars, faTimes, faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const [osteoSubnavOpen, setOsteoSubnavOpen] = useState(false)
    const [pilatesSubnavOpen, setPilatesSubnavOpen] = useState(false)

    return (
        <header>
            <div className={HeaderStyles.contactBar}>
                <div className={HeaderStyles.contactDetails}>
                    <a className={HeaderStyles.tel} href="tel:+447761664325" onClick={e => {
                        trackCustomEvent({
                            category: "contact",
                            action: "click",
                            label: "telephone",
                        })
                    }}><FontAwesomeIcon icon={faPhone} /> 07761 664 325</a>
                    <a className={HeaderStyles.email} href="mailto:info@kibworthosteopaths.co.uk" onClick={e => {
                        trackCustomEvent({
                            category: "contact",
                            action: "click",
                            label: "email",
                        })
                    }}><FontAwesomeIcon icon={faEnvelope} /> info@kibworthosteopaths.co.uk</a>
                </div>
            </div>
            <div className={HeaderStyles.navBar}>
                <div className={HeaderStyles.navContainer}>
                    <Link to="/" className={HeaderStyles.logo} onClick={() => setNavOpen(false)}>
                        <StaticQuery
                            query={graphql`
                                query {
                                    file(name: {eq: "logo"}, extension: {eq: "jpg"}) {
                                        childImageSharp {
                                            fixed(width: 100, quality: 72) {
                                                ...GatsbyImageSharpFixed_noBase64
                                            }
                                        }
                                    }
                                }
                            `}
                            render={data => (
                                <Img fixed={data.file.childImageSharp.fixed} alt="logo" />
                            )}
                        />
                    </Link>
                    <div className={HeaderStyles.toggle}>
                        {
                            navOpen ? (<FontAwesomeIcon icon={faTimes} onClick={() => setNavOpen(false)} />) : (<FontAwesomeIcon icon={faBars} onClick={() => setNavOpen(true)} />)
                        }
                    </div>
                    <nav style={{height: navOpen ? "max-content" : 0}} onClick={() => setNavOpen(false)}>
                        <div onMouseOver={() => setOsteoSubnavOpen(true)} onMouseOut={() => setOsteoSubnavOpen(false)} className={HeaderStyles.subNavWrapper}>
                            <Link className={HeaderStyles.navItem} to="/osteopathy">Osteopathy <FontAwesomeIcon className={HeaderStyles.subNavIcon} icon={faAngleDown} /></Link>
                            <div className={osteoSubnavOpen ? `${HeaderStyles.osteoSubnav} ${HeaderStyles.subNav}` : `${HeaderStyles.osteoSubnavClosed} ${HeaderStyles.subNav}`}>
                                <Link className={HeaderStyles.subNavItem} to="/osteopathy/cranial-osteopathy">Cranial Osteopathy</Link>
                                <Link className={HeaderStyles.subNavItem} to="/osteopathy/what-to-expect">What to expect</Link>
                            </div>
                        </div>
                        <div onMouseOver={() => setPilatesSubnavOpen(true)} onMouseOut={() => setPilatesSubnavOpen(false)} className={HeaderStyles.subNavWrapper}>
                            <Link className={HeaderStyles.navItem} to="/pilates">Pilates <FontAwesomeIcon className={HeaderStyles.subNavIcon} icon={faAngleDown} /></Link>
                                <div className={pilatesSubnavOpen ? `${HeaderStyles.pilatesSubnav} ${HeaderStyles.subNav}` : `${HeaderStyles.pilatesSubnavClosed} ${HeaderStyles.subNav}`}>
                                    <Link className={HeaderStyles.subNavItem} to="/pilates/prenatal-postnatal-pilates">Prenatal & Postnatal Pilates</Link>
                                </div>
                        </div>
                        <Link className={HeaderStyles.navItem} to="/about">About</Link>
                        <Link className={HeaderStyles.navItem} to="/faq">FAQ</Link>
                        <Link className={HeaderStyles.navItem} to="/appointments">Appointments</Link>
                        <Link className={HeaderStyles.navItem} to="/blog">Blog</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}