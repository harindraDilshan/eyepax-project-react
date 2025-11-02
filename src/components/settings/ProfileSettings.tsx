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
  Home,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface ProfileSettingsProps {
  user: User;
}

export const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user }) => {
  // const { user } = useAuth()
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
      // Validate form
      if (!formData.name.trim()) {
        throw new Error("Name is required");
      }
      // if (!formData.locale.trim()) {
      //   throw new Error("Locale is required");
      // }
      // if (!formData.phone.trim()) {
      //   throw new Error("Phone is required");
      // }

      // Call the API to update profile
      await apiClient.updateProfile({
        displayName: formData.name.trim(),
        locale: "",
        phone: formData.phone.trim(),
      });

      setSuccess("Profile updated successfully");
      setIsEditing(false);

      // Clear success message after 3 seconds
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
    <div className="max-w-2xl">
      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-700">{success}</p>
        </div>
      )}

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow p-6">
        {/* Avatar Section */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {user.app_metadata.displayName?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {user.app_metadata.displayName}
              </h2>
              <p className="text-gray-600">{user.profile.email}</p>
              <p className="text-gray-700">Role: {user.app_metadata.role}</p>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6 mb-8">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Display Name
            </label>
            <div className="relative">
              <UserIcon
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-50 disabled:text-gray-600"
              />
            </div>
          </div>

          {/* Locale Field */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Locale
            </label>
            <div className="relative">
              <Home className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                name="locale"
                placeholder="Locale"
                value={formData.locale}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-50 disabled:text-gray-600"
              />
            </div>
          </div> */}

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-50 disabled:text-gray-600"
              />
            </div>
          </div>

          {/* Last Login */}
          {user.app_metadata.lastLoginAt && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Login
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Last Login"
                  value={new Date(
                    user.app_metadata.lastLoginAt
                  ).toLocaleString()}
                  disabled
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-end">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700">
          To change your password, please contact IT team..
        </p>
      </div>
    </div>
  );
};
