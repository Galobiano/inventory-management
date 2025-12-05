import { navItem } from "@/contants/nav";
import { Link, useLocation } from "react-router-dom";

type UserRole = "admin" | "user";

const Navigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const userRole: UserRole = "admin";

  const filteredNav =
    userRole === "admin"
      ? navItem
      : navItem.filter((item) => ["Inventory", "Product"].includes(item.label));

  return (
    <nav className="flex flex-col pl-5 py-10 space-y-2">
      {filteredNav.map(({ label, href, icon: Icon }) => {
        const isActive = currentPath === href;

        return (
          <Link
            key={label}
            to={href}
            className={`
                    flex items-center gap-5 p-3 rounded-l-full 
                    ${isActive ? "bg-[#D9EAFD]  text-black " : "text-muted"}
                  `}
          >
            <span>
              <Icon />
            </span>
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
