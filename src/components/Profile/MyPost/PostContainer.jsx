
import MyPost from "./MyPost";
import {new_post_text, new_add_post, setUserProfile} from "../../../redux/reducer-profile";

import {connect} from "react-redux";
import React from 'react'
import axios from "axios";
import withRouter from "../../../withRouter";



class PostContainerAPI extends React.Component{

    componentDidMount() {
        // debugger; //Чисто из-за того, что у меня почемут Mockend не выдает значение по АЙДИ(будто он их формирует уже после запроса, инфу об этом не нашел), придется сразу все брать и выбирать нужный =(
        axios.get(`https://mockend.com/TheDonten/MyNewSiteForTestSkillIssue/users`)
            .then(response => {
                let match_el = response.data.find( (element, index, array) => {

                    let num = Number(this.props.userId)
                    if(element.id === Number(this.props.userId))
                        return true;
                    return false;
                })

                this.props.setUserProfile(match_el)//Ну еще я хз как делать массив там, комментариев и другое. Из-за этого нет возможности проверить, как все будет работать на самом деле, но можно убедиться  что весь
                                                    //UI и DAL работает исправно, но насчет BLL хз. На реальном беке наверное проверять было легче, но хуй знает. ХЫ.

            })
    }


    render(){



        return(<MyPost new_add_post={this.props.new_add_post} new_post_text={this.props.new_post_text} post_items={this.props.post_items}/>);


    }
}

let mapStateToProps = (state) => {
    return {
        post_items : state.profiles
    }

}

let mapDispatchToProps = (dispatch) => {

    return {
        new_add_post: () => {

            dispatch(new_add_post());
        },
        new_post_text: (text) => {

            dispatch(new_post_text(text));
        },
        setUserProfile: (user) =>{
            dispatch(setUserProfile(user));
        }
    }
}


const GetUrlSyntaxCallDermo = withRouter(PostContainerAPI)

const PostContainer = connect (mapStateToProps,mapDispatchToProps) (GetUrlSyntaxCallDermo)


export default PostContainer;