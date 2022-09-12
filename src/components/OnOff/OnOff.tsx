import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        height: "20px",
        width: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        height: "20px",
        width: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        height: "10px",
        width: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        marginLeft: "5px",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "red"
    }


    return (
        <div>
            <div style={onStyle} onClick={ () => {props.onChange(true)} }>On</div>
            <div style={offStyle} onClick={ () => {props.onChange(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};