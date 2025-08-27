import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import HeaderNew from "./components/HeaderNew";

import Body from "./components/Body";
//import {Header} from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/GroceryShimmer";
import ErrorPage from "./components/ErrorPage";
import Error from "./components/Error";
// import { useOnlineStatus } from "./utils/useOnlineStatus";
 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


//import Grocery from "./components/Grocery";
const Grocery=lazy(()=>import ("./components/Grocery"))
const AppLayout = () => {
 
  return (
    <div className="app"> 
      <Header/>
      <Outlet />
    </div>
  ); 
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/grocery", element:<Suspense fallback={<Shimmer/>} > <Grocery /></Suspense> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
