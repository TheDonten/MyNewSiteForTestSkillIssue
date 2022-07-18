import {combineReducers, legacy_createStore as createStore} from "redux";
import reducer_profile from "./reducer-profile";
import reducer_dialogs from "./reducer-dialogs";
import reducer_sidebar from "./reducer-sidebar";
import reducer_user from "./reducer-user";



let reducers = combineReducers({
    profiles : reducer_profile,
    dialogs : reducer_dialogs,
    user_page: reducer_user}
    // sidebar : reducer_sidebar}0
    );

let store = createStore(reducers);

window.store = store;

export default store;
