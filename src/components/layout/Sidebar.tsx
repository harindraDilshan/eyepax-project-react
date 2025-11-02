"use client";

import type React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: Users },
    { path: "/users", label: "Users", icon: Users },
    { path: "/audit-logs", label: "Audit Logs", icon: FileText },
    // { path: "/policies", label: "Leave Policies", icon: FileText },
    // { path: "/approvals", label: "Leave Approvals", icon: FileText },
    // { path: "/reports", label: "Payroll Reports", icon: FileText },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gray-900 text-white transition-all duration-300 flex flex-col`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
        {isOpen && <span className="font-bold text-lg">Admin</span>}
        <button
          onClick={onToggle}
          className="p-1 hover:bg-gray-800 rounded transition-colors"
          aria-label="Arrow to close drawer"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-2 py-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                active
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <Icon size={20} />
              {isOpen && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <p className="text-xs text-gray-400 text-center">
          {isOpen ? "Admin Portal v1.0" : "v1.0"}
        </p>
      </div>
    </div>
  );
};
