import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {SelfControlledRating} from "./SelfControlledRating";


export default {
    title: 'SelfControlledRating stories',
    component: SelfControlledRating
}

export const SelfRating = () => <SelfControlledRating defaultRating={3}/>
