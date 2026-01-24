import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";


class About extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount = () =>{
        // console.log("Parent Component Didmount called");
    }
    render(){
        return (
            <div>
            <h1>About Us Page</h1>
            <h2>Hello EveryOne...Welecome to new one</h2>
            <ProfileClass />
        </div>
        );
    }
}


export default About;