import Chat from "../pages/Chat";
import Product from "../pages/Product";
import EditProduct from "../pages/EditProduct";
import Test from "../pages/Test";
import AddProduct from "../pages/AddProduct";
import StoreIF from "../pages/StoreIF";
import Users from "../pages/Users";
import History from "../pages/Users/history";
import Order from "../pages/Order";
import Banner from "../pages/Banner";
import Analysis from "../pages/Analysis";
import Review from "../pages/Review";
const publicRoutes = [
  { path: "/", component: Chat },
  { path: "/chat", component: Chat },
  { path: "/product", component: Product },
  { path: "/test", component: Test },
  { path: "/product/editproduct", component: EditProduct },
  { path: "/product/addproduct", component: AddProduct },
  { path: "/storeIF", component: StoreIF },
  { path: "/users", component: Users },
  { path: "/users/history", component: History },
  { path: "/order", component: Order },
  { path: "/changebanner", component: Banner },
  { path: "/analysis", component: Analysis },
  { path: "/review", component: Review },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
