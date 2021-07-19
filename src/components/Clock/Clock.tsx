import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode: 'digital' | 'analog'
}

export type ClockViewPropsType = {
    date: Date
}

export const Clock: React.FC<PropsType> = (props) => {
    const [clockState, setClockState] = useState(new Date())

    useEffect(() => {

        let id = setInterval(() => {
            console.log('tick')
            setClockState(new Date())
        }, 1000)

        //when we write return inside useEffect it will work like componentWillUnmount
        //so it does make an action in return (anonymous func in return) after component is dismissed
        //and kills useEffect so it cannot persist when component is not present
        return () => {
            clearInterval(id)
        }
    }, [])

    let view

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={clockState}/>
            break;
        case "digital":
            view = <DigitalClockView date={clockState}/>
            break;
        default:
            view = <DigitalClockView date={clockState}/>
    }

    return (
        <div>
            {view}
        </div>
    )
}



