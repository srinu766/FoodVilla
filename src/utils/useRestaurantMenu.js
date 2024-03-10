import { useState, useEffect } from "react";
import { RESTARANT_MENU_URL } from "../Constants";


const useRestaurantMenu =(resID)=>{
   
    const [resInfo, setResInfo] = useState(null);

    //get Api data from  API
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch( RESTARANT_MENU_URL + resID);
        const json = await data.json();
        setResInfo(json?.data);
        }
          return resInfo;
};

export default useRestaurantMenu;