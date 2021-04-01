import React, { useState, useReducer } from "react";
import Routes from "./routes";
import Context from "./utils/context";
import * as Reducer from "./store/hooks/hooks_reducer";
import * as ACTIONS from "./store/actions/actions";

//main app
const App = () => {
    const [stateContextGlobal, dispatchContextGlboal] = useReducer(Reducer.HooksReducer, Reducer.initialState);
    const handleContextDispatchTrue = () => {
        // dispatch(ACTIONS.SUCCESS); SAME
        // dispatch({type: ACTIONS.SUCCESS}); SAME
        dispatchContextGlboal(ACTIONS.success());
    };
    const handleContextDispatchFalse = () => {
        // dispatch(ACTIONS.FAILURE); SAME
        // dispatch({type: ACTIONS.FAILURE}); SAME
        dispatchContextGlboal(ACTIONS.failure());
    };
    const [stateGlobal, setStateGlobal] = useState(0);
    const incrementGlobalState = () => {
        setStateGlobal(stateGlobal + 1);
    };
    const decrementGlobalState = () => {
        setStateGlobal(stateGlobal - 1);
    };
    return (
        <div>
            React
            <Context.Provider
                value={{
                    valueGlobalState: stateGlobal,
                    incGlobalState: incrementGlobalState,
                    decGlobalState: decrementGlobalState,
                    reducerGlobalState: stateContextGlobal.stateprop2, // okay to just pass a prop
                    dispatchContextTrue: handleContextDispatchTrue,
                    dispatchContextFalse: handleContextDispatchFalse
                }}
            >
                <Routes />
            </Context.Provider>
        </div>
    );
};

export default App;
