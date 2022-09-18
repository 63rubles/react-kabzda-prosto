import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {

    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

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

    const onClicked = () => {
        {
            props.onChange(on)
            setOn(true)}
    }
    const offClicked = () => {
        {
            props.onChange(on)
            setOn(false)}
    }

    return (
        <div>
            <div style={onStyle} onClick={ onClicked }>On</div>
            <div style={offStyle} onClick={ offClicked }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};