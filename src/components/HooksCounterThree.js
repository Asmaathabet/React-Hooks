import React, {useState} from 'react'

// use state with Object
function HooksCounterThree() {
    const [ name, setName ] = useState({ firstName: '', lastName: ''}) 
    return (
       <form>
           <input
            type='text' 
            value={ name.firstName } 
            onChange={e => setName({...name , firstName : e.target.value })} />

           <input 
           type='text' 
           value={ name.lastName } 
           onChange={e => setName({ ...name, lastName : e.target.value })} />
           
           <h2>  your First name is - {name.firstName} </h2>
           <h2>  your Last name is - {name.lastName} </h2>
           {/* state doesn't automatically merge and update the object */}
           <h2> Name State- stringify {JSON.stringify(name)}</h2>
           
       </form>
    )
}

export default HooksCounterThree
