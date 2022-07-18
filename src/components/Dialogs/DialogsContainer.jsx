import {NewSendMessagesCreator, UpdateNewmessageCreator} from "../../redux/reducer-dialogs";
import Dialogs from "./Dialogs"
import {connect} from "react-redux";

// const DialogsContainer = (props) =>{
//
//     const SendMessageClick = () => {
//         props.dispatch(NewSendMessagesCreator());
//     }
//
//     const NewMessageChange = (text) =>{
//         props.dispatch(UpdateNewmessageCreator(text));
//     }
//
//     return (<Dialogs   NewSendMessagesCreator = {SendMessageClick} UpdateNewmessageCreator = {NewMessageChange} dialogs ={props.dialogs} />)
// }

let MapStateProps = (state) => {
    return {
        dialogs : state.dialogs
    }
}

let MapDispatchProps = (dispatch) => {

    return {
        NewSendMessagesCreator: () => {

            dispatch(NewSendMessagesCreator());
        },
        UpdateNewmessageCreator: (text) => {

            dispatch(UpdateNewmessageCreator(text));
        }
    }
}
const DialogsContainer = connect (MapStateProps,MapDispatchProps) (Dialogs)


export default DialogsContainer;