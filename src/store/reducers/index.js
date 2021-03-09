import Reducer1 from './reducer1';
import UserReducer from './user_reducer';
import AuthReducer from './auth_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    reducer1: Reducer1,
    userReducer: UserReducer,
    authReducer: AuthReducer
});

export default rootReducer;