import React from "react";
import './App.css';
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import PostContainer from "./components/Profile/MyPost/PostContainer";
import MyProfile from "./components/Profile/MyProfile/MyProfile";
import User from "./components/Users/Users";
import UserContainer from "./components/Users/UsersContainer";


const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId' element={<Profile />}/>
                        {/*render dobavit*/}
                        <Route path='/messages/*' element={<DialogsContainer />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/user' element = {<UserContainer/>} />
                    </Routes>
                </div>
                <Aside/>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}


export default App;
