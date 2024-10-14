import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootreducer from "./rootReducer";




const store = createStore(rootreducer, composeWithDevTools(
    applyMiddleware(logger)
))

export default store