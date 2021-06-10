import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function SecretRating(props: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} rating={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} rating={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} rating={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} rating={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} rating={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    rating: RatingValueType
}

function Star(props: StarPropsType) {
    return <span onClick={ () => {props.onClick(props.rating)} }>{ props.selected ? <b>star </b> : 'star ' }</span>
    console.log('Star rendering')
}

export const Rating = React.memo(SecretRating)