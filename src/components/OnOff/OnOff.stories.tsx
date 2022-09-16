import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "On Off Controlled",
    component: OnOff
}

const modeCallback = () => {
    action('on or off clicked')
}

export const OnMode = () => <OnOff on={true} onChange={modeCallback}/>
export const OffMode = () => <OnOff on={false} onChange={modeCallback}/>

export const ModeChanging = () => {
    const [value,setValue]=useState<boolean>(true)
    return <OnOff on={value} onChange={setValue} />
}
