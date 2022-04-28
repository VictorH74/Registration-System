import { useContext } from "react";
import Router from 'next/router';
import { AuthContext } from "../contexts/auth";

const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading){
        return <div className='loading-page'/>
    }

    if (!authenticated) {
        Router.push("login");
    }
    else{
       return children; 
    }

    
}

export default Private;