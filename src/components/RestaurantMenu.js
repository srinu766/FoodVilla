import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {  

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

if(resInfo == null) return <Shimmer/>

  const {name, cuisines, costForTwoMessage, avgRating, city, totalRatingsString  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  return (
    <div className="">
    <div className="flex justify-between">
    <div className="">
    <h1 className="text-3xl pl-5 pt-5 font-bold">{name}</h1>
    <h1 className="pl-5">{cuisines} - {costForTwoMessage}</h1>
    <h1 className="pl-5">{city}</h1>
    </div>
    <div className="mr-72 mt-5 p-3 border box shadow-md ">
    <h1 className="text-green-800 font-bold">{avgRating} Stars</h1>
    <h1>{totalRatingsString}</h1>
    </div>
    </div>
    <hr class="h-px my-10 border-0 dark:bg-gray-500"/>
    <h2 className="text-3xl pl-28 mt-10 font-bold">Menu</h2>
    <ul>
    {itemCards.map((item)=>{
      return(
        <div className="flex pr-72 p-5 justify-between pl-44">
        <div className="">
        <li className="font-semibold" key={item.card.info.id}>{item.card.info.name}</li>
        <span> Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
        </div>
          <div className="">
        <img className="w-32 h-20 rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+item?.card?.info?.imageId } alt=""/>
        </div>
        </div> 
        
        
   )  } )}
    </ul>

    </div>
  )
}

export default RestaurantMenu;