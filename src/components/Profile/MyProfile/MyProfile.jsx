import React from "react";
import Myprofile_s from "./MyProfile.module.css"

const MyProfile = () => {
    return (

        <div className={Myprofile_s.my_profile}>
            <div className={Myprofile_s.image}>
                <img src='https://cdn.akamai.steamstatic.com/steam/apps/1201240/capsule_616x353.jpg?t=1611719895'
                     alt='Mda'/>
            </div>
            <div className={Myprofile_s.description}>
                <div className={Myprofile_s.description_from}>
                    From: Moscow
                </div>
                <div className={Myprofile_s.description_from}>
                    From: Ukrain
                </div>
            </div>
            <div className={Myprofile_s.posts}>
                My Posts
            </div>
        </div>

    )
        ;
}

export default MyProfile;
