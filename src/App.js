import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Profile from "./components/Profile";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, Outlet } from "react-router-dom";
// import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const About = lazy(()=>import("./About"))
const Instamart = lazy(() => import("./components/Instamart"));



const App = () => {

  // const [user, setUser] = useState({
  //   name:"srinu",
  //   email:"srinu@gmail.com"
  // })


  return (
    <Provider store={store}>
    {/* <UserContext.Provider
     value={{
      user:user,  
      setUser:setUser,
      }}> */}
    <Header/>
    <Outlet/>
    <Footer/>
    {/* </UserContext.Provider> */}
    </Provider>
  )
}

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
          path:"/",
          element: <Body/>
      },
      {
        path:"/about",
        element:
       <Suspense fallback={<div>Loading...</div>}>
         <About/>,
         </Suspense>,
        
        children:[
          {
            path:"profile",
            element:<Profile/>,
          },
        ]
      },
      {
        path:"/contact",
        element: <Contact/>,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"instamart",
        element:
          <Suspense fallback={<Shimmer/>}>
        <Instamart/>
        </Suspense>
      },
    ],
  },
])

export default AppRouter;
