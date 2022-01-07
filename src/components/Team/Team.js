import React from "react"
import TeamStyles from "./Team.module.css"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

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
                        para1="Emily is the practice principal and owner of Kibworth Osteopaths and Pilates, and enjoys the variety of patients that she sees in general practice."
                        para2="Emily qualified as an Osteopath in 2009 from the University College of Osteopathy (formerly the British School of Osteopathy) and worked in Leicester and Desborough in well established, busy practices."
                    >
                        <p>In 2017 Emily opened Kibworth Osteopaths, growing it into Kibworth Osteopaths and Pilates in 2019 upon qualifying as a Pilates instructor. Since qualifying as an Osteopath Emily has gained skills through post graduate training in kinesiology taping, Cranial Osteopathy, and Mental Health First Aid to highlight a few.</p>
                        <p>Emily enjoys seeing patients through the whole recovery process, building relationships with her patients, and seeing the benefits of Osteopathy in action. Emily says <em>“Recovery from any injury is a journey. Walking the road of recovery with every single patient I treat is a privilege, and I aim to provide my patients with the best care, treatments and advice possible”</em>.</p>
                        <p>Emily is a member of the Institute of Osteopathy (IO) and is registered with the General Osteopathic Council.</p>
                    </Profile>
                    </>
                )}
            />
        </div>
    )
}

