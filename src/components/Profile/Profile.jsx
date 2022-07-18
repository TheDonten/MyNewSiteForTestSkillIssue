import React from "react";

import Profile_s from "./Profile.module.css"
import PostContainer from './MyPost/PostContainer'
import MyProfile from "./MyProfile/MyProfile";
import DialogsContainer from "../Dialogs/DialogsContainer";

const Profile = () => {

    return (

        <div className={Profile_s.Profile}>
            <div className={Profile_s.side}>
                <MyProfile/>
            </div>
            <div className={Profile_s.myposts}>
                <PostContainer />
            </div>
        </div>

    );
}

export default Profile;