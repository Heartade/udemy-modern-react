import React, { useState, useReducer } from "react";
import Routes from "./routes";
import Context from "./utils/context";
import * as Reducer from "./store/hooks/hooks_reducer";
import * as UserReducer from "./store/hooks/user_input_hooks_reducer";
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

    const [stateUser, dispatchUser] = useReducer(UserReducer.UserReducer, UserReducer.initialState);
    const handleUseContextChange = (event)=>{
        dispatchUser(ACTIONS.user_input_change(event.target.value));
    }
    const handleUseContextSubmit = (event)=>{
        event.preventDefault();
        event.persist(); // because we are passing events up to the parent
        dispatchUser(ACTIONS.user_input_submit(event.target.useReducer.value));
    }

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
                    dispatchContextFalse: handleContextDispatchFalse,

                    useContextChange: stateUser.user_text_change,
                    useContextSubmit: stateUser.user_text_submit,
                    handleContextChange: handleUseContextChange,
                    handleContextSubmit: handleUseContextSubmit,
                }}
            >
                <Routes />
            </Context.Provider>
        </div>
    );
};

export default App;
