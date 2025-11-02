"use client";

import type React from "react";
import { useState } from "react";
import type { User } from "../../types";
import { apiClient } from "../../services/api";
import {
  AlertCircle,
  CheckCircle,
  UserIcon,
  Calendar,
  Phone,
} from "lucide-react";

interface ProfileSettingsProps {
  user: User;
}

export const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.app_metadata.displayName ?? "",
    locale: user.profile.locale ?? "",
    phone: user.app_metadata.phone ?? "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    setSuccess(null);

    try {
      if (!formData.name.trim()) {
        throw new Error("Name is required");
      }

      await apiClient.updateProfile({
        displayName: formData.name.trim(),
        locale: "",
        phone: formData.phone.trim(),
      });

      setSuccess("Profile updated successfully");
      setIsEditing(false);
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(apiClient.handleError(err));
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user.app_metadata.displayName ?? "",
      locale: user.profile.locale ?? "",
      phone: user.app_metadata.phone ?? "",
    });
    setIsEditing(false);
    setError(null);
  };

  return (
    <div className="max-w-2xl text-gray-100">
      {/* Error Message */}
      {error && (
        <div className="mb-6 flex items-start gap-3 p-4 bg-red-900/30 border border-red-700 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-300">{error}</p>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="mb-6 flex items-start gap-3 p-4 bg-green-900/30 border border-green-700 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-300">{success}</p>
        </div>
      )}

      {/* Profile Card */}
      <div className="bg-gray-900/80 backdrop-blur-lg rounded-xl border border-gray-800 shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center gap-6 pb-6 border-b border-gray-800 mb-6">
          <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-inner">
            {user.app_metadata.displayName?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-100 tracking-wide">
              {user.app_metadata.displayName}
            </h2>
            <p className="text-gray-400 text-sm">{user.profile.email}</p>
            <p className="text-indigo-400 text-sm font-medium mt-1">
              Role: {user.app_metadata.role}
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6 mb-8">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Display Name
            </label>
            <div className="relative">
              <UserIcon
                className="absolute left-3 top-3 text-gray-500"
                size={18}
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/70 border border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-60 transition"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone
                className="absolute left-3 top-3 text-gray-500"
                size={18}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/70 border border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-60 transition"
              />
            </div>
          </div>

          {/* Last Login */}
          {user.app_metadata.lastLoginAt && (
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Last Login
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-3 text-gray-500"
                  size={18}
                />
                <input
                  type="text"
                  value={new Date(
                    user.app_metadata.lastLoginAt
                  ).toLocaleString()}
                  disabled
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/70 border border-gray-700 rounded-lg text-gray-400"
                />
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="px-5 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg disabled:opacity-50 transition"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Info Box */}
      {/* <div className="mt-6 p-4 bg-gray-900/70 border border-blue-800 rounded-lg text-blue-300 text-sm">
        To change your password, please contact the IT team.
      </div> */}
    </div>
  );
};
