import React from 'react'
import { useState, useContext } from 'react'
import Logo from "../assets/img/logo.png"
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux' 

const NavBar = () => {

const [login, setLogin] = useState(true);

  const isOnline = useOnline()

  
  const {user }= useContext(UserContext);

  const cartSlice = useSelector(store => store.cart.items);
  
  return (
    <div className='flex p-2 justify-between bg-purple-100 shadow-lg'>
    <a href="/">
        <img className='w-24' alt='logo' src={Logo}/>
        </a>
      <div className='nav-items py-10'>
        <ul className='flex'>
           <Link to="/"> <li className='px-3 hover:bg-slate-800 hover:text-white hover:px-3 py-2 hover:rounded-lg'>Home</li></Link>
            <Link to="/about"><li className='px-3 hover:bg-slate-800 hover:text-white hover:px-3 py-2 hover:rounded-lg'>About</li></Link>
          <Link to="/contact"><li className='px-3 hover:bg-slate-800 hover:text-white hover:px-3 py-2 hover:rounded-lg'>Contact Us</li></Link>
          
            <Link to="/instamart"><li className='px-3 hover:bg-slate-800 hover:text-white hover:px-3 py-2 hover:rounded-lg '>Instamart</li></Link>
            <li className='px-3 hover:bg-slate-800 hover:text-white hover:px-3 py-2 hover:rounded-lg'>Cart {cartSlice.length} items</li>
            
        </ul>
      </div>

      <h1>{isOnline ? "🟢 Online" : "🔴 Offline"}</h1>
      {/* <p className='font-bold text-red-600 p-10'>{user.name}</p> */}
      {
        login ? (
          <button className='px-[20px]  my-8 rounded-lg' onClick={()=>setLogin(false)} style={{background:"green", color:"white"}}>Login</button>
        ) : (
          <button className='px-[15px] my-8 rounded-lg' onClick={()=>setLogin(true)} style={{background:"red", color:"white"}}>Logout</button>
        )
      }

   


    </div>
  )
}

export default NavBar
