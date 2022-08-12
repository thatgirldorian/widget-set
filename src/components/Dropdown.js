import React, { useState, useEffect, useRef } from 'react';


const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    //add a piece of state to toggle the dropdown
    const [open, setOpen] = useState(false)
    //add a reference 
    const ref = useRef()

    //add a manual event listener to close the dropdown if anywhere else is clicked
    useEffect(() => {
            const onBodyClick = (event) => {
                if (ref.current.contains(event.target)) {
                    return
                }
                setOpen(false)
            }
            document.body.addEventListener('click', onBodyClick, { capture: true})

            return () => {
                document.body.removeEventListener('click', onBodyClick, {
                    capture: true,
                })
            }
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
        <div ref={ref} className=" ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                onClick={() => setOpen(!open) } className={`ui fluid selection dropdown ${open ? 'visible active' : '' } `}
                >
                    <i className="dropdown icon"></i>
                    <div className="text" style={{color: selected.value}}>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
        )
}

export default Dropdown