import React, { useState } from 'react'
import * as DownloadStyles from './Download.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import Pill from '../Pill/Pill'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'

function DownloadForm({ formData, handleInputChange, handleSubmit, heading }) {
    return (
        <form onSubmit={handleSubmit}>
            <h3 className={DownloadStyles.heading}>Download {heading}</h3>
            <fieldset className={DownloadStyles.formFields}>
                <label className={DownloadStyles.label} htmlFor="firstName">First name</label>
                <input
                    className={DownloadStyles.input}
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                />
                <label className={DownloadStyles.label} htmlFor="lastName">Last name</label>
                <input
                    className={DownloadStyles.input}
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                />
                <label className={DownloadStyles.label} htmlFor="email">Email</label>
                <input
                    className={DownloadStyles.input}
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input className={DownloadStyles.button} type="submit" value="Submit" />
            </fieldset>
        </form>
    )
}

function SuccessMessage({ onClose, heading, link }) {
    return (
        <div>
            <h3 className={DownloadStyles.heading}>Thank you!</h3>
            <p className={DownloadStyles.description}>Your can now download <strong>{heading}</strong> below.</p>
            <Button onClick={onClose} to={link} type="primary" download>Download now</Button>
        </div>
    )
    
}

const categoryMapping = {
    "posture": {
        name: "Posture",
        colour: "blue",
    },
    "infant-feeding": {
        name: "Infant feeding",
        colour: "red",
    }
}

function Download({ category, heading, description, link }) {
    const categoryInfo = categoryMapping[category] || { name: "General", colour: "grey" }

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    function handleInputChange(e) {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prevData) => {
            const updatedData = {
                ...prevData,
                [name]: value
            };
            console.log(updatedData);
            return updatedData;
        })
    };

    function handleSubmit(e) {
        e.preventDefault();

        // HubSpot API details (replace with your HubSpot Portal ID and Form GUID)
        const hubspotPortalId = '27185733';
        const hubspotAccessToken = process.env.HUBSPOT_ACCESS_TOKEN;
        const hubspotFormId = '3e573741-a795-4560-ae74-8f62e3bc0634';
        const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`;

        // Prepare form data for HubSpot
        const bodyData = {
            fields: [
                { name: 'firstname', value: formData.firstName },
                { name: 'lastname', value: formData.lastName },
                { name: 'email', value: formData.email },
                { name: 'download', value: heading}
            ]
        };

        // Submit form data to HubSpot
        fetch(hubspotUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${hubspotAccessToken}`,
            },
            body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        .then(() => {
            setFormSubmitted(true);  // Show success message
        })
        .catch(error => console.error('Error:', error));
    }

    return (
        <div className={DownloadStyles.download}>
            <Pill text={categoryInfo.name} colour={categoryInfo.colour} />
            <h3 className={DownloadStyles.heading}>{heading}</h3>
            <p className={DownloadStyles.description}>{description}</p>
            <span className={DownloadStyles.link} onClick={() => setShowModal(true)}><FontAwesomeIcon className={DownloadStyles.icon} icon={faDownload} />Download Now</span>
        
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                {!formSubmitted ? (
                    <DownloadForm
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSubmit={handleSubmit}
                        heading={heading}
                    />
                ) : (
                    <SuccessMessage heading={heading} link={link} onClose={() => setShowModal(false)} />
                )}
            </Modal>
        </div>
    )
}

export default Download