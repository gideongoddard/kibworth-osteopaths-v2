import React from "react"
import Modal from "../Modal/Modal"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "./GlobalStyles.css"

class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            displayModal: true,
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
                    <p>I know a lot of my patients will be concerned about a second national lockdown, however the clinic will remain OPEN as Osteopaths are allowed to continue to work due to our key worker status.</p>
                    <p>I wanted to offer you reassurance that the clinic is a safe place to come for treatment. Strict adherence to guidelines regarding PPE will be continued – all of which we have been doing since re-opening in May.</p>
                    <p>For patients who have appointments booked, these will only be changed at your request.</p>
                    <p>For patients who are facing shielding, I am able to now announce the arrival of the Kibworth Osteopaths Virtual Clinic. This will include:</p>
                    <ul>
                        <li>A consultation with me over zoom or telephone.</li>
                        <li>Any exercises being emailed out to you as well as summary of the consultation.</li>
                        <li>Any follow up appointments being booked.</li>
                        <li>The cost of a KOVC appointment is £25.00.</li>
                    </ul>
                    <p>Please contact me for any further information.</p>
                    <p>Stay safe,</p>
                    <p>Emily 🤲</p>
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