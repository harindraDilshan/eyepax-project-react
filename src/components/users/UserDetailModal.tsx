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
    { id: "Management L1", name: "Management L1", description: "Management Level 1 access" },
    { id: "Management L2", name: "Management L2", description: "Management Level 2 access" },
    { id: "Management L3", name: "Management L3", description: "Management Level 3 access" },
  ]);

  useEffect(() => {
    if (isOpen && user) fetchUserProfile();
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

  const handleRoleToggle = (roleId: string) => setSelectedRoles([roleId]);

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
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900/95 border border-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-md">
        
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/90 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-gray-100">User Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            <X size={22} className="text-gray-400 hover:text-gray-200" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {success && (
            <div className="flex items-start gap-3 p-4 rounded-lg border border-green-700 bg-green-900/40">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <p className="text-sm text-green-300">{success}</p>
            </div>
          )}

          {loading && !userProfile ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-4 border-indigo-900 border-t-indigo-500 rounded-full animate-spin" />
            </div>
          ) : userProfile ? (
            <div className="space-y-8">
              
              {/* User Information */}
              <section>
                <h3 className="text-lg font-medium text-gray-200 mb-4">User Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <InfoRow label="Name" value={userProfile.user.username} />
                  <InfoRow label="Email" value={userProfile.user.email} />
                  <InfoRow
                    label="Created"
                    value={new Date(userProfile.user.createdAt).toLocaleDateString()}
                  />
                  <InfoRow
                    label="Last Login"
                    value={
                      userProfile?.recent_audits?.find((a) => a.eventType === "LOGIN")?.createdAt ||
                      "Never"
                    }
                  />
                </div>
              </section>

              {/* Activity Summary */}
              <section>
                <h3 className="text-lg font-medium text-gray-200 mb-4">Activity Summary</h3>
                <div className="grid grid-cols-3 gap-4">
                  <SummaryCard
                    label="Total Logins"
                    value={
                      userProfile.recent_audits?.filter((a) => a.eventType === "LOGIN").length || 0
                    }
                  />
                  <SummaryCard
                    label="Role Changes"
                    value={
                      userProfile.recent_audits?.filter((a) => a.eventType === "ROLE_CHANGE").length || 0
                    }
                  />
                  <SummaryCard
                    label="Last Login Date"
                    value={
                      userProfile.recent_audits[0]?.eventType === "LOGIN"
                        ? new Date(userProfile.recent_audits[0].details.timestamp).toLocaleDateString()
                        : "Never"
                    }
                  />
                </div>
              </section>

              {/* Role Management */}
              <section>
                <h3 className="text-lg font-medium text-gray-200 mb-4">Assign Role</h3>
                <div className="space-y-3">
                  {availableRoles.map((role) => (
                    <label
                      key={role.id}
                      className={`flex items-start gap-3 p-4 rounded-lg border ${
                        selectedRoles.includes(role.id)
                          ? "border-indigo-600 bg-indigo-900/40"
                          : "border-gray-800 bg-gray-800/40 hover:bg-gray-800/70"
                      } cursor-pointer transition-all duration-200`}
                    >
                      <input
                        type="radio"
                        name="role"
                        checked={selectedRoles.includes(role.id)}
                        onChange={() => handleRoleToggle(role.id)}
                        className="mt-1 w-4 h-4 text-indigo-500 focus:ring-indigo-500 accent-indigo-600"
                      />
                      <div>
                        <p className="font-medium text-gray-100">{role.name}</p>
                        <p className="text-sm text-gray-400">{role.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </section>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex items-center justify-end gap-3 p-6 border-t border-gray-800 bg-gray-900/90 backdrop-blur-sm">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSaveRoles(selectedRoles[0] || "")}
            disabled={loading || selectedRoles.length === 0}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Saving..." : "Save Role"}
          </button>
        </div>
      </div>
    </div>
  );
};

/* Subcomponents for cleaner structure */

const InfoRow: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
    <p className="text-sm font-medium text-gray-100 mt-1">{value || "—"}</p>
  </div>
);

const SummaryCard: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="p-4 rounded-lg border border-gray-800 bg-gray-800/40">
    <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
    <p className="text-xl font-semibold text-gray-100 mt-1">{value}</p>
  </div>
);
