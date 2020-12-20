import React from "react"
import TxtImgStyles from "./TxtImg.module.css"
import Img from "gatsby-image"
import PropTypes from "prop-types"

function TxtImg(props) {
    return (
        <section className={TxtImgStyles.section} style={{backgroundColor: props.backgroundColor, color: props.color}}>
            {
                props.heading ? (<h2 className={TxtImgStyles.sectionHeading}>{props.heading}</h2>) : (<></>)
            }
            <div className={TxtImgStyles.container} style={{flexDirection: props.reverse ? "row-reverse" : "row"}}>
                <div className={TxtImgStyles.txtContainer}>
                    {props.children}
                </div>
                <div className={`${TxtImgStyles.imgContainer} ${props.imgRotate ? TxtImgStyles.rotate : ""}`}>
                    <Img fluid={props.imgSrc} alt={props.imgAlt} />
                </div>
            </div>
        </section>
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
    children: PropTypes.element.isRequired
}

export default TxtImg