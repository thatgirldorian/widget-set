import React, { useState, useEffect } from 'react';


const Dropdown = ({ options, selected, onSelectedChange }) => {
    //add a piece of state to toggle the dropdown
    const [open, setOpen] = useState(false)

    //add a manual event listener to close the dropdown if anywhere else is clicked
    useEffect(() => {
        document.body.addEventListener(
            'click', 
            () => {
                setOpen(false)
            },
            { capture: true }
            )
    }, [])

    //map over the list we want to display 
    const renderedOptions = options.map((option) => {

        //check if the currently selected option is the one iterated over
        if (option.value === selected.value) {
            return null
        }

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option) }
                >
                {option.label}
            </div>
        )
    })

    return (
        <div className=" ui form">
            <div className="field">
                <label className="label">Select a workspace</label>
                <div onClick={() => setOpen(!open) } className={`ui selection dropdown ${open ? 'visible active' : '' } `}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
        )
}

export default Dropdown