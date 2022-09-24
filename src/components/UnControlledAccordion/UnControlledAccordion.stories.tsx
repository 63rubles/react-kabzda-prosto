import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "../Accordion/Accordion";

export default {
    title: "Accordion",
    component: Accordion
}

const modeCallback = () => {
    action('accordion mode change event fired')
}

// export const MenuCollapsedMode = () => <Accordion collapsed={true} onChange={modeCallback} titleValue={'Menu'} />
// export const UsersUnCollapsedMode = () => <Accordion collapsed={false} onChange={modeCallback} titleValue={'Users'} />

// export const CollapseChanging = () => {
//     const [collapsed,setCollapsed]=useState<boolean>(true)
    // return <Accordion collapsed={collapsed} onChange={()=>setCollapsed(!collapsed)} titleValue={'Menu'}/>
// }
