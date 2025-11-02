"use client";

import type React from "react";
import { useState, useEffect } from "react";
import type { UserProfile, Role, UserDB } from "../../types";
import { apiClient } from "../../services/api";
import { X, CheckCircle } from "lucide-react";

interface UserDetailModalProps {
  user: UserDB;
  isOpen: boolean;
  onClose: () => void;
  onUserUpdated: () => void;
}

export const UserDetailModal: React.FC<UserDetailModalProps> = ({
  user,
  isOpen,
  onClose,
  onUserUpdated,
}) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [availableRoles] = useState<Role[]>([
    { id: "Admin", name: "Admin", description: "Full system access" },
    { id: "HR", name: "HR", description: "HR management access" },
    {
      id: "Management L1",
      name: "Management L1",
      description: "Management Level 1 access",
    },
    {
      id: "Management L2",
      name: "Management L2",
      description: "Management Level 2 access",
    },
    {
      id: "Management L3",
      name: "Management L3",
      description: "Management Level 3 access",
    },
  ]);

  // Fetch user profile
  useEffect(() => {
    if (isOpen && user) {
      fetchUserProfile();
    }
  }, [isOpen, user]);

  const fetchUserProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.getUserById(user.id);
      const profile = response.data as UserProfile;
      setUserProfile(profile);
      setSelectedRoles(profile.roles.map((r) => r.id));
    } catch (err) {
      setError(apiClient.handleError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleRoleToggle = (roleId: string) => {
    // Set only the selected role
    setSelectedRoles([roleId]);
  };

  const handleSaveRoles = async (roleName: string) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await apiClient.updateUserRoles(user.id, selectedRoles, roleName);
      setSuccess("Roles updated successfully");
      setTimeout(() => {
        onUserUpdated();
        onClose();
      }, 1500);
    } catch (err) {
      setError(apiClient.handleError(err));
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <h2 className="text-xl font-bold text-gray-900">User Details</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Error Message */}
          {/* {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )} */}

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-700">{success}</p>
            </div>
          )}

          {loading && !userProfile ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
            </div>
          ) : userProfile ? (
            <div className="space-y-6">
              {/* User Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  User Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="text-gray-900 font-medium">
                      {userProfile.user.username}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-gray-900 font-medium">
                      {userProfile.user.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Created</p>
                    <p className="text-gray-900 font-medium">
                      {new Date(
                        userProfile.user.createdAt
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Last Login</p>
                    <p className="text-gray-900 font-medium">
                      {
                        userProfile?.recent_audits?.filter(
                          (audit) => audit.eventType === "LOGIN"
                        )[0].createdAt
                      }
                      {/* {userProfile.user?.lastLoginAt ? new Date(userProfile.user.lastLoginAt).toLocaleDateString() : "Never"} */}
                    </p>
                  </div>
                </div>
              </div>

              {/* Audit Summary */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Activity Summary
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Total Logins</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {userProfile.recent_audits?.filter(
                        (audit) => audit.eventType === "LOGIN"
                      ).length || 0}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Role Changes</p>
                    {userProfile.recent_audits?.filter(
                      (audit) => audit.eventType === "ROLE_CHANGE"
                    ).length || 0}
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Last Login Date</p>
                    <p className="text-sm font-medium text-gray-900">
                      {/* {userProfile.recent_audits?.filter(
                        (audit) => audit.eventType === "LOGIN"
                      ).length || 0} */}
                      {userProfile.recent_audits[0] &&
                      userProfile.recent_audits[0].eventType === "LOGIN"
                        ? new Date(
                            userProfile.recent_audits[0].details.timestamp
                          ).toLocaleDateString()
                        : "Never"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Role Management */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Assign Roles
                </h3>
                <div className="space-y-3">
                  {availableRoles.map((role) => (
                    <label
                      key={role.id}
                      className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="role"
                        checked={selectedRoles.includes(role.id)}
                        onChange={() => handleRoleToggle(role.id)}
                        className="mt-1 w-4 h-4 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{role.name}</p>
                        <p className="text-sm text-gray-600">
                          {role.description}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSaveRoles(selectedRoles[0] || "")}
            disabled={loading || selectedRoles.length === 0}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Saving..." : "Save Roles"}
          </button>
        </div>
      </div>
    </div>
  );
};
