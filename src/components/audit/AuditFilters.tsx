"use client"

import type React from "react"
import { useState } from "react"
import { Filter } from "lucide-react"

interface AuditFiltersProps {
  onApplyFilters: (filters: { userId?: string; dateRange?: string; action?: string }) => void
}

export const AuditFilters: React.FC<AuditFiltersProps> = ({ onApplyFilters }) => {
  const [showFilters, setShowFilters] = useState(false)
  const [userId, setUserId] = useState("")
  const [dateRange, setDateRange] = useState("")
  const [action, setAction] = useState("")

  const handleApply = () => {
    onApplyFilters({ userId, dateRange, action })
    setShowFilters(false)
  }

  const handleReset = () => {
    setUserId("")
    setDateRange("")
    setAction("")
    onApplyFilters({})
  }

  const actions = ["LOGIN", "LOGOUT", "ROLE_ASSIGNED", "ROLE_REMOVED"]
  const dateRanges = [
    { value: "today", label: "Today" },
    { value: "week", label: "Last 7 days" },
    { value: "month", label: "Last 30 days" },
    { value: "all", label: "All time" },
  ]

  return (
    <div className="mb-6">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <Filter size={18} />
        Filters
      </button>

      {showFilters && (
        <div className="mt-4 p-6 bg-white rounded-lg shadow border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* User ID Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">User ID</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter user ID..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Date Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All dates</option>
                {dateRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Action Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Action</label>
              <select
                value={action}
                onChange={(e) => setAction(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All actions</option>
                {actions.map((act) => (
                  <option key={act} value={act}>
                    {act.replace(/_/g, " ")}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3 justify-end">
            <button
              onClick={handleReset}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={handleApply}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
