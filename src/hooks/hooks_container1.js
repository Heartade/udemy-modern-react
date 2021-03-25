import React, {useState} from 'react'

const HooksContainer1 = props => {
    const [stateValue, setValue] = useState(0);

    const increment = ()=>{
        setValue(stateValue+1);
    }
    const decrement = ()=>{
        setValue(stateValue-1);
    }

    return (
    <div>
    Hooks

    <button onClick={increment}>{stateValue}+1</button>
    <button onClick={decrement}>{stateValue}-1</button>
    {console.log(props)}
    </div>
)};

export default HooksContainer1;
