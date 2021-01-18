import axios from "axios";
import {createDriver} from "@redux-requests/axios"
import { handleRequests } from "@redux-requests/core";
import { combineReducers } from "redux";
import authReducer from '../services/login/reducer'
import { onRequest } from "../services/api/inreceptors";

const {requestsReducer, requestsMiddleware} = handleRequests({
    driver: createDriver(axios),
    onRequest: onRequest
})

const reducer = combineReducers({
    requests: requestsReducer,
    authReducer,
})

export default reducer;
export {requestsMiddleware}