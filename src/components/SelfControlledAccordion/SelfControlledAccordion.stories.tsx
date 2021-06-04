import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {SelfControlledAccordion} from "./SelfControlledAccordion";

export default {
    title: 'SelfControlledAccordion stories',
    component: SelfControlledAccordion
}

const callback = action('accordion mode changed')

export const SelfControlledAccordionMenu = () => <SelfControlledAccordion titleValue={'Menu'}/>
export const SelfControlledAccordionUsers = () => <SelfControlledAccordion titleValue={'Users'}/>

