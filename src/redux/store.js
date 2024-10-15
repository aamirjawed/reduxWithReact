import { createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootreducer from "./rootReducer";




const store = createStore(rootreducer, 
    applyMiddleware(thunk)
)

export default store