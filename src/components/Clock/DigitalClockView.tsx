import React from "react";
import {ClockViewPropsType} from "./Clock";

const getTwoDigitsString = (n: number) => {
    return n < 10 ? `0${n}` : n
}

export const DigitalClockView = (props: ClockViewPropsType) => {
    return (
        <div>
            <span>{getTwoDigitsString(props.date.getHours())}:</span>
            <span>{getTwoDigitsString(props.date.getMinutes())}:</span>
            <span>{getTwoDigitsString(props.date.getSeconds())}</span>
        </div>
    )
}