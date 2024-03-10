import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props);
        //create state variables
        this.state ={
            userInfo: {
                name: "Dummy name",
                location: "Dummy location",
            }
        }
        console.log("child - constructor            "+this.props.name);
    }

     componentDidMount(){
        // const data = await fetch("https://api.github.com/users/srinu766");
        // // console.log(data);
        // const json = data.json();
        // console.log(json);
        // this.setState({
        //     userInfo:json,
        // })
       this.timer = setInterval(()=>{
            console.log("update component did mount")
        },1000);

        console.log("child - componentDidMount             "+this.props.name)
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("componentWillUnmount");
    }

    render(){
        console.log("child - render                    "+this.props.name)
        return(
            <div>
                <h1>Profile Class Component</h1>
                <img alt="" src={this.state.userInfo?.avatar_url}/>
                <h2>Name :{this.state.userInfo?.name}</h2>
                <h2>Location :{this.state.userInfo?.location}</h2>
            </div>
        )
    }
}
export default Profile