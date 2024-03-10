import React from 'react'
import {IMG_CARD_CDN} from "../Constants"

    const RestraurantCard =({
      name,
      cloudinaryImageId,
      cuisines,
      avgRating,
    })=>{

        return(
          <div className='w-56 p-2 m-2 shadow-lg'>
            <img className='rounded-lg' width={200} alt='' src={ IMG_CARD_CDN+
            cloudinaryImageId}/>
            <h2 className='font-bold text-xl'>{name}</h2>
            <h3>{cuisines.join(' , ')}</h3>
            <h4>{avgRating} rating</h4>
          </div>
        )
      }

export default RestraurantCard
