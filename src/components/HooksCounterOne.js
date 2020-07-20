import React, {useState, useEffect} from 'react'

function HooksCounterOne() {
// Lesson 7 - part 2
    // Hooks - use Effect
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })
    
    return (
        <div>
            <button onClick={()=> setCount(count + 1)}> click {count} </button>
        </div>
    )
}

export default HooksCounterOne
