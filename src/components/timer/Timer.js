import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import componentStyles from "./Timer.module.scss";

function Timer({...props}) {
    const timerLength = useSelector(state => state.list.timerLength);
    const [timeRemaining, countDown] = useState(timerLength/1000);

    useEffect(() => {
        const timer = setInterval(() => { 
            if(timeRemaining > 0) countDown(timeRemaining-1)
            else {
                clearInterval(timer)
                countDown(0)
            }
        }, 1000)
    
        // componentDidUnmount
        return function clearTimer() {
            clearInterval(timer)
        };
      });

    return(
        <>
            <h3 style={{color: `white`}}>
                {timeRemaining}
            </h3>

            <div style={{width: `100%`, height: `.5rem`, backgroundColor: `white`}}>
                <div style={{
                    height: `.5rem`,
                    width: `${timeRemaining*1000/timerLength*100}%`,
                    margin: `0 auto`, 
                    backgroundColor: `pink`}}></div>
            </div>
        </>
    )
}

export default Timer