import { Route, Routes } from "react-router-dom";
import Dashboard from "./container/Dashboard/Dashboard";
import Home from "./container/Home/Home";
import ErrorPage from "./container/ErrorPage/ErrorPage";
import User from "./container/User/User";
import Custumer from "./container/Customer/Customer";
import Product from "./container/Product/Product"
import Orders from "./container/Orders/Orders";
import Coupon from "./container/Coupon/Coupon";
import Login from "./container/Login/Login";
import Charts from "./container/Chart/Charts";
import { AddProduct } from "./component/Table/AddProduct";
import { ProductDetails } from "./component/Product/ProductDetails";
import { ProductEdit } from "./component/Product/ProductEdit";

function App() {  
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/user" element={<User />}/>
      <Route path="/customer" element={<Custumer />}/>
      <Route path="/product" element={<Product />}/>
      <Route path="/orders" element={<Orders />}/>
      <Route path="/coupon" element={<Coupon />}/>
      <Route path="/chart" element={<Charts />}/>
      <Route path="/addProduct" element={<AddProduct />}/>
      <Route path="/editProduct/:proid" element={<ProductEdit />}/>
      <Route path="/detailsProduct/:proid" element={<ProductDetails />}/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
