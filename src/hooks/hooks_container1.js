import React, {useState, useEffect, useReducer, useContext} from 'react'
import * as Reducer from '../store/hooks/hooks_reducer'
import * as ACTIONS from '../store/actions/actions'
import Context from '../utils/context';

const HooksContainer1 = props => {

    const context = useContext(Context);
    const [stateValue, setValue] = useState(0);
    const [useEffectValue, setUseEffectValue] = useState(null);
    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

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

    const handleDispatchTrue = ()=>{
        // dispatch(ACTIONS.SUCCESS); SAME
        // dispatch({type: ACTIONS.SUCCESS}); SAME
        dispatch(ACTIONS.success());
    }
    const handleDispatchFalse = ()=>{
        // dispatch(ACTIONS.FAILURE); SAME
        // dispatch({type: ACTIONS.FAILURE}); SAME
        dispatch(ACTIONS.failure());
    }

    return (
    <div>
    Hooks

    <p>useDispatch</p>
    <button onClick={handleDispatchTrue}>Dispatch True</button>
    <button onClick={handleDispatchFalse}>Dispatch False</button>
    <p>Local State with useState</p>
    <button onClick={increment}>{stateValue}+1</button>
    <button onClick={decrement}>{stateValue}-1</button>
    <p>Global State with useContext</p>
    <button onClick={context.incGlobalState}>{context.valueGlobalState}+1</button>
    <button onClick={context.decGlobalState}>{context.valueGlobalState}-1</button>
    <p>User handling of useEffect state</p>
    <button onClick={changeEffect}>change useEffect value</button>
    <div>
        State of useEffect (useState(null))
        <p>
            {
                useEffectValue
                ? <p>{useEffectValue}</p>
                : <p>No Value</p>
            }
        </p>
    </div>
    <div>
        State of useDispatch (useReducer().stateprop1)
        <p>
            StateProp1:
            {
                state.stateprop1
                ? "True"
                : "False"
            }
        </p>
    </div>
    {console.log(props)}
    </div>
)};

export default HooksContainer1;
