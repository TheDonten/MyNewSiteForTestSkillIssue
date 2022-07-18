import React from 'react'
import {new_add_post, new_post_text} from "../../redux/reducer-profile";
import {connect} from "react-redux";
import MyPost from "../Profile/MyPost/MyPost";
import {following, setpage, setuser, unfollowing} from "../../redux/reducer-user";
import User from "./Users";
import axios from "axios";
import withRouter from "../../withRouter";
import Nav_s from "../Nav/Nav.module.css";
import {NavLink} from "react-router-dom";



class UserContainerAPI extends React.Component{
    componentDidMount() {
        axios.get(`https://mockend.com/TheDonten/MyNewSiteForTestSkillIssue/users?limit=${this.props.users.limit}&offset=${this.props.users.num}`)
            .then(response => {

                this.props.setUser(response.data)
            })
    }

    onPageChanged = (pageNumber) => {

        let k = Number(pageNumber.target.firstChild.nodeValue) - 1;
        this.props.setPage(k);
        axios.get(`https://mockend.com/TheDonten/MyNewSiteForTestSkillIssue/users?limit=${this.props.users.limit}&offset=${k*this.props.users.limit}`)
            .then(response => {

                this.props.setUser(response.data)
            })
    }

    OnClickImage = (id) =>{
        this.props.navigate(`/profile/${id}`)

    }

    render(){





        return (<User users={this.props.users.User} limit={this.props.users.limit} pageNum={this.props.users.num}
                onPageChanged = {this.onPageChanged} onClickImage={this.OnClickImage}


        />);
    }
}

let mapStateToProps = (state) => {
    return {
        users : state.user_page
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
        },
        setPage : (PageNum) =>{
            dispatch(setpage(PageNum));
        }
    }
}

const GetUrlSyntaxCallDermo = withRouter(UserContainerAPI)

const UserContainer= connect (mapStateToProps,mapDispatchToProps) (GetUrlSyntaxCallDermo)

export default UserContainer