import { Sidebar, SidebarContent } from "./ui/sidebar";
import Navigation from "./Navigation";

const SidebarNav = () => {
  return (
    <Sidebar className="bg-[#0E4A64] text-white border-none">
      <SidebarContent>
        <Navigation />
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarNav;
