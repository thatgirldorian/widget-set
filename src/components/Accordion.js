import React, { useState } from "react";

const Accordion = ({ items }) => {
    //initialize a new piece of state
    const [currentIndex, setCurrentIndex] = useState(null)

    //add a helper function
    const onTitleClick = (index) => {
        setCurrentIndex(index)
    }

    const renderedItems = items.map((item, index) => {
    const active = index === currentIndex ? 'active' : 'disabled'

        return (
            <React.Fragment key={item.title}>
                <div 
                className={`title ${active}`}
                onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled fluid accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion;