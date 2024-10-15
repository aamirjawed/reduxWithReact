import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamRedcucers";
import { counterReducer } from "./counter/counterReducers";
import { userReducer } from "./user/userReducers";

const rootreducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer,
    count:counterReducer,
    user:userReducer
})

export default rootreducer;