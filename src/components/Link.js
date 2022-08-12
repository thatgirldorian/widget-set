/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Link = ({ className, href, children}) => {
    //add a helper function to prevent a full-page reload
    const onClick = (event) => {
        event.preventDefault()
    }


    return (
        <a
            onClick={onClick}
            className={className}
            href={href}
        >{children}</a>
    )
}


export default Link