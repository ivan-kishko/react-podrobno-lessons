import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion
}

const callback = action('accordion mode changed')
const onClickCallback = action('item was clicked')

export const AccordionCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>
export const AccordionUncollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={false} onChange={callback} items={[{title: 'ivan', value: 1}, {title: 'jules', value: 2}, {title: 'gwen', value: 3}, {title: 'mario', value: 4}]} onClick={onClickCallback}/>
export const AccordionModeChange = () => {
    const [mode, setMode] = useState(true)
    return <Accordion
        titleValue={'Menu'}
        collapsed={mode}
        onChange={setMode}
        items={[
            {title: 'ivan', value: 1},
            {title: 'jules', value: 2},
            {title: 'gwen', value: 3},
            {title: 'mario', value: 4}
        ]}
        onClick={(id) => { alert(`user with id ${id} is happy`)}}/>
}
