import React from "react";

class UserClass extends React.Component {
    constructor(props){
        // this keyword pointing to the curr instance of the class 
        // in js if classs extend another not able to use this in child class
        // use the super keyword it create the instance of parent class
        // and then it give access to the "this"  on child class
        super(props);
        console.log(this.props.name + "ctor called")
        this.state = {
            count : 0,
        };
    }
    componentDidMount = () =>{
        console.log(this.props.name + " Component Didmount called");
    }
    render() {
        console.log(this.props.name + " render called");
        const {name, location} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h1>{count}</h1>
                <button onClick={()=>{
                    // setState having access of all the state variable 
                   this.setState(({
                      count : this.state.count + 1,
                   })
                )
                }}>Increase the cnt</button>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h4>ins_Contact : sarveshwarshukla__</h4>
            </div>
        );
    }
}

export default UserClass;