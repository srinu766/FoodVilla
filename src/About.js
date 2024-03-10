// import ProfileFunction from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import {Component} from "react";
import UserContext from "./utils/UserContext";

// const About1 =()=>{
//     return(
//         <div>
//         <h1>About Page</h1>
//         <p>this is the chapter 07 lets get classy</p>
       
//         <ProfileFunction name={"srinu"}/>
//         <ProfileClass name={"vasu"} xyz={"abc"}/>
//         </div>
        
//     );
// }

class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent - constructor")
    }
    componentDidMount(){
        //best place to make an API call
        // console.log("Parent - componentDidMount")
    }

    render(){
        // console.log("parent - render")
        return(
           
            <div>
            <h1>About Page</h1>
        
            <UserContext.Consumer>
                {({user})=><h3 className="font-bold text-red-500 p-5 m-5">{user.name}-{user.email}</h3>}
            </UserContext.Consumer>
            <p>this is the chapter 07 lets get classy</p>
           
            {/* <ProfileFunction name={"srinu"}/> */}
            <ProfileClass name={"First Child"} xyz={"abc"}/>
            {/* <ProfileClass name={"Second Child"} xyz={"abc"}/> */}
            </div>
            
        );

    }

}
export default About;