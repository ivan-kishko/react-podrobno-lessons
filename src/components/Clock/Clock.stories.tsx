import React from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}

export const AnalogClockExample = () => {
    return <Clock mode={'analog'}/>
}

export const DigitalClockExample = () => {
    return <Clock mode={'digital'}/>
}