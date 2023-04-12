import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ShopPage from "./Pages/shop_page";
import LoginPage from "./Pages/login_page";
import Register from "./Pages/register_page";
import ForgotPassword from "./Pages/forgot_page";
import VerifyPassword from "./Pages/verify_page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/forgot/verify" element={<VerifyPassword />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ShopPage />} />
          {/* <Route path="/test" element={<ShopPage/>}/> */}
          <Route path="*" exact element={"ERROR 404 not found"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
