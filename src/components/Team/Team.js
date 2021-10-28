import React from "react"
import TeamStyles from "./Team.module.css"
import Img from "gatsby-image"
import { StaticQuery } from "gatsby"

const Profile = props => (
    <div className={TeamStyles.profile}>
        <div className={TeamStyles.flexContainer}>
            <Img fluid={props.img} alt={props.imgAlt} className={TeamStyles.img} />
            <div className={TeamStyles.txtContainer}>
                <h3>{props.name}</h3>
                <p>{props.para1}</p>
                <p>{props.para2}</p>
            </div>
        </div>
        <div className={TeamStyles.txt}>
            {props.children}
        </div>
    </div>
)

export default function Team() {
    return (
        <section className={TeamStyles.section}>
            <div className={TeamStyles.container}>
                <h2>Meet the team</h2>
                <StaticQuery
                    query={graphql`
                        query {
                            emily: file(relativePath: {eq: "images/emily-skeleton-color.jpeg"}) {
                                childImageSharp {
                                    fluid(maxWidth: 500, quality: 72) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    `}
                    render={data => (
                        <>
                        <Profile
                            img={data.emily.childImageSharp.fluid}
                            alt="Emily"
                            name="Emily"
                            para1="Emily had over a decade of experience as an Osteopath before opening Kibworth Osteopaths & Pilates. She enjoys working out what somebody has done injury-wise, and is passionate about rehabilitation as well as injury prevention."
                            para2="This is why in 2019, Emily trained with HFE to become a Pilates instructor, and qualified in 2020 as a Pre/Post natal Pilates instructor."
                        >
                            <p>Emily can honestly say she loves her job. No two days are ever the same - one day her youngest patient was 9 days old, and the oldest was 99 years old! Emily finds it a privilege when people say 'help', as she understands that this can take courage, and requires trust in her.</p>
                            <p>Emily is married to her best friend who is superman to her. In 2011 they began their greatest adventure when she had their son, closely followed by their daughter in 2012. Being a parent opened her eyes to a new world, which is when she trained in Cranial Osteopathy, as well as learning a huge amount about treating pregnant patients.</p>
                            <p>In her spare time, Emily is either outside with her family and dogs, walking or camping, or she is curled up with a book and her cat!</p>
                        </Profile>
                        </>
                    )}
                />
            </div>
        </section>
    )
}

