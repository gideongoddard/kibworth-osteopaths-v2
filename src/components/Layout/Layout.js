import React from "react"
import Modal from "../Modal/Modal"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "./GlobalStyles.css"

class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            displayModal: false,
        }

        this.closeModal = this.closeModal.bind(this)
    }

    closeModal() {
        this.setState({
            displayModal: false,
        })
    }

    render() {
        return (
            <>
                <Modal heading="Coronavirus" closeModal={this.closeModal} displayModal={this.state.displayModal}>
                    <p>Hello and I hope you're well.</p>
                    <p>I wanted to offer you reassurance that the clinic is a safe place to come for treatment. Strict adherence to guidelines regarding PPE is adhered to by all members of staff as well as thorough cleaning of the surgery daily. We ask that patients wear a face covering unless in the case of medical exemption.</p>
                    <p>Please contact me for any further information.</p>
                    <p>Emily <span role="img" aria-label="Open Hands Sign Emoji, representing openness.">🤲</span></p>
                </Modal>
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </>
        )
    }
}

export default Layout