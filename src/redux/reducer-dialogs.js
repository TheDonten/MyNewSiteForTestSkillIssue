// "html-webpack-plugin": "^5.5.0",
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";



let initialState = {
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
}

function sendMessage (state){
    let newMessages = { id: state.dialogs_messages.length + 1, messages: state.newMessageBody};
    state.dialogs_messages.push(newMessages);
    state.newMessageBody = "";

    return state
}

function updateNewmessagesBody (state,newBody){

    state.newMessageBody = newBody;
    return state
}


const reducer_dialogs = (state = initialState, action) => {

    let statecopy = {...state}
    statecopy.dialogs_messages = [...state.dialogs_messages]

    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY :

            return updateNewmessagesBody(statecopy,action.body);

        case SEND_MESSAGE:

            return sendMessage(statecopy);

        default :
            console.log("Type of dispatch undefinded or incorrect");
            return state;
    }


}

export const NewSendMessagesCreator = () => ({type : SEND_MESSAGE});
export const UpdateNewmessageCreator = (bodytext) => ({type : UPDATE_NEW_MESSAGE_BODY, body : bodytext});

export default reducer_dialogs;