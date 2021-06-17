import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for(let i=1; i<=a; i++) {
            let fake = 0
            while(fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for(let i=1; i<=b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                result for a: {resultA}
            </div>
            <div>
                result for b: {resultB}
            </div>
        </>
    )
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('usersSecret')
    return (
        <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
    )
}

const Users = React.memo(UsersSecret) // makes component not to rerender if it did not change

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Gavin', 'Rachel', 'Monica'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Kayla' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {count}
        <Users users={newArray}/>
        {/*since filter returns new array each time even though we did not changed initial users
        React.memo do not protect us from not re-rendering Users component, thus we need to use
        hook useMemo to prevent such behaviour (re-rendering). Hook useMemo gets as params function
        that doing something and dependencies(in other words when to call a function -> if those
        dependencies has been changed*/}
    </>
}