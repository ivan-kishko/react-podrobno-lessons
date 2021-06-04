import React from 'react'

//reducers should be in different tsx file ComponentNameReducer
export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED";

export const reducer = (state: StateType, action: ActionType): StateType => {
    //how to change state
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error('Bad action type')
    }
    return state
}