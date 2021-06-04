import {reducer, StateType, TOGGLE_COLLAPSED} from "./SelfControlledAccordionReducer";

test('reducer should change collapsed to true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED});

    //expectation
    expect(newState.collapsed).toBe(true);
})

test('reducer should change collapsed to false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED});

    //expectation
    expect(newState.collapsed).toBe(false);
})

test('reducer should throw an error with wrong action', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action-expectation
    expect(() => reducer(state, {type: "UNKNOWN_ACTION"})).toThrowError();
})