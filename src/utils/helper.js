

export function filterData(search, restaurants){
    var filteredData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toUpperCase()?.includes(search?.toUpperCase()));
    return filteredData;
  }

export  function filterData2(search, restaurants){
    var res = [];
    for(var i = 0; i < restaurants.length; i++){
      if(restaurants[i]?.data?.name?.toUpperCase().includes(search.toUpperCase())){
        res.push(restaurants[i]);
      }
    }
    return res;
  }


export  function topRatedRestaurants(allRestaurants){
  var topRated = allRestaurants.filter((res)=>
  res?.info?.avgRating >= 4)
  return topRated;
  }
  
  export  function lowRatedRestaurants(allRestaurants){
    var topRated = allRestaurants.filter((res)=>
    res?.info?.avgRating < 4)
    return topRated;
    }

  