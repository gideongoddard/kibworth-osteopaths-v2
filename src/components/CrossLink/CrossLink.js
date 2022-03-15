import * as React from "react"
import * as CrossLinkStyles from "./CrossLink.module.css"
import { Link } from "gatsby"

export function Linkage({ to, children }) {
    return (
        <Link to={to}>{children}&nbsp;<span className={CrossLinkStyles.arrow}>&#8594;</span></Link>
    )
}

function CrossLink(props) {
    return (
        <section className={CrossLinkStyles.crossLink}>
            <div>
                <h2>You may also be interested in...</h2>
                <p>You can find out more about related topics on the following pages:</p>
                <div className={CrossLinkStyles.links}>
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default CrossLink