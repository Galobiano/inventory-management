import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarNav from "./SidebarNav";
import Header from "./Header";

const Weblayout = () => {
  return (
    <SidebarProvider>
      <SidebarNav />
      <main>
        <Header />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default Weblayout;
