import { createBrowserRouter } from "react-router";
import Root from "./layout/Root";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./component/productspage/Cart";
import New from "./component/productspage/New";
import Categories from "./component/productspage/Categories";
import Admin from "./layout/Admin";
import Users from "./component/admin/Users";
import Store from "./component/admin/Store";
import Login from "./adminlogin/Login";
import Register from "./adminlogin/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/products",
        Component: Products,
        children: [
          { index: true, Component: Cart },
          { path: "/products/cart", Component: Cart },
          { path: "/products/new", Component: New },
          { path: "/products/categories", Component: Categories },
        ],
      },
    ],
  },
  {
    path: "/admin",
    Component: Admin,
    children: [
      { index: true, Component: Users },
      { path: "/admin/users", Component: Users },
      { path: "/admin/store", Component: Store },
    ],
  },
  {
   path: "/login", Component: Login 
  },
  {
    path: "/register", Component: Register
  },
]);
