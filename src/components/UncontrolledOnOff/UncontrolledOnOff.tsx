import React, {useState} from 'react';

type OnOffPropsType = {
    // on: boolean
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {

    const [on, setOn] = useState(false)

    const onStyle = {
        height: "20px",
        width: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        height: "20px",
        width: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        height: "10px",
        width: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        marginLeft: "5px",
        display: "inline-block",
        backgroundColor: on ? "green" : "red"
    }


    return (
        <div>
            <div style={onStyle} onClick={ () => {setOn(true)} }>On</div>
            <div style={offStyle} onClick={ () => {setOn(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};