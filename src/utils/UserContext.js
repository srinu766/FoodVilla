import { createContext } from "react";

const UserContext = createContext({
   user:{
     name:"vasu",
    email:"vasu@gmail.com"
}
})

UserContext.displayName ="UserContext "

export default UserContext;