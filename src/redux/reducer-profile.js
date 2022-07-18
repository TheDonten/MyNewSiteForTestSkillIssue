
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_POST = "SET_POST";
const SET_USER_PROFILE="SET_USER_PROFILE"

let initialState = {
    post_items: [],
    newPostText : "",
    nickname : "",
    likes : 0,
    id : 0
}

function addPost(state) {

    let newPost = {
        id: state.id,
        text: state.newPostText,
        likes: state.likes,
        nickname: state.nickname
    };
    state.post_items.push(newPost)
    state.newPostText = "";
    return state;
}

function  updateNewPostText (state,newText){
    state.newPostText = newText;
    return state
}

const reducer_profile = (state = initialState, action) => {


    // let statecopy = {...state}
    // statecopy.post_items = [...state.post_items]

    let statecopy = structuredClone(state)


    switch(action.type){
        case ADD_POST:
            statecopy.likes = 0;
            return addPost(statecopy);

        case UPDATE_NEW_POST_TEXT :
            return updateNewPostText(statecopy,action.newtext);

        case SET_POST :
            break;

        case SET_USER_PROFILE:
            debugger;
            statecopy.newPostText = action.User.userComments;
            statecopy.likes = action.User.Likes;
            statecopy.nickname = action.User.Name;
            statecopy.id = action.User.id;
            statecopy.post_items = [];
            return addPost(statecopy);

        default :
            console.log("Type of dispatch undefinded or incorrect");

            return state
    }

}

export const new_add_post = () => ({type : ADD_POST });
export const new_post_text = (text) => ({type : UPDATE_NEW_POST_TEXT, newtext : text});
export const setUserProfile = (user) => ({type: SET_USER_PROFILE, User : user})

export default reducer_profile;