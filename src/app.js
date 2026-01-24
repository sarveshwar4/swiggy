import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/body";
import About from "./component/about";
import Error from "./component/Errror";
import Contact from "./component/Contact";
import { Header } from "./component/header";
import RestaurantMenu from "./component/RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
// import Grocerry from "./component/grocerry";

const Grocerry = lazy(() => import("./component/grocerry"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
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
        path: "/resturant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
