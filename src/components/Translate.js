import React, {useState} from "react"
import Dropdown from './Dropdown'
import Convert from "./Convert"
import './style.css'


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
            <div className="ui form text-block">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(event) => setText(event.target.value)} />
                </div>
            </div>

            
            <Dropdown 
                label="Select a language to translate"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <div className="output-block">
                <h3 className="ui header">Translation</h3>
                <div className="ui card fluid text-box">
                    <Convert text={text} language={language} />
                </div>
            </div>
        </div>
    )
}

export default Translate