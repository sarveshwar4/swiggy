import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent ctor Called");
        // this.state = {

        // }
    }
    componentDidMount = () =>{
        console.log("Parent Component Didmount called");
    }
    render(){
        console.log("Parent render called");
        return (
            <div>
            <h1>About Us Page</h1>
            <h2>Hello EveryOne...Welecome to new one</h2>
            <UserClass name = {"Sarveshwar Shukla (class)"} location ={"Ikauna Shravasti (class)"}/>
            <UserClass name = {"Sarveshwar Shukla"} location ={"Ikauna Shravasti (class)"}/>
        </div>
        );
    }
}


export default About;