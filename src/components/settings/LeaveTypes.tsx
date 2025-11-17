"use client";

import React, { useState, useEffect } from "react";
import {
  AlertCircle,
  CheckCircle,
  Calendar,
  Edit2,
  Save,
  X,
  Loader2,
} from "lucide-react";

interface LeaveType {
  leave_type_id: number;
  name: string;
  description: string;
  accrual_frequency: string;
  accrual_amount: string;
  no_pay_effect: boolean;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  userSync: string;
  message: string;
  user: {
    employee_id: number;
    email: string;
    cognito_groups: string;
  };
  totalRecords: number;
  leaveTypes: LeaveType[];
  timestamp: string;
}

export default function LeaveTypesManager() {
  const [leaveTypes, setLeaveTypes] = useState<LeaveType[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<LeaveType>>({});
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const API_BASE_URL =
    "https://8iv05x1jp7.execute-api.us-east-1.amazonaws.com/prod/leave/types";

  // Fetch leave types on component mount
  useEffect(() => {
    fetchLeaveTypes();
  }, []);

  const fetchLeaveTypes = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("accessToken");
      
      const response = await fetch(API_BASE_URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch leave types");
      }

      const data: ApiResponse = await response.json();
      setLeaveTypes(data.leaveTypes);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (leaveType: LeaveType) => {
    setEditingId(leaveType.leave_type_id);
    setFormData({
      leave_type_id: leaveType.leave_type_id,
      description: leaveType.description,
      accrual_frequency: leaveType.accrual_frequency,
      accrual_amount: leaveType.accrual_amount,
      no_pay_effect: leaveType.no_pay_effect,
    });
    setError(null);
    setSuccess(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({});
    setError(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    if (!formData.leave_type_id) return;

    setIsSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const token = localStorage.getItem("accessToken");

      const updatePayload = {
        leave_type_id: formData.leave_type_id,
        description: formData.description,
        accrual_frequency: formData.accrual_frequency,
        accrual_amount: parseFloat(formData.accrual_amount || "0"),
        no_pay_effect: formData.no_pay_effect,
      };

      const response = await fetch(API_BASE_URL, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePayload),
      });

      if (!response.ok) {
        throw new Error("Failed to update leave type");
      }

      setSuccess("Leave type updated successfully");
      setEditingId(null);
      setFormData({});
      
      // Refresh the data
      await fetchLeaveTypes();
      
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
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

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-100 tracking-wide">
          Leave Types Management
        </h1>
        <p className="text-gray-400 mt-2">
          Manage and configure leave types for your organization
        </p>
      </div>

      {/* Leave Types Grid */}
      <div className="space-y-4">
        {leaveTypes.map((leaveType) => {
          const isEditing = editingId === leaveType.leave_type_id;

          return (
            <div
              key={leaveType.leave_type_id}
              className="bg-gray-900/80 backdrop-blur-lg rounded-xl border border-gray-800 shadow-lg p-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-lg font-bold shadow-inner">
                    {leaveType.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 capitalize">
                      {leaveType.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      ID: {leaveType.leave_type_id}
                    </p>
                  </div>
                </div>
                {!isEditing && (
                  <button
                    onClick={() => handleEdit(leaveType)}
                    className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
                  >
                    <Edit2 size={18} />
                  </button>
                )}
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={
                      isEditing
                        ? formData.description || ""
                        : leaveType.description
                    }
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    rows={2}
                    className="w-full px-4 py-2 bg-gray-800/70 border border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-60 transition resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Accrual Frequency */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Accrual Frequency
                    </label>
                    <select
                      name="accrual_frequency"
                      value={
                        isEditing
                          ? formData.accrual_frequency || ""
                          : leaveType.accrual_frequency
                      }
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 bg-gray-800/70 border border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-60 transition"
                    >
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                      <option value="quarterly">Quarterly</option>
                    </select>
                  </div>

                  {/* Accrual Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Accrual Amount
                    </label>
                    <input
                      type="number"
                      name="accrual_amount"
                      step="0.01"
                      value={
                        isEditing
                          ? formData.accrual_amount || ""
                          : leaveType.accrual_amount
                      }
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 bg-gray-800/70 border border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-60 transition"
                    />
                  </div>

                  {/* No Pay Effect */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      No Pay Effect
                    </label>
                    <div className="flex items-center h-[42px]">
                      <input
                        type="checkbox"
                        name="no_pay_effect"
                        checked={
                          isEditing
                            ? formData.no_pay_effect || false
                            : leaveType.no_pay_effect
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-5 h-5 bg-gray-800 border border-gray-700 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 transition"
                      />
                      <span className="ml-2 text-gray-300 text-sm">
                        {isEditing
                          ? formData.no_pay_effect
                            ? "Yes"
                            : "No"
                          : leaveType.no_pay_effect
                          ? "Yes"
                          : "No"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>
                      Updated: {new Date(leaveType.updated_at).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {isEditing && (
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-800">
                  <button
                    onClick={handleCancel}
                    className="px-5 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition flex items-center gap-2"
                  >
                    <X size={18} />
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg disabled:opacity-50 transition flex items-center gap-2"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save size={18} />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {leaveTypes.length === 0 && !isLoading && (
        <div className="text-center py-12 text-gray-400">
          <p>No leave types found</p>
        </div>
      )}
    </div>
  );
}