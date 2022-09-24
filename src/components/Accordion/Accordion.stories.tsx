import React, {useState} from 'react';
import {action} from "@storybook/addon-actions"
import {UnControlledAccordion} from "../UnControlledAccordion/UnControlledAccordion";
import {Accordion} from "./Accordion";

export default {
    title: "Accordion",
    component: Accordion
}

const modeCallback = () => action('accordion mode change event fired')
const onClickCallback = () => action('item is clicked')


export const MenuCollapseMode = () => <Accordion titleValue={"Menu"}
                                                 collapsed={true}
                                                 onChange={modeCallback}
                                                 items={[]}
                                                 onClick={onClickCallback}/>
export const UsersCollapseMode = () => <Accordion titleValue={"Users"}
                                                  collapsed={false}
                                                  onChange={modeCallback}
                                                  items={[{title: "Gera", value: 1},
                                                      {title: "Dima", value: 2},
                                                      {title: "Andrey", value: 3}]}
                                                  onClick={onClickCallback}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: "Gera", value: 1},
                          {title: "Dima", value: 2},
                          {title: "Andrey", value: 3}
                      ]}
                      onClick={(value)=>{alert('user with ID' + {value} +'should be happy')}}/>
}
