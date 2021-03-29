import React, {useState, useEffect} from 'react'

const HooksContainer1 = props => {
    const [stateValue, setValue] = useState(0);
    const [useEffectValue, setUseEffectValue] = useState(null);

    useEffect(()=>{
        setTimeout(()=>setUseEffectValue("useEffect worked"), 3000);
    }, [stateValue])

    const increment = ()=>{
        setValue(stateValue+1);
    }
    const decrement = ()=>{
        setValue(stateValue-1);
    }

    const changeEffect = ()=>{
        setUseEffectValue("useEffect by user");
    }

    return (
    <div>
    Hooks

    <button onClick={increment}>{stateValue}+1</button>
    <button onClick={decrement}>{stateValue}-1</button>
    <button onClick={changeEffect}>change useEffect value</button>
    <div>
        <p>
            {
                useEffectValue
                ? <p>{useEffectValue}</p>
                : <p>No Value</p>
            }
        </p>
    </div>
    {console.log(props)}
    </div>
)};

export default HooksContainer1;
