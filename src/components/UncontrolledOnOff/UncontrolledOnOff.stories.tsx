import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: "On Off UnControlled",
    component: UncontrolledOnOff
}

const modeCallback = () => {
    action('on or off clicked')
}

export const OnMode = () => <UncontrolledOnOff onChange={modeCallback} defaultOn={true}/>
export const OffMode = () => <UncontrolledOnOff onChange={modeCallback} defaultOn={false}/>

