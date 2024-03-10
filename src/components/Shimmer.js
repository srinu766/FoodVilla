const Shimmer =()=>{
    return (
    <div className="flex flex-wrap">
    {Array(10).fill().map((e, index)=><div key={index} className="w-52 h-64 bg-neutral-300 my-10 mx-5"></div>)}
    </div>  
)
}
export default Shimmer;