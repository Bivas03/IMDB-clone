import { createStore } from "redux";
import { reducer } from "./combinedReducers";

export const store=createStore(reducer,{});

export default store;