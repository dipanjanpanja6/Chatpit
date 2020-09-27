import thunk from 'redux-thunk'
import { createStore,applyMiddleware, combineReducers } from 'redux'
import userReducers from './reducers/userReducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState={}
const middleware=[thunk]
const reducer=combineReducers({
    user:userReducers,
})
const store=createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store; 