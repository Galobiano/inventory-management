import { SidebarTrigger } from "./ui/sidebar";
import { useGetProfile } from "@/hooks/auth/getProfile";

const Header = () => {
  const { data } = useGetProfile();

  return (
    <div className="pl-3 items-center flex pt-5 gap-2">
      <SidebarTrigger />
      <span className="font-bold text-2xl">
        WELCOME {data?.role.toLocaleUpperCase()}!
      </span>
    </div>
  );
};

export default Header;
