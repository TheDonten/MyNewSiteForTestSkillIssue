import React from "react";


import {NavLink} from "react-router-dom";
import Dialogs_s from "./dialog.module.css";

const DialogItem = (props) => {

    let path = "/messages/" + props.id;

    return (
        <div>
            <NavLink to={path} className = {navData => navData.isActive? Dialogs_s.active : Dialogs_s.non_active} > {props.name}</NavLink>
        </div>
    );

}

export default DialogItem;