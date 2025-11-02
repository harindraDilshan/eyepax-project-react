import type React from "react"
import { useState } from "react"
import { MainLayout } from "../components/layout/MainLayout"
import { ProfileSettings } from "../components/settings/ProfileSettings"
// import { RoleManagement } from "../components/settings/RoleManagement"
import { useAuth } from "../context/AuthContext"
import { User, Shield } from "lucide-react"

export const SettingsPage: React.FC = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<"profile" | "roles">("profile")

  const tabs = [
    { id: "profile", label: "Profile Settings", icon: User },
    // { id: "roles", label: "Role Management", icon: Shield },
  ]

  return (
    <MainLayout>
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your profile and role permissions</p>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex gap-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "profile" | "roles")}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium transition-colors ${
                    isActive
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "profile" && user && <ProfileSettings user={user} />}
          {/* {activeTab === "roles" && user && <RoleManagement user={user} />} */}
        </div>
      </div>
    </MainLayout>
  )
}
