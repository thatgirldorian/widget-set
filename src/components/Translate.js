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
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
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
            <Convert />
        </div>
    )
}

export default Translate