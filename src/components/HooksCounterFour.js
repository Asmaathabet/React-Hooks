import React, {useState} from 'react'

function HooksCounterFour() {
    const [items, setItems] = useState([])
    return (
        <div>
            <button onClick={addItem} >Add a number </button>
            <ul>
                {
                    items.map(item =>
                    <li key={item.id}>{item.value}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default HooksCounterFour
