"use client";

import type React from "react";
import type { UserDB } from "../../types";
import { ChevronRight } from "lucide-react";

interface UsersListProps {
  users: UserDB[];
  loading: boolean;
  onSelectUser: (user: UserDB) => void;
}

export const UsersList: React.FC<UsersListProps> = ({
  users,
  loading,
  onSelectUser,
}) => {
  if (loading) {
    return (
      <div className="bg-gray-800/70 rounded-xl border border-gray-700 p-6">
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-4 border-indigo-900 border-t-indigo-500 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-8 text-center">
        <p className="text-gray-400 text-sm">No users found</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/60 border border-gray-800 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800/80 border-b border-gray-700">
            <tr>
              {["Name", "Email", "Roles", "Created", "Action"].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-300 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-800/60 transition-all duration-200 cursor-pointer"
              >
                {/* Username */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-indigo-700/60 rounded-full flex items-center justify-center text-indigo-200 font-semibold text-sm">
                      {user.username?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-100">
                      {user.username}
                    </span>
                  </div>
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">
                  {user.email}
                </td>

                {/* Role */}
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.role ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300 border border-indigo-700">
                      {user.role.name}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-500">No roles</span>
                  )}
                </td>

                {/* Created At */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>

                {/* Action */}
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    onClick={() => onSelectUser(user)}
                    className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    View
                    <ChevronRight size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
