import React from "react"
import ModalStyles from "./Modal.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

class Modal extends React.Component {
    constructor() {
        super()
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal() {
        this.props.closeModal()
    }

    render() {
        return (
            <div className={ModalStyles.modal} style={{display: this.props.displayModal ? "flex" : "none"}}>
                <div className={ModalStyles.modalBox}>
                    <div className={ModalStyles.modalHeader}>
                        <h1>{this.props.heading}</h1>
                        <FontAwesomeIcon icon={faTimes} onClick={this.closeModal} />
                    </div>
                    <div className={ModalStyles.modalBody}>
                        <div className={ModalStyles.imgContainer}>
                            <StaticQuery
                                query={graphql`
                                    query {
                                        file(relativePath: {eq: "images/osteos-are-open.jpeg"}) {
                                            childImageSharp {
                                                fluid(maxWidth: 750, quality: 72) {
                                                    ...GatsbyImageSharpFluid
                                                }
                                            }
                                        }
                                    }
                                `}
                                render={data => (
                                    <Img className={ModalStyles.img} fluid={data.file.childImageSharp.fluid} alt="Osteos are open graphic" />
                                )}
                            />
                        </div>
                        <div className={ModalStyles.txt}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal