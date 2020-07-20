import React, { useState , useEffect} from 'react'
 
function HooksMouse() {
     // Lesson 9 - part 2
    // Run effect only once

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        // passing parameter empty array [] , means useEffect only called in initial render 
        // thats mean the same of [componentDidMount]
     console.log('useEffect Called')
     window.addEventListener('mousemove', logMousePosition)
    },[])

    return (
        <div>
            Hooks X - {x} Y- {y}
        </div>
    )
}

export default HooksMouse;