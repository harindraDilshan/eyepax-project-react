"use client";

import type React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  BedSingle,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/users", label: "Manage Users", icon: Users },
    { path: "/leave-management", label: "Manage Leaves", icon: BedSingle },
    { path: "/attendance-logs", label: "Attendance Logs", icon: FileText },
    { path: "/audit-logs", label: "Audit Logs", icon: FileText },
    { path: "/settings", label: "System Settings", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100 transition-all duration-300 flex flex-col shadow-xl`}
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
        {isOpen && (
          <span className="font-bold text-lg tracking-wide text-indigo-400">
            ADMIN PANEL
          </span>
        )}
        <button
          onClick={onToggle}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Toggle Sidebar"
        >
          {isOpen ? (
            <ChevronLeft size={20} className="text-gray-300" />
          ) : (
            <ChevronRight size={20} className="text-gray-300" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                active
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-800"
                  : "text-gray-300 hover:bg-gray-800 hover:text-indigo-400"
              }`}
            >
              <Icon size={20} />
              {isOpen && (
                <span className="font-medium tracking-wide">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 text-center">
        <p className="text-xs text-gray-500 tracking-wider">
          {isOpen ? "© 2025 Admin Portal — Secure & Smart" : "v1.0"}
        </p>
      </div>
    </div>
  );
};
