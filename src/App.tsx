import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Weblayout from "./components/Weblayout";
import Dashboard from "./pages/dashboard/Dashboard";
import UserManagement from "./pages/userManagement/UserManagement";
import Product from "./pages/product/Product";
import SaleReport from "./pages/report/SaleReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Weblayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/product" element={<Product />} />
          <Route path="/sale-report" element={<SaleReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
