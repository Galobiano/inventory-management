import { SidebarTrigger } from "./ui/sidebar";

const Header = () => {
  return (
    <div className="pl-3 items-center flex pt-5 gap-2">
      <SidebarTrigger />
      <span className="font-bold text-2xl">WELCOME ADMIN!</span>
    </div>
  );
};

export default Header;
