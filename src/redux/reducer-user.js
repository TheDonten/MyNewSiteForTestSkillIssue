
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USER = "SET_USER"
const SET_PAGE = "SET_PAGE"

let initialState = {
    User : [
        { id: 1, Followed: false, Name : "Artem", Status: "Kekovich"
        },
        { id: 1, Followed: false, Name : "Loki", Status: "I win this shit Monkey"
        }
    ],
    num: 0,
    limit : 5
}

const foll = (state,flag,ID) => {
    let _stateCopy = {...state};
    _stateCopy.User.map( (U) => {
        if (U.id === ID) {
            return {...U, followed : flag};
        }
        return U;
    })
    return _stateCopy;
}


const reducer_user = (state = initialState, action) => {

    switch (action.type){
        case  FOLLOW:
            return foll(state,true,action.userID)

        case UNFOLLOW:
            return foll(state,false,action.userID)

        case SET_USER:

            return { ...state, User : action.users}

        case SET_PAGE:

            return { ...state, num : action.pagenum}

        default:
            return state;
    }
}

export default reducer_user;

export const following = (userID) => ({type : FOLLOW, userID });
export const unfollowing = (userID) => ({type : UNFOLLOW, userID});
export const setuser = (users) => ({type: SET_USER, users});
export const setpage = (pagenum) => ({type: SET_PAGE, pagenum});