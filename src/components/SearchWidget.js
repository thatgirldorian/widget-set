import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchWidget = () => {
    //initialize state
    const [term, setTerm ] = useState('coder')
    const [results, setResults] = useState([])


    //render when the component is run and the term has changed
    useEffect(()=> {
        //use a helper function with async/await
        const searchWiki = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', { 
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })

            //update the results with the data gotten from the search 
            setResults(data.query.search)
        }

        searchWiki()
    }, [term])

    //render the returned results from the search
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                        {result.snippet}
                </div>
            </div>
        )
    })

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
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default SearchWidget