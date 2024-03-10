import React, { useState, useEffect } from 'react';
import RestraurantCard from './RestaurantCard';
// import { restrautList } from "../Constants";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { lowRatedRestaurants, topRatedRestaurants, filterData} from '../utils/helper';
import useOnline from '../utils/useOnline';
// import UserContext from '../utils/UserContext';
import { RESTARANT_DATA } from '../Constants';



const Body = () => {



  const [search, setSearch] = useState("")
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [allRestaurants, setAllRestaurants] = useState([]);
  // const {user, setUser} = useContext(UserContext);

  const isOnline = useOnline();

  
  useEffect(()=>{
    getRestaurent();
  },[]);

  async function getRestaurent(){
    var data = await fetch(RESTARANT_DATA);
    var json = await data.json();
    // console.log("jsonBODY",json?.data?.cards[4 ]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
  }

  // console.log("dataa11 ",filteredRestaurants);

  if(allRestaurants?.length === 0){ return <Shimmer/>} 
  
  // if(isOnline == false)
  // return(
  // <h1>Looks like you're Offline!! Please check your internet connecton.</h1>
  // )

  return (
    <div className=''>
    <div className='p-5 bg-purple-50'>
    <input className='p-2 bg-yellow-50' type='text' placeholder='Search...' value={search} onChange={(e)=>{
      setSearch(e.target.value);
    }}/>
    <button className='p-2 m-3 bg-gray-800 hover:bg-gray-950 text-white rounded-md'
    onClick={()=>{
      var data = filterData(search, allRestaurants);
      setFilteredRestaurants(data);
    }}>Search</button>
    
    <button className='p-2 m-3 bg-gray-800 hover:bg-gray-950 text-white rounded-md'
    onClick={()=>{
    var data2 = topRatedRestaurants(allRestaurants)
    setFilteredRestaurants(data2);
    }}
    >Top Rated Restaurants</button>
    

<button className='p-2 m-3 bg-gray-800 hover:bg-gray-950 text-white rounded-md'
    onClick={()=>{
    var data3 = lowRatedRestaurants(allRestaurants)
    setFilteredRestaurants(data3)
    }}>Low Rated Restaurants</button>
    </div>
<>
    <h1 className='font-bold text-2xl mx-16 my-1 0'>{filteredRestaurants.length} restaurants</h1>
</>
<div className='flex flex-wrap px-32 mx-5'>
  { filteredRestaurants.map((restaurant) => {
        return( 
        <Link to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id}>
        <RestraurantCard {...restaurant?.info}/>
        </Link>
        );
      })
    }
    </div>
    </div>
  
  )
}
export default Body;
