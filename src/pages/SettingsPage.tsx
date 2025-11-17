import type React from "react";
import { useState } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { ProfileSettings } from "../components/settings/ProfileSettings";
// import { RoleManagement } from "../components/settings/RoleManagement"
import { useAuth } from "../context/AuthContext";
import { User, Unplug } from "lucide-react";
import LeaveTypesManager from "@/components/settings/LeaveTypes";

export const SettingsPage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"profile" | "leave-types">("profile");

  const tabs = [
    { id: "profile", label: "Profile Settings", icon: User },
    { id: "leave-types", label: "Leave Types", icon: Unplug },
    // { id: "roles", label: "Role Management", icon: Shield },
  ];

  return (
    <MainLayout>
      <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-lg border border-gray-700 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-gray-400 mt-2">
              Manage your profile and role permissions
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 border-b border-gray-700">
            <div className="flex justify-center gap-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as "profile" | "leave-types")}
                    className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium transition-all duration-200 ${
                      isActive
                        ? "border-indigo-500 text-indigo-400"
                        : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={isActive ? "text-indigo-400" : "text-gray-400"}
                    />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-900 rounded-xl shadow-inner border border-gray-700 p-6 text-center">
            {activeTab === "profile" && user && <ProfileSettings user={user} />}
            {/* {activeTab === "roles" && user && <RoleManagement user={user} />} */}
            {activeTab === "leave-types" && <LeaveTypesManager/>}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
