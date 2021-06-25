import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo useCallback'
}

//useMemo + Reactmemo
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

//useCallback
const BooksSecret = (props: { addBook: () => void }) => {
    console.log('booksSecret')
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
        </div>
    )
}

const Books = React.memo(BooksSecret) // makes component not to rerender if it did not change

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'TS'])

    const addBook = () => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }

    //useMemo hook on a callback
    const memorizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    //useCallback hook on a callback
    const memorizedAddBook2 = useCallback(() => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Books addBook={memorizedAddBook2}/>
        {/*lexical env - read about it
        if u have a callback inside props of a child component that uses react memo it still will rerender because
        every time when parent component renders for child component callback is always a new object - that is why
        react memo does not work
        while useMemo have to return a function that u want to memorize, useCallback just have to have callback itself
        inside its body*/}
    </>
}