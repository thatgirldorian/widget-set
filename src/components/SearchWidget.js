import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchWidget = () => {
    //initialize state
    const [term, setTerm ] = useState('')

    //render when the component is run and the term has changed
    useEffect(()=> {
        console.log('rendering search results...');
    }, [term])


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter a search term</label>
                    <input 
                        value={term}
                        onChange={ event => setTerm(event.target.value)}
                        className="input" />
                </div>
            </div>
        </div>
    )
}

export default SearchWidget