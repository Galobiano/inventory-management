import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Weblayout from "./components/Weblayout";
import Dashboard from "./pages/dashboard/Dashboard";
import UserManagement from "./pages/userManagement/UserManagement";
import Inventory from "./pages/inventory/Inventory";
import Product from "./pages/product/Product";
import Report from "./pages/report/Report";
import AddUser from "./pages/userManagement/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Weblayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/product" element={<Product />} />
          <Route path="/reporting" element={<Report />} />
          <Route path="/add-new-user" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
