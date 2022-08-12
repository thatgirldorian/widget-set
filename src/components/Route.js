import { useEffect, useState } from 'react'

const Route = ({ path, children }) => {
    //add a new piece of state to update our routes
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
         //set up a route handler to listen to an event we just dispatched
        window.addEventListener('popstate', onLocationChange)

        //clean up the event listener
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }

    }, [])

    return currentPath === path ? children : null
}



export default Route