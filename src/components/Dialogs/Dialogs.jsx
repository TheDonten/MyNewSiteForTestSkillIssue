import React from "react";

import Dialogs_s from './Dialogs.module.css'
import DialogItem from "./DialogItem/Dialog";


const Messages = (props) => {

    return (
        <div className={Dialogs_s.dialog}>
            {props.messages}
        </div>

    );

}


const Dialogs = (props) => {
    debugger;
    let dialogs_messages_array = props.dialogs.dialogs_messages.map((el) => {
        return (
            <React.Fragment key={el.id}>
                <Messages messages={el.messages}/>
            </React.Fragment>
        );
    })

    let dialogs_items_array = props.dialogs.dialogs_items.map((el) => {
        return (
            <React.Fragment key={el.id}>
                <DialogItem name={el.name} id={el.id}/>
            </React.Fragment>
        );
    })

    let newMessageBody = props.dialogs.newMessageBody;

    // let newDialogElement = React.createRef();
    // ref={newDialogElement}

    const onSendMessageClick = () => {

        props.NewSendMessagesCreator();

    }

    const onNewMessageChange = (e) =>{

        let body = e.target.value;
        props.UpdateNewmessageCreator(body);
    }

    return (
        <div className={Dialogs_s.dialogs}>
            <div className={Dialogs_s.dialogs_items}>
                {dialogs_items_array}
            </div>

            <div className={Dialogs_s.messages}>
                {dialogs_messages_array}
                <div className={Dialogs_s.text_area}>
                    <textarea value={newMessageBody}  onChange={onNewMessageChange}/>
                </div>
                <div className={Dialogs_s.buttons}>
                    <button onClick={onSendMessageClick}>
                        Send Message
                    </button>
                </div>
            </div>

        </div>

    );
}


export default Dialogs;