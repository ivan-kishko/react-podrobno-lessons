import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type SelfControlledRatingPropsType = {
    defaultRating?: RatingValueType
}

function SecretSelfControlledRating(props: SelfControlledRatingPropsType) {
    console.log('SelfControlledRating rendering');
    let [starRating, setStarRating] = useState(props.defaultRating ? props.defaultRating : 0);

    return (
        <div>
            <Star selected={starRating > 0} setStarRating={setStarRating} rating={1}/>
            <Star selected={starRating > 1} setStarRating={setStarRating} rating={2}/>
            <Star selected={starRating > 2} setStarRating={setStarRating} rating={3}/>
            <Star selected={starRating > 3} setStarRating={setStarRating} rating={4}/>
            <Star selected={starRating > 4} setStarRating={setStarRating} rating={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setStarRating: (value: 1 | 2 | 3 | 4 | 5) => void
    rating: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.setStarRating(props.rating)}>
        { props.selected ? <b>star </b> : 'star ' }
    </span>
    console.log('Star rendering')
}

export const SelfControlledRating = React.memo(SecretSelfControlledRating)