import React from "react"
import TxtImgStyles from "./TxtImg.module.css"
import Img from "gatsby-image"
import PropTypes from "prop-types"

function TxtImg(props) {
    return (
        <div>
            {
                props.heading ? (<h2 className={TxtImgStyles.sectionHeading}>{props.heading}</h2>) : (<></>)
            }
            <div className={TxtImgStyles.container} style={{flexDirection: props.reverse ? "row-reverse" : "row"}}>
                <div className={TxtImgStyles.txtContainer}>
                    {props.children}
                </div>
                <div className={`${TxtImgStyles.imgContainer} ${props.imgRotate ? TxtImgStyles.rotate : ""}`}>
                    <Img className={TxtImgStyles.image} fluid={props.imgSrc} alt={props.imgAlt} />
                </div>
            </div>
        </div>
    )
}

TxtImg.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    heading: PropTypes.string,
    imgSrc: PropTypes.object.isRequired,
    imgAlt: PropTypes.string.isRequired,
    imgRotate: PropTypes.bool,
    reverse: PropTypes.bool,
}

export default TxtImg