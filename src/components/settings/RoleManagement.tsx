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
      {/* Current Roles */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Your Current Role
        </h2>
        {user.app_metadata.role && user.app_metadata.role.length > 0 ? (
          <div className="space-y-3">
            {/* {user.roles.map((role) => (
              <div
                key={role.id}
                className="p-4 border border-indigo-200 bg-indigo-50 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
              > */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-indigo-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 user-role">
                    {user.app_metadata.role}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
            <p className="text-gray-600">No roles assigned</p>
          </div>
        )}
      </div>

      {/* Info Box */}
      {user.app_metadata.role === "admin" && (
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-700">
            "Role assignments are managed by administrators. Contact your admin
            to request role changes."
          </p>
        </div>
      )}
    </div>
  );
};
