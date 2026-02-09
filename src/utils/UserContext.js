import { createContext } from "react";

const UserContext = createContext({
    user:{
        name : "Default User",
    },
});

export default UserContext;
