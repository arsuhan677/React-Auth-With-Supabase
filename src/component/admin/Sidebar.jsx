import React, { useState } from "react";
import {
  Zap,
  Home,
  User,
  ShoppingCart,
  Package,
  MessageSquare,
  Calendar,
  BarChart2,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router";


function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navigate = useNavigate();

  const toggleSubMenu = (id) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  const menuItems = [
    { id: 1, label: "Dashboard", icon: Home, badge: "", path: "/" },
    { id: 2, label: "User", icon: User, badge: "3", path: "/admin/users" },
    {
      id: 3,
      label: "E-commerce",
      icon: ShoppingCart,
      badge: "5",
      subMenu: [
        { id: "3-1", label: "Products" },
        { id: "3-2", label: "Orders" },
        { id: "3-3", label: "Customers" },
      ],
    },
    { id: 4, label: "Inventory", icon: Package, badge: "", path: "/admin/store" },
    {
      id: 5,
      label: "Message",
      icon: MessageSquare,
      badge: "",
      path: "/messages",
    },
    { id: 6, label: "Calender", icon: Calendar, badge: "", path: "/calenders" },
    { id: 7, label: "Reports", icon: BarChart2, badge: "", path: "/reports" },
    { id: 8, label: "Setting", icon: Settings, badge: "", path: "/settings" },
  ];

  return (
    <div className="transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-r-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10">
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-700 dark:text-white uppercase">
              the haatbazaar
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex flex-col p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => {
                if (item.path) {
                  navigate(item.path);
                }
                setActiveMenu(item.id);
                if (item.subMenu) toggleSubMenu(item.id);
              }}
              // onClick={() => {
              //   setActiveMenu(item.id);
              //   if (item.subMenu) toggleSubMenu(item.id);
              // }}
              className={`
                w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200
                ${
                  item.id === 1
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : activeMenu === item.id
                    ? "bg-slate-400 text-white shadow-md"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
                }
              `}
            >
              <div className="flex items-center space-x-3">
                <item.icon
                  className={`w-5 h-5 ${
                    item.id === 1 || activeMenu === item.id
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-red-500 text-white ml-2">
                    {item.badge}
                  </span>
                )}
              </div>
              {item.subMenu && <ChevronDown className="w-4 h-4 ml-2" />}
            </button>

            {/* Sub-menu */}
            {item.subMenu && openSubMenu === item.id && (
              <div className="flex flex-col ml-6 mt-2 space-y-3">
                {item.subMenu.map((sub) => (
                  <button
                    key={sub.id}
                    className="text-sm text-slate-800 cursor-pointer dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 text-left"
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <img
            className="w-10 h-10 rounded-full ring-2 ring-blue-500"
            src="suhan1.png"
            alt="profile image"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
              Aminurrahman
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
