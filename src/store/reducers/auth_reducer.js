import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
  is_authenticated: false
}

const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        is_authenticated: true
      }
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        is_authenticated: false
      }
    default:
      return state
  }
}

export default AuthReducer
