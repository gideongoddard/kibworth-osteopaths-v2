import React from "react"
import ScheduleStyles from "./Schedule.module.css"

export default function Schedule(props) {
    return (
        <div className={ScheduleStyles.schedule}>
            {
                props.displayHeading === true ? (<h3>{props.type}</h3>) : (<></>)
            }
            <p>{props.type === "Pilates" ? "Classes" : "Appointments"} are held at the following times:</p>
            {
                props.type === "Pilates" ? (
                    <>
                        <div className={ScheduleStyles.dayTime}>
                            <p className={ScheduleStyles.day}>Tuesdays:</p><p className={ScheduleStyles.time}>08:00 - 09:00</p>
                            <p className={ScheduleStyles.day}>Thursdays:</p><p className={ScheduleStyles.time}>18:00 - 19:00 & 19:15 - 20:15</p>
                        </div>
                        <p>Pilates classes will be on Zoom until further notice.</p>
                        <p>Individual tuition is also available. Please get in touch by phone or email to make arrangements.</p>
                    </>
                ) : (
                    <div className={ScheduleStyles.dayTime}>
                        <p className={ScheduleStyles.day}>Mondays:</p><p className={ScheduleStyles.time}>08:00 - 18:00</p>
                        <p className={ScheduleStyles.day}>Tuesdays:</p><p className={ScheduleStyles.time}>09:00 - 20:00</p>
                        <p className={ScheduleStyles.day}>Wednesdays:</p><p className={ScheduleStyles.time}>09:30 - 14:30</p>
                        <p className={ScheduleStyles.day}>Fridays:</p><p className={ScheduleStyles.time}>08:00 - 14:30</p>
                    </div>
                )
            }
        </div>
    )
}