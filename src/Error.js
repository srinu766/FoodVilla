import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


const Error =()=>{
    const error = useRouteError();
    return(
    <>
    <div  className="border box px-32 py-10 bg-slate-300 mt-44 mx-44 text-red-500 text-3xl font-bold">
    <h1>Oops!!</h1>
    <h1>Something went wrong</h1>
    <h2>{error.status} : {error.statusText}</h2>
    <h3>{error.data}</h3>
    </div>
    <Link to="/"><button className="bg-lime-800 p-2 ml-10 mt-10 text-white font-bold rounded-lg">Back to Home</button></Link>
    
    </>
    
  
   
    )
}
export default Error;