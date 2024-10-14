import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamRedcucers";
import { counterReducer } from "./counter/counterReducers";

const rootreducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer,
    count:counterReducer
})

export default rootreducer;