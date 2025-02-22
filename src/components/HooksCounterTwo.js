import React, {useState} from 'react'

// use state with  previous State 
function HooksCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    
    const incrementFive = () =>{
        // for(let i=0; i <5; i++){
        //     setCount(prevCount => prevCount +1)
        // }
        setCount(prevCount=> prevCount +5);
    }
    return (
        <div>
            Count: {count}
            <button onClick={()=> setCount(initialCount)}> Reset </button>
            <button onClick={()=> setCount(prevCount=> prevCount + 1 )}> Increment </button>
            <button onClick={()=> setCount(prevCount=> prevCount - 1 )}> Decrement </button>
            <button onClick={incrementFive}> incrementFive </button>
        </div>
    )
}

export default HooksCounterTwo
