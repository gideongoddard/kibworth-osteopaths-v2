import * as React from "react"
import ModalStyles from "./Modal.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

function Modal({ show, onClose, children }) {
    if (!show) {
      return null;
    }
  
    return (
      <div className={ModalStyles.modalBackdrop}>
        <div className={ModalStyles.modalPanel}>
          <button className={ModalStyles.closeButton} onClick={onClose}><FontAwesomeIcon className={ModalStyles.icon} icon={faTimes} size="2x" /></button>
          <div className={ModalStyles.modalContent}>
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;