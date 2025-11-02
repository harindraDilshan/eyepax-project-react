"use client";

import type React from "react";
import type { AuditLog } from "../../types";
import { LogIn, LogOut, Shield, AlertCircle } from "lucide-react";

interface AuditLogsListProps {
  logs: AuditLog[];
  loading: boolean;
  actionFilter?: string;
}

const getActionIcon = (action: string) => {
  switch (action) {
    case "LOGIN":
      return <LogIn className="w-5 h-5 text-green-400" />;
    case "LOGOUT":
      return <LogOut className="w-5 h-5 text-gray-400" />;
    case "ROLE_ASSIGNED":
    case "ROLE_REMOVED":
      return <Shield className="w-5 h-5 text-blue-400" />;
    default:
      return <AlertCircle className="w-5 h-5 text-yellow-400" />;
  }
};

const getActionBadgeColor = (action: string) => {
  switch (action) {
    case "LOGIN":
      return "bg-green-900/40 text-green-300 border border-green-700";
    case "LOGOUT":
      return "bg-gray-800/50 text-gray-300 border border-gray-700";
    case "ROLE_ASSIGNED":
      return "bg-blue-900/40 text-blue-300 border border-blue-700";
    case "ROLE_REMOVED":
      return "bg-red-900/40 text-red-300 border border-red-700";
    default:
      return "bg-gray-800/50 text-gray-300 border border-gray-700";
  }
};

export const AuditLogsList: React.FC<AuditLogsListProps> = ({ logs, loading }) => {
  if (loading) {
    return (
      <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-lg p-6">
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-4 border-gray-700 border-t-indigo-500 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (logs.length === 0) {
    return (
      <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-lg p-6">
        <div className="text-center py-12">
          <p className="text-gray-400">No audit logs found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {logs.map((log) => (
        <div
          key={log.id}
          className="bg-gray-900/80 backdrop-blur-lg rounded-xl border border-gray-800 hover:border-indigo-600 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300 p-5"
        >
          <div className="flex items-start gap-5">
            {/* Icon Section */}
            <div className="flex-shrink-0 mt-1 bg-gray-800/60 p-3 rounded-lg border border-gray-700">
              {getActionIcon(log.eventType)}
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-semibold text-gray-100 text-base">
                    {log.details?.email || "Unknown User"}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {log.userAgent || "No user agent info"}
                  </p>
                </div>

                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getActionBadgeColor(
                    log.eventType
                  )}`}
                >
                  {log.eventType.replace(/_/g, " ")}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 border-t border-gray-800 pt-3 mt-3">
                <span className="flex items-center gap-1">
                  🕒 {new Date(log.details?.timestamp).toLocaleString()}
                </span>
                {log.ip && <span>🌐 IP: {log.ip}</span>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
