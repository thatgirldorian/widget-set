import React from 'react';


const Dropdown = ({ options, selected, setSelected }) => {
    //map over the list we want to display 
    const renderedOptions = options.map((option) => {
        return (
            <div key={option.value} className="item">
                {option.label}
            </div>
        )
    })

    return (
        <div className=" ui form">
            <div className="field">
                <label className="label">Select a workspace</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">{renderedOptions}</div>
                </div>
            </div>
        </div>
        )
}

export default Dropdown