import React from "react";
import Post_s from './MyPost.module.css'
import {useLocation} from "react-router-dom";


const Posting = (props) => {


    return (<div className={Post_s.post}>

        <div className={Post_s.avatar}>
            <img
                src='data:image/jpeg;base64,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'
                alt='Mda'/>
        </div>
        <div className={Post_s.nickname}>

            <a href='#dsd'> {props.nickname}</a>

        </div>
        <div className={Post_s.text}>
            {props.text}

        </div>
        <div className={Post_s.likes}>
            {props.likes}

        </div>

    </div>);
}


const MyPost = (props) => {

    let newPostElement = React.createRef();



    let addPosts = () => {

        props.new_add_post();
        newPostElement.current.value = "";
    }

    let onPostChange = () => {

        let text = newPostElement.current.value;
        props.new_post_text(text);

    }



    let post_items_array = props.post_items.post_items.slice(0).reverse().map((el) => { //KALICHE POLNOE
            return (
                <React.Fragment key={el.id}>
                    <Posting id={el.id} text={el.text} likes={el.likes} nickname={el.nickname}/>
                </React.Fragment>
            );
    })



    return (
        <div>
            <div className={Post_s.text_area}>
                <textarea onChange={onPostChange} ref = {newPostElement} value = {props.newPostText} />
            </div>
            <div className={Post_s.buttons}>
                <button onClick = {addPosts}>Add post</button>
            </div>
            <div className={Post_s.posts}>
                {post_items_array}
            </div>
        </div>
    );
}

export default MyPost;
