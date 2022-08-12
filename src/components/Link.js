/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Link = ({ className, href, children}) => {
    //add a helper function to prevent a full-page reload
    const onClick = (event) => {
        event.preventDefault()
        //change the URL to match the content on screen
        window.history.pushState({}, '', href)
        

        //use a navigation event to communicate to the routes
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
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