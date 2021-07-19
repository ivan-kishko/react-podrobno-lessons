import React from "react";
import {ClockViewPropsType} from "./Clock";
import classes from './AnalogClockView.module.css'

export const AnalogClockView = (props: ClockViewPropsType) => {

    const secondsStyle = {
        transform: `rotate(${props.date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${props.date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${props.date.getHours() * 30}deg)`
    };

    return (
        <div className={classes.clock}>
            <div className={classes.analogClock}>
                <div className={`${classes.dial} ${classes.seconds}`} style={secondsStyle}/>
                <div className={`${classes.dial} ${classes.minutes}`} style={minutesStyle}/>
                <div className={`${classes.dial} ${classes.hours}`}style={hoursStyle} />
            </div>
        </div>
    )
}