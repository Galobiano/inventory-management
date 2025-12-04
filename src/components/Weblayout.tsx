import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarNav from "./SidebarNav";

const Weblayout = () => {
  return (
    <SidebarProvider>
      <SidebarNav />
    </SidebarProvider>
  );
};

export default Weblayout;
