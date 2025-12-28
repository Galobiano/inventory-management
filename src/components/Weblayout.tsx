import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarNav from "./SidebarNav";
import Header from "./Header";

const Weblayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}

        <SidebarNav />

        {/* Main content */}
        <main className="flex-1 flex flex-col">
          <Header />
          <div className="p-5 ">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Weblayout;
