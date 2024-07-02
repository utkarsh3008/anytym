import React, { lazy, Suspense, useEffect , useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
// import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerUI from "./components/ShimmerUI";
import UserContext from "./utils/userContext";
// import Grocerry from "./components/Grocerry";

const Grocerry = lazy(() => import("./components/Grocerry"));
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
  const [userName ,setUserName] = useState(null);

  useEffect(() => {
    const data = {
      name: "Utkarsh Ranjan"
    }
    setUserName(data?.name)
  },[])
  return (
    <UserContext.Provider value={{loggedInUser: userName , setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <About />
          </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocerry",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Grocerry />{" "}
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
