import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/body";
import About from "./component/about";
import Error from "./component/Errror";
import Contact from "./component/Contact";
import { Header } from "./component/header";
import RestaurantMenu from "./component/RestaurantMenu";
import RestaurantCart from "./component/RestaurantCart";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/appStore";

const Grocerry = lazy(() => import("./component/grocerry"));

const AppLayout = () => {
  const [user, setUser] = React.useState({
  name : "Sarveshwar Shukla" 
  });
  return (
    <div>
      <Provider store = {store}>
      <UserContext.Provider value = {{user, setUser}}>
      <Header />
      <Outlet />
      </UserContext.Provider>
      </Provider>
    </div>
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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocerry",
        element: 
        (<Suspense fallback={<h2>Loading Grocery...</h2>}>
          <Grocerry />
        </Suspense>),
      },
      {
        path :"/restaurantCart",
        element : <RestaurantCart />
      },
      {
        path: "/resturant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
