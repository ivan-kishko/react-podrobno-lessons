import React, {useState} from 'react';

export default {
    title: 'UseStateDemo',

}

function generateBigData() {
    //lets pretend here is going difficult counting which takes time
    console.log('bigData')
    return 20
}

export const UseStateDemo = () => {
    console.log('counter')
    //if useState initial state uses a value (especially that comes from a func that generates it)
    //it will count it every time component rerenders, to avoid that we can put to useState initValue
    //a function that returns initial state (we could use useMemo or something before putting a value into
    //init state but his way we write more code and useState can optimize it by itself), so useState by itself memorizing
    //value and it does not try to count it every time component rerenders
    const [count, setCount] = useState(generateBigData)

    //set func that useState returns can use a function that changes state instead of logic with current state inside params of setState
    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCount(changer)}>+</button>
        {count}
    </>
}