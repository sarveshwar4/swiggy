import React from "react";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        console.log("profile ctor called")
        this.state = {
            info: {
                name: "dummy name",
                location: "dummy location",
            },
        };
    }
    async componentDidMount() {
        this.timer = setInterval(() => {
            console.log("Hello from Interval");
        }, 1000);

        const result = await fetch("https://api.github.com/users/sarveshwar4");
        const data = await result.json();
        this.setState({
            info: data
        });
        console.log("Profile componentDidMount called");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Profile componentDidUpdate called");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Profile componentWillUnmount called");
    }

    render() {
        const { name, location, avatar_url } = this.state.info;
        console.log("profile render");
        return (
            <div className="user-card">
                <img alt="avtaar" src={avatar_url} />
                <h2>{name}</h2>
                <h3>{location || "ikauna"}</h3>
            </div>
        );
    }
}

export default ProfileClass;




//  <h1>{count}</h1>
//                 <button onClick={()=>{
//                     // setState having access of all the state variable
//                    this.setState(({
//                       count : this.state.count + 1,
//                    })
//                 )
//                 }}>Increase the cnt</button>