import { MdDashboard, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { IconType } from "react-icons";
import { RiProfileFill } from "react-icons/ri";

interface NavItem {
  label: string;
  href: string;
  icon: IconType;
}

export const navItem: NavItem[] = [
  { label: "Profile", href: "/profile", icon: RiProfileFill },
  { label: "Dashboard", href: "/dashboard", icon: MdDashboard },
  { label: "User Management", href: "/user-management", icon: FaUser },
  {
    label: "Product",
    href: "/product",
    icon: MdOutlineProductionQuantityLimits,
  },
  { label: "Sale Report", href: "/sale-report", icon: BsBarChartFill },
];
