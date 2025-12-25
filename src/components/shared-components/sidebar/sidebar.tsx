import { FaHome } from "react-icons/fa";
import type { NavigationPathProps } from "./sidebar.types";
import { NavLink } from "react-router-dom";
import { HiArchiveBoxArrowDown } from "react-icons/hi2";
import { IoTrashBin } from "react-icons/io5";

const Sidebar = () => {
  const navigationPath: NavigationPathProps[] = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome className="w-6 h-6" />,
    },
    {
      path: "/archived",
      name: "Archived",
      icon: <HiArchiveBoxArrowDown className="w-6 h-6" />,
    },
    // {
    //   path: "/important",
    //   name: "Important",
    //   icon: <MdImportantDevices className="w-6 h-6" />,
    // },
    {
      path: "/bin",
      name: "Bin",
      icon: <IoTrashBin className="w-6 h-6" />,
    },
  ];
  return (
    <div className="shadow-red-50 min-h-screen min-w-62 bg-sky-100">
      <div className="flex items-center gap-3 p-4 cursor-pointer">
        <img
          className="rounded-full"
          src="https://i.pinimg.com/736x/0c/53/4d/0c534d26cc0e7de48edb82946aaed6fa.jpg"
          width={50}
          height={50}
          alt="logo"
        />
        <h1 className="font-bold text-2xl text-gray-600">Notes App</h1>
      </div>
      <nav className="mt-20">
        <ul>
          {navigationPath.map((nav, index) => (
            <NavLink
              to={nav.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center gap-5 ps-5 p-2 cursor-pointer text-md  ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-purple-900"
                }`
              }
            >
              {nav.icon}
              {nav.name}
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
