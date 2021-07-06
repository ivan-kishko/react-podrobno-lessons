import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffectDemo',

}

export const UseEffectDemo = () => {
    console.log('useEffectDemo')
    const [count, setCount] = useState(0)
    const [fake, setFake] = useState(0)

    //useEffect not entirely but it is kind of a replacement for lifecycle methods in class components
    //in functional components this hook is used for api requests for example
    //list of most common side effects in functional components
    //-----------------------------
    //api.getUsers().then('')
    //setInterval
    //indexedDB
    //document.getElementById
    //document.title = "User"
    //------------------------------------------------------
    //useEffect on startup starts working after component returned JSX, basically in the end
    //if no dependencies provided(literally nothing), useEffect works on every rerender,
    //if empty array - once -> on load
    //if something is in deps - works every time dependency is changed
    useEffect(() => {
        console.log('useEffect hook every render')
        document.title = count.toString();
    })
    useEffect(() => {
        console.log('useEffect hook on first load as componentDidMount()')
        document.title = count.toString();
    }, [])
    useEffect(() => {
        console.log('useEffect hook only on dependency(count) change')
        document.title = count.toString();
    }, [count])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button onClick={() => setFake(fake + 1)}>+</button>
        {fake}
    </>
}

export const SetTimeoutUseEffectExample = () => {
    console.log('SetTimeoutUseEffectExample')
    const [count, setCount] = useState(0)
    const [fake, setFake] = useState(0)
    const [time, setTime] = useState(new Date())

    //look in iFrame link
    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = count.toString()
        }, 1000)
    }, [count])

    // useEffect(() => {
    //     setInterval(() => {
    //         console.log('setInterval tick' + count)
    //         setCount(state => state + 1)
    //     }, 1000)
    // }, [])

    useEffect(() => {
        setInterval(() => {
            console.log('time')
            setTime(state => new Date())

        }, 1000)
    }, [])


    return <>
        <div>
            {time.toLocaleTimeString()}
        </div>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button onClick={() => setFake(fake + 1)}>+</button>
        {fake}
    </>
}