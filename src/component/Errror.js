import React from "react";
import { useRouteError } from "react-router";
const Error = ()=>{
    const error = useRouteError();
    return (
        <div>
            <h1>Oops! Page Not Found</h1>
            <p>We can't seem to find the page you're looking for.</p>
            <h3>{error.status + " : " + error.statusText}</h3>   
        </div>
    );
}

export default Error;