import { useEffect, useState } from "react";

const Profile =(props)=>{
    const [count, setCount] =useState(0);
    // console.log("render function")

    useEffect(()=>{
        // console.log("useEffect")
    },[])

    return(
        <>
        <h1>Profile functional Component</h1>
        {/* <p>this page is created by SRINU</p> */}
        <h2>Name : {props.name}</h2>
        <h2>Count :{count}</h2>
        <button onClick={()=>{
            setCount(count+1)
        }}>SetCount</button>
        </>
  
    )
}
export default Profile;