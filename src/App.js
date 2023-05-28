import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ShopPage from "./Pages/shop_page";
import LoginPage from "./Pages/login_page";
import Register from "./Pages/register_page";
import ForgotPassword from "./Pages/forgot_page";
import VerifyPassword from "./Pages/verify_page";
import LandingPage from "./Pages/LandingPage";
import Layout from "./Componenst/shopping/layout";
import Product from "./Pages/Product";
import products from "./utils/products";
import SellersPage from "./Pages/SellersPage";
import SellerProducts from "./Pages/SellerProducts";
import UpdateProduct from "./Pages/UpdateProduct";
import Cart from "./Componenst/Cart";
import Profile from "./Pages/Profile";
import AddressPage from "./Pages/CheckoutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path='product/:id' element={<Product/>}/>    
            <Route path='cart' element={<Cart/>}/>
            <Route path='checkout' element={<AddressPage/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='seller' element={<SellerProducts/>}/>
            <Route path='seller/add-product' element={<SellersPage/>}/>
            <Route path='seller/update-product/:id' element={<UpdateProduct/>}/>
          </Route>
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/forgot/verify" element={<VerifyPassword />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/" element={<ShopPage />} /> */}
          {/* <Route path="/test" element={<ShopPage/>}/> */}
          <Route path="*" exact element={"ERROR 404 not found"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
