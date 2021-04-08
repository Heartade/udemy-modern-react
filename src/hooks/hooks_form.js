import React, {useState, useReducer, useContext} from 'react';

const HooksForm = ()=>{
    const [stateForm, setStateForm] = useState('')

    return (
        <div>
            <form>
                <label> React useState: </label>
                <input id='useState' type='text' onChange={()=>{}}></input>
            </form>
        </div>
    )
}