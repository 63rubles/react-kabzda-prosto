import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

type PageTitlePropsType = {
    title: string
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [active, setActive] = useState(false)

    return (
        <div className="App">
            <OnOff on={active} onChange={()=>{setActive(!active)}}/>
            ---
            {/*<UncontrolledOnOff/>*/}
            {/*<UnControlledAccordion titleValue={'Меню'}/>*/}
            {/*<UnControlledAccordion titleValue={'Users'}/>*/}
            ---
            {/*<UnControlledRating/>*/}

            <Accordion titleValue={'Меню'}
                       collapsed={accordionCollapsed}
                       onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            {/*---*/}
            {/*---*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Rating value={3}/>*/}
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div>{props.title}</div>
    )
}

export default App;
