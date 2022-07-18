
import React from "react";

import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";




export default function withRouter(Component){

    function UnionClassPropsAndHook(props){

        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        debugger;
        return (
            <Component {...props} userId =  {params.userId} params = {params} navigate = {navigate} location = {location}/>
        )
    }
    return UnionClassPropsAndHook;
}