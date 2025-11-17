import type React from "react";
import type { User } from "../../types";
import { Users, ShieldCheck, Server, Settings, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface DashboardContentProps {
  user: User | null;
}

export const DashboardContent: React.FC<DashboardContentProps> = ({ user }) => {
  const stats = [
    {
      label: "Registered Users",
      value: "0",
      icon: Users,
      color: "text-blue-400",
      bg: "bg-blue-900/40",
    },
    {
      label: "System Security",
      value: "OK",
      icon: ShieldCheck,
      color: "text-green-400",
      bg: "bg-green-900/40",
    },
    {
      label: "Server Health",
      value: "Active",
      icon: Server,
      color: "text-yellow-400",
      bg: "bg-yellow-900/40",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 space-y-12">
      {/* Header Section */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        <div className="flex-1 text-center lg:text-left space-y-3">
          <h1 className="text-4xl font-extrabold">
            Welcome,{" "}
            <span className="text-indigo-400">
              {user?.app_metadata?.displayName || "Admin"}
            </span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
            Here’s a quick snapshot of your system and what’s happening today.
          </p>
        </div>

        {/* Quick Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`rounded-xl p-5 ${stat.bg} border border-gray-700 hover:border-gray-600 transition-all duration-300 flex flex-col items-center justify-center`}
              >
                <Icon className={`${stat.color} w-7 h-7 mb-3`} />
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-2xl font-semibold text-white mt-1">{stat.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* System Summary Panel */}
      <section className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 shadow-md">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">System Status</h2>
            <p className="text-gray-400 mt-2 max-w-lg">
              Monitor users, security metrics, and server stability in real time.
            </p>
          </div>
          <Link
            to="/settings"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition-all"
          >
            <Settings size={18} />
            System Settings
          </Link>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-200 mb-6 text-center">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link
            to="/users"
            className="group bg-gray-800/70 border border-gray-700 hover:border-blue-500 rounded-2xl p-6 flex flex-col justify-between shadow-md transition-all duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition">
                Manage Users
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Review, edit, and assign roles to users across your system.
              </p>
            </div>
            <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
              Go to Users <ArrowUpRight size={16} className="ml-1" />
            </div>
          </Link>

          <Link
            to="/leave-management"
            className="group bg-gray-800/70 border border-gray-700 hover:border-blue-500 rounded-2xl p-6 flex flex-col justify-between shadow-md transition-all duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition">
                Manage Leaves
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Review, edit, and assign roles to users across your system.
              </p>
            </div>
            <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
              Go to Users <ArrowUpRight size={16} className="ml-1" />
            </div>
          </Link>

          <Link
            to="/attendance-logs"
            className="group bg-gray-800/70 border border-gray-700 hover:border-blue-500 rounded-2xl p-6 flex flex-col justify-between shadow-md transition-all duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition">
                Attendance Logs
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Review, edit, and assign roles to users across your system.
              </p>
            </div>
            <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
              Go to Attendance Logs <ArrowUpRight size={16} className="ml-1" />
            </div>
          </Link>


          <Link
            to="/audit-logs"
            className="group bg-gray-800/70 border border-gray-700 hover:border-purple-500 rounded-2xl p-6 flex flex-col justify-between shadow-md transition-all duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-100 group-hover:text-purple-400 transition">
                Audit Activity
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Track login attempts, administrative actions, and user changes.
              </p>
            </div>
            <div className="mt-4 flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
              View Logs <ArrowUpRight size={16} className="ml-1" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
