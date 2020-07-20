import React, {useState, useEffect} from 'react'

function HooksCounterOne() {
// Lesson 7 - part 2
    // Hooks - use Effect
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    
    useEffect(() => {
        // Lesson 8
        // add another parameter to be watched in order not to render these statements each time 
        console.log('useEffect - updating document title')
        document.title = `you clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} /> 
            <button onClick={()=> setCount(count + 1)}> click {count} </button>
        </div>
    )
}

export default HooksCounterOne
