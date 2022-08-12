import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

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

        //add some conditional rendering incase there is no search term specified + some API throttling with a timer
        if (term && !results.length) {
            searchWiki()
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    searchWiki()
                }
            }, 1000)
    
            //clear the timeout and cancel the timer
            return () => {
                clearTimeout(timeoutId)
            }
        }

    }, [term])


    //render the returned results from the search
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        >Read</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    //render the SearchWidget component
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