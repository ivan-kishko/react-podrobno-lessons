import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action('on or off clicked')

export const OnOffDefaultTrue = () => <OnOff defaultOn={true}/>
export const OnOffDefaultFalse = () => <OnOff defaultOn={false}/>

