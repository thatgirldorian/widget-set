import React, {useState} from "react"
import Dropdown from './Dropdown'
import Convert from "./Convert"

//create language options for the translate component
const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    }, 
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Hausa',
        value: 'ha'
    },
    {
        label: 'Igbo',
        value: 'ig'
    },
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Yoruba',
        value: 'yo'
    }

]

const Translate = () => {
    //define state for language
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')

    //use the Translate & Convert components in our Translate UI
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(event) => setText(event.target.value)} />
                </div>
            </div>

            
            <Dropdown 
                label="Select a language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="ui header">Translation</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate