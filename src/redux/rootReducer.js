import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamRedcucers";

const rootreducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer
})

export default rootreducer;