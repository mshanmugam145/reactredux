import { combineReducers } from "redux";
import cakeReducers from "./cake/cakeReducers";
import iceCreamReducers from "./iceCream/iceCreamReducers";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducers,
    iceCream: iceCreamReducers,
    user: userReducer
})

export default rootReducer;