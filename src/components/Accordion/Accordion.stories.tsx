import React, {useState} from 'react';
import {action} from "@storybook/addon-actions"
import {UnControlledAccordion} from "../UnControlledAccordion/UnControlledAccordion";
import {UncontrolledOnOff} from "../UncontrolledOnOff/UncontrolledOnOff";

export default {
    title: "Accordion",
    component: UnControlledAccordion
}

const modeCallback = () => {
    action('accordion mode change event fired')
}

export const ModeChanging = () => {
    return <UnControlledAccordion titleValue={'Menu'}/>
}
