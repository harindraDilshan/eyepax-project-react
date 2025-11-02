"use client";

import type React from "react";
import { useState } from "react";
import type { User } from "../../types";
import { Shield, Info } from "lucide-react";

interface RoleManagementProps {
  user: User;
}

export const RoleManagement: React.FC<RoleManagementProps> = ({ user }) => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const roleDescriptions: Record<
    string,
    { description: string; permissions: string[] }
  > = {
    admin: {
      description: "Full system access with all permissions",
      permissions: [
        "Manage all users and roles",
        "View all audit logs",
        "Configure system settings",
        "Manage integrations",
        "Access analytics",
      ],
    },
    manager: {
      description: "User management and monitoring access",
      permissions: [
        "Create and manage users",
        "Assign roles to users",
        "View user audit logs",
        "Generate reports",
        "View analytics",
      ],
    },
    viewer: {
      description: "Read-only access to system information",
      permissions: [
        "View users and roles",
        "View audit logs",
        "View analytics",
        "Export reports",
      ],
    },
  };

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-2">
          Your Current Role
        </h2>
        <p className="text-gray-400 text-sm">
          Review your assigned access level and permissions.
        </p>
      </div>

      {/* Role Card */}
      {user.app_metadata.role && user.app_metadata.role.length > 0 ? (
        <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-900/40 rounded-lg">
                <Shield className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-100 text-lg capitalize">
                  {user.app_metadata.role}
                </h3>
                <p className="text-sm text-gray-400">
                  {roleDescriptions[user.app_metadata.role]?.description ??
                    "Custom user role"}
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                setExpandedRole(
                  expandedRole === user.app_metadata.role
                    ? null
                    : user.app_metadata.role
                )
              }
              className="text-sm text-indigo-400 hover:text-indigo-300 font-medium transition"
            >
              {expandedRole === user.app_metadata.role ? "Hide" : "View"} details
            </button>
          </div>

          {/* Expanded Permissions */}
          {expandedRole === user.app_metadata.role && (
            <div className="mt-4 border-t border-gray-700 pt-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">
                Permissions
              </h4>
              <ul className="space-y-1">
                {roleDescriptions[user.app_metadata.role]?.permissions.map(
                  (perm, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                      {perm}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="p-5 bg-gray-800/60 border border-gray-700 rounded-lg text-center">
          <p className="text-gray-400">No roles assigned</p>
        </div>
      )}

      {/* Info Box */}
      {user.app_metadata.role === "admin" && (
        <div className="mt-8 p-4 bg-blue-900/40 border border-blue-800 rounded-lg flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-300 leading-relaxed">
            Role assignments are managed by administrators. Contact your admin
            to request role changes.
          </p>
        </div>
      )}
    </div>
  );
};
