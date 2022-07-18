import React from "react";
import Nav_s from "./Nav.module.css"
import {BrowserRouter, Link, NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={Nav_s.nav}>
            <div className={Nav_s.items} >
                <NavLink to="/profile" className = {navData => navData.isActive? Nav_s.active : Nav_s.items}>Profile</NavLink>
            </div>
            <div className={Nav_s.items}>
                <NavLink to="/messages" className = {navData => navData.isActive? Nav_s.active : Nav_s.items}>Messages</NavLink>
            </div>
            <div className={Nav_s.items}>
                <NavLink to="/user" className = {navData => navData.isActive? Nav_s.active : Nav_s.items}>User</NavLink>
            </div>
            <div className={Nav_s.items}>
                <NavLink to="/news" className = {navData => navData.isActive? Nav_s.active : Nav_s.items}>News</NavLink>
            </div>
            <div className={Nav_s.items}>
                <NavLink to="/music" className = {navData => navData.isActive? Nav_s.active : Nav_s.items}>Music</NavLink>
            </div>
            <div className={Nav_s.items}>
                <NavLink to="/settings" className = {navData => navData.isActive? Nav_s.active : Nav_s.items}>Settings</NavLink>
            </div>

        </nav>

    );
}


export default Nav

/*activeClassName={Nav_s.choose}*/