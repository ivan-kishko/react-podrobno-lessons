import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {SelfControlledAccordion} from "./components/SelfControlledAccordion/SelfControlledAccordion";
import {SelfControlledRating} from "./components/SelfControlledRating/SelfControlledRating";
import SelfControlledOnOff from "./components/SelfControlledOnOff/SelfControlledOnOff";

//function declaration is below, function expression is an arrow function
function App() {
    //component - func that return JSX, babel makes it looks like js,html,css after compiling
    //component can return only one parent element
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false); // hook 'useState' with initial value

    return (
        <div className="App">
            <OnOff/>
            <OnOff/>
            {/*<SelfControlledAccordion titleValue={'Menu'}/>*/}
            {/*<SelfControlledAccordion titleValue={'Users'}/>*/}
            <SelfControlledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Accordion titleValue={'Menu'} onClick={setCollapsed} collapsed={collapsed}/>*/}
            <SelfControlledOnOff onChange={setOn} on={on}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')

    return (
        <div>{props.title}</div>
    )
}

export default App;
//node_modules/@storybook/builder-webpack4/package.json changed to "^8.1.0" instead of "^8.2.2"
