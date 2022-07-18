import React from "react";
import {following, setuser, unfollowing} from "../../redux/reducer-user";
import {connect} from "react-redux";
import axios from "axios";
import {response} from "yarn/lib/cli";
import User from "./Users";




let mapStateToProps = (state) => {
    return {
        users : state.user_page.User
    }

}

let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userID) => {

            dispatch(following(userID));
        },
        unfollow: (userID) => {

            dispatch(unfollowing(userID));
        },
        setUser : (users) => {
            dispatch(setuser(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserContainerAPI);

