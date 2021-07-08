import React, {useEffect, useState} from 'react';

type PropsType = {}

const getTwoDigitsString = (n: number) => {
    return n < 10 ? `0${n}` : n
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
        return () => {
            clearInterval(id)
        }
    }, [])

    return (
        <div>
            <span>{getTwoDigitsString(clockState.getHours())}:</span>
            <span>{getTwoDigitsString(clockState.getMinutes())}:</span>
            <span>{getTwoDigitsString(clockState.getSeconds())}</span>
        </div>
    )
}