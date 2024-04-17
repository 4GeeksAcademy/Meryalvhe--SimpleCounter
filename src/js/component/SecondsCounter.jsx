import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faBriefcaseClock } from "@fortawesome/free-solid-svg-icons";

export const SecondsCounter = () =>{
    
    const [seconds, setSeconds] = useState(0);
    const [secondsOne, setSecondsOne] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [minutesOne, setMinutesOne] = useState(0);
    const [hours, setHours] = useState(0);
    const [hoursOne, setHoursOne] = useState(0);
        
    let timer;
    useEffect(() => {
        
    
        timer = setInterval(() => {
            setSeconds(seconds + 1);
                if (seconds === 9){
                    setSecondsOne(secondsOne + 1);
                    setSeconds(0);
                } if (secondsOne === 5 && seconds === 9) {
                    setMinutes(minutes + 1);
                    setSecondsOne(0);
                } if (minutes === 9){
                    setMinutesOne(minutesOne + 1);
                    setMinutes(0);
                } if (minutesOne === 5 && minutes === 9) {
                    setHours(hours + 1);
                    setMinutesOne(0);
                } if (hours === 9){
                    setHoursOne(hoursOne + 1);
                    setHours(0);
                }
        }, 1000
    )

    return ()=> clearInterval(timer);
    
    
    }
);

   return (
   <div className="card-group mt-4">
    <div  className="card display-1 rounded">
    <FontAwesomeIcon icon={faClock} />
    </div>
    <div className="card display-1 rounded">{hoursOne}</div>
    <div className="card display-1 rounded">{hours}</div>
    <div className="display-1 rounded"> : </div>
    <div className="card display-1 rounded"> {minutesOne} </div>
    <div className="card display-1 rounded"> {minutes} </div>
    <div className="display-1 rounded"> : </div>
    <div className="card display-1 rounded">{secondsOne}</div>
    <div className="card display-1 rounded">{seconds}</div>

   </div>)

}