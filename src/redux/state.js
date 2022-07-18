import reducerProfile from "./reducer-profile";
import reducer_profile from "./reducer-profile";
import reducer_dialogs from "./reducer-dialogs";
import reducer_sidebar from "./reducer-sidebar";


let store = {

    _state : {
        profiles: {
            post_items: [],
            newPostText : "Site by Toma"
        },
        dialogs: {
            dialogs_items: [{id: 1, name: "Artem"}, {id: 2, name: "Misha"}, {id: 3, name: "Vitalya"}, {
                id: 4,
                name: "Masha"
            }, {id: 5, name: "Sorokin"}, {id: 6, name: "Volodya"}],

            dialogs_messages: [{id: 1, messages: "Hi, Nigga"}, {id: 2, messages: "GDE EBANEY ELEKTRIK"}, {
                id: 3,
                messages: "Ne ban, PLS"
            }, {id: 4, messages: "POMOGITE"}, {id: 5, messages: "Ya Sosal Mena Yabali"}, {
                id: 6,
                messages: "Ya ne smotru anime. Ya 4to pohozh na neudachnika?"
            }],
            newMessageBody : "Gavno"
        },
        sidebar: {}

    },
    rerenderTree () {
        console.log("state changed")
    },
    getState(){
      return this._state;
    },
    subscribe (observer) {
        this.rerenderTree = observer;
    },

    dispatch (action) {

            this._state.profiles = reducer_profile(this._state.profiles, action)
            this._state.dialogs = reducer_dialogs(this._state.dialogs,action)
            this._state.sidebar = reducer_sidebar()
            debugger;
            this.rerenderTree(this._state);

    }

}

window.store = store;
export default store;