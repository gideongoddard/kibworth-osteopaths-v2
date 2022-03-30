import React, { useState } from "react"
import HeaderStyles from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faBars, faTimes, faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import LogoSVG from "../../../images/KOPI-logo.svg"

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const [servicesSubnavOpen, setServicesSubnavOpen] = useState(false)
    const [womenSubnavOpen, setWomenSubnavOpen] = useState(false)
    const [babiesSubnavOpen, setBabiesSubnavOpen] = useState(false)


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
                    <img src={LogoSVG} alt="logo" height="60px" />
                    </Link>
                    <div className={HeaderStyles.toggle}>
                        {
                            navOpen ? (<FontAwesomeIcon icon={faTimes} onClick={() => setNavOpen(false)} />) : (<FontAwesomeIcon icon={faBars} onClick={() => setNavOpen(true)} />)
                        }
                    </div>
                    <nav style={{height: navOpen ? "max-content" : 0}} onClick={() => setNavOpen(false)}>
                        <div onMouseOver={() => setServicesSubnavOpen(true)} onMouseOut={() => setServicesSubnavOpen(false)} className={HeaderStyles.subNavWrapper}>
                            <Link className={HeaderStyles.navItem} to="#">Services<FontAwesomeIcon className={HeaderStyles.subNavIcon} icon={faAngleDown} /></Link>
                            <div className={servicesSubnavOpen ? `${HeaderStyles.osteoSubnav} ${HeaderStyles.subNav}` : `${HeaderStyles.subnavClosed} ${HeaderStyles.subNav}`}>
                                <h5>Osteopathy</h5>
                                <div className={HeaderStyles.subFlexContainer}>
                                <Link className={HeaderStyles.subNavItem} to="/osteopathy/conditions/">What Osteopathy can help with</Link>
                                    <Link className={HeaderStyles.subNavItem} to="/osteopathy/">General Osteopathy</Link>
                                    <Link className={HeaderStyles.subNavItem} to="/osteopathy/osteopathy-and-sports-injuries/">Osteopathy & Sports Injuries</Link>
                                    <Link className={HeaderStyles.subNavItem} to="/osteopathy/osteopathy-and-pregnancy/">Osteopathy & Pregnancy</Link>
                                    <Link className={HeaderStyles.subNavItem} to="/osteopathy/osteopathy-and-babies/">Osteopathy & Babies</Link>
                                    <Link className={HeaderStyles.subNavItem} to="/osteopathy/cranial-osteopathy/">Cranial Osteopathy</Link>
                                    <Link className={HeaderStyles.subNavItem} to="/osteopathy/what-to-expect/">What to expect</Link>
                                </div>
                                <h5>Pilates</h5>
                                <div className={HeaderStyles.subFlexContainer}>
                                    <Link className={HeaderStyles.subNavItem} to="/pilates/general-pilates/">General Pilates</Link>
                                    <Link className={HeaderStyles.subNavItem} to="/pilates/prenatal-postnatal-pilates/">Prenatal & Postnatal Pilates</Link>
                                </div>
                            </div>
                        </div>
                        <div onMouseOver={() => setWomenSubnavOpen(true)} onMouseOut={() => setWomenSubnavOpen(false)} className={HeaderStyles.subNavWrapper}>
                            <Link className={HeaderStyles.navItem} to="#">Women's Health<FontAwesomeIcon className={HeaderStyles.subNavIcon} icon={faAngleDown} /></Link>
                                <div className={womenSubnavOpen ? `${HeaderStyles.pilatesSubnav} ${HeaderStyles.subNav}` : `${HeaderStyles.subnavClosed} ${HeaderStyles.subNav}`}>
                                    <Link className={HeaderStyles.subNavItem} to="/for-women/postnatal-check/">The New Mum Postnatal Check</Link>
                                    <Link className={HeaderStyles.subNavItem} to="/osteopathy/osteopathy-and-pregnancy/">Osteopathy & Pregnancy</Link>
                                </div>
                        </div>
                        <div onMouseOver={() => setBabiesSubnavOpen(true)} onMouseOut={() => setBabiesSubnavOpen(false)} className={HeaderStyles.subNavWrapper}>
                            <Link className={HeaderStyles.navItem} to="#">Babies<FontAwesomeIcon className={HeaderStyles.subNavIcon} icon={faAngleDown} /></Link>
                                <div className={babiesSubnavOpen ? `${HeaderStyles.pilatesSubnav} ${HeaderStyles.subNav}` : `${HeaderStyles.subnavClosed} ${HeaderStyles.subNav}`}>
                                    <Link className={HeaderStyles.subNavItem} to="/for-babies/newborn-check/">The Newborn Check</Link>
                                    <Link className={HeaderStyles.subNavItem} to="/osteopathy/osteopathy-and-babies/">Osteopathy & Babies</Link>
                                </div>
                        </div>
                        <Link className={HeaderStyles.navItem} to="/about/">About</Link>
                        <Link className={HeaderStyles.navItem} to="/blog/">Blog</Link>
                        <Link className={`${HeaderStyles.navItem} ${HeaderStyles.navButton}`} to="/appointments/">Book Now</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}