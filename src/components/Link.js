/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Link = ({ className, href, children}) => {

    const onClick = (event) => {
        //handle command clicks
        if (event.metaKey || event.ctrlKey) {
            return
        }

         //prevent a full-page reload
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