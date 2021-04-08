import React, {useState, useReducer, useContext} from 'react';

const HooksForm = ()=>{
    const [valueChange, setValueChange] = useState('')
    const [valueSubmit, setValueSubmit] = useState('')

    const handleUseStateChange = (ev)=>{
        setValueChange(ev.target.value);
    }
    const handleUseStateSubmit = (ev)=>{
        ev.preventDefault();
        setValueChange(ev.target.value);
    }

    return (
        <div>
            <form>
                <label> React useState: </label>
                <input id='useState' type='text' onChange={handleUseStateChange}></input>
                <button type='submit'> Submit </button>
            </form>
            <div>
                <h2>  React useState: </h2>
                <p> Change: {valueChange} </p>
                <p> Submit: {valueSubmit} </p>
            </div>
        </div>
    )
}