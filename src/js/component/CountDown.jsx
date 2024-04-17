import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faBriefcaseClock } from "@fortawesome/free-solid-svg-icons";

export const CountDown = ({ duration }) => {
    const [time, setTime] = useState (duration);

    useEffect(()=>{
        setTimeout(()=>{
            setTime (time - 1000);
        }, 1000);
    }, [time]);

    const formattedTime = (milliseconds) => {
        let totalSeconds = parseInt (Math.floor(milliseconds / 1000));
        let totalMinutes = parseInt (Math.floor(totalSeconds / 60));
        let totalHours = parseInt (Math.floor(totalMinutes / 60));
        let days = parseInt (Math.floor(totalHours / 24));

        let seconds = parseInt(totalSeconds % 60);
        let minutes = parseInt (totalMinutes % 60);
        let hours = parseInt (totalHours % 24);

        return `${days}:${hours}:${minutes}:${seconds}`
    }


    return(
        <div className="col-6 card display-1 rounded m-auto " >{formattedTime(time)}</div>
    )
}