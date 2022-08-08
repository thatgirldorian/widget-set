import React from "react";
import Accordion from './Accordion'
import SearchWidget from './SearchWidget'


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



const App = () => {
    return (
        <div>
            <br />
            {/* <Accordion items={items} /> */}
            <SearchWidget />
        </div>
    )
}

export default App;