import type React from "react";
import type { User } from "../../types";
import { Users, FileText, Activity } from "lucide-react";
import { Link } from "react-router-dom";

interface DashboardContentProps {
  user: User | null;
}

export const DashboardContent: React.FC<DashboardContentProps> = ({ user }) => {
  const stats = [
    {
      label: "Total Users",
      value: "0",
      icon: Users,
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      label: "Active Sessions",
      value: "0",
      icon: Activity,
      color: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      label: "Recent Audits",
      value: "0",
      icon: FileText,
      color: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.app_metadata?.displayName}!
        </h1>
        <p className="text-gray-600 mt-2">
          Here's what's happening in your admin dashboard today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className={`${stat.textColor} w-6 h-6`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/users"
            className="p-4 border border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-900">Manage Users</h3>
            <p className="text-sm text-gray-600 mt-1">
              View and manage user accounts and roles
            </p>
          </Link>
          <Link
            to="/audit-logs"
            className="p-4 border border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-900">View Audit Logs</h3>
            <p className="text-sm text-gray-600 mt-1">
              Check login and role change events
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
