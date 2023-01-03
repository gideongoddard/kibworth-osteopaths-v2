import React from "react"
import ScheduleStyles from "./Schedule.module.css"

export default function Schedule(props) {
    return (
        <div className={ScheduleStyles.schedule}>
            {
                props.displayHeading === true ? (<h3>{props.type}</h3>) : (<></>)
            }
            <p>{props.type === "Pilates" ? "Classes" : "Appointments"} are currently held at the following times:</p>
            {
                props.type === "Pilates" ? (
                    <>
                        <div className={ScheduleStyles.dayTime}>
                            <p className={ScheduleStyles.day}>Tuesday:</p><p className={ScheduleStyles.time}>08:00 - 09:00 @ Tur Langton Village Hall</p>
                        </div>
                        <p>One-to-one sessions are also available. Please get in touch by phone or email to make arrangements.</p>
                    </>
                ) : (
                    <div className={ScheduleStyles.dayTime}>
                        <p className={ScheduleStyles.day}>Monday:</p><p className={ScheduleStyles.time}>08:00 - 18:00</p>
                        <p className={ScheduleStyles.day}>Tuesday:</p><p className={ScheduleStyles.time}>09:00 - 20:00</p>
                        <p className={ScheduleStyles.day}>Wednesday:</p><p className={ScheduleStyles.time}>09:30 - 14:30</p>
                        <p className={ScheduleStyles.day}>Friday:</p><p className={ScheduleStyles.time}>08:00 - 14:30</p>
                    </div>
                )
            }
        </div>
    )
}