import { Sidebar, SidebarContent } from "./ui/sidebar";
import Profile from "@/pages/profile/Profile";
import Navigation from "./Navigation";
import Logout from "@/pages/Logout";

const SidebarNav = () => {
  return (
    <Sidebar className="bg-[#0E4A64] text-white border-none">
      <SidebarContent>
        <Profile />
        <Navigation />

        <Logout />
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarNav;
