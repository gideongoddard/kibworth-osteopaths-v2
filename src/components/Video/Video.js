import React from 'react'
import * as VideoStyles from './Video.module.css'

export default function Video(props) {
    return (
        <section className={VideoStyles.section}>
            <div className={VideoStyles.customShapeDividerTop}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={VideoStyles.shapeFill}></path>
                </svg>
            </div>
            <div className={VideoStyles.narrowContainer}>
                <h2>{props.heading}</h2>
                <p>{props.intro} <a href='https://www.youtube.com/channel/UCYV5d_sNakdmQOLiRH_RdCw' target='_blank' rel="noreferrer noopener">See more here.</a></p>
                <div class="videoWrapper">
                    <iframe width="560" height="315" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className={VideoStyles.customShapeDividerBottom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={VideoStyles.shapeFill}></path>
                </svg>
            </div>
        </section>
    )
}