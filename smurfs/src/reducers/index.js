import { combineReducers } from "redux";
import { smurfsReducer } from "./smurfsReducer";
import { addSmurfsReducer } from "./addSmurfsReducer";

export const reducer = combineReducers({smurfsReducer, addSmurfsReducer});