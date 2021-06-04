import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./SelfControlledAccordionReducer";

type SelfControlledAccordionPropsType = {
    titleValue: string
}

export function SelfControlledAccordion(props: SelfControlledAccordionPropsType) {
    console.log('SelfControlledAccordion rendering')
    // const [collapsed, setCollapsed] = useState(true)

    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                // setCollapsed(!collapsed)
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => {
        props.onClick()
    }}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}