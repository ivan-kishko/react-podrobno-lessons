import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {SelfControlledOnOff} from "./SelfControlledOnOff";

export default {
    title: 'SelfControlledOnOff',
    component: SelfControlledOnOff
}

const callback = action('on or off clicked')

export const SelfControlledOnOffGreen = () => <SelfControlledOnOff on={true} onChange={callback}/>
export const SelfControlledOnOffRed = () => <SelfControlledOnOff on={false} onChange={callback}/>
export const SelfControlledOnOffDynamic = () => {
    const [on, setOn] = useState<boolean>(true);
    return <SelfControlledOnOff on={on} onChange={setOn}/>
}
