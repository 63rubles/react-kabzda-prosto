import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export function Rating(props: RatingPropsType) {
        return <div>
            <Star selected={props.value > 0} onClickHandler={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClickHandler={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClickHandler={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClickHandler={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClickHandler={props.onClick} value={5}/>
        </div>
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClickHandler: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {

    return <span onClick={()=>{props.onClickHandler(props.value)}}>
        {props.selected ? <b>star </b> : "star "}
    </span>
    // if (props.selected === true) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>
    // }
}