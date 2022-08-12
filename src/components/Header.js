import React from "react"
import Link from "./Link"

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="link item">
                Accordion
            </Link>
            <Link href="/list" className="link item">
                List
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/translate" className="item">
                Translate
            </Link>
        </div>
    )
}

export default Header