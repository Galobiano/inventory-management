import { Sidebar, SidebarContent } from "./ui/sidebar";
import Navigation from "./Navigation";

const SidebarNav = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <Navigation />
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarNav;
