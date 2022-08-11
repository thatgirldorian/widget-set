import React, { useState, useEffect} from 'react';
import axios from 'axios';

//

const Convert = ({ language, text}) => {
    //add a piece of state to update the translated text & throttle requests
    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)

    //set this up for the timer
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 700)

        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    useEffect(() => {
         //create a helper function to update the translated text
    const doTheTranslation = async () => {
        const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, { 
            params: { 
                q: debouncedText, 
                target: language.value, 
                key: 'AIzaSyDCXG1XmmdcpG8iTDVoJa-mzBlQLTTx5bo'
            }
        })

        setTranslated(data.data.translations[0].translatedText)
    }

    //call our translation function to be invoked when text/language is changed
    doTheTranslation()

    }, [debouncedText, language])


    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert