import React, {useState} from 'react'
import HooksMouse from './HooksMouse'

function MouseContainer() {
    // lesson 10 - useEffect with  Clean up 
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={()=> setDisplay(!(display))}>Toggle display </button>
            {display && <HooksMouse />}
        </div>
    )
}

export default MouseContainer
