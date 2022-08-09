import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchWidget = () => {
    //initialize state
    const [term, setTerm ] = useState('')
    const [results, setResults] = useState([])

    //render when the component is run and the term has changed
    useEffect(()=> {
        //use a helper function with async/await
        const searchWiki = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php', { 
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
        }

        searchWiki()
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