import React, { useState } from "react";
import Accordion from './Accordion'
import SearchWidget from './SearchWidget'
import Dropdown from './Dropdown'
import Translate from './Translate'



//create a couple of items to add to the accordion 
const items = [
    {
            title: 'Is there a free trial available?', 
            content: 'Sure! You can trial our copywriting tool for 14 days and if you like it, you can pay for a plan.'
    },
    {
        title: 'Can I change my plan later?', 
        content: 'Yep. To change your plan, go to your Account Settings, and then, to Billing. From here, you can choose a new plan.'
    },
    {
        title: 'Can other information be added to my invoice?', 
        content: 'Of course. From our Billing page, you can click on other bits of information like location and email address, which you can then add to your invoice.'
    },
    {
        title: 'How does billing work?', 
        content: 'We bill you based on the number of pages you use with our tool. You will be billed at the end of every month.'
    }
]

//create options for the dropdown menu
const options = [
    {
        label: "Finsta",
        value: "#F65A83"
    }, 
    {
        label: "Kray",
        value: "#59CE8F"
    },
    {
        label: "Roydy",
        value: "#3120E0"
    }, 
    {
        label: "Exco",
        value: "#A10035"
    }
]


//map out all the different routes for navigation
const showAccordion = () => {
    if (window.location.pathname === '/') {
        return  <Accordion items={items} />
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return <SearchWidget />
    }
}

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown
            // label={label}
            // options={options}
            // selected={selected}
            // onSelectedChange={onSelectedChange}
        />
    }
}

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />
    }
}


export default () => {
    //initialize state for option selection
    const [selected, setSelected] = useState(options[0])
    

    return (
        <div>
            {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()}
        </div>
    )
}

