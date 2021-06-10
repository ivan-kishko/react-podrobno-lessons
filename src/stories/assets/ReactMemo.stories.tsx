import React, {useState} from 'react';

export default {
    title: 'ReactMemoDemo',

}

const NewMessagesCounter = (props: { count: number }) => {
    return (
        <div>{props.count}</div>
    )
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('users')
    return (
        <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
    )
}

const Users = React.memo(UsersSecret) // makes component not to rerender if it did not change

export const Example1 = () => {
    console.log('example')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['amy', 'yolo', 'lala'])

    const addUser = () => {
        const newUsers = [...users, 'sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>
}