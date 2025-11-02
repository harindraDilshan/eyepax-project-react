"use client"

import type React from "react"
import type { AuditLog } from "../../types"
import { LogIn, LogOut, Shield, AlertCircle } from "lucide-react"

interface AuditLogsListProps {
  logs: AuditLog[]
  loading: boolean
  actionFilter?: string
}

const getActionIcon = (action: string) => {
  switch (action) {
    case "LOGIN":
      return <LogIn className="w-5 h-5 text-green-600" />
    case "LOGOUT":
      return <LogOut className="w-5 h-5 text-gray-600" />
    case "ROLE_ASSIGNED":
    case "ROLE_REMOVED":
      return <Shield className="w-5 h-5 text-blue-600" />
    default:
      return <AlertCircle className="w-5 h-5 text-gray-600" />
  }
}

const getActionBadgeColor = (action: string) => {
  switch (action) {
    case "LOGIN":
      return "bg-green-100 text-green-800"
    case "LOGOUT":
      return "bg-gray-100 text-gray-800"
    case "ROLE_ASSIGNED":
      return "bg-blue-100 text-blue-800"
    case "ROLE_REMOVED":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export const AuditLogsList: React.FC<AuditLogsListProps> = ({ logs, loading }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  if (logs.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center py-12">
          <p className="text-gray-500">No audit logs found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {logs.map((log) => (
        <div
          key={log.id}
          className="bg-white rounded-lg shadow p-4 border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 mt-1">{getActionIcon(log.eventType)}</div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold text-gray-900">{log.details?.email}</h3>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getActionBadgeColor(log.eventType)}`}
                >
                  {log.eventType.replace(/_/g, " ")}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{log.userAgent}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>{new Date(log.details?.timestamp).toLocaleString()}</span>
                {log.ip && <span>IP: {log.ip}</span>}
              </div>
            </div>

            {/* Timestamp */}
            <div className="flex-shrink-0 text-right">
              <p className="text-xs text-gray-500">{new Date(log.details?.timestamp).toLocaleDateString()}</p>
              <p className="text-xs text-gray-500">{new Date(log.details?.timestamp).toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
