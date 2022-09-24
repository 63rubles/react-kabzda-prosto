import React, {ChangeEvent, MouseEventHandler, useRef, useState} from 'react';
import {Simulate} from "react-dom/test-utils";

export default {
    title: "input"
};

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value,setValue] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        const actualValue =  e.currentTarget.value;
        setValue(actualValue)
    }

    return <> <input onChange={onChangeHandler}/> - {value}</>
};

export const TrackValueOfUncontrolledInputByButton = () => {
    const [value,setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef}/> <button onClick={onClickHandler}>save</button> - actual value: {value}</>
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setParentValue(newValue)
    }

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.checked
        setParentValue(newValue)
    }

    return <input type="checkbox" checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('')

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.currentTarget.value
        setParentValue(newValue)
    }

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value="1">Belarus</option>
        <option value="2">Ukraine</option>
        <option value="3">Russia</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={"German"}/>