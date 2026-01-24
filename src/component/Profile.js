import { useEffect, useState } from "react";
const User = (props) =>{
    const [count] = useState(0);
    useEffect(()=>{
       timer = setInterval(()=>{
        console.log("Hello from User Interval");
       }, 1000);
       
       return ()=>{
        clearInterval(timer);
          console.log("User Component Unmounted");
       }
    }, [count]);
    return (
       <div className="user-card">
            <h1>{count}</h1>
            <h2>{props.name}</h2>
            <h3>{props.location}</h3>
            <h4>ins_Contact : sarveshwarshukla__</h4>
       </div>
    );
}
export default User;