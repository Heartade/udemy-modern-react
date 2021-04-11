import React, {useState, useReducer, useContext} from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hooks/user_input_hooks_reducer';
import Context from '../utils/context';

export const HooksForm = ()=>{
    const context = useContext(Context);

    const [valueChange, setValueChange] = useState('')
    const [valueSubmit, setValueSubmit] = useState('')

    const [userState, userDispatch] = useReducer(UserReducer.UserReducer, UserReducer.initialState);

    const handleUseStateChange = (ev)=>{
        setValueChange(ev.target.value);
    }
    const handleUseStateSubmit = (ev)=>{
        ev.preventDefault();
        setValueSubmit(ev.target.useState.value);
    }

    const handleUseReducerChange = (event)=>{
        userDispatch(ACTIONS.user_input_change(event.target.value));
    }
    const handleUseReducerSubmit = (event)=>{
        event.preventDefault();
        userDispatch(ACTIONS.user_input_submit(event.target.useReducer.value));
    }

    return (
        <div>
            <form onSubmit={handleUseStateSubmit}>
                <label> React useState: </label>
                <input id='useState' type='text' onChange={handleUseStateChange}></input>
                <button type='submit'> Submit </button>
            </form>
            <form onSubmit={handleUseReducerSubmit}>
                <label> React useReducer: </label>
                <input id='useReducer' type='text' onChange={handleUseReducerChange}></input>
                <button type='submit'> Submit </button>
            </form>
            <form onSubmit={context.handleContextSubmit}>
                <label> React useContext: </label>
                <input id='useReducer' type='text' onChange={context.handleContextChange}></input>
                <button type='submit'> Submit </button>
            </form>
            <div>
                <h2>  React useState: </h2>
                <p> Change: {valueChange} </p>
                <p> Submit: {valueSubmit} </p>
            </div>
            <div>
                <h2>  React useReducer: </h2>
                <p> Change: {userState.user_text_change} </p>
                <p> Submit: {userState.user_text_submit} </p>
            </div>
            <div>
                <h2>  React useReducer: </h2>
                <p> Change: {context.useContextChange} </p>
                <p> Submit: {context.useContextSubmit} </p>
            </div>
        </div>
    )
}

export default HooksForm;