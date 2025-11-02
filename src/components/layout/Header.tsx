import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Menu, LogOut } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = React.useState(false);

  return (
    <header className="h-16 bg-gray-900 border-b border-gray-700 flex items-center justify-between px-6 text-gray-100 shadow-md">
      {/* Left */}
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        aria-label="Open/Close menu"
      >
        <Menu size={20} className="text-gray-300" />
      </button>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="User menu"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              {user?.app_metadata?.displayName.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-medium text-gray-200">
              {user?.app_metadata?.displayName}
            </span>
          </button>

          {/* Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 backdrop-blur-md">
              <div className="p-4 border-b border-gray-700">
                <p className="text-sm font-medium text-gray-100">
                  {user?.profile.name}
                </p>
                <p className="text-xs text-gray-400">{user?.profile.email}</p>
              </div>
              <button
                onClick={() => {
                  setShowUserMenu(false);
                  logout();
                }}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-900/30 transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
