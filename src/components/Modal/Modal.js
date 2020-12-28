import React from "react"
import ModalStyles from "./Modal.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

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
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal