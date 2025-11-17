# 📁 PROJECT EXPORT FOR LLMs

## 📊 Project Information

- **Project Name**: `eyepax-project-react`
- **Generated On**: 2025-11-14 05:30:05 (Asia/Colombo / GMT+06:30)
- **Total Files Processed**: 45
- **Export Tool**: Easy Whole Project to Single Text File for LLMs v1.1.0
- **Tool Author**: Jota / José Guilherme Pandolfi

### ⚙️ Export Configuration

| Setting | Value |
|---------|-------|
| Language | `en` |
| Max File Size | `1 MB` |
| Include Hidden Files | `false` |
| Output Format | `both` |

## 🌳 Project Structure

```
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 approvals/
│   │   │   └── 📄 LeaveRequestsList.tsx (5.36 KB)
│   │   ├── 📁 audit/
│   │   │   ├── 📄 AuditFilters.tsx (4.04 KB)
│   │   │   └── 📄 AuditLogsList.tsx (3.72 KB)
│   │   ├── 📁 dashboard/
│   │   │   └── 📄 DashboardContent.tsx (5.8 KB)
│   │   ├── 📁 layout/
│   │   │   ├── 📄 Header.tsx (2.42 KB)
│   │   │   ├── 📄 MainLayout.tsx (1.17 KB)
│   │   │   └── 📄 Sidebar.tsx (2.83 KB)
│   │   ├── 📁 policies/
│   │   │   ├── 📄 LeavePoliciesList.tsx (4.61 KB)
│   │   │   └── 📄 LeavePolicyForm.tsx (6.6 KB)
│   │   ├── 📁 reports/
│   │   │   └── 📄 PayrollReport.tsx (4.95 KB)
│   │   ├── 📁 settings/
│   │   │   ├── 📄 LeaveTypes.tsx (12.92 KB)
│   │   │   ├── 📄 ProfileSettings.tsx (7.14 KB)
│   │   │   └── 📄 RoleManagement.tsx (4.49 KB)
│   │   ├── 📁 users/
│   │   │   ├── 📄 UserDetailModal.tsx (8.63 KB)
│   │   │   └── 📄 UsersList.tsx (3.81 KB)
│   │   ├── 📄 AdminRoute.tsx (1.41 KB)
│   │   └── 📄 ProtectedRoute.tsx (772 B)
│   ├── 📁 context/
│   │   └── 📄 AuthContext.tsx (3.03 KB)
│   ├── 📁 pages/
│   │   ├── 📄 ApprovalsPage.tsx (308 B)
│   │   ├── 📄 AttendanceLogsPage.tsx (9.9 KB)
│   │   ├── 📄 AuditLogsPage.tsx (4.87 KB)
│   │   ├── 📄 DashboardPage.tsx (839 B)
│   │   ├── 📄 LeavePoliciesPage.tsx (311 B)
│   │   ├── 📄 LoginPage.tsx (1.1 KB)
│   │   ├── 📄 ReportsPage.tsx (292 B)
│   │   ├── 📄 SettingsPage.tsx (2.86 KB)
│   │   └── 📄 UsersPage.tsx (5.23 KB)
│   ├── 📁 services/
│   │   └── 📄 api.ts (6.67 KB)
│   ├── 📁 types/
│   │   └── 📄 index.ts (1.89 KB)
│   ├── 📄 App.tsx (2.51 KB)
│   ├── 📄 index.css (429 B)
│   └── 📄 main.tsx (246 B)
├── 📄 index.html (377 B)
├── 📄 next-env.d.ts (259 B)
├── 📄 package-lock.json (471.79 KB)
├── 📄 package.json (1.53 KB)
├── 📄 postcss.config.js (86 B)
├── 📄 README.md (2.01 KB)
├── 📄 structure.txt (2.47 KB)
├── 📄 tailwind.config.js (340 B)
├── 📄 test_index.html (17.35 KB)
├── 📄 testconfig.js
├── 📄 tsconfig.json (774 B)
├── 📄 tsconfig.node.json (223 B)
└── 📄 vite.config.ts (412 B)
```

## 📑 Table of Contents

**Project Files:**

- [📄 src/components/approvals/LeaveRequestsList.tsx](#📄-src-components-approvals-leaverequestslist-tsx)
- [📄 src/components/audit/AuditFilters.tsx](#📄-src-components-audit-auditfilters-tsx)
- [📄 src/components/audit/AuditLogsList.tsx](#📄-src-components-audit-auditlogslist-tsx)
- [📄 src/components/dashboard/DashboardContent.tsx](#📄-src-components-dashboard-dashboardcontent-tsx)
- [📄 src/components/layout/Header.tsx](#📄-src-components-layout-header-tsx)
- [📄 src/components/layout/MainLayout.tsx](#📄-src-components-layout-mainlayout-tsx)
- [📄 src/components/layout/Sidebar.tsx](#📄-src-components-layout-sidebar-tsx)
- [📄 src/components/policies/LeavePoliciesList.tsx](#📄-src-components-policies-leavepolicieslist-tsx)
- [📄 src/components/policies/LeavePolicyForm.tsx](#📄-src-components-policies-leavepolicyform-tsx)
- [📄 src/components/reports/PayrollReport.tsx](#📄-src-components-reports-payrollreport-tsx)
- [📄 src/components/settings/LeaveTypes.tsx](#📄-src-components-settings-leavetypes-tsx)
- [📄 src/components/settings/ProfileSettings.tsx](#📄-src-components-settings-profilesettings-tsx)
- [📄 src/components/settings/RoleManagement.tsx](#📄-src-components-settings-rolemanagement-tsx)
- [📄 src/components/users/UserDetailModal.tsx](#📄-src-components-users-userdetailmodal-tsx)
- [📄 src/components/users/UsersList.tsx](#📄-src-components-users-userslist-tsx)
- [📄 src/components/AdminRoute.tsx](#📄-src-components-adminroute-tsx)
- [📄 src/components/ProtectedRoute.tsx](#📄-src-components-protectedroute-tsx)
- [📄 src/context/AuthContext.tsx](#📄-src-context-authcontext-tsx)
- [📄 src/pages/ApprovalsPage.tsx](#📄-src-pages-approvalspage-tsx)
- [📄 src/pages/AttendanceLogsPage.tsx](#📄-src-pages-attendancelogspage-tsx)
- [📄 src/pages/AuditLogsPage.tsx](#📄-src-pages-auditlogspage-tsx)
- [📄 src/pages/DashboardPage.tsx](#📄-src-pages-dashboardpage-tsx)
- [📄 src/pages/LeavePoliciesPage.tsx](#📄-src-pages-leavepoliciespage-tsx)
- [📄 src/pages/LoginPage.tsx](#📄-src-pages-loginpage-tsx)
- [📄 src/pages/ReportsPage.tsx](#📄-src-pages-reportspage-tsx)
- [📄 src/pages/SettingsPage.tsx](#📄-src-pages-settingspage-tsx)
- [📄 src/pages/UsersPage.tsx](#📄-src-pages-userspage-tsx)
- [📄 src/services/api.ts](#📄-src-services-api-ts)
- [📄 src/types/index.ts](#📄-src-types-index-ts)
- [📄 src/App.tsx](#📄-src-app-tsx)
- [📄 src/index.css](#📄-src-index-css)
- [📄 src/main.tsx](#📄-src-main-tsx)
- [📄 index.html](#📄-index-html)
- [📄 next-env.d.ts](#📄-next-env-d-ts)
- [📄 package-lock.json](#📄-package-lock-json)
- [📄 package.json](#📄-package-json)
- [📄 postcss.config.js](#📄-postcss-config-js)
- [📄 README.md](#📄-readme-md)
- [📄 structure.txt](#📄-structure-txt)
- [📄 tailwind.config.js](#📄-tailwind-config-js)
- [📄 test_index.html](#📄-test-index-html)
- [📄 testconfig.js](#📄-testconfig-js)
- [📄 tsconfig.json](#📄-tsconfig-json)
- [📄 tsconfig.node.json](#📄-tsconfig-node-json)
- [📄 vite.config.ts](#📄-vite-config-ts)

---

## 📈 Project Statistics

| Metric | Count |
|--------|-------|
| Total Files | 45 |
| Total Directories | 14 |
| Text Files | 45 |
| Binary Files | 0 |
| Total Size | 618.66 KB |

### 📄 File Types Distribution

| Extension | Count |
|-----------|-------|
| `.tsx` | 29 |
| `.ts` | 4 |
| `.json` | 4 |
| `.js` | 3 |
| `.html` | 2 |
| `.css` | 1 |
| `.md` | 1 |
| `.txt` | 1 |

## 💻 File Code Contents

### <a id="📄-src-components-approvals-leaverequestslist-tsx"></a>📄 `src/components/approvals/LeaveRequestsList.tsx`

**File Info:**
- **Size**: 5.36 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/approvals/LeaveRequestsList.tsx`
- **Relative Path**: `src/components/approvals`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `d22c9bd60a93ac379c7b752838bdb7f4`
- **SHA256**: `3a7f2cecb98ec4be3b91085df6e95ab3d3fe62dcc99234ff3cd31cf87cc59444`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useEffect, useState } from "react";
import { getLeaveRequests, updateLeaveRequestStatus } from "../../services/api";
import { Clock, CheckCircle, XCircle, FileText } from "lucide-react";

interface LeaveRequest {
  id: string;
  user_id: string;
  policy_id: string;
  start_date: string;
  end_date: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  reason: string;
  created_at: string;
}

export default function LeaveRequestsList() {
  const [requests, setRequests] = useState<LeaveRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const actorUserId =
    localStorage.getItem("userId") || "7fcd6769-617b-4454-b6c7-2d15cddf9c11";

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    setLoading(true);
    try {
      const data = await getLeaveRequests();
      setRequests(data);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id: string, status: "APPROVED" | "REJECTED") => {
    setActionLoading(id);
    try {
      await updateLeaveRequestStatus(id, {
        status,
        actor_user_id: actorUserId,
      });
      loadRequests();
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-indigo-600" />
          Leave Requests
        </h2>
      </div>

      {requests.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No leave requests found
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50 text-sm text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left font-medium">User ID</th>
                <th className="px-4 py-3 text-left font-medium">Policy ID</th>
                <th className="px-4 py-3 text-center font-medium">Dates</th>
                <th className="px-4 py-3 text-center font-medium">Reason</th>
                <th className="px-4 py-3 text-center font-medium">Status</th>
                <th className="px-4 py-3 text-center font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {requests.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    {r.user_id}
                  </td>
                  <td className="px-4 py-3">{r.policy_id}</td>
                  <td className="px-4 py-3 text-center">
                    {r.start_date} → {r.end_date}
                  </td>
                  <td className="px-4 py-3 text-center">{r.reason}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        r.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-700"
                          : r.status === "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center space-x-2">
                    {r.status === "PENDING" ? (
                      <>
                        <button
                          disabled={!!actionLoading}
                          onClick={() => handleAction(r.id, "APPROVED")}
                          className="inline-flex items-center px-3 py-1.5 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                        >
                          <CheckCircle className="w-4 h-4 mr-1" /> Approve
                        </button>
                        <button
                          disabled={!!actionLoading}
                          onClick={() => handleAction(r.id, "REJECTED")}
                          className="inline-flex items-center px-3 py-1.5 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
                        >
                          <XCircle className="w-4 h-4 mr-1" /> Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-gray-400 text-sm flex items-center justify-center gap-1">
                        <Clock className="w-4 h-4" /> Completed
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

```

---

### <a id="📄-src-components-audit-auditfilters-tsx"></a>📄 `src/components/audit/AuditFilters.tsx`

**File Info:**
- **Size**: 4.04 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/audit/AuditFilters.tsx`
- **Relative Path**: `src/components/audit`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `050aaaab6af8dbaa95ec1ccf0d13f79e`
- **SHA256**: `df96decb4c567f651444e6bf85d85d2dd26061b9e276313f252493f0bf15ae75`
- **Encoding**: ASCII

**File code content:**

```typescript
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

```

---

### <a id="📄-src-components-audit-auditlogslist-tsx"></a>📄 `src/components/audit/AuditLogsList.tsx`

**File Info:**
- **Size**: 3.72 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/audit/AuditLogsList.tsx`
- **Relative Path**: `src/components/audit`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 10:03:36 (Asia/Colombo / GMT+06:30)
- **MD5**: `ae21f08bf899ba01cf9886351fc5af8b`
- **SHA256**: `5ff260fafff7a1a01324072fae28c14c07d0f5be31fec0fc2dc0ab3e9cc3c9d3`
- **Encoding**: ASCII

**File code content:**

```typescript
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

```

---

### <a id="📄-src-components-dashboard-dashboardcontent-tsx"></a>📄 `src/components/dashboard/DashboardContent.tsx`

**File Info:**
- **Size**: 5.8 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/dashboard/DashboardContent.tsx`
- **Relative Path**: `src/components/dashboard`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-13 08:39:56 (Asia/Colombo / GMT+06:30)
- **MD5**: `3e602b6523dc370d0bdc47653d16a881`
- **SHA256**: `68440fb20543c1805459793c1574c159dce6e9c42ff77d80ccb0430c3dc89a55`
- **Encoding**: ASCII

**File code content:**

```typescript
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

```

---

### <a id="📄-src-components-layout-header-tsx"></a>📄 `src/components/layout/Header.tsx`

**File Info:**
- **Size**: 2.42 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/layout/Header.tsx`
- **Relative Path**: `src/components/layout`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:50:54 (Asia/Colombo / GMT+06:30)
- **MD5**: `c010b848f747c35fbcbf264cae0ec51c`
- **SHA256**: `bece3a2c8338330e5b270c42d871c1eee54956e37b26a6b0b4285f0a6df035a5`
- **Encoding**: ASCII

**File code content:**

```typescript
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Menu, LogOut } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = React.useState(false);

  return (
    <header className="h-16 bg-gray-900 border-b border-gray-700 flex items-center justify-between px-6 text-gray-100 shadow-md">
      {/* Left */}
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        aria-label="Open/Close menu"
      >
        <Menu size={20} className="text-gray-300" />
      </button>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="User menu"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              {user?.app_metadata?.displayName.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-medium text-gray-200">
              {user?.app_metadata?.displayName}
            </span>
          </button>

          {/* Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 backdrop-blur-md">
              <div className="p-4 border-b border-gray-700">
                <p className="text-sm font-medium text-gray-100">
                  {user?.profile.name}
                </p>
                <p className="text-xs text-gray-400">{user?.profile.email}</p>
              </div>
              <button
                onClick={() => {
                  setShowUserMenu(false);
                  logout();
                }}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-900/30 transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

```

---

### <a id="📄-src-components-layout-mainlayout-tsx"></a>📄 `src/components/layout/MainLayout.tsx`

**File Info:**
- **Size**: 1.17 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/layout/MainLayout.tsx`
- **Relative Path**: `src/components/layout`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:48:02 (Asia/Colombo / GMT+06:30)
- **MD5**: `cc7e6d8760bf19a130e91887f56e8488`
- **SHA256**: `8ebe796a02424cca5a8dfcd7f835acf47b99e6bcfcde61dc91422a71f9db5208`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client"

import type React from "react"
import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-900/60 backdrop-blur-sm">
          <div className="p-6">
            <div className="bg-gray-800/70 rounded-2xl shadow-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

```

---

### <a id="📄-src-components-layout-sidebar-tsx"></a>📄 `src/components/layout/Sidebar.tsx`

**File Info:**
- **Size**: 2.83 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/layout/Sidebar.tsx`
- **Relative Path**: `src/components/layout`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-13 08:26:01 (Asia/Colombo / GMT+06:30)
- **MD5**: `5aa7881f586ad8c863201324c0893434`
- **SHA256**: `165b4440669b53c03ff55ad04586718d62026145bb5f0f23185a1091a2211af8`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";

import type React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/users", label: "Manage Users", icon: Users },
    { path: "/attendance-logs", label: "Attendance Logs", icon: FileText },
    { path: "/audit-logs", label: "Audit Logs", icon: FileText },
    { path: "/settings", label: "System Settings", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100 transition-all duration-300 flex flex-col shadow-xl`}
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
        {isOpen && (
          <span className="font-bold text-lg tracking-wide text-indigo-400">
            ADMIN PANEL
          </span>
        )}
        <button
          onClick={onToggle}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Toggle Sidebar"
        >
          {isOpen ? (
            <ChevronLeft size={20} className="text-gray-300" />
          ) : (
            <ChevronRight size={20} className="text-gray-300" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                active
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-800"
                  : "text-gray-300 hover:bg-gray-800 hover:text-indigo-400"
              }`}
            >
              <Icon size={20} />
              {isOpen && (
                <span className="font-medium tracking-wide">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 text-center">
        <p className="text-xs text-gray-500 tracking-wider">
          {isOpen ? "© 2025 Admin Portal — Secure & Smart" : "v1.0"}
        </p>
      </div>
    </div>
  );
};

```

---

### <a id="📄-src-components-policies-leavepolicieslist-tsx"></a>📄 `src/components/policies/LeavePoliciesList.tsx`

**File Info:**
- **Size**: 4.61 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/policies/LeavePoliciesList.tsx`
- **Relative Path**: `src/components/policies`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `5b8fb611579650cde3e27ed1c91a700e`
- **SHA256**: `f48f4110b6b3416ba5d7cfaeaa2716818a75ef062547878a1873c254da9241c1`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useEffect, useState } from "react";
import { getPolicies, updatePolicy, createPolicy } from "../../services/api";
import { PlusCircle, Edit, FileText } from "lucide-react";
import LeavePolicyForm from "./LeavePolicyForm";

interface Policy {
  id: string;
  name: string;
  description: string;
  default_days: number;
  requires_approval: boolean;
  created_at?: string;
}

export default function LeavePoliciesList() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [selected, setSelected] = useState<Policy | null>(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadPolicies();
  }, []);

  const loadPolicies = async () => {
    try {
      setLoading(true);
      const data = await getPolicies();
      setPolicies(data);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (formData: Partial<Policy>) => {
    if (selected) await updatePolicy(selected.id, formData);
    else await createPolicy(formData as any);
    setShowForm(false);
    setSelected(null);
    loadPolicies();
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-indigo-600" />
          Leave Policies
        </h2>
        <button
          onClick={() => {
            setSelected(null);
            setShowForm(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <PlusCircle className="w-4 h-4" /> New Policy
        </button>
      </div>

      {policies.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No policies available</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50 text-sm text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Name</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
                <th className="px-4 py-3 text-center font-medium">Default Days</th>
                <th className="px-4 py-3 text-center font-medium">Approval</th>
                <th className="px-4 py-3 text-center font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {policies.map((p) => (
                <tr
                  key={p.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-4 py-3">{p.description}</td>
                  <td className="px-4 py-3 text-center">{p.default_days}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        p.requires_approval
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {p.requires_approval ? "Required" : "Not Required"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => {
                        setSelected(p);
                        setShowForm(true);
                      }}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <Edit className="w-4 h-4 mr-1" /> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <LeavePolicyForm
          initialData={selected}
          onClose={() => setShowForm(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

```

---

### <a id="📄-src-components-policies-leavepolicyform-tsx"></a>📄 `src/components/policies/LeavePolicyForm.tsx`

**File Info:**
- **Size**: 6.6 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/policies/LeavePolicyForm.tsx`
- **Relative Path**: `src/components/policies`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `345323e4c7653a0158cd505265cf51a5`
- **SHA256**: `3c6c3e9d0931c2976eca0387f0bcb7d8cf77d3b547aa3b7d9e36fec995368abb`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useState } from "react";
import { XCircle, AlertCircle } from "lucide-react";

interface LeavePolicyFormProps {
  initialData?: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

export default function LeavePolicyForm({
  initialData,
  onClose,
  onSave,
}: LeavePolicyFormProps) {
  const [form, setForm] = useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
    default_days: initialData?.default_days || 0,
    requires_approval: initialData?.requires_approval || false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [target.name]: target.checked }));
    } else {
      setForm((prev) => ({ ...prev, [target.name]: target.value }));
    }
  };

  // 🔍 Validation function
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) {
      newErrors.name = "Policy name is required.";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Policy name must be at least 3 characters.";
    }

    if (form.description.trim().length > 200) {
      newErrors.description = "Description can't exceed 200 characters.";
    }

    const days = Number(form.default_days);
    if (!days || isNaN(days)) {
      newErrors.default_days = "Default days must be a valid number.";
    } else if (days < 1 || days > 60) {
      newErrors.default_days = "Default days must be between 1 and 60.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      onSave(form);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative border border-gray-200">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <XCircle className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {initialData ? "Edit Leave Policy" : "New Leave Policy"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Policy Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${
                errors.name
                  ? "border-red-400 focus:ring-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${
                errors.description
                  ? "border-red-400 focus:ring-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.description}
              </p>
            )}
          </div>

          {/* Default Days */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Days
            </label>
            <input
              type="number"
              name="default_days"
              value={form.default_days}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${
                errors.default_days
                  ? "border-red-400 focus:ring-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.default_days && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.default_days}
              </p>
            )}
          </div>

          {/* Requires Approval */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="requires_approval"
              checked={form.requires_approval}
              onChange={handleChange}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label className="text-sm text-gray-700">
              Requires approval for requests
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-5 py-2 rounded-lg text-white transition-colors ${
                isSubmitting
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

```

---

### <a id="📄-src-components-reports-payrollreport-tsx"></a>📄 `src/components/reports/PayrollReport.tsx`

**File Info:**
- **Size**: 4.95 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/reports/PayrollReport.tsx`
- **Relative Path**: `src/components/reports`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `068f06372a868303d3f87241911112d9`
- **SHA256**: `5cc615e0882f7e3e58278a48c2b4b1a601f1fcde4905dcbdd7c6e1243a894e30`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useState } from "react";
import { getPayrollReport, downloadPayrollCSV } from "../../services/api";
import { FileSpreadsheet, Download, Calendar } from "lucide-react";

interface PayrollRow {
  user_id: string;
  present_days: number;
  leave_days: number;
  absent_days: number;
  total_hours: string;
  range_start: string;
  range_end: string;
}

export default function PayrollReport() {
  const today = new Date().toISOString().split("T")[0];
  const [start, setStart] = useState("2025-10-01");
  const [end, setEnd] = useState(today);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PayrollRow[]>([]);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const res = await getPayrollReport(start, end);
      setData(res);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    const blob = await downloadPayrollCSV(start, end);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `payroll-${start}_to_${end}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <FileSpreadsheet className="w-6 h-6 text-indigo-600" />
          Payroll Report
        </h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={handleFetch}
          disabled={loading}
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Loading..." : "Generate"}
        </button>
        {data.length > 0 && (
          <button
            onClick={handleDownload}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Export CSV
          </button>
        )}
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
        </div>
      ) : data.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No payroll data found for this period.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50 text-sm text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left font-medium">User ID</th>
                <th className="px-4 py-3 text-center font-medium">
                  Present Days
                </th>
                <th className="px-4 py-3 text-center font-medium">
                  Leave Days
                </th>
                <th className="px-4 py-3 text-center font-medium">
                  Absent Days
                </th>
                <th className="px-4 py-3 text-center font-medium">
                  Total Hours
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {data.map((row) => (
                <tr
                  key={row.user_id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {row.user_id}
                  </td>
                  <td className="px-4 py-3 text-center">{row.present_days}</td>
                  <td className="px-4 py-3 text-center">{row.leave_days}</td>
                  <td className="px-4 py-3 text-center">{row.absent_days}</td>
                  <td className="px-4 py-3 text-center">{row.total_hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

```

---

### <a id="📄-src-components-settings-leavetypes-tsx"></a>📄 `src/components/settings/LeaveTypes.tsx`

**File Info:**
- **Size**: 12.92 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/settings/LeaveTypes.tsx`
- **Relative Path**: `src/components/settings`
- **Created**: 2025-11-14 03:59:42 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-14 05:27:17 (Asia/Colombo / GMT+06:30)
- **MD5**: `788b482b8a244efdd84c27c9819e8ca3`
- **SHA256**: `c7cba63bf87c820f9bbf84d4135d8c5e34205c6f4a6b1be8db8691a06d246ab2`
- **Encoding**: ASCII

**File code content:**

```typescript
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
```

---

### <a id="📄-src-components-settings-profilesettings-tsx"></a>📄 `src/components/settings/ProfileSettings.tsx`

**File Info:**
- **Size**: 7.14 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/settings/ProfileSettings.tsx`
- **Relative Path**: `src/components/settings`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 10:06:18 (Asia/Colombo / GMT+06:30)
- **MD5**: `edb4ed197b03df90619f68977dd0bc12`
- **SHA256**: `e9b01beb55cab3be3c3ce0af9b8e1b6623a197511619dcf01f90ebf13df1a6be`
- **Encoding**: ASCII

**File code content:**

```typescript
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

```

---

### <a id="📄-src-components-settings-rolemanagement-tsx"></a>📄 `src/components/settings/RoleManagement.tsx`

**File Info:**
- **Size**: 4.49 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/settings/RoleManagement.tsx`
- **Relative Path**: `src/components/settings`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 10:08:19 (Asia/Colombo / GMT+06:30)
- **MD5**: `85751400c67b0afb7e22ad7324626d4b`
- **SHA256**: `6257227f454ba63de4756c556c3d3b0218d4e07bd986e10b396e55d86213d765`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";

import type React from "react";
import { useState } from "react";
import type { User } from "../../types";
import { Shield, Info } from "lucide-react";

interface RoleManagementProps {
  user: User;
}

export const RoleManagement: React.FC<RoleManagementProps> = ({ user }) => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const roleDescriptions: Record<
    string,
    { description: string; permissions: string[] }
  > = {
    admin: {
      description: "Full system access with all permissions",
      permissions: [
        "Manage all users and roles",
        "View all audit logs",
        "Configure system settings",
        "Manage integrations",
        "Access analytics",
      ],
    },
    manager: {
      description: "User management and monitoring access",
      permissions: [
        "Create and manage users",
        "Assign roles to users",
        "View user audit logs",
        "Generate reports",
        "View analytics",
      ],
    },
    viewer: {
      description: "Read-only access to system information",
      permissions: [
        "View users and roles",
        "View audit logs",
        "View analytics",
        "Export reports",
      ],
    },
  };

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-2">
          Your Current Role
        </h2>
        <p className="text-gray-400 text-sm">
          Review your assigned access level and permissions.
        </p>
      </div>

      {/* Role Card */}
      {user.app_metadata.role && user.app_metadata.role.length > 0 ? (
        <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-900/40 rounded-lg">
                <Shield className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-100 text-lg capitalize">
                  {user.app_metadata.role}
                </h3>
                <p className="text-sm text-gray-400">
                  {roleDescriptions[user.app_metadata.role]?.description ??
                    "Custom user role"}
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                setExpandedRole(
                  expandedRole === user.app_metadata.role
                    ? null
                    : user.app_metadata.role
                )
              }
              className="text-sm text-indigo-400 hover:text-indigo-300 font-medium transition"
            >
              {expandedRole === user.app_metadata.role ? "Hide" : "View"} details
            </button>
          </div>

          {/* Expanded Permissions */}
          {expandedRole === user.app_metadata.role && (
            <div className="mt-4 border-t border-gray-700 pt-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">
                Permissions
              </h4>
              <ul className="space-y-1">
                {roleDescriptions[user.app_metadata.role]?.permissions.map(
                  (perm, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                      {perm}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="p-5 bg-gray-800/60 border border-gray-700 rounded-lg text-center">
          <p className="text-gray-400">No roles assigned</p>
        </div>
      )}

      {/* Info Box */}
      {user.app_metadata.role === "admin" && (
        <div className="mt-8 p-4 bg-blue-900/40 border border-blue-800 rounded-lg flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-300 leading-relaxed">
            Role assignments are managed by administrators. Contact your admin
            to request role changes.
          </p>
        </div>
      )}
    </div>
  );
};

```

---

### <a id="📄-src-components-users-userdetailmodal-tsx"></a>📄 `src/components/users/UserDetailModal.tsx`

**File Info:**
- **Size**: 8.63 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/users/UserDetailModal.tsx`
- **Relative Path**: `src/components/users`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 10:11:28 (Asia/Colombo / GMT+06:30)
- **MD5**: `675ccf27197d791254c75cb7136119e6`
- **SHA256**: `d706508c2953a26fddf21fffad17988e6946bbef43feb24482262efbd463174e`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";

import type React from "react";
import { useState, useEffect } from "react";
import type { UserProfile, Role, UserDB } from "../../types";
import { apiClient } from "../../services/api";
import { X, CheckCircle } from "lucide-react";

interface UserDetailModalProps {
  user: UserDB;
  isOpen: boolean;
  onClose: () => void;
  onUserUpdated: () => void;
}

export const UserDetailModal: React.FC<UserDetailModalProps> = ({
  user,
  isOpen,
  onClose,
  onUserUpdated,
}) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [availableRoles] = useState<Role[]>([
    { id: "Admin", name: "Admin", description: "Full system access" },
    { id: "HR", name: "HR", description: "HR management access" },
    { id: "Management L1", name: "Management L1", description: "Management Level 1 access" },
    { id: "Management L2", name: "Management L2", description: "Management Level 2 access" },
    { id: "Management L3", name: "Management L3", description: "Management Level 3 access" },
  ]);

  useEffect(() => {
    if (isOpen && user) fetchUserProfile();
  }, [isOpen, user]);

  const fetchUserProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.getUserById(user.id);
      const profile = response.data as UserProfile;
      setUserProfile(profile);
      setSelectedRoles(profile.roles.map((r) => r.id));
    } catch (err) {
      setError(apiClient.handleError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleRoleToggle = (roleId: string) => setSelectedRoles([roleId]);

  const handleSaveRoles = async (roleName: string) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await apiClient.updateUserRoles(user.id, selectedRoles, roleName);
      setSuccess("Roles updated successfully");
      setTimeout(() => {
        onUserUpdated();
        onClose();
      }, 1500);
    } catch (err) {
      setError(apiClient.handleError(err));
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900/95 border border-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-md">
        
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/90 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-gray-100">User Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            <X size={22} className="text-gray-400 hover:text-gray-200" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {success && (
            <div className="flex items-start gap-3 p-4 rounded-lg border border-green-700 bg-green-900/40">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <p className="text-sm text-green-300">{success}</p>
            </div>
          )}

          {loading && !userProfile ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-4 border-indigo-900 border-t-indigo-500 rounded-full animate-spin" />
            </div>
          ) : userProfile ? (
            <div className="space-y-8">
              
              {/* User Information */}
              <section>
                <h3 className="text-lg font-medium text-gray-200 mb-4">User Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <InfoRow label="Name" value={userProfile.user.username} />
                  <InfoRow label="Email" value={userProfile.user.email} />
                  <InfoRow
                    label="Created"
                    value={new Date(userProfile.user.createdAt).toLocaleDateString()}
                  />
                  <InfoRow
                    label="Last Login"
                    value={
                      userProfile?.recent_audits?.find((a) => a.eventType === "LOGIN")?.createdAt ||
                      "Never"
                    }
                  />
                </div>
              </section>

              {/* Activity Summary */}
              <section>
                <h3 className="text-lg font-medium text-gray-200 mb-4">Activity Summary</h3>
                <div className="grid grid-cols-3 gap-4">
                  <SummaryCard
                    label="Total Logins"
                    value={
                      userProfile.recent_audits?.filter((a) => a.eventType === "LOGIN").length || 0
                    }
                  />
                  <SummaryCard
                    label="Role Changes"
                    value={
                      userProfile.recent_audits?.filter((a) => a.eventType === "ROLE_CHANGE").length || 0
                    }
                  />
                  <SummaryCard
                    label="Last Login Date"
                    value={
                      userProfile.recent_audits[0]?.eventType === "LOGIN"
                        ? new Date(userProfile.recent_audits[0].details.timestamp).toLocaleDateString()
                        : "Never"
                    }
                  />
                </div>
              </section>

              {/* Role Management */}
              <section>
                <h3 className="text-lg font-medium text-gray-200 mb-4">Assign Role</h3>
                <div className="space-y-3">
                  {availableRoles.map((role) => (
                    <label
                      key={role.id}
                      className={`flex items-start gap-3 p-4 rounded-lg border ${
                        selectedRoles.includes(role.id)
                          ? "border-indigo-600 bg-indigo-900/40"
                          : "border-gray-800 bg-gray-800/40 hover:bg-gray-800/70"
                      } cursor-pointer transition-all duration-200`}
                    >
                      <input
                        type="radio"
                        name="role"
                        checked={selectedRoles.includes(role.id)}
                        onChange={() => handleRoleToggle(role.id)}
                        className="mt-1 w-4 h-4 text-indigo-500 focus:ring-indigo-500 accent-indigo-600"
                      />
                      <div>
                        <p className="font-medium text-gray-100">{role.name}</p>
                        <p className="text-sm text-gray-400">{role.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </section>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex items-center justify-end gap-3 p-6 border-t border-gray-800 bg-gray-900/90 backdrop-blur-sm">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSaveRoles(selectedRoles[0] || "")}
            disabled={loading || selectedRoles.length === 0}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Saving..." : "Save Role"}
          </button>
        </div>
      </div>
    </div>
  );
};

/* Subcomponents for cleaner structure */

const InfoRow: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
    <p className="text-sm font-medium text-gray-100 mt-1">{value || "—"}</p>
  </div>
);

const SummaryCard: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="p-4 rounded-lg border border-gray-800 bg-gray-800/40">
    <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
    <p className="text-xl font-semibold text-gray-100 mt-1">{value}</p>
  </div>
);

```

---

### <a id="📄-src-components-users-userslist-tsx"></a>📄 `src/components/users/UsersList.tsx`

**File Info:**
- **Size**: 3.81 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/users/UsersList.tsx`
- **Relative Path**: `src/components/users`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 10:10:00 (Asia/Colombo / GMT+06:30)
- **MD5**: `26359055c70dd62a0812bc65e9fd0c22`
- **SHA256**: `a6f73a2029fca78cd1bc96004ffdb9b07f1415e960564ef6ae110c7c76a6f772`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";

import type React from "react";
import type { UserDB } from "../../types";
import { ChevronRight } from "lucide-react";

interface UsersListProps {
  users: UserDB[];
  loading: boolean;
  onSelectUser: (user: UserDB) => void;
}

export const UsersList: React.FC<UsersListProps> = ({
  users,
  loading,
  onSelectUser,
}) => {
  if (loading) {
    return (
      <div className="bg-gray-800/70 rounded-xl border border-gray-700 p-6">
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-4 border-indigo-900 border-t-indigo-500 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-8 text-center">
        <p className="text-gray-400 text-sm">No users found</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/60 border border-gray-800 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800/80 border-b border-gray-700">
            <tr>
              {["Name", "Email", "Roles", "Created", "Action"].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-300 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-800/60 transition-all duration-200 cursor-pointer"
              >
                {/* Username */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-indigo-700/60 rounded-full flex items-center justify-center text-indigo-200 font-semibold text-sm">
                      {user.username?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-100">
                      {user.username}
                    </span>
                  </div>
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">
                  {user.email}
                </td>

                {/* Role */}
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.role ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300 border border-indigo-700">
                      {user.role.name}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-500">No roles</span>
                  )}
                </td>

                {/* Created At */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>

                {/* Action */}
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    onClick={() => onSelectUser(user)}
                    className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    View
                    <ChevronRight size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

```

---

### <a id="📄-src-components-adminroute-tsx"></a>📄 `src/components/AdminRoute.tsx`

**File Info:**
- **Size**: 1.41 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/AdminRoute.tsx`
- **Relative Path**: `src/components`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `07ee916e3d3199abc0064d75b9559bda`
- **SHA256**: `769b2d0149627a00f7e37021c1467a72b1afdec6e00e8c3acddd8351ff91dd45`
- **Encoding**: ASCII

**File code content:**

```typescript
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface AdminRouteProps {
  children: React.ReactElement;
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  console.log("********************************** ===== ", user);
  const token = localStorage.getItem("accessToken");

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Check if user is logged in and has access token
  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  // Check if user has admin role
  if (user.app_metadata.role !== "Admin") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Access Denied
          </h1>
          <p className="text-gray-600">
            You need admin privileges to access this application.
          </p>
        </div>
      </div>
    );
  }

  return children;
};

```

---

### <a id="📄-src-components-protectedroute-tsx"></a>📄 `src/components/ProtectedRoute.tsx`

**File Info:**
- **Size**: 772 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/components/ProtectedRoute.tsx`
- **Relative Path**: `src/components`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `f36a9e1f777ec06ad57041f1bb074472`
- **SHA256**: `2744e63748f04c35542997c66d9aa6de30116864c3d7c7ff78ea1c542bd6e22d`
- **Encoding**: ASCII

**File code content:**

```typescript
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

```

---

### <a id="📄-src-context-authcontext-tsx"></a>📄 `src/context/AuthContext.tsx`

**File Info:**
- **Size**: 3.03 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/context/AuthContext.tsx`
- **Relative Path**: `src/context`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `e5b66bec3692d8c6d504a3791b3f5e30`
- **SHA256**: `d0bc3fa7911f7e7bb838e66883f4f0c512254f3795150f9001f2cb455f09cf77`
- **Encoding**: ASCII

**File code content:**

```typescript
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { User } from "@/types";

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   roles?: string[];
//   [key: string]: any;
// }

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const res = await api.get<User>("/api/v1/me", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Fetched user:", res.data);
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    const checkTokenAndFetchUser = async () => {
      // Check if we have a token in the URL
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get("token");

      if (tokenFromUrl) {
        console.log("Found token in URL, storing it");
        // Store the token
        localStorage.setItem("accessToken", tokenFromUrl);
        // Clean up the URL
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }

      // Now fetch the user
      await fetchUser();
    };

    checkTokenAndFetchUser();
  }, []);

  const logout = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await api.get("/api/v1/sessions/logout", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const logoutUrl = response.data.logout_url;

      // Clear local auth state
      setUser(null);

      // Redirect to Cognito logout URL if provided, otherwise fallback to login page
      if (logoutUrl) {
        window.location.href = logoutUrl;
      }
      // } else {
      //   window.location.href = "/login";
      // }
    } catch (error) {
      console.error("Logout error:", error);
      // Even if there's an error, clear the local state and redirect to login
      setUser(null);
      // window.location.href = "/login";
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};

```

---

### <a id="📄-src-pages-approvalspage-tsx"></a>📄 `src/pages/ApprovalsPage.tsx`

**File Info:**
- **Size**: 308 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/pages/ApprovalsPage.tsx`
- **Relative Path**: `src/pages`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `09be4ed221f952258c5ebae15b6fefda`
- **SHA256**: `38ea3fdc8904c93cfa4ec3d6979baa81103fd42a8a1c42be4a26415b93a1e3e1`
- **Encoding**: ASCII

**File code content:**

```typescript
import { MainLayout } from "../components/layout/MainLayout";
import LeaveRequestsList from "../components/approvals/LeaveRequestsList";

export function ApprovalsPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <LeaveRequestsList />
      </div>
    </MainLayout>
  );
}

```

---

### <a id="📄-src-pages-attendancelogspage-tsx"></a>📄 `src/pages/AttendanceLogsPage.tsx`

**File Info:**
- **Size**: 9.9 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/pages/AttendanceLogsPage.tsx`
- **Relative Path**: `src/pages`
- **Created**: 2025-11-13 08:30:36 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-13 09:38:58 (Asia/Colombo / GMT+06:30)
- **MD5**: `cf2189f088e8970dccf813100094708b`
- **SHA256**: `dc00a37a31de25183d7ab384f7e2c7ef6d1e71e3c4a92bc72cad61b987a3d3a6`
- **Encoding**: ASCII

**File code content:**

```typescript
import type React from "react";
import { useState } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { apiClient } from "../services/api";
import { AlertCircle, Search, Calendar, Clock } from "lucide-react";

interface Attendance {
  attendance_id: number;
  employee_id: number;
  date: string;
  clock_in_time: string;
  clock_out_time: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface AttendanceResponse {
  userSync: string;
  message: string;
  requestedBy: {
    employee_id: number;
    email: string;
    cognito_groups: string;
  };
  employee: {
    employee_id: number;
    email: string;
    cognito_groups: string;
  };
  totalRecords: number;
  attendances: Attendance[];
}

export const AttendanceLogsPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [attendanceData, setAttendanceData] = useState<AttendanceResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAttendanceLogs = async () => {
    if (!email.trim()) {
      setError("Please enter an email address");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.getAttendanceLogs(email);
      setAttendanceData(response.data);
    } catch (err) {
      setError(apiClient.handleError(err));
      setAttendanceData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchAttendanceLogs();
  };

  const getStatusColor = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    if (normalizedStatus === "present") return "bg-green-900/40 border-green-700 text-green-300";
    if (normalizedStatus === "absent") return "bg-red-900/40 border-red-700 text-red-300";
    return "bg-gray-800 border-gray-700 text-gray-300";
  };

  const getStatusBadgeColor = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    if (normalizedStatus === "present") return "bg-green-600 text-white";
    if (normalizedStatus === "absent") return "bg-red-600 text-white";
    return "bg-gray-600 text-white";
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateWorkHours = (clockIn: string, clockOut: string) => {
    const inTime = new Date(clockIn);
    const outTime = new Date(clockOut);
    const diffMs = outTime.getTime() - inTime.getTime();
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <MainLayout>
      <div className="text-gray-100 bg-gray-900 min-h-screen p-6 rounded-xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Attendance Logs</h1>
          <p className="text-gray-400 mt-2">
            View employee attendance records
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Employee Email
            </label>
            <div className="flex gap-3">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter employee email (e.g., s19588@sci.pdn.ac.lk)"
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                {loading ? "Searching..." : "Search"}
              </button>
            </div>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/40 border border-red-700 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        {/* Employee Info */}
        {attendanceData && (
          <div className="mb-6 bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Employee Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-400">Employee ID</p>
                <p className="text-lg font-medium text-white">{attendanceData.employee.employee_id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg font-medium text-white">{attendanceData.employee.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Role</p>
                <p className="text-lg font-medium text-white">{attendanceData.employee.cognito_groups}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                Total Records: <span className="text-white font-medium">{attendanceData.totalRecords}</span>
              </p>
            </div>
          </div>
        )}

        {/* Attendance Records */}
        {attendanceData && attendanceData.attendances.length > 0 && (
          <div className="bg-gray-800 rounded-xl p-4 shadow-md border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4 px-2">Attendance Records</h2>
            <div className="space-y-4">
              {attendanceData.attendances.map((attendance) => (
                <div
                  key={attendance.attendance_id}
                  className={`p-5 rounded-lg border transition-all ${getStatusColor(attendance.status)}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-lg font-semibold text-white">
                          {formatDate(attendance.date)}
                        </p>
                        <p className="text-sm text-gray-400">
                          Attendance ID: #{attendance.attendance_id}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium uppercase ${getStatusBadgeColor(attendance.status)}`}>
                      {attendance.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-400">Clock In</p>
                        <p className="text-base font-medium text-white">
                          {formatDateTime(attendance.clock_in_time)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-400">Clock Out</p>
                        <p className="text-base font-medium text-white">
                          {formatDateTime(attendance.clock_out_time)}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">Work Duration</p>
                      <p className="text-base font-medium text-white">
                        {calculateWorkHours(attendance.clock_in_time, attendance.clock_out_time)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700/50 flex justify-between text-xs text-gray-500">
                    <span>Created: {formatDateTime(attendance.created_at)}</span>
                    <span>Updated: {formatDateTime(attendance.updated_at)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Data Message */}
        {attendanceData && attendanceData.attendances.length === 0 && (
          <div className="bg-gray-800 rounded-xl p-8 shadow-md border border-gray-700 text-center">
            <p className="text-gray-400">No attendance records found for this employee.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};
```

---

### <a id="📄-src-pages-auditlogspage-tsx"></a>📄 `src/pages/AuditLogsPage.tsx`

**File Info:**
- **Size**: 4.87 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/pages/AuditLogsPage.tsx`
- **Relative Path**: `src/pages`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 10:25:24 (Asia/Colombo / GMT+06:30)
- **MD5**: `852a4b9f4df0b374e19249fb1bec9b69`
- **SHA256**: `5adeefb1176e28921b354b171aed33debf58e0d76d73459de6ae3f8ae3c368c0`
- **Encoding**: ASCII

**File code content:**

```typescript
import type React from "react";
import { useState, useEffect } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { AuditLogsList } from "../components/audit/AuditLogsList";
import { AuditFilters } from "../components/audit/AuditFilters";
import { apiClient } from "../services/api";
import type { AuditLog, PaginatedResponse } from "../types";
import { AlertCircle } from "lucide-react";

export const AuditLogsPage: React.FC = () => {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [pageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(0);
  const [userId, setUserId] = useState<string>("");
  const [dateRange, setDateRange] = useState<string>("");
  const [actionFilter, setActionFilter] = useState<string>("");

  const fetchAuditLogs = async (
    pageNum: number,
    userIdFilter?: string,
    dateRangeFilter?: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.getAuditLogs(
        pageNum,
        pageSize,
        userIdFilter,
        dateRangeFilter
      );

      if (Array.isArray(response.data)) {
        const totalItems = response.data.length;
        const start = pageNum * pageSize;
        const end = start + pageSize;
        const paginatedLogs = response.data.slice(start, end);
        setLogs(paginatedLogs);
        setTotalPages(Math.ceil(totalItems / pageSize));
        setPage(pageNum);
      } else if (
        response.data &&
        typeof response.data === "object" &&
        "content" in response.data
      ) {
        const data = response.data as PaginatedResponse<AuditLog>;
        setLogs(data.content);
        setTotalPages(data.totalPages);
        setPage(data.currentPage);
      } else {
        setError("Received unexpected data format from server");
        setLogs([]);
        setTotalPages(0);
        setPage(0);
      }
    } catch (err) {
      setError(apiClient.handleError(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuditLogs(0);
  }, []);

  const handleApplyFilters = (filters: {
    userId?: string;
    dateRange?: string;
    action?: string;
  }) => {
    setUserId(filters.userId || "");
    setDateRange(filters.dateRange || "");
    setActionFilter(filters.action || "");
    setPage(0);
    fetchAuditLogs(0, filters.userId, filters.dateRange);
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      fetchAuditLogs(page + 1, userId, dateRange);
    }
  };

  const handlePrevPage = () => {
    if (page > 0) {
      fetchAuditLogs(page - 1, userId, dateRange);
    }
  };

  return (
    <MainLayout>
      <div className="text-gray-100 bg-gray-900 min-h-screen p-6 rounded-xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Audit Logs</h1>
          <p className="text-gray-400 mt-2">
            View login and role change events
          </p>
        </div>

        {/* Filters */}
        {/* <AuditFilters onApplyFilters={handleApplyFilters} /> */}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/40 border border-red-700 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        {/* Audit Logs List */}
        <div className="bg-gray-800 rounded-xl p-4 shadow-md border border-gray-700">
          <AuditLogsList
            logs={logs}
            loading={loading}
            actionFilter={actionFilter}
          />
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between text-gray-300">
          <p className="text-sm">
            Page {page + 1} of {totalPages} ({logs.length} events)
          </p>
          <div className="flex gap-2">
            <button
              onClick={handlePrevPage}
              disabled={page === 0 || loading}
              className="px-4 py-2 border border-gray-700 rounded-lg text-gray-300 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={page >= totalPages - 1 || loading}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

```

---

### <a id="📄-src-pages-dashboardpage-tsx"></a>📄 `src/pages/DashboardPage.tsx`

**File Info:**
- **Size**: 839 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/pages/DashboardPage.tsx`
- **Relative Path**: `src/pages`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `d34a6f6ab7a640976f42b5284e0c8932`
- **SHA256**: `28713331d0afcd3d5d7022bbe1eae1ce885fef5627cc9cca77cbf5f971bbd69c`
- **Encoding**: ASCII

**File code content:**

```typescript
import type React from "react";
import { useAuth } from "../context/AuthContext";
import { MainLayout } from "../components/layout/MainLayout";
import { DashboardContent } from "../components/dashboard/DashboardContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      localStorage.setItem("accessToken", token);
    } else {
      const storedToken = localStorage.getItem("accessToken");
      if (!storedToken) navigate("/login");
    }
  }, []);

  return (
    <MainLayout>
      <DashboardContent user={user} />
    </MainLayout>
  );
};

```

---

### <a id="📄-src-pages-leavepoliciespage-tsx"></a>📄 `src/pages/LeavePoliciesPage.tsx`

**File Info:**
- **Size**: 311 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/pages/LeavePoliciesPage.tsx`
- **Relative Path**: `src/pages`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `0264415373edbee342032f8c93f02c68`
- **SHA256**: `40d0c4527b47d7b2dfdf815e554ac9fbb5d5d4c7a916d2b8af07dd4ce4e9f53a`
- **Encoding**: ASCII

**File code content:**

```typescript
import { MainLayout } from "../components/layout/MainLayout";
import LeavePoliciesList from "../components/policies/LeavePoliciesList";

export function LeavePoliciesPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <LeavePoliciesList />
      </div>
    </MainLayout>
  );
}

```

---

### <a id="📄-src-pages-loginpage-tsx"></a>📄 `src/pages/LoginPage.tsx`

**File Info:**
- **Size**: 1.1 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/pages/LoginPage.tsx`
- **Relative Path**: `src/pages`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:45:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `b05a1b1b1c3bf60f93d667af3df48ea2`
- **SHA256**: `207880657fa79e4289152f15c3a55cb8a86d80035e1726d90569d5985287d88e`
- **Encoding**: ASCII

**File code content:**

```typescript
import React from "react";

export const LoginPage: React.FC = () => {
  const handleLogin = () => {
    // Redirect user to Spring Boot OAuth2 (which then redirects to Cognito)
    window.location.href = "http://localhost:8080/oauth2/authorization/cognito";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="p-10 bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-3xl font-bold text-white tracking-wide mb-8 text-center">
          WELCOME TO <span className="text-indigo-400">ADMIN DASHBOARD</span>
        </h2>
        <button
          onClick={handleLogin}
          className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 hover:shadow-lg transition-all duration-300"
        >
          Login
        </button>
      </div>
      <p className="text-gray-500 text-sm mt-8">
        Powered by <span className="text-indigo-400">AWS Cognito</span> & Spring Boot
      </p>
    </div>
  );
};

```

---

### <a id="📄-src-pages-reportspage-tsx"></a>📄 `src/pages/ReportsPage.tsx`

**File Info:**
- **Size**: 292 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/pages/ReportsPage.tsx`
- **Relative Path**: `src/pages`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `baa322eb6160a8c2393b00a887b89c4f`
- **SHA256**: `2a09f89c58b702d3a7a5b00f119d52d5dc1a005fd8fa3ccd9f743b927571fede`
- **Encoding**: ASCII

**File code content:**

```typescript
import { MainLayout } from "../components/layout/MainLayout";
import PayrollReport from "../components/reports/PayrollReport";

export function ReportsPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <PayrollReport />
      </div>
    </MainLayout>
  );
}

```

---

### <a id="📄-src-pages-settingspage-tsx"></a>📄 `src/pages/SettingsPage.tsx`

**File Info:**
- **Size**: 2.86 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/pages/SettingsPage.tsx`
- **Relative Path**: `src/pages`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-14 05:30:04 (Asia/Colombo / GMT+06:30)
- **MD5**: `a205f0c9096caf5b2b6b6ed1e97df02d`
- **SHA256**: `c211eb5a8b947e59439172de5e4034ff15da3e4a939ec1efdab476e14613ce64`
- **Encoding**: ASCII

**File code content:**

```typescript
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

```

---

### <a id="📄-src-pages-userspage-tsx"></a>📄 `src/pages/UsersPage.tsx`

**File Info:**
- **Size**: 5.23 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/pages/UsersPage.tsx`
- **Relative Path**: `src/pages`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 10:28:25 (Asia/Colombo / GMT+06:30)
- **MD5**: `678b838b3222131a8a9016524be11632`
- **SHA256**: `0daa2a399551fc8f5d17b61c7bc2b2331ad664aa3d807ac1fda0e514a8612546`
- **Encoding**: ASCII

**File code content:**

```typescript
import type React from "react";
import { useState, useEffect } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { UsersList } from "../components/users/UsersList";
import { UserDetailModal } from "../components/users/UserDetailModal";
import { apiClient } from "../services/api";
import type { UserDB, PaginatedResponse } from "../types";
import { Search, AlertCircle } from "lucide-react";

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserDB[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserDB | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const fetchUsers = async (pageNum: number, query?: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.getUsers(pageNum, pageSize, query);
      const data = response.data as PaginatedResponse<UserDB>;
      setUsers(data.content);
      setTotalPages(data.totalPages);
      setPage(data.pageable?.pageNumber);
    } catch (err) {
      setError(apiClient.handleError(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(0);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(0);
    fetchUsers(0, query);
  };

  const handleSelectUser = (user: UserDB) => {
    setSelectedUser(user);
    setShowDetailModal(true);
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) fetchUsers(page + 1, searchQuery);
  };

  const handlePrevPage = () => {
    if (page > 0) fetchUsers(page - 1, searchQuery);
  };

  return (
    <MainLayout>
      <div className="bg-gray-950 min-h-screen text-gray-100 p-6 rounded-lg shadow-inner">
        {/* Header Section */}
        <div className="mb-8 border-b border-gray-800 pb-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Users Management
          </h1>
          <p className="text-gray-400 mt-2">
            Manage system users and assign access roles efficiently.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Error Section */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        {/* Users List */}
        <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800">
          <UsersList
            users={users}
            loading={loading}
            onSelectUser={handleSelectUser}
          />
        </div>

        {/* Pagination */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            Page <span className="text-gray-200">{page + 1}</span> of{" "}
            <span className="text-gray-200">{totalPages}</span> — showing{" "}
            <span className="text-gray-200">{users.length}</span> users
          </p>

          <div className="flex gap-3">
            <button
              onClick={handlePrevPage}
              disabled={page === 0 || loading}
              className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={page >= totalPages - 1 || loading}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next
            </button>
          </div>
        </div>

        {/* User Detail Modal */}
        {selectedUser && (
          <UserDetailModal
            user={selectedUser}
            isOpen={showDetailModal}
            onClose={() => {
              setShowDetailModal(false);
              setSelectedUser(null);
            }}
            onUserUpdated={() => fetchUsers(page, searchQuery)}
          />
        )}
      </div>
    </MainLayout>
  );
};

```

---

### <a id="📄-src-services-api-ts"></a>📄 `src/services/api.ts`

**File Info:**
- **Size**: 6.67 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/services/api.ts`
- **Relative Path**: `src/services`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-14 05:28:32 (Asia/Colombo / GMT+06:30)
- **MD5**: `315259ae9bc8ef190bc457e3ed274f7b`
- **SHA256**: `22f9342cbea0d6e21f559adcf6fbf9f000c8fd5cfd9df2f39b6367e1daa6ffe8`
- **Encoding**: UTF-8

**File code content:**

```typescript
import axios, { type AxiosInstance, type AxiosError } from "axios";

// --- Base URLs ---
const JAVA_API_BASE_URL = "http://localhost:8080";
const EXPRESS_API_BASE_URL = "http://localhost:4000";

// ====================================================
// 🔹 Java Backend API Client (secured, uses token)
// ====================================================
class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: JAVA_API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Attach token to requests
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Handle unauthorized responses
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // Prevent infinite reloads: only handle 401s from the Java backend
        if (
          error.response?.status === 401 &&
          error.config?.baseURL?.includes("8080")
        ) {
          localStorage.removeItem("accessToken");
          if (window.location.pathname !== "/login") {
            window.location.href = "/login";
          }
        }
        return Promise.reject(error);
      }
    );
  }

  // ===== Auth endpoints =====
  getLoginUrl() {
    return `${JAVA_API_BASE_URL}/oauth2/authorization/cognito`;
  }

  async getCurrentUser() {
    return this.client.get("/api/v1/me");
  }

  // ===== User endpoints =====
  async getUsers(page = 0, size = 10, query?: string) {
    const params = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
    });
    if (query) {
      params.append("query", query);
    }
    return this.client.get(`/api/v1/admin/users?${params}`);
  }

  async getUserById(id: string) {
    return this.client.get(`/api/v1/admin/users/${id}`);
  }

  async updateUserRoles(userId: string, roleIds: string[], roleName: string) {
    return this.client.patch(
      `/api/v1/admin/users/${userId}/roles?roleName=${roleName}`,
      { roleIds }
    );
  }

  async updateProfile(data: {
    displayName: string;
    locale: string;
    phone: string;
  }) {
    return this.client.patch("/api/v1/me", data);
  }

  async getAuditLogs(page = 0, size = 10, userId?: string, dateRange?: string) {
    const params = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
    });
    if (userId) params.append("userId", userId);
    if (dateRange) params.append("dateRange", dateRange);
    return this.client.get(`/api/v1/admin/audit-log?${params}`);
  }

  // In your apiClient
async getAttendanceLogs(email: string) {
  const params = new URLSearchParams({ id: email });
  
  // Get the Cognito token from your auth service/context
  const token = localStorage.getItem("accessToken"); // or however you store it
  // OR: const token = await Auth.currentSession().getIdToken().getJwtToken();
  console.log(`===============>>>>${token}`);
  return this.client.get(
    `https://8iv05x1jp7.execute-api.us-east-1.amazonaws.com/prod/attendance/employee-attendances?${params}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

async getLeaveTypes() {
  const token = localStorage.getItem("accessToken");
  return this.client.get(
    "https://8iv05x1jp7.execute-api.us-east-1.amazonaws.com/prod/leave/types",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

async updateLeaveType(data: {
  leave_type_id: number;
  description: string;
  accrual_frequency: string;
  accrual_amount: number;
  no_pay_effect: boolean;
}) {
  const token = localStorage.getItem("accessToken");
  return this.client.patch(
    "https://8iv05x1jp7.execute-api.us-east-1.amazonaws.com/prod/leave/types",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

  // ===== Error handler =====
  handleError(error: unknown): string {
    if (axios.isAxiosError(error)) {
      return (
        (error.response?.data as any)?.message ||
        error.message ||
        "An error occurred"
      );
    }
    return "An unexpected error occurred";
  }
}

export const apiClient = new ApiClient();

// ====================================================
// 🔹 Express Backend API Client (no token required)
// ====================================================
export const expressApi = axios.create({
  baseURL: EXPRESS_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ====================================================
// 🔹 Leave Policies (Express endpoints)
// ====================================================
export const getPolicies = async () => {
  const res = await expressApi.get("/api/v1/policies");
  return res.data;
};

export const createPolicy = async (data: {
  name: string;
  description: string;
  default_days: number;
  requires_approval: boolean;
}) => {
  const res = await expressApi.post("/api/v1/policies", data);
  return res.data;
};

export const updatePolicy = async (id: string, data: any) => {
  const res = await expressApi.patch(`/api/v1/policies/${id}`, data);
  return res.data;
};

// ====================================================
// 🔹 Leave Requests (Approvals - Express backend)
// ====================================================
export const getLeaveRequests = async () => {
  const res = await expressApi.get("/api/v1/leave/requests");
  return res.data.data;
};

export const updateLeaveRequestStatus = async (
  id: string,
  data: { status: "APPROVED" | "REJECTED"; actor_user_id: string }
) => {
  const res = await expressApi.patch(`/api/v1/leave/requests/${id}`, data);
  return res.data;
};

// --- Payroll Reports (Express backend) ---
export const getPayrollReport = async (start: string, end: string) => {
  const res = await expressApi.get(
    `/api/v1/reports/payroll?start=${start}&end=${end}`
  );
  return res.data;
};

export const downloadPayrollCSV = async (start: string, end: string) => {
  const res = await expressApi.get(
    `/api/v1/reports/payroll?start=${start}&end=${end}&format=csv`,
    { responseType: "blob" }
  );
  return res.data;
};

// ====================================================
// 🔹 Default export (for legacy usage)
// ====================================================
const api = axios.create({
  baseURL: JAVA_API_BASE_URL,
  withCredentials: true,
});

export default api;

```

---

### <a id="📄-src-types-index-ts"></a>📄 `src/types/index.ts`

**File Info:**
- **Size**: 1.89 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/types/index.ts`
- **Relative Path**: `src/types`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `9a0c3b8df3a5bd64f9761ea3b69defb4`
- **SHA256**: `77cc4f52fd923069df0a1212116af9c316063bf497987a3d509024bc21d29ebe`
- **Encoding**: ASCII

**File code content:**

```typescript
// Authentication & User Types
export interface User {
  // id: string
  // email: string
  // name: string | null
  // roles: Role[]
  // createdAt: string
  // lastLogin?: string

  app_metadata: {
    createdAt: string;
    displayName: string;
    isActive: boolean;
    lastLoginAt?: string;
    role: string;
    phone: string;
  };

  profile: {
    email: string;
    email_verified: boolean | null;
    locale: string | null;
    name: string | null;
    sub: string;
    status: string;
  };
}

export interface UserDB {
  active: boolean;
  createdAt: string;
  displayName: string;
  email: string;
  id: string;
  lastLoginAt?: string;
  locale: string | null;

  metadata: {
    lastProfileUpdate: string;
  };

  mfaEnabled: boolean;
  phone: string | null;
  role: {
    id: string;
    name: string;
    description: string;
    createdAt: string;
  };
  sub: string;
  username: string | null;
}

export interface Role {
  id: string;
  name: string;
  description: string;
}

export interface AuthToken {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}

export interface AuthContext {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
}

// API Response Types
export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

export interface AuditLog {
  createdAt: string;
  details: { email: string; source: string; timestamp: string };
  eventType: "LOGIN" | "LOGOUT" | "ROLE_CHANGE";
  id: string;
  ip?: string;
  userAgent: string;
}

export interface UserProfile {
  user: UserDB;
  roles: Role[];
  recent_audits: Array<AuditLog>;
  auditSummary: {
    totalLogins: number;
    lastLoginDate?: string;
    roleChanges: number;
  };
}

```

---

### <a id="📄-src-app-tsx"></a>📄 `src/App.tsx`

**File Info:**
- **Size**: 2.51 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/App.tsx`
- **Relative Path**: `src`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-13 08:44:30 (Asia/Colombo / GMT+06:30)
- **MD5**: `97c6a9faafa696935b2ec095a360d1a8`
- **SHA256**: `aefc79fb3dbd96580cc5564e0800a16302485bb9ba76ba764f2707f957d5c74c`
- **Encoding**: ASCII

**File code content:**

```typescript
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { UsersPage } from "./pages/UsersPage";
import { AuditLogsPage } from "./pages/AuditLogsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { AdminRoute } from "./components/AdminRoute";
import { LeavePoliciesPage } from "./pages/LeavePoliciesPage";
import { ApprovalsPage } from "./pages/ApprovalsPage";
import { ReportsPage } from "./pages/ReportsPage";
import { AttendanceLogsPage } from "./pages/AttendanceLogsPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <DashboardPage />
              </AdminRoute>
            }
          />
          <Route
            path="/users"
            element={
              <AdminRoute>
                <UsersPage />
              </AdminRoute>
            }
          />
          <Route
            path="/attendance-logs"
            element={
              <AdminRoute>
                <AttendanceLogsPage />
              </AdminRoute>
            }
          />
          <Route
            path="/audit-logs"
            element={
              <AdminRoute>
                <AuditLogsPage />
              </AdminRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <AdminRoute>
                <SettingsPage />
              </AdminRoute>
            }
          />
          <Route
            path="/policies"
            element={
              <AdminRoute>
                <LeavePoliciesPage />
              </AdminRoute>
            }
          />
          <Route
            path="/approvals"
            element={
              <AdminRoute>
                <ApprovalsPage />
              </AdminRoute>
            }
          />

          <Route
            path="/reports"
            element={
              <AdminRoute>
                <ReportsPage />
              </AdminRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

```

---

### <a id="📄-src-index-css"></a>📄 `src/index.css`

**File Info:**
- **Size**: 429 B
- **Extension**: `.css`
- **Language**: `css`
- **Location**: `src/index.css`
- **Relative Path**: `src`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `6509d50c2c063332c0a826d6acdf2bbd`
- **SHA256**: `ce950671dfb5acf5eb4fbf2aa39bfbe6992e49e244d064b16ef7aeac294e2dfb`
- **Encoding**: ASCII

**File code content:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

```

---

### <a id="📄-src-main-tsx"></a>📄 `src/main.tsx`

**File Info:**
- **Size**: 246 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/main.tsx`
- **Relative Path**: `src`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `ba2d3174d9e6b27981cfb8e94e87decf`
- **SHA256**: `0744ceac967579ab96b0c452208b865cb3f5f6efb5ec5b0f229f8dde04aafb77`
- **Encoding**: ASCII

**File code content:**

```typescript
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

---

### <a id="📄-index-html"></a>📄 `index.html`

**File Info:**
- **Size**: 377 B
- **Extension**: `.html`
- **Language**: `html`
- **Location**: `index.html`
- **Relative Path**: `root`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `2ff3bddd9e009e134ce6c2c0c92499bd`
- **SHA256**: `3f6d633f3ed6c47b2d9f8984276dfd7be2cfc6412420ab05c573dfa93f9d9f2b`
- **Encoding**: ASCII

**File code content:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Dashboard</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

---

### <a id="📄-next-env-d-ts"></a>📄 `next-env.d.ts`

**File Info:**
- **Size**: 259 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `next-env.d.ts`
- **Relative Path**: `root`
- **Created**: 2025-11-03 08:03:50 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-03 08:03:50 (Asia/Colombo / GMT+06:30)
- **MD5**: `90e6fea1e22a4efa98c3c71284a42a03`
- **SHA256**: `f41e9c5a66fe4dce9688ec9848279a51f1af1091d7bdb0a1e813e9661f26c77d`
- **Encoding**: ASCII

**File code content:**

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/pages/api-reference/config/typescript for more information.

```

---

### <a id="📄-package-lock-json"></a>📄 `package-lock.json`

**File Info:**
- **Size**: 471.79 KB
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `package-lock.json`
- **Relative Path**: `root`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-03 09:10:01 (Asia/Colombo / GMT+06:30)
- **MD5**: `15f44320a7a5da9a797fd29b2aaa43e0`
- **SHA256**: `4609a7a09196e855d279e1b92d09c953e4642512857f643075111fe8c8568c70`
- **Encoding**: ASCII

**File code content:**

```json
{
  "name": "admin-web-app",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "admin-web-app",
      "version": "0.1.0",
      "dependencies": {
        "axios": "^1.6.2",
        "class-variance-authority": "0.7.1",
        "clsx": "2.1.1",
        "date-fns": "^2.30.0",
        "dotenv": "^17.2.3",
        "lucide-react": "^0.294.0",
        "next": "16.0.0",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-router-dom": "^6.20.0",
        "shadcn": "3.4.2",
        "tailwind-merge": "3.3.1",
        "tailwindcss-animate": "1.0.7"
      },
      "devDependencies": {
        "@types/chai": "^5.2.3",
        "@types/jest": "^30.0.0",
        "@types/mocha": "^10.0.10",
        "@types/node": "^24.9.1",
        "@types/react": "^18.2.43",
        "@types/react-dom": "^18.2.17",
        "@types/selenium-webdriver": "^4.35.3",
        "@vitejs/plugin-react": "^4.2.1",
        "@wdio/allure-reporter": "^9.20.0",
        "allure-commandline": "^2.34.1",
        "autoprefixer": "^10.4.16",
        "chai": "^4.5.0",
        "chromedriver": "^142.0.0",
        "cross-env": "^10.1.0",
        "jest": "^30.2.0",
        "jest-html-reporter": "^4.3.0",
        "mocha": "^10.8.2",
        "postcss": "^8.4.32",
        "selenium-webdriver": "^4.38.0",
        "serve": "^14.2.5",
        "tailwindcss": "^3.4.17",
        "ts-jest": "^29.4.5",
        "ts-node": "^10.9.2",
        "typescript": "^5.9.3",
        "vite": "^5.0.8"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@antfu/ni": {
      "version": "25.0.0",
      "resolved": "https://registry.npmjs.org/@antfu/ni/-/ni-25.0.0.tgz",
      "integrity": "sha512-9q/yCljni37pkMr4sPrI3G4jqdIk074+iukc5aFJl7kmDCCsiJrbZ6zKxnES1Gwg+i9RcDZwvktl23puGslmvA==",
      "license": "MIT",
      "dependencies": {
        "ansis": "^4.0.0",
        "fzf": "^0.5.2",
        "package-manager-detector": "^1.3.0",
        "tinyexec": "^1.0.1"
      },
      "bin": {
        "na": "bin/na.mjs",
        "nci": "bin/nci.mjs",
        "ni": "bin/ni.mjs",
        "nlx": "bin/nlx.mjs",
        "nr": "bin/nr.mjs",
        "nun": "bin/nun.mjs",
        "nup": "bin/nup.mjs"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.4.tgz",
      "integrity": "sha512-YsmSKC29MJwf0gF8Rjjrg5LQCmyh+j/nD8/eP7f+BeoQTKYqs9RoWbjGOdy0+1Ekr68RJZMUOPVQaQisnIo4Rw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.4.tgz",
      "integrity": "sha512-2BCOP7TN8M+gVDj7/ht3hsaO/B/n5oDbiAyyvnRlNOs+u1o+JWNYTQrmpuNp1/Wq2gcFrI01JAW+paEKDMx/CA==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.3",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.4",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.4",
        "@babel/types": "^7.28.4",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.3.tgz",
      "integrity": "sha512-3lSpxGgvnmZznmBkCRnVREPUFJv2wrv9iAoFDvADJc0ypmdOxdUtcLeBgBJ6zE0PMeTKnxeQzyk0xTBq4Ep7zw==",
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.3",
        "@babel/types": "^7.28.2",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.27.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.27.3.tgz",
      "integrity": "sha512-fXSwMQqitTGeHLBC08Eq5yXz2m37E4pJX1qAU1+2cNedz/ifv/bVXft90VeSav5nFO61EcNgwr0aJxbyPaWBPg==",
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.27.3"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-create-class-features-plugin": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.28.3.tgz",
      "integrity": "sha512-V9f6ZFIYSLNEbuGA/92uOvYsGCJNsuA8ESZ4ldc09bWk/j8H8TKiPw8Mk1eG6olpnO0ALHJmYfZvF4MEE4gajg==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.27.3",
        "@babel/helper-member-expression-to-functions": "^7.27.1",
        "@babel/helper-optimise-call-expression": "^7.27.1",
        "@babel/helper-replace-supers": "^7.27.1",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.27.1",
        "@babel/traverse": "^7.28.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-member-expression-to-functions": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.27.1.tgz",
      "integrity": "sha512-E5chM8eWjTp/aNoVpcbfM7mLxu9XGLWYise2eBKGQomAk/Mb4XoxyqXTZbuTohbsl8EKqdlMhnDI2CCLfcs9wA==",
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-optimise-call-expression": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.27.1.tgz",
      "integrity": "sha512-URMGH08NzYFhubNSGJrpUEphGKQwMQYBySzat5cAByY1/YgIRkULnIy3tAMeszlL/so2HbeilYloUmSpd7GdVw==",
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-replace-supers": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.27.1.tgz",
      "integrity": "sha512-7EHz6qDZc8RYS5ElPoShMheWvEgERonFCs7IAonWLLUTXW59DP14bCZt89/GKyreYn8g3S83m21FelHKbeDCKA==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-member-expression-to-functions": "^7.27.1",
        "@babel/helper-optimise-call-expression": "^7.27.1",
        "@babel/traverse": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-skip-transparent-expression-wrappers": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.27.1.tgz",
      "integrity": "sha512-Tub4ZKEXqbPjXgWLl2+3JpQAYBJ8+ikpQ2Ocj/q/r0LwE3UhENh7EUabyHjz2kCEsrRY83ew2DQdHluuiDQFzg==",
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.27.1.tgz",
      "integrity": "sha512-D2hP9eA+Sqx1kBZgzxZh0y1trbuU+JoDkiEwqhQ36nodYqJwyEIhPSdMNd7lOm/4io72luTPWH20Yda0xOuUow==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.4.tgz",
      "integrity": "sha512-yZbBqeM6TkpP9du/I2pUZnJsRMGGvOuIrhjzC1AwHwW+6he4mni6Bp/m8ijn0iOuZuPI2BfkCoSRunpyjnrQKg==",
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.4"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-syntax-async-generators": {
      "version": "7.8.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
      "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-bigint": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-bigint/-/plugin-syntax-bigint-7.8.3.tgz",
      "integrity": "sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-class-properties": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
      "integrity": "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-class-static-block": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-static-block/-/plugin-syntax-class-static-block-7.14.5.tgz",
      "integrity": "sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-import-attributes": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-attributes/-/plugin-syntax-import-attributes-7.27.1.tgz",
      "integrity": "sha512-oFT0FrKHgF53f4vOsZGi2Hh3I35PfSmVs4IBFLFj4dnafP+hIWDLg3VyKmUHfLoLHlyxY4C7DGtmHuJgn+IGww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-import-meta": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-meta/-/plugin-syntax-import-meta-7.10.4.tgz",
      "integrity": "sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-json-strings": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
      "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-jsx": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.27.1.tgz",
      "integrity": "sha512-y8YTNIeKoyhGd9O0Jiyzyyqk8gdjnumGTQPsz0xOZOQ2RmkVJeZ1vmmfIvFEKqucBG6axJGBZDE/7iI5suUI/w==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-logical-assignment-operators": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
      "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-nullish-coalescing-operator": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
      "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-numeric-separator": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
      "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-object-rest-spread": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
      "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-optional-catch-binding": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
      "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-optional-chaining": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
      "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-private-property-in-object": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-private-property-in-object/-/plugin-syntax-private-property-in-object-7.14.5.tgz",
      "integrity": "sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-top-level-await": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz",
      "integrity": "sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-typescript": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.27.1.tgz",
      "integrity": "sha512-xfYCBMxveHrRMnAWl1ZlPXOZjzkN82THFvLhQhFXFt81Z5HnN+EtUkZhv/zcKpmT3fzmWZB0ywiBrbC3vogbwQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-commonjs": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.27.1.tgz",
      "integrity": "sha512-OJguuwlTYlN0gBZFRPqwOGNWssZjfIUdS7HMYtN8c1KmwpwHFBwTeFZrg9XZa+DFTitWOW5iTAG7tyCUPsCCyw==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.27.1",
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
      "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
      "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-typescript": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typescript/-/plugin-transform-typescript-7.28.0.tgz",
      "integrity": "sha512-4AEiDEBPIZvLQaWlc9liCavE0xRM0dNca41WtBeM3jgFptfUOSG9z0uteLhq6+3rq+WB6jIvUwKDTpXEHPJ2Vg==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.27.3",
        "@babel/helper-create-class-features-plugin": "^7.27.1",
        "@babel/helper-plugin-utils": "^7.27.1",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.27.1",
        "@babel/plugin-syntax-typescript": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/preset-typescript": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/preset-typescript/-/preset-typescript-7.27.1.tgz",
      "integrity": "sha512-l7WfQfX0WK4M0v2RudjuQK4u99BS6yLHYEmdtVPP7lKV013zr9DygFuWNlnbvQ9LR+LS0Egz/XAvGx5U9MX0fQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1",
        "@babel/helper-validator-option": "^7.27.1",
        "@babel/plugin-syntax-jsx": "^7.27.1",
        "@babel/plugin-transform-modules-commonjs": "^7.27.1",
        "@babel/plugin-transform-typescript": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.28.4.tgz",
      "integrity": "sha512-Q/N6JNWvIvPnLDvjlE1OUBLPQHH6l3CltCEsHIujp45zQUSSh8K+gHnaEX45yAT1nyngnINhvWtzN+Nb9D8RAQ==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.4.tgz",
      "integrity": "sha512-YEzuboP2qvQavAcjgQNVgsvHIDv6ZpwXvcvjmyySP2DIMuByS/6ioU5G9pYrWHM6T2YDfc7xga9iNzYOs12CFQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.3",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.4",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.4.tgz",
      "integrity": "sha512-bkFqkLhh3pMBUQQkpVgWDWq/lqzc2678eUyDlTBhRqhCHFguYYGM0Efga7tYk4TogG/3x0EEl66/OQ+WGbWB/Q==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@bazel/runfiles": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/@bazel/runfiles/-/runfiles-6.5.0.tgz",
      "integrity": "sha512-RzahvqTkfpY2jsDxo8YItPX+/iZ6hbiikw1YhE0bA9EKBR5Og8Pa6FHn9PO9M0zaXRVsr0GFQLKbB/0rzy9SzA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/@bcoe/v8-coverage": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/@bcoe/v8-coverage/-/v8-coverage-0.2.3.tgz",
      "integrity": "sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@cspotcode/source-map-support": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
      "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "0.3.9"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@cspotcode/source-map-support/node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",
      "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "node_modules/@dotenvx/dotenvx": {
      "version": "1.51.0",
      "resolved": "https://registry.npmjs.org/@dotenvx/dotenvx/-/dotenvx-1.51.0.tgz",
      "integrity": "sha512-CbMGzyOYSyFF7d4uaeYwO9gpSBzLTnMmSmTVpCZjvpJFV69qYbjYPpzNnCz1mb2wIvEhjWjRwQWuBzTO0jITww==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "commander": "^11.1.0",
        "dotenv": "^17.2.1",
        "eciesjs": "^0.4.10",
        "execa": "^5.1.1",
        "fdir": "^6.2.0",
        "ignore": "^5.3.0",
        "object-treeify": "1.1.33",
        "picomatch": "^4.0.2",
        "which": "^4.0.0"
      },
      "bin": {
        "dotenvx": "src/cli/dotenvx.js"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/@dotenvx/dotenvx/node_modules/commander": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-11.1.0.tgz",
      "integrity": "sha512-yPVavfyCcRhmorC7rWlkHn15b4wDVgVmBA7kV4QVBsF7kv/9TKJAbAXVTxvTnwP8HHKjRCJDClKbciiYS7p0DQ==",
      "license": "MIT",
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@dotenvx/dotenvx/node_modules/execa": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
      "integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
      "license": "MIT",
      "dependencies": {
        "cross-spawn": "^7.0.3",
        "get-stream": "^6.0.0",
        "human-signals": "^2.1.0",
        "is-stream": "^2.0.0",
        "merge-stream": "^2.0.0",
        "npm-run-path": "^4.0.1",
        "onetime": "^5.1.2",
        "signal-exit": "^3.0.3",
        "strip-final-newline": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/execa?sponsor=1"
      }
    },
    "node_modules/@dotenvx/dotenvx/node_modules/get-stream": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
      "integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@dotenvx/dotenvx/node_modules/human-signals": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
      "integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=10.17.0"
      }
    },
    "node_modules/@dotenvx/dotenvx/node_modules/is-stream": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
      "integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@dotenvx/dotenvx/node_modules/npm-run-path": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
      "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@dotenvx/dotenvx/node_modules/onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "license": "MIT",
      "dependencies": {
        "mimic-fn": "^2.1.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@dotenvx/dotenvx/node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "license": "ISC"
    },
    "node_modules/@dotenvx/dotenvx/node_modules/strip-final-newline": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
      "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@ecies/ciphers": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/@ecies/ciphers/-/ciphers-0.2.4.tgz",
      "integrity": "sha512-t+iX+Wf5nRKyNzk8dviW3Ikb/280+aEJAnw9YXvCp2tYGPSkMki+NRY+8aNLmVFv3eNtMdvViPNOPxS8SZNP+w==",
      "license": "MIT",
      "engines": {
        "bun": ">=1",
        "deno": ">=2",
        "node": ">=16"
      },
      "peerDependencies": {
        "@noble/ciphers": "^1.0.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.6.0.tgz",
      "integrity": "sha512-zq/ay+9fNIJJtJiZxdTnXS20PllcYMX3OE23ESc4HK/bdYu3cOWYVhsOhVnXALfU/uqJIxn5NBPd9z4v+SfoSg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.1.0",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.6.0.tgz",
      "integrity": "sha512-obtUmAHTMjll499P+D9A3axeJFlhdjOWdKUNs/U6QIGT7V5RjcUW1xToAzjvmgTSQhDbYn/NwfTRoJcQ2rNBxA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.1.0.tgz",
      "integrity": "sha512-WI0DdZ8xFSbgMjR1sFsKABJ/C5OnRrjT06JXbZKexJGrDuPTzZdDYfFlsgcCXCyf+suG5QU2e/y1Wo2V/OapLQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@epic-web/invariant": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@epic-web/invariant/-/invariant-1.0.0.tgz",
      "integrity": "sha512-lrTPqgvfFQtR/eY/qkIzp98OGdNJu0m5ji3q/nJI8v3SXkRKEnWiOxMmbvcSoAIzv/cGiuvRy57k4suKQSAdwA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
      "integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
      "integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
      "integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
      "integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
      "integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
      "integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
      "integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
      "integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
      "integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
      "integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
      "integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
      "integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
      "integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
      "integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
      "integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
      "integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
      "integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
      "integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
      "integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
      "integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
      "integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
      "integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
      "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.0.0.tgz",
      "integrity": "sha512-A5P/LfWGFSl6nsckYtjw9da+19jB8hkJ6ACTGcDfEJ0aE+l2n2El7dsVM7UVHZQ9s2lmYMWlrS21YLy2IR1LUw==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.34.4.tgz",
      "integrity": "sha512-sitdlPzDVyvmINUdJle3TNHl+AG9QcwiAMsXmccqsCOMZNIdW2/7S26w0LyU8euiLVzFBL3dXPwVCq/ODnf2vA==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.34.4.tgz",
      "integrity": "sha512-rZheupWIoa3+SOdF/IcUe1ah4ZDpKBGWcsPX6MT0lYniH9micvIU7HQkYTfrx5Xi8u+YqwLtxC/3vl8TQN6rMg==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.2.3.tgz",
      "integrity": "sha512-QzWAKo7kpHxbuHqUC28DZ9pIKpSi2ts2OJnoIGI26+HMgq92ZZ4vk8iJd4XsxN+tYfNJxzH6W62X5eTcsBymHw==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.2.3.tgz",
      "integrity": "sha512-Ju+g2xn1E2AKO6YBhxjj+ACcsPQRHT0bhpglxcEf+3uyPY+/gL8veniKoo96335ZaPo03bdDXMv0t+BBFAbmRA==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.2.3.tgz",
      "integrity": "sha512-x1uE93lyP6wEwGvgAIV0gP6zmaL/a0tGzJs/BIDDG0zeBhMnuUPm7ptxGhUbcGs4okDJrk4nxgrmxpib9g6HpA==",
      "cpu": [
        "arm"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.2.3.tgz",
      "integrity": "sha512-I4RxkXU90cpufazhGPyVujYwfIm9Nk1QDEmiIsaPwdnm013F7RIceaCc87kAH+oUB1ezqEvC6ga4m7MSlqsJvQ==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.2.3.tgz",
      "integrity": "sha512-Y2T7IsQvJLMCBM+pmPbM3bKT/yYJvVtLJGfCs4Sp95SjvnFIjynbjzsa7dY1fRJX45FTSfDksbTp6AGWudiyCg==",
      "cpu": [
        "ppc64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.2.3.tgz",
      "integrity": "sha512-RgWrs/gVU7f+K7P+KeHFaBAJlNkD1nIZuVXdQv6S+fNA6syCcoboNjsV2Pou7zNlVdNQoQUpQTk8SWDHUA3y/w==",
      "cpu": [
        "s390x"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.2.3.tgz",
      "integrity": "sha512-3JU7LmR85K6bBiRzSUc/Ff9JBVIFVvq6bomKE0e63UXGeRw2HPVEjoJke1Yx+iU4rL7/7kUjES4dZ/81Qjhyxg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.2.3.tgz",
      "integrity": "sha512-F9q83RZ8yaCwENw1GieztSfj5msz7GGykG/BA+MOUefvER69K/ubgFHNeSyUu64amHIYKGDs4sRCMzXVj8sEyw==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.2.3.tgz",
      "integrity": "sha512-U5PUY5jbc45ANM6tSJpsgqmBF/VsL6LnxJmIf11kB7J5DctHgqm0SkuXzVWtIY90GnJxKnC/JT251TDnk1fu/g==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.34.4.tgz",
      "integrity": "sha512-Xyam4mlqM0KkTHYVSuc6wXRmM7LGN0P12li03jAnZ3EJWZqj83+hi8Y9UxZUbxsgsK1qOEwg7O0Bc0LjqQVtxA==",
      "cpu": [
        "arm"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.2.3"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.34.4.tgz",
      "integrity": "sha512-YXU1F/mN/Wu786tl72CyJjP/Ngl8mGHN1hST4BGl+hiW5jhCnV2uRVTNOcaYPs73NeT/H8Upm3y9582JVuZHrQ==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.34.4.tgz",
      "integrity": "sha512-F4PDtF4Cy8L8hXA2p3TO6s4aDt93v+LKmpcYFLAVdkkD3hSxZzee0rh6/+94FpAynsuMpLX5h+LRsSG3rIciUQ==",
      "cpu": [
        "ppc64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.34.4.tgz",
      "integrity": "sha512-qVrZKE9Bsnzy+myf7lFKvng6bQzhNUAYcVORq2P7bDlvmF6u2sCmK2KyEQEBdYk+u3T01pVsPrkj943T1aJAsw==",
      "cpu": [
        "s390x"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.2.3"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.34.4.tgz",
      "integrity": "sha512-ZfGtcp2xS51iG79c6Vhw9CWqQC8l2Ot8dygxoDoIQPTat/Ov3qAa8qpxSrtAEAJW+UjTXc4yxCjNfxm4h6Xm2A==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.34.4.tgz",
      "integrity": "sha512-8hDVvW9eu4yHWnjaOOR8kHVrew1iIX+MUgwxSuH2XyYeNRtLUe4VNioSqbNkB7ZYQJj9rUTT4PyRscyk2PXFKA==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.34.4.tgz",
      "integrity": "sha512-lU0aA5L8QTlfKjpDCEFOZsTYGn3AEiO6db8W5aQDxj0nQkVrZWmN3ZP9sYKWJdtq3PWPhUNlqehWyXpYDcI9Sg==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.34.4.tgz",
      "integrity": "sha512-33QL6ZO/qpRyG7woB/HUALz28WnTMI2W1jgX3Nu2bypqLIKx/QKMILLJzJjI+SIbvXdG9fUnmrxR7vbi1sTBeA==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.5.0"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.34.4.tgz",
      "integrity": "sha512-2Q250do/5WXTwxW3zjsEuMSv5sUU4Tq9VThWKlU2EYLm4MB7ZeMwF+SFJutldYODXF6jzc6YEOC+VfX0SZQPqA==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.34.4.tgz",
      "integrity": "sha512-3ZeLue5V82dT92CNL6rsal6I2weKw1cYu+rGKm8fOCCtJTR2gYeUfY3FqUnIJsMUPIH68oS5jmZ0NiJ508YpEw==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.34.4.tgz",
      "integrity": "sha512-xIyj4wpYs8J18sVN3mSQjwrw7fKUqRw+Z5rnHNCy5fYTxigBz81u5mOMPmFumwjcn8+ld1ppptMBCLic1nz6ig==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@inquirer/ansi": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@inquirer/ansi/-/ansi-1.0.1.tgz",
      "integrity": "sha512-yqq0aJW/5XPhi5xOAL1xRCpe1eh8UFVgYFpFsjEqmIR8rKLyP+HINvFXwUaxYICflJrVlxnp7lLN6As735kVpw==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@inquirer/confirm": {
      "version": "5.1.19",
      "resolved": "https://registry.npmjs.org/@inquirer/confirm/-/confirm-5.1.19.tgz",
      "integrity": "sha512-wQNz9cfcxrtEnUyG5PndC8g3gZ7lGDBzmWiXZkX8ot3vfZ+/BLjR8EvyGX4YzQLeVqtAlY/YScZpW7CW8qMoDQ==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^10.3.0",
        "@inquirer/type": "^3.0.9"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/core": {
      "version": "10.3.0",
      "resolved": "https://registry.npmjs.org/@inquirer/core/-/core-10.3.0.tgz",
      "integrity": "sha512-Uv2aPPPSK5jeCplQmQ9xadnFx2Zhj9b5Dj7bU6ZeCdDNNY11nhYy4btcSdtDguHqCT2h5oNeQTcUNSGGLA7NTA==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^1.0.1",
        "@inquirer/figures": "^1.0.14",
        "@inquirer/type": "^3.0.9",
        "cli-width": "^4.1.0",
        "mute-stream": "^2.0.0",
        "signal-exit": "^4.1.0",
        "wrap-ansi": "^6.2.0",
        "yoctocolors-cjs": "^2.1.2"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/figures": {
      "version": "1.0.14",
      "resolved": "https://registry.npmjs.org/@inquirer/figures/-/figures-1.0.14.tgz",
      "integrity": "sha512-DbFgdt+9/OZYFM+19dbpXOSeAstPy884FPy1KjDu4anWwymZeOYhMY1mdFri172htv6mvc/uvIAAi7b7tvjJBQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@inquirer/type": {
      "version": "3.0.9",
      "resolved": "https://registry.npmjs.org/@inquirer/type/-/type-3.0.9.tgz",
      "integrity": "sha512-QPaNt/nmE2bLGQa9b7wwyRJoLZ7pN6rcyXvzU0YCmivmJyq1BVo94G98tStRWkoD1RgDX5C+dPlhhHzNdu/W/w==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@isaacs/balanced-match": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@isaacs/balanced-match/-/balanced-match-4.0.1.tgz",
      "integrity": "sha512-yzMTt9lEb8Gv7zRioUilSglI0c0smZ9k5D65677DLWLtWJaXIS3CqcGyUFByYKlnUj6TkjLVs54fBl6+TiGQDQ==",
      "license": "MIT",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@isaacs/brace-expansion": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/@isaacs/brace-expansion/-/brace-expansion-5.0.0.tgz",
      "integrity": "sha512-ZT55BDLV0yv0RBm2czMiZ+SqCGO7AvmOM3G/w2xhVPH+te0aKgFjmBvGlL1dH+ql2tgGO3MVrbb3jCKyvpgnxA==",
      "license": "MIT",
      "dependencies": {
        "@isaacs/balanced-match": "^4.0.1"
      },
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
      "license": "ISC",
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/ansi-styles": {
      "version": "6.2.3",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz",
      "integrity": "sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "license": "MIT"
    },
    "node_modules/@isaacs/cliui/node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
      "integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "camelcase": "^5.3.1",
        "find-up": "^4.1.0",
        "get-package-type": "^0.1.0",
        "js-yaml": "^3.13.1",
        "resolve-from": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "sprintf-js": "~1.0.2"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/resolve-from": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
      "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/schema": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
      "integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@jest/console": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/console/-/console-30.2.0.tgz",
      "integrity": "sha512-+O1ifRjkvYIkBqASKWgLxrpEhQAAE7hY77ALLUufSk5717KfOShg6IbqLmdsLMPdUiFvA2kTs0R7YZy+l0IzZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "30.2.0",
        "@types/node": "*",
        "chalk": "^4.1.2",
        "jest-message-util": "30.2.0",
        "jest-util": "30.2.0",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/console/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@jest/console/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@jest/core": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/core/-/core-30.2.0.tgz",
      "integrity": "sha512-03W6IhuhjqTlpzh/ojut/pDB2LPRygyWX8ExpgHtQA8H/3K7+1vKmcINx5UzeOX1se6YEsBsOHQ1CRzf3fOwTQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/console": "30.2.0",
        "@jest/pattern": "30.0.1",
        "@jest/reporters": "30.2.0",
        "@jest/test-result": "30.2.0",
        "@jest/transform": "30.2.0",
        "@jest/types": "30.2.0",
        "@types/node": "*",
        "ansi-escapes": "^4.3.2",
        "chalk": "^4.1.2",
        "ci-info": "^4.2.0",
        "exit-x": "^0.2.2",
        "graceful-fs": "^4.2.11",
        "jest-changed-files": "30.2.0",
        "jest-config": "30.2.0",
        "jest-haste-map": "30.2.0",
        "jest-message-util": "30.2.0",
        "jest-regex-util": "30.0.1",
        "jest-resolve": "30.2.0",
        "jest-resolve-dependencies": "30.2.0",
        "jest-runner": "30.2.0",
        "jest-runtime": "30.2.0",
        "jest-snapshot": "30.2.0",
        "jest-util": "30.2.0",
        "jest-validate": "30.2.0",
        "jest-watcher": "30.2.0",
        "micromatch": "^4.0.8",
        "pretty-format": "30.2.0",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      },
      "peerDependencies": {
        "node-notifier": "^8.0.1 || ^9.0.0 || ^10.0.0"
      },
      "peerDependenciesMeta": {
        "node-notifier": {
          "optional": true
        }
      }
    },
    "node_modules/@jest/core/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@jest/core/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@jest/diff-sequences": {
      "version": "30.0.1",
      "resolved": "https://registry.npmjs.org/@jest/diff-sequences/-/diff-sequences-30.0.1.tgz",
      "integrity": "sha512-n5H8QLDJ47QqbCNn5SuFjCRDrOLEZ0h8vAHCK5RL9Ls7Xa8AQLa/YxAc9UjFqoEDM48muwtBGjtMY5cr0PLDCw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/environment": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-30.2.0.tgz",
      "integrity": "sha512-/QPTL7OBJQ5ac09UDRa3EQes4gt1FTEG/8jZ/4v5IVzx+Cv7dLxlVIvfvSVRiiX2drWyXeBjkMSR8hvOWSog5g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/fake-timers": "30.2.0",
        "@jest/types": "30.2.0",
        "@types/node": "*",
        "jest-mock": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/expect": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/expect/-/expect-30.2.0.tgz",
      "integrity": "sha512-V9yxQK5erfzx99Sf+7LbhBwNWEZ9eZay8qQ9+JSC0TrMR1pMDHLMY+BnVPacWU6Jamrh252/IKo4F1Xn/zfiqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "expect": "30.2.0",
        "jest-snapshot": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/expect-utils": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/expect-utils/-/expect-utils-30.2.0.tgz",
      "integrity": "sha512-1JnRfhqpD8HGpOmQp180Fo9Zt69zNtC+9lR+kT7NVL05tNXIi+QC8Csz7lfidMoVLPD3FnOtcmp0CEFnxExGEA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/get-type": "30.1.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/fake-timers": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-30.2.0.tgz",
      "integrity": "sha512-HI3tRLjRxAbBy0VO8dqqm7Hb2mIa8d5bg/NJkyQcOk7V118ObQML8RC5luTF/Zsg4474a+gDvhce7eTnP4GhYw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "30.2.0",
        "@sinonjs/fake-timers": "^13.0.0",
        "@types/node": "*",
        "jest-message-util": "30.2.0",
        "jest-mock": "30.2.0",
        "jest-util": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/get-type": {
      "version": "30.1.0",
      "resolved": "https://registry.npmjs.org/@jest/get-type/-/get-type-30.1.0.tgz",
      "integrity": "sha512-eMbZE2hUnx1WV0pmURZY9XoXPkUYjpc55mb0CrhtdWLtzMQPFvu/rZkTLZFTsdaVQa+Tr4eWAteqcUzoawq/uA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/globals": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/globals/-/globals-30.2.0.tgz",
      "integrity": "sha512-b63wmnKPaK+6ZZfpYhz9K61oybvbI1aMcIs80++JI1O1rR1vaxHUCNqo3ITu6NU0d4V34yZFoHMn/uoKr/Rwfw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/environment": "30.2.0",
        "@jest/expect": "30.2.0",
        "@jest/types": "30.2.0",
        "jest-mock": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/pattern": {
      "version": "30.0.1",
      "resolved": "https://registry.npmjs.org/@jest/pattern/-/pattern-30.0.1.tgz",
      "integrity": "sha512-gWp7NfQW27LaBQz3TITS8L7ZCQ0TLvtmI//4OwlQRx4rnWxcPNIYjxZpDcN4+UlGxgm3jS5QPz8IPTCkb59wZA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "jest-regex-util": "30.0.1"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/reporters": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/reporters/-/reporters-30.2.0.tgz",
      "integrity": "sha512-DRyW6baWPqKMa9CzeiBjHwjd8XeAyco2Vt8XbcLFjiwCOEKOvy82GJ8QQnJE9ofsxCMPjH4MfH8fCWIHHDKpAQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@bcoe/v8-coverage": "^0.2.3",
        "@jest/console": "30.2.0",
        "@jest/test-result": "30.2.0",
        "@jest/transform": "30.2.0",
        "@jest/types": "30.2.0",
        "@jridgewell/trace-mapping": "^0.3.25",
        "@types/node": "*",
        "chalk": "^4.1.2",
        "collect-v8-coverage": "^1.0.2",
        "exit-x": "^0.2.2",
        "glob": "^10.3.10",
        "graceful-fs": "^4.2.11",
        "istanbul-lib-coverage": "^3.0.0",
        "istanbul-lib-instrument": "^6.0.0",
        "istanbul-lib-report": "^3.0.0",
        "istanbul-lib-source-maps": "^5.0.0",
        "istanbul-reports": "^3.1.3",
        "jest-message-util": "30.2.0",
        "jest-util": "30.2.0",
        "jest-worker": "30.2.0",
        "slash": "^3.0.0",
        "string-length": "^4.0.2",
        "v8-to-istanbul": "^9.0.1"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      },
      "peerDependencies": {
        "node-notifier": "^8.0.1 || ^9.0.0 || ^10.0.0"
      },
      "peerDependenciesMeta": {
        "node-notifier": {
          "optional": true
        }
      }
    },
    "node_modules/@jest/reporters/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@jest/reporters/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@jest/schemas": {
      "version": "30.0.5",
      "resolved": "https://registry.npmjs.org/@jest/schemas/-/schemas-30.0.5.tgz",
      "integrity": "sha512-DmdYgtezMkh3cpU8/1uyXakv3tJRcmcXxBOcO0tbaozPwpmh4YMsnWrQm9ZmZMfa5ocbxzbFk6O4bDPEc/iAnA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sinclair/typebox": "^0.34.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/snapshot-utils": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/snapshot-utils/-/snapshot-utils-30.2.0.tgz",
      "integrity": "sha512-0aVxM3RH6DaiLcjj/b0KrIBZhSX1373Xci4l3cW5xiUWPctZ59zQ7jj4rqcJQ/Z8JuN/4wX3FpJSa3RssVvCug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "30.2.0",
        "chalk": "^4.1.2",
        "graceful-fs": "^4.2.11",
        "natural-compare": "^1.4.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/snapshot-utils/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@jest/snapshot-utils/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@jest/source-map": {
      "version": "30.0.1",
      "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-30.0.1.tgz",
      "integrity": "sha512-MIRWMUUR3sdbP36oyNyhbThLHyJ2eEDClPCiHVbrYAe5g3CHRArIVpBw7cdSB5fr+ofSfIb2Tnsw8iEHL0PYQg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "^0.3.25",
        "callsites": "^3.1.0",
        "graceful-fs": "^4.2.11"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/test-result": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-30.2.0.tgz",
      "integrity": "sha512-RF+Z+0CCHkARz5HT9mcQCBulb1wgCP3FBvl9VFokMX27acKphwyQsNuWH3c+ojd1LeWBLoTYoxF0zm6S/66mjg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/console": "30.2.0",
        "@jest/types": "30.2.0",
        "@types/istanbul-lib-coverage": "^2.0.6",
        "collect-v8-coverage": "^1.0.2"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/test-sequencer": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-30.2.0.tgz",
      "integrity": "sha512-wXKgU/lk8fKXMu/l5Hog1R61bL4q5GCdT6OJvdAFz1P+QrpoFuLU68eoKuVc4RbrTtNnTL5FByhWdLgOPSph+Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/test-result": "30.2.0",
        "graceful-fs": "^4.2.11",
        "jest-haste-map": "30.2.0",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/transform": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-30.2.0.tgz",
      "integrity": "sha512-XsauDV82o5qXbhalKxD7p4TZYYdwcaEXC77PPD2HixEFF+6YGppjrAAQurTl2ECWcEomHBMMNS9AH3kcCFx8jA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.27.4",
        "@jest/types": "30.2.0",
        "@jridgewell/trace-mapping": "^0.3.25",
        "babel-plugin-istanbul": "^7.0.1",
        "chalk": "^4.1.2",
        "convert-source-map": "^2.0.0",
        "fast-json-stable-stringify": "^2.1.0",
        "graceful-fs": "^4.2.11",
        "jest-haste-map": "30.2.0",
        "jest-regex-util": "30.0.1",
        "jest-util": "30.2.0",
        "micromatch": "^4.0.8",
        "pirates": "^4.0.7",
        "slash": "^3.0.0",
        "write-file-atomic": "^5.0.1"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/transform/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@jest/transform/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@jest/types": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-30.2.0.tgz",
      "integrity": "sha512-H9xg1/sfVvyfU7o3zMfBEjQ1gcsdeTMgqHoYdN79tuLqfTtuu7WckRA1R5whDwOzxaZAeMKTYWqP+WCAi0CHsg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/pattern": "30.0.1",
        "@jest/schemas": "30.0.5",
        "@types/istanbul-lib-coverage": "^2.0.6",
        "@types/istanbul-reports": "^3.0.4",
        "@types/node": "*",
        "@types/yargs": "^17.0.33",
        "chalk": "^4.1.2"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/@jest/types/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@jest/types/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@modelcontextprotocol/sdk": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/@modelcontextprotocol/sdk/-/sdk-1.20.1.tgz",
      "integrity": "sha512-j/P+yuxXfgxb+mW7OEoRCM3G47zCTDqUPivJo/VzpjbG8I9csTXtOprCf5FfOfHK4whOJny0aHuBEON+kS7CCA==",
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.6",
        "content-type": "^1.0.5",
        "cors": "^2.8.5",
        "cross-spawn": "^7.0.5",
        "eventsource": "^3.0.2",
        "eventsource-parser": "^3.0.0",
        "express": "^5.0.1",
        "express-rate-limit": "^7.5.0",
        "pkce-challenge": "^5.0.0",
        "raw-body": "^3.0.0",
        "zod": "^3.23.8",
        "zod-to-json-schema": "^3.24.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@mswjs/interceptors": {
      "version": "0.40.0",
      "resolved": "https://registry.npmjs.org/@mswjs/interceptors/-/interceptors-0.40.0.tgz",
      "integrity": "sha512-EFd6cVbHsgLa6wa4RljGj6Wk75qoHxUSyc5asLyyPSyuhIcdS2Q3Phw6ImS1q+CkALthJRShiYfKANcQMuMqsQ==",
      "license": "MIT",
      "dependencies": {
        "@open-draft/deferred-promise": "^2.2.0",
        "@open-draft/logger": "^0.3.0",
        "@open-draft/until": "^2.0.0",
        "is-node-process": "^1.2.0",
        "outvariant": "^1.4.3",
        "strict-event-emitter": "^0.5.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "0.2.12",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-0.2.12.tgz",
      "integrity": "sha512-ZVWUcfwY4E/yPitQJl481FjFo3K22D6qF0DuFH6Y/nbnE11GY5uguDxZMGXPQ8WQ0128MXQD7TnfHyK4oWoIJQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.4.3",
        "@emnapi/runtime": "^1.4.3",
        "@tybys/wasm-util": "^0.10.0"
      }
    },
    "node_modules/@next/env": {
      "version": "16.0.0",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-16.0.0.tgz",
      "integrity": "sha512-s5j2iFGp38QsG1LWRQaE2iUY3h1jc014/melHFfLdrsMJPqxqDQwWNwyQTcNoUSGZlCVZuM7t7JDMmSyRilsnA==",
      "license": "MIT"
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "16.0.0",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-16.0.0.tgz",
      "integrity": "sha512-/CntqDCnk5w2qIwMiF0a9r6+9qunZzFmU0cBX4T82LOflE72zzH6gnOjCwUXYKOBlQi8OpP/rMj8cBIr18x4TA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "16.0.0",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-16.0.0.tgz",
      "integrity": "sha512-hB4GZnJGKa8m4efvTGNyii6qs76vTNl+3dKHTCAUaksN6KjYy4iEO3Q5ira405NW2PKb3EcqWiRaL9DrYJfMHg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "16.0.0",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-16.0.0.tgz",
      "integrity": "sha512-E2IHMdE+C1k+nUgndM13/BY/iJY9KGCphCftMh7SXWcaQqExq/pJU/1Hgn8n/tFwSoLoYC/yUghOv97tAsIxqg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "16.0.0",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-16.0.0.tgz",
      "integrity": "sha512-xzgl7c7BVk4+7PDWldU+On2nlwnGgFqJ1siWp3/8S0KBBLCjonB6zwJYPtl4MUY7YZJrzzumdUpUoquu5zk8vg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "16.0.0",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-16.0.0.tgz",
      "integrity": "sha512-sdyOg4cbiCw7YUr0F/7ya42oiVBXLD21EYkSwN+PhE4csJH4MSXUsYyslliiiBwkM+KsuQH/y9wuxVz6s7Nstg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "16.0.0",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-16.0.0.tgz",
      "integrity": "sha512-IAXv3OBYqVaNOgyd3kxR4L3msuhmSy1bcchPHxDOjypG33i2yDWvGBwFD94OuuTjjTt/7cuIKtAmoOOml6kfbg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "16.0.0",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-16.0.0.tgz",
      "integrity": "sha512-bmo3ncIJKUS9PWK1JD9pEVv0yuvp1KPuOsyJTHXTv8KDrEmgV/K+U0C75rl9rhIaODcS7JEb6/7eJhdwXI0XmA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "16.0.0",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-16.0.0.tgz",
      "integrity": "sha512-O1cJbT+lZp+cTjYyZGiDwsOjO3UHHzSqobkPNipdlnnuPb1swfcuY6r3p8dsKU4hAIEO4cO67ZCfVVH/M1ETXA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@noble/ciphers": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@noble/ciphers/-/ciphers-1.3.0.tgz",
      "integrity": "sha512-2I0gnIVPtfnMw9ee9h1dJG7tp81+8Ob3OJb3Mv37rx5L40/b0i7djjCVvGOVqc9AEIQyvyu1i6ypKdFw8R8gQw==",
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": "^14.21.3 || >=16"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/@noble/curves": {
      "version": "1.9.7",
      "resolved": "https://registry.npmjs.org/@noble/curves/-/curves-1.9.7.tgz",
      "integrity": "sha512-gbKGcRUYIjA3/zCCNaWDciTMFI0dCkvou3TL8Zmy5Nc7sJ47a0jtOeZoTaMxkuqRo9cRhjOdZJXegxYE5FN/xw==",
      "license": "MIT",
      "dependencies": {
        "@noble/hashes": "1.8.0"
      },
      "engines": {
        "node": "^14.21.3 || >=16"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/@noble/hashes": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/@noble/hashes/-/hashes-1.8.0.tgz",
      "integrity": "sha512-jCs9ldd7NwzpgXDIf6P3+NrHh9/sD6CQdxHyjQI+h/6rDNo88ypBxxz45UDuZHz9r3tNz7N/VInSVoVdtXEI4A==",
      "license": "MIT",
      "engines": {
        "node": "^14.21.3 || >=16"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@open-draft/deferred-promise": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@open-draft/deferred-promise/-/deferred-promise-2.2.0.tgz",
      "integrity": "sha512-CecwLWx3rhxVQF6V4bAgPS5t+So2sTbPgAzafKkVizyi7tlwpcFpdFqq+wqF2OwNBmqFuu6tOyouTuxgpMfzmA==",
      "license": "MIT"
    },
    "node_modules/@open-draft/logger": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/@open-draft/logger/-/logger-0.3.0.tgz",
      "integrity": "sha512-X2g45fzhxH238HKO4xbSr7+wBS8Fvw6ixhTDuvLd5mqh6bJJCFAPwU9mPDxbcrRtfxv4u5IHCEH77BmxvXmmxQ==",
      "license": "MIT",
      "dependencies": {
        "is-node-process": "^1.2.0",
        "outvariant": "^1.4.0"
      }
    },
    "node_modules/@open-draft/until": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@open-draft/until/-/until-2.1.0.tgz",
      "integrity": "sha512-U69T3ItWHvLwGg5eJ0n3I62nWuE6ilHlmz7zM0npLBRvPRd7e6NYmg54vvRtP5mZG7kZqZCFVdsTWo7BPtBujg==",
      "license": "MIT"
    },
    "node_modules/@pkgjs/parseargs": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@pkgr/core": {
      "version": "0.2.9",
      "resolved": "https://registry.npmjs.org/@pkgr/core/-/core-0.2.9.tgz",
      "integrity": "sha512-QNqXyfVS2wm9hweSYD2O7F0G06uurj9kZ96TRQE5Y9hU7+tgdZwIkbAKc5Ocy1HxEY2kuDQa6cQ1WRs/O5LFKA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/pkgr"
      }
    },
    "node_modules/@remix-run/router": {
      "version": "1.23.0",
      "resolved": "https://registry.npmjs.org/@remix-run/router/-/router-1.23.0.tgz",
      "integrity": "sha512-O3rHJzAQKamUz1fvE0Qaw0xSFqsA/yafi2iqeE0pvdFtCO1viYx8QL6f3Ln/aCCTLxs68SLf0KPM9eSeM8yBnA==",
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.27",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.27.tgz",
      "integrity": "sha512-+d0F4MKMCbeVUJwG96uQ4SgAznZNSq93I3V+9NHA4OpvqG8mRCpGdKmK8l/dl02h2CCDHwW2FqilnTyDcAnqjA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.52.5.tgz",
      "integrity": "sha512-8c1vW4ocv3UOMp9K+gToY5zL2XiiVw3k7f1ksf4yO1FlDFQ1C2u72iACFnSOceJFsWskc2WZNqeRhFRPzv+wtQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.52.5.tgz",
      "integrity": "sha512-mQGfsIEFcu21mvqkEKKu2dYmtuSZOBMmAl5CFlPGLY94Vlcm+zWApK7F/eocsNzp8tKmbeBP8yXyAbx0XHsFNA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.52.5.tgz",
      "integrity": "sha512-takF3CR71mCAGA+v794QUZ0b6ZSrgJkArC+gUiG6LB6TQty9T0Mqh3m2ImRBOxS2IeYBo4lKWIieSvnEk2OQWA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.52.5.tgz",
      "integrity": "sha512-W901Pla8Ya95WpxDn//VF9K9u2JbocwV/v75TE0YIHNTbhqUTv9w4VuQ9MaWlNOkkEfFwkdNhXgcLqPSmHy0fA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.52.5.tgz",
      "integrity": "sha512-QofO7i7JycsYOWxe0GFqhLmF6l1TqBswJMvICnRUjqCx8b47MTo46W8AoeQwiokAx3zVryVnxtBMcGcnX12LvA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.52.5.tgz",
      "integrity": "sha512-jr21b/99ew8ujZubPo9skbrItHEIE50WdV86cdSoRkKtmWa+DDr6fu2c/xyRT0F/WazZpam6kk7IHBerSL7LDQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.52.5.tgz",
      "integrity": "sha512-PsNAbcyv9CcecAUagQefwX8fQn9LQ4nZkpDboBOttmyffnInRy8R8dSg6hxxl2Re5QhHBf6FYIDhIj5v982ATQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.52.5.tgz",
      "integrity": "sha512-Fw4tysRutyQc/wwkmcyoqFtJhh0u31K+Q6jYjeicsGJJ7bbEq8LwPWV/w0cnzOqR2m694/Af6hpFayLJZkG2VQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.52.5.tgz",
      "integrity": "sha512-a+3wVnAYdQClOTlyapKmyI6BLPAFYs0JM8HRpgYZQO02rMR09ZcV9LbQB+NL6sljzG38869YqThrRnfPMCDtZg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.52.5.tgz",
      "integrity": "sha512-AvttBOMwO9Pcuuf7m9PkC1PUIKsfaAJ4AYhy944qeTJgQOqJYJ9oVl2nYgY7Rk0mkbsuOpCAYSs6wLYB2Xiw0Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.52.5.tgz",
      "integrity": "sha512-DkDk8pmXQV2wVrF6oq5tONK6UHLz/XcEVow4JTTerdeV1uqPeHxwcg7aFsfnSm9L+OO8WJsWotKM2JJPMWrQtA==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.52.5.tgz",
      "integrity": "sha512-W/b9ZN/U9+hPQVvlGwjzi+Wy4xdoH2I8EjaCkMvzpI7wJUs8sWJ03Rq96jRnHkSrcHTpQe8h5Tg3ZzUPGauvAw==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.52.5.tgz",
      "integrity": "sha512-sjQLr9BW7R/ZiXnQiWPkErNfLMkkWIoCz7YMn27HldKsADEKa5WYdobaa1hmN6slu9oWQbB6/jFpJ+P2IkVrmw==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.52.5.tgz",
      "integrity": "sha512-hq3jU/kGyjXWTvAh2awn8oHroCbrPm8JqM7RUpKjalIRWWXE01CQOf/tUNWNHjmbMHg/hmNCwc/Pz3k1T/j/Lg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.52.5.tgz",
      "integrity": "sha512-gn8kHOrku8D4NGHMK1Y7NA7INQTRdVOntt1OCYypZPRt6skGbddska44K8iocdpxHTMMNui5oH4elPH4QOLrFQ==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.52.5.tgz",
      "integrity": "sha512-hXGLYpdhiNElzN770+H2nlx+jRog8TyynpTVzdlc6bndktjKWyZyiCsuDAlpd+j+W+WNqfcyAWz9HxxIGfZm1Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.52.5.tgz",
      "integrity": "sha512-arCGIcuNKjBoKAXD+y7XomR9gY6Mw7HnFBv5Rw7wQRvwYLR7gBAgV7Mb2QTyjXfTveBNFAtPt46/36vV9STLNg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.52.5.tgz",
      "integrity": "sha512-QoFqB6+/9Rly/RiPjaomPLmR/13cgkIGfA40LHly9zcH1S0bN2HVFYk3a1eAyHQyjs3ZJYlXvIGtcCs5tko9Cw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.52.5.tgz",
      "integrity": "sha512-w0cDWVR6MlTstla1cIfOGyl8+qb93FlAVutcor14Gf5Md5ap5ySfQ7R9S/NjNaMLSFdUnKGEasmVnu3lCMqB7w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.52.5.tgz",
      "integrity": "sha512-Aufdpzp7DpOTULJCuvzqcItSGDH73pF3ko/f+ckJhxQyHtp67rHw3HMNxoIdDMUITJESNE6a8uh4Lo4SLouOUg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.52.5.tgz",
      "integrity": "sha512-UGBUGPFp1vkj6p8wCRraqNhqwX/4kNQPS57BCFc8wYh0g94iVIW33wJtQAx3G7vrjjNtRaxiMUylM0ktp/TRSQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.52.5.tgz",
      "integrity": "sha512-TAcgQh2sSkykPRWLrdyy2AiceMckNf5loITqXxFI5VuQjS5tSuw3WlwdN8qv8vzjLAUTvYaH/mVjSFpbkFbpTg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@sec-ant/readable-stream": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@sec-ant/readable-stream/-/readable-stream-0.4.1.tgz",
      "integrity": "sha512-831qok9r2t8AlxLko40y2ebgSDhenenCatLVeW/uBtnHPyhHOvG0C7TvfgecV+wHzIm5KUICgzmVpWS+IMEAeg==",
      "license": "MIT"
    },
    "node_modules/@sinclair/typebox": {
      "version": "0.34.41",
      "resolved": "https://registry.npmjs.org/@sinclair/typebox/-/typebox-0.34.41.tgz",
      "integrity": "sha512-6gS8pZzSXdyRHTIqoqSVknxolr1kzfy4/CeDnrzsVz8TTIWUbOBr6gnzOmTYJ3eXQNh4IYHIGi5aIL7sOZ2G/g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@sindresorhus/merge-streams": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@sindresorhus/merge-streams/-/merge-streams-4.0.0.tgz",
      "integrity": "sha512-tlqY9xq5ukxTUZBmoOp+m61cqwQD5pHJtFY3Mn8CA8ps6yghLH/Hw8UPdqg4OLmFW3IFlcXnQNmo/dh8HzXYIQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@sinonjs/commons": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@sinonjs/commons/-/commons-3.0.1.tgz",
      "integrity": "sha512-K3mCHKQ9sVh8o1C9cxkwxaOmXoAMlDxC1mYyHrjqOWEcBjYr76t96zL2zlj5dUGZ3HSw240X1qgH3Mjf1yJWpQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "type-detect": "4.0.8"
      }
    },
    "node_modules/@sinonjs/commons/node_modules/type-detect": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
      "integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@sinonjs/fake-timers": {
      "version": "13.0.5",
      "resolved": "https://registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-13.0.5.tgz",
      "integrity": "sha512-36/hTbH2uaWuGVERyC6da9YwGWnzUZXuPro/F2LfsdOsLnCojz/iSH8MxUt/FD2S5XBSVPhmArFUXcpCQ2Hkiw==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@sinonjs/commons": "^3.0.1"
      }
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz",
      "integrity": "sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@testim/chrome-version": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@testim/chrome-version/-/chrome-version-1.1.4.tgz",
      "integrity": "sha512-kIhULpw9TrGYnHp/8VfdcneIcxKnLixmADtukQRtJUmsVlMg0niMkwV0xZmi8hqa57xqilIHjWFA0GKvEjVU5g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tootallnate/quickjs-emscripten": {
      "version": "0.23.0",
      "resolved": "https://registry.npmjs.org/@tootallnate/quickjs-emscripten/-/quickjs-emscripten-0.23.0.tgz",
      "integrity": "sha512-C5Mc6rdnsaJDjO3UpGW/CQTHtCKaYlScZTly4JIu97Jxo/odCiH0ITnDXSJPTOrEKk/ycSZ0AOgTmkDtkOsvIA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@ts-morph/common": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@ts-morph/common/-/common-0.27.0.tgz",
      "integrity": "sha512-Wf29UqxWDpc+i61k3oIOzcUfQt79PIT9y/MWfAGlrkjg6lBC1hwDECLXPVJAhWjiGbfBCxZd65F/LIZF3+jeJQ==",
      "license": "MIT",
      "dependencies": {
        "fast-glob": "^3.3.3",
        "minimatch": "^10.0.1",
        "path-browserify": "^1.0.1"
      }
    },
    "node_modules/@ts-morph/common/node_modules/minimatch": {
      "version": "10.0.3",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.0.3.tgz",
      "integrity": "sha512-IPZ167aShDZZUMdRk66cyQAW3qr0WzbHkPdMYa8bzZhlHhO3jALbKdxcaak7W9FfT2rZNpQuUu4Od7ILEpXSaw==",
      "license": "ISC",
      "dependencies": {
        "@isaacs/brace-expansion": "^5.0.0"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@tsconfig/node10": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.11.tgz",
      "integrity": "sha512-DcRjDCujK/kCk/cUe8Xz8ZSpm8mS3mNNpta+jGCA6USEDfktlNvm1+IuZ9eTcDbNk41BHwpHHeW+N1lKCz4zOw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node12": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz",
      "integrity": "sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node14": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz",
      "integrity": "sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node16": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz",
      "integrity": "sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.1",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.1.tgz",
      "integrity": "sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/chai": {
      "version": "5.2.3",
      "resolved": "https://registry.npmjs.org/@types/chai/-/chai-5.2.3.tgz",
      "integrity": "sha512-Mw558oeA9fFbv65/y4mHtXDs9bPnFMZAL/jxdPFUpOHHIXX91mcgEHbS5Lahr+pwZFR8A7GQleRWeI6cGFC2UA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/deep-eql": "*",
        "assertion-error": "^2.0.1"
      }
    },
    "node_modules/@types/chai/node_modules/assertion-error": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-2.0.1.tgz",
      "integrity": "sha512-Izi8RQcffqCeNVgFigKli1ssklIbpHnCYc6AknXGYoB6grJqyeby7jv12JUQgmTAnIDnbck1uxksT4dzN3PWBA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@types/deep-eql": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@types/deep-eql/-/deep-eql-4.0.2.tgz",
      "integrity": "sha512-c9h9dVVMigMPc4bwTvC5dxqtqJZwQPePsWjPlpSOnojbor6pGqdk541lfA7AqFQr5pB1BRdq0juY9db81BwyFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/istanbul-lib-coverage": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.6.tgz",
      "integrity": "sha512-2QF/t/auWm0lsy8XtKVPG19v3sSOQlJe/YHZgfjb/KBBHOGSV+J2q/S671rcq9uTBrLAXmZpqJiaQbMT+zNU1w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/istanbul-lib-report": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.3.tgz",
      "integrity": "sha512-NQn7AHQnk/RSLOxrBbGyJM/aVQ+pjj5HCgasFxc0K/KhoATfQ/47AyUl15I2yBUpihjmas+a+VJBOqecrFH+uA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/istanbul-lib-coverage": "*"
      }
    },
    "node_modules/@types/istanbul-reports": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-3.0.4.tgz",
      "integrity": "sha512-pk2B1NWalF9toCRu6gjBzR69syFjP4Od8WRAX+0mmf9lAjCRicLOWc+ZrxZHx/0XRjotgkF9t6iaMJ+aXcOdZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/istanbul-lib-report": "*"
      }
    },
    "node_modules/@types/jest": {
      "version": "30.0.0",
      "resolved": "https://registry.npmjs.org/@types/jest/-/jest-30.0.0.tgz",
      "integrity": "sha512-XTYugzhuwqWjws0CVz8QpM36+T+Dz5mTEBKhNs/esGLnCIlGdRy+Dq78NRjd7ls7r8BC8ZRMOrKlkO1hU0JOwA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "expect": "^30.0.0",
        "pretty-format": "^30.0.0"
      }
    },
    "node_modules/@types/mocha": {
      "version": "10.0.10",
      "resolved": "https://registry.npmjs.org/@types/mocha/-/mocha-10.0.10.tgz",
      "integrity": "sha512-xPyYSz1cMPnJQhl0CLMH68j3gprKZaTjG3s5Vi+fDgx+uhG9NOXwbVt52eFS8ECyXhyKcjDLCBEqBExKuiZb7Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "24.9.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-24.9.1.tgz",
      "integrity": "sha512-QoiaXANRkSXK6p0Duvt56W208du4P9Uye9hWLWgGMDTEoKPhuenzNcC4vGUmrNkiOKTlIrBoyNQYNpSwfEZXSg==",
      "devOptional": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "undici-types": "~7.16.0"
      }
    },
    "node_modules/@types/prop-types": {
      "version": "15.7.15",
      "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.15.tgz",
      "integrity": "sha512-F6bEyamV9jKGAFBEmlQnesRPGOQqS2+Uwi0Em15xenOxHaf2hv6L8YCVn3rPdPJOiJfPiCnLIRyvwVaqMY3MIw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "18.3.26",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-18.3.26.tgz",
      "integrity": "sha512-RFA/bURkcKzx/X9oumPG9Vp3D3JUgus/d0b67KB0t5S/raciymilkOa66olh78MUI92QLbEJevO7rvqU/kjwKA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/prop-types": "*",
        "csstype": "^3.0.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "18.3.7",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.3.7.tgz",
      "integrity": "sha512-MEe3UeoENYVFXzoXEWsvcpg6ZvlrFNlOQ7EOsvhI3CfAXwzPfO8Qwuxd40nepsYKqyyVQnTdEfv68q91yLcKrQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^18.0.0"
      }
    },
    "node_modules/@types/selenium-webdriver": {
      "version": "4.35.3",
      "resolved": "https://registry.npmjs.org/@types/selenium-webdriver/-/selenium-webdriver-4.35.3.tgz",
      "integrity": "sha512-V8rEfVHFNsamhflPVqEgP1u8VShsEBAuQoLkIzpjwvPOkfmcNFp+mzJzFBwcIS9S90bxgRN3sp+Us/Mx55MXIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/ws": "*"
      }
    },
    "node_modules/@types/stack-utils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@types/stack-utils/-/stack-utils-2.0.3.tgz",
      "integrity": "sha512-9aEbYZ3TbYMznPdcdr3SmIrLXwC/AKZXQeCf9Pgao5CKb8CyHuEX5jzWPTkvregvhRJHcpRO6BFoGW9ycaOkYw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/statuses": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/@types/statuses/-/statuses-2.0.6.tgz",
      "integrity": "sha512-xMAgYwceFhRA2zY+XbEA7mxYbA093wdiW8Vu6gZPGWy9cmOyU9XesH1tNcEWsKFd5Vzrqx5T3D38PWx1FIIXkA==",
      "license": "MIT"
    },
    "node_modules/@types/ws": {
      "version": "8.18.1",
      "resolved": "https://registry.npmjs.org/@types/ws/-/ws-8.18.1.tgz",
      "integrity": "sha512-ThVF6DCVhA8kUGy+aazFQ4kXQ7E1Ty7A3ypFOe0IcJV8O/M511G99AW24irKrW56Wt44yG9+ij8FaqoBGkuBXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/yargs": {
      "version": "17.0.34",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-17.0.34.tgz",
      "integrity": "sha512-KExbHVa92aJpw9WDQvzBaGVE2/Pz+pLZQloT2hjL8IqsZnV62rlPOYvNnLmf/L2dyllfVUOVBj64M0z/46eR2A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/yargs-parser": "*"
      }
    },
    "node_modules/@types/yargs-parser": {
      "version": "21.0.3",
      "resolved": "https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-21.0.3.tgz",
      "integrity": "sha512-I4q9QU9MQv4oEOz4tAHJtNz1cwuLxn2F3xcc2iV5WdqLPpUnj30aUuxt1mAxYTG+oe8CZMV/+6rU4S4gRDzqtQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/yauzl": {
      "version": "2.10.3",
      "resolved": "https://registry.npmjs.org/@types/yauzl/-/yauzl-2.10.3.tgz",
      "integrity": "sha512-oJoftv0LSuaDZE3Le4DbKX+KS9G36NzOeSap90UIK0yMA/NhKJhqlSGtNDORNRaIbQfzjXDrQa0ytJ6mNRGz/Q==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz",
      "integrity": "sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/@unrs/resolver-binding-android-arm-eabi": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm-eabi/-/resolver-binding-android-arm-eabi-1.11.1.tgz",
      "integrity": "sha512-ppLRUgHVaGRWUx0R0Ut06Mjo9gBaBkg3v/8AxusGLhsIotbBLuRk51rAzqLC8gq6NyyAojEXglNjzf6R948DNw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-android-arm64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm64/-/resolver-binding-android-arm64-1.11.1.tgz",
      "integrity": "sha512-lCxkVtb4wp1v+EoN+HjIG9cIIzPkX5OtM03pQYkG+U5O/wL53LC4QbIeazgiKqluGeVEeBlZahHalCaBvU1a2g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-arm64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-arm64/-/resolver-binding-darwin-arm64-1.11.1.tgz",
      "integrity": "sha512-gPVA1UjRu1Y/IsB/dQEsp2V1pm44Of6+LWvbLc9SDk1c2KhhDRDBUkQCYVWe6f26uJb3fOK8saWMgtX8IrMk3g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-x64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-x64/-/resolver-binding-darwin-x64-1.11.1.tgz",
      "integrity": "sha512-cFzP7rWKd3lZaCsDze07QX1SC24lO8mPty9vdP+YVa3MGdVgPmFc59317b2ioXtgCMKGiCLxJ4HQs62oz6GfRQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-freebsd-x64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-freebsd-x64/-/resolver-binding-freebsd-x64-1.11.1.tgz",
      "integrity": "sha512-fqtGgak3zX4DCB6PFpsH5+Kmt/8CIi4Bry4rb1ho6Av2QHTREM+47y282Uqiu3ZRF5IQioJQ5qWRV6jduA+iGw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-gnueabihf": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-gnueabihf/-/resolver-binding-linux-arm-gnueabihf-1.11.1.tgz",
      "integrity": "sha512-u92mvlcYtp9MRKmP+ZvMmtPN34+/3lMHlyMj7wXJDeXxuM0Vgzz0+PPJNsro1m3IZPYChIkn944wW8TYgGKFHw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-musleabihf": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-musleabihf/-/resolver-binding-linux-arm-musleabihf-1.11.1.tgz",
      "integrity": "sha512-cINaoY2z7LVCrfHkIcmvj7osTOtm6VVT16b5oQdS4beibX2SYBwgYLmqhBjA1t51CarSaBuX5YNsWLjsqfW5Cw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-gnu/-/resolver-binding-linux-arm64-gnu-1.11.1.tgz",
      "integrity": "sha512-34gw7PjDGB9JgePJEmhEqBhWvCiiWCuXsL9hYphDF7crW7UgI05gyBAi6MF58uGcMOiOqSJ2ybEeCvHcq0BCmQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-musl/-/resolver-binding-linux-arm64-musl-1.11.1.tgz",
      "integrity": "sha512-RyMIx6Uf53hhOtJDIamSbTskA99sPHS96wxVE/bJtePJJtpdKGXO1wY90oRdXuYOGOTuqjT8ACccMc4K6QmT3w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-ppc64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-ppc64-gnu/-/resolver-binding-linux-ppc64-gnu-1.11.1.tgz",
      "integrity": "sha512-D8Vae74A4/a+mZH0FbOkFJL9DSK2R6TFPC9M+jCWYia/q2einCubX10pecpDiTmkJVUH+y8K3BZClycD8nCShA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-gnu/-/resolver-binding-linux-riscv64-gnu-1.11.1.tgz",
      "integrity": "sha512-frxL4OrzOWVVsOc96+V3aqTIQl1O2TjgExV4EKgRY09AJ9leZpEg8Ak9phadbuX0BA4k8U5qtvMSQQGGmaJqcQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-musl/-/resolver-binding-linux-riscv64-musl-1.11.1.tgz",
      "integrity": "sha512-mJ5vuDaIZ+l/acv01sHoXfpnyrNKOk/3aDoEdLO/Xtn9HuZlDD6jKxHlkN8ZhWyLJsRBxfv9GYM2utQ1SChKew==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-s390x-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-s390x-gnu/-/resolver-binding-linux-s390x-gnu-1.11.1.tgz",
      "integrity": "sha512-kELo8ebBVtb9sA7rMe1Cph4QHreByhaZ2QEADd9NzIQsYNQpt9UkM9iqr2lhGr5afh885d/cB5QeTXSbZHTYPg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-gnu/-/resolver-binding-linux-x64-gnu-1.11.1.tgz",
      "integrity": "sha512-C3ZAHugKgovV5YvAMsxhq0gtXuwESUKc5MhEtjBpLoHPLYM+iuwSj3lflFwK3DPm68660rZ7G8BMcwSro7hD5w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-musl/-/resolver-binding-linux-x64-musl-1.11.1.tgz",
      "integrity": "sha512-rV0YSoyhK2nZ4vEswT/QwqzqQXw5I6CjoaYMOX0TqBlWhojUf8P94mvI7nuJTeaCkkds3QE4+zS8Ko+GdXuZtA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-wasm32-wasi/-/resolver-binding-wasm32-wasi-1.11.1.tgz",
      "integrity": "sha512-5u4RkfxJm+Ng7IWgkzi3qrFOvLvQYnPBmjmZQ8+szTK/b31fQCnleNl1GgEt7nIsZRIf5PLhPwT0WM+q45x/UQ==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@napi-rs/wasm-runtime": "^0.2.11"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@unrs/resolver-binding-win32-arm64-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-arm64-msvc/-/resolver-binding-win32-arm64-msvc-1.11.1.tgz",
      "integrity": "sha512-nRcz5Il4ln0kMhfL8S3hLkxI85BXs3o8EYoattsJNdsX4YUU89iOkVn7g0VHSRxFuVMdM4Q1jEpIId1Ihim/Uw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-ia32-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-ia32-msvc/-/resolver-binding-win32-ia32-msvc-1.11.1.tgz",
      "integrity": "sha512-DCEI6t5i1NmAZp6pFonpD5m7i6aFrpofcp4LA2i8IIq60Jyo28hamKBxNrZcyOwVOZkgsRp9O2sXWBWP8MnvIQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-x64-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-x64-msvc/-/resolver-binding-win32-x64-msvc-1.11.1.tgz",
      "integrity": "sha512-lrW200hZdbfRtztbygyaq/6jP6AKE8qQN2KvPcJ+x7wiD038YtnYtZ82IMNJ69GJibV7bwL3y9FgK+5w/pYt6g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.7.0.tgz",
      "integrity": "sha512-gUu9hwfWvvEDBBmgtAowQCojwZmJ5mcLn3aufeCsitijs3+f2NsrPtlAWIR6OPiqljl96GVCUbLe0HyqIpVaoA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.0",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.27",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.17.0"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/@wdio/allure-reporter": {
      "version": "9.20.0",
      "resolved": "https://registry.npmjs.org/@wdio/allure-reporter/-/allure-reporter-9.20.0.tgz",
      "integrity": "sha512-Mhk9+8x2rOKunMlFDXcRt9Qxph6Wgjlepv25413n0euPiu3pf+sfaUfAGyFcfnwnPHYH9wc4NydUqdI8QaCxuA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "^20.1.0",
        "@wdio/reporter": "9.20.0",
        "@wdio/types": "9.20.0",
        "allure-js-commons": "^3.3.2",
        "csv-stringify": "^6.0.4",
        "html-entities": "^2.6.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18.20.0"
      }
    },
    "node_modules/@wdio/allure-reporter/node_modules/@types/node": {
      "version": "20.19.24",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.24.tgz",
      "integrity": "sha512-FE5u0ezmi6y9OZEzlJfg37mqqf6ZDSF2V/NLjUyGrR9uTZ7Sb9F7bLNZ03S4XVUNRWGA7Ck4c1kK+YnuWjl+DA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@wdio/allure-reporter/node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@wdio/logger": {
      "version": "9.18.0",
      "resolved": "https://registry.npmjs.org/@wdio/logger/-/logger-9.18.0.tgz",
      "integrity": "sha512-HdzDrRs+ywAqbXGKqe1i/bLtCv47plz4TvsHFH3j729OooT5VH38ctFn5aLXgECmiAKDkmH/A6kOq2Zh5DIxww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^5.1.2",
        "loglevel": "^1.6.0",
        "loglevel-plugin-prefix": "^0.8.4",
        "safe-regex2": "^5.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18.20.0"
      }
    },
    "node_modules/@wdio/reporter": {
      "version": "9.20.0",
      "resolved": "https://registry.npmjs.org/@wdio/reporter/-/reporter-9.20.0.tgz",
      "integrity": "sha512-HjKJzm8o0MCcnwGVGprzaCAyau0OB8mWHwH1ZI/ka+z1nmVBr2tsr7H53SdHsGIhAg/XuZObobqdzeVF63ApeA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "^20.1.0",
        "@wdio/logger": "9.18.0",
        "@wdio/types": "9.20.0",
        "diff": "^8.0.2",
        "object-inspect": "^1.12.0"
      },
      "engines": {
        "node": ">=18.20.0"
      }
    },
    "node_modules/@wdio/reporter/node_modules/@types/node": {
      "version": "20.19.24",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.24.tgz",
      "integrity": "sha512-FE5u0ezmi6y9OZEzlJfg37mqqf6ZDSF2V/NLjUyGrR9uTZ7Sb9F7bLNZ03S4XVUNRWGA7Ck4c1kK+YnuWjl+DA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@wdio/reporter/node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@wdio/types": {
      "version": "9.20.0",
      "resolved": "https://registry.npmjs.org/@wdio/types/-/types-9.20.0.tgz",
      "integrity": "sha512-zMmAtse2UMCSOW76mvK3OejauAdcFGuKopNRH7crI0gwKTZtvV89yXWRziz9cVXpFgfmJCjf9edxKFWdhuF5yw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "^20.1.0"
      },
      "engines": {
        "node": ">=18.20.0"
      }
    },
    "node_modules/@wdio/types/node_modules/@types/node": {
      "version": "20.19.24",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.24.tgz",
      "integrity": "sha512-FE5u0ezmi6y9OZEzlJfg37mqqf6ZDSF2V/NLjUyGrR9uTZ7Sb9F7bLNZ03S4XVUNRWGA7Ck4c1kK+YnuWjl+DA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@wdio/types/node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@zeit/schemas": {
      "version": "2.36.0",
      "resolved": "https://registry.npmjs.org/@zeit/schemas/-/schemas-2.36.0.tgz",
      "integrity": "sha512-7kjMwcChYEzMKjeex9ZFXkt1AyNov9R5HZtjBKVsmVpw7pa7ZtlCGvCBC2vnnXctaYN+aRI61HjIqeetZW5ROg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/accepts/node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/accepts/node_modules/mime-types": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.1.tgz",
      "integrity": "sha512-xRc4oEhT6eaBpU1XF7AjpOFD+xQmXNB5OVKwp4tqCuBpHLS/ZbBDrc07mYTDqVMg6PfxUjjNp85O6Cd2Z/5HWA==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "8.3.4",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.4.tgz",
      "integrity": "sha512-ueEepnujpqee2o5aIYnvHU6C0A42MNdsIDeqy5BydrkuC5R1ZuUFnm27EeFJGoEHJQgn3uleRvmTXaJgfXbt4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.11.0"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/agent-base": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.4.tgz",
      "integrity": "sha512-MnA+YT8fwfJPgBx3m60MNqakm30XOkyIoH1y6huTQvC0PwZG7ki8NacLBcrPbNoo8vEZy7Jpuk7+jMO+CUovTQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/allure-commandline": {
      "version": "2.34.1",
      "resolved": "https://registry.npmjs.org/allure-commandline/-/allure-commandline-2.34.1.tgz",
      "integrity": "sha512-l42csZ2bz7FdtJI1t5zA3IXtOZ0YJaP/+JMRC9gt6aBHRVUIu+6r+3F7KRyshQ79osLz9/MHlGqAjBPRqH0QFw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "allure": "bin/allure"
      }
    },
    "node_modules/allure-js-commons": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/allure-js-commons/-/allure-js-commons-3.4.2.tgz",
      "integrity": "sha512-bWzqduvU/LzSTI4wJKzWbHWe64xluF30pDxFfSP+jlloQx9F1Vytdqrit5oAgNj+czzdA+Nocv3Dh6d4COCTvA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "md5": "^2.3.0"
      },
      "peerDependencies": {
        "allure-playwright": "3.4.2"
      },
      "peerDependenciesMeta": {
        "allure-playwright": {
          "optional": true
        }
      }
    },
    "node_modules/ansi-align": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.1.tgz",
      "integrity": "sha512-IOfwwBF5iczOjp/WeY4YxyjqAFMQoZufdQWDd19SEExbVLNXqvpzSJ/M7Za4/sCPmQ0+GRquoA7bGcINcxew6w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.1.0"
      }
    },
    "node_modules/ansi-align/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-align/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ansi-align/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-align/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-colors": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.3.tgz",
      "integrity": "sha512-/6w/C21Pm1A7aZitlI5Ni/2J6FFQN8i1Cvz3kHABAAbw93v/NlvKdVOqz7CCWz/3iv/JplRSEEZ83XION15ovw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-escapes": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
      "integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.21.3"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ansi-escapes/node_modules/type-fest": {
      "version": "0.21.3",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
      "integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/ansis": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/ansis/-/ansis-4.2.0.tgz",
      "integrity": "sha512-HqZ5rWlFjGiV0tDm3UxxgNRqsOTniqoKZu0pIAfh7TZQMGuZK+hH0drySty0si0QXj1ieop4+SkSfPZBPPkHig==",
      "license": "ISC",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
      "license": "MIT"
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/anymatch/node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/arch": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/arch/-/arch-2.2.0.tgz",
      "integrity": "sha512-Of/R0wqp83cgHozfIYLbBMnej79U/SVGOOyuB3VVFv1NRM/PSFMK12x9KVtiYzJqmnU5WR2qp0Z5rHb7sWGnFQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
      "license": "MIT"
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "license": "Python-2.0"
    },
    "node_modules/assertion-error": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-1.1.0.tgz",
      "integrity": "sha512-jgsaNduz+ndvGyFt3uSuWqvy4lCnIJiovtouQN5JZHOKCS2QuhEdbcQHFhVksz2N2U9hXJo8odG7ETyWlEeuDw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/ast-types": {
      "version": "0.16.1",
      "resolved": "https://registry.npmjs.org/ast-types/-/ast-types-0.16.1.tgz",
      "integrity": "sha512-6t10qk83GOG8p0vKmaCr8eiilZwO171AvbROMtvvNiwrTly62t+7XkA8RdIIVbpMhCASAsxgAzdRSwh6nw/5Dg==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "license": "MIT"
    },
    "node_modules/autoprefixer": {
      "version": "10.4.21",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.21.tgz",
      "integrity": "sha512-O+A6LWV5LDHSJD3LjHYoNi4VLsj/Whi7k6zG12xTYaU4cQ8oxQGckXNX8cRHK5yOZ/ppVHe0ZBXGzSV9jXdVbQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.24.4",
        "caniuse-lite": "^1.0.30001702",
        "fraction.js": "^4.3.7",
        "normalize-range": "^0.1.2",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/axios": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.12.2.tgz",
      "integrity": "sha512-vMJzPewAlRyOgxV2dU0Cuz2O8zzzx9VYtbJOaBgXFeLc4IV/Eg50n4LowmehOOR61S8ZMpc2K5Sa7g6A4jfkUw==",
      "license": "MIT",
      "dependencies": {
        "follow-redirects": "^1.15.6",
        "form-data": "^4.0.4",
        "proxy-from-env": "^1.1.0"
      }
    },
    "node_modules/babel-jest": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-30.2.0.tgz",
      "integrity": "sha512-0YiBEOxWqKkSQWL9nNGGEgndoeL0ZpWrbLMNL5u/Kaxrli3Eaxlt3ZtIDktEvXt4L/R9r3ODr2zKwGM/2BjxVw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/transform": "30.2.0",
        "@types/babel__core": "^7.20.5",
        "babel-plugin-istanbul": "^7.0.1",
        "babel-preset-jest": "30.2.0",
        "chalk": "^4.1.2",
        "graceful-fs": "^4.2.11",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.11.0 || ^8.0.0-0"
      }
    },
    "node_modules/babel-jest/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/babel-jest/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/babel-plugin-istanbul": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-7.0.1.tgz",
      "integrity": "sha512-D8Z6Qm8jCvVXtIRkBnqNHX0zJ37rQcFJ9u8WOS6tkYOsRdHBzypCstaxWiu5ZIlqQtviRYbgnRLSoCEvjqcqbA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "workspaces": [
        "test/babel-8"
      ],
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@istanbuljs/load-nyc-config": "^1.0.0",
        "@istanbuljs/schema": "^0.1.3",
        "istanbul-lib-instrument": "^6.0.2",
        "test-exclude": "^6.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/babel-plugin-jest-hoist": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-30.2.0.tgz",
      "integrity": "sha512-ftzhzSGMUnOzcCXd6WHdBGMyuwy15Wnn0iyyWGKgBDLxf9/s5ABuraCSpBX2uG0jUg4rqJnxsLc5+oYBqoxVaA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/babel__core": "^7.20.5"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/babel-preset-current-node-syntax": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/babel-preset-current-node-syntax/-/babel-preset-current-node-syntax-1.2.0.tgz",
      "integrity": "sha512-E/VlAEzRrsLEb2+dv8yp3bo4scof3l9nR4lrld+Iy5NyVqgVYUJnDAmunkhPMisRI32Qc4iRiz425d8vM++2fg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/plugin-syntax-async-generators": "^7.8.4",
        "@babel/plugin-syntax-bigint": "^7.8.3",
        "@babel/plugin-syntax-class-properties": "^7.12.13",
        "@babel/plugin-syntax-class-static-block": "^7.14.5",
        "@babel/plugin-syntax-import-attributes": "^7.24.7",
        "@babel/plugin-syntax-import-meta": "^7.10.4",
        "@babel/plugin-syntax-json-strings": "^7.8.3",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3",
        "@babel/plugin-syntax-private-property-in-object": "^7.14.5",
        "@babel/plugin-syntax-top-level-await": "^7.14.5"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0 || ^8.0.0-0"
      }
    },
    "node_modules/babel-preset-jest": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-30.2.0.tgz",
      "integrity": "sha512-US4Z3NOieAQumwFnYdUWKvUKh8+YSnS/gB3t6YBiz0bskpu7Pine8pPCheNxlPEW4wnUkma2a94YuW2q3guvCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "babel-plugin-jest-hoist": "30.2.0",
        "babel-preset-current-node-syntax": "^1.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.11.0 || ^8.0.0-beta.1"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.8.19",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.8.19.tgz",
      "integrity": "sha512-zoKGUdu6vb2jd3YOq0nnhEDQVbPcHhco3UImJrv5dSkvxTc2pl2WjOPsjZXDwPDSl5eghIMuY3R6J9NDKF3KcQ==",
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/basic-ftp": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/basic-ftp/-/basic-ftp-5.0.5.tgz",
      "integrity": "sha512-4Bcg1P8xhUuqcii/S0Z9wiHIrQVPMermM1any+MX5GeGD7faD3/msQUDGLol9wOcz4/jbg/WJnGqoJF6LiBdtg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/body-parser": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.2.0.tgz",
      "integrity": "sha512-02qvAaxv8tp7fBa/mw1ga98OGm+eCbqzJOKoRt70sLmfEEi+jyBYVTDGfCL/k06/4EMk/z01gCe7HoCH/f2LTg==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^1.0.5",
        "debug": "^4.4.0",
        "http-errors": "^2.0.0",
        "iconv-lite": "^0.6.3",
        "on-finished": "^2.4.1",
        "qs": "^6.14.0",
        "raw-body": "^3.0.0",
        "type-is": "^2.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/boxen": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/boxen/-/boxen-7.0.0.tgz",
      "integrity": "sha512-j//dBVuyacJbvW+tvZ9HuH03fZ46QcaKvvhZickZqtB271DxJ7SNRSNxrV/dZX0085m7hISRZWbzWlJvx/rHSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-align": "^3.0.1",
        "camelcase": "^7.0.0",
        "chalk": "^5.0.1",
        "cli-boxes": "^3.0.0",
        "string-width": "^5.1.2",
        "type-fest": "^2.13.0",
        "widest-line": "^4.0.1",
        "wrap-ansi": "^8.0.1"
      },
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/boxen/node_modules/ansi-styles": {
      "version": "6.2.3",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz",
      "integrity": "sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/boxen/node_modules/camelcase": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-7.0.1.tgz",
      "integrity": "sha512-xlx1yCK2Oc1APsPXDL2LdlNP6+uu8OCDdhOBSVT279M/S+y75O30C2VuD8T2ogdePBBl7PfPF4504tnLgX3zfw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/boxen/node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/boxen/node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/boxen/node_modules/type-fest": {
      "version": "2.19.0",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-2.19.0.tgz",
      "integrity": "sha512-RAH822pAdBgcNMAfWnCBU3CFZcfZ/i1eZjwFU/dsLKumyuuP3niueg2UAukXYF0E2AAoc82ZSSf9J0WQBinzHA==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=12.20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/boxen/node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browser-stdout": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/browser-stdout/-/browser-stdout-1.3.1.tgz",
      "integrity": "sha512-qhAVI1+Av2X7qelOfAIYwXONood6XlZE/fXaBSmW/T5SzLAmCgzi+eiWE7fUvbHaeNBQH13UftjpXxsfLkMpgw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/browserslist": {
      "version": "4.26.3",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.26.3.tgz",
      "integrity": "sha512-lAUU+02RFBuCKQPj/P6NgjlbCnLBMp4UtgTx7vNHd3XSIJF87s9a5rA3aH2yw3GS9DqZAUbOtZdCCiZeVRqt0w==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "baseline-browser-mapping": "^2.8.9",
        "caniuse-lite": "^1.0.30001746",
        "electron-to-chromium": "^1.5.227",
        "node-releases": "^2.0.21",
        "update-browserslist-db": "^1.1.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/bs-logger": {
      "version": "0.2.6",
      "resolved": "https://registry.npmjs.org/bs-logger/-/bs-logger-0.2.6.tgz",
      "integrity": "sha512-pd8DCoxmbgc7hyPKOvxtqNcjYoOsABPQdcCUjGp3d42VR2CX1ORhk2A87oqqu5R1kk+76nsxZupkmyd+MVtCog==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-json-stable-stringify": "2.x"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/bser": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
      "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "node-int64": "^0.4.0"
      }
    },
    "node_modules/buffer-crc32": {
      "version": "0.2.13",
      "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
      "integrity": "sha512-VO9Ht/+p3SN7SKWqcrgEzjGbRSJYTx+Q1pTQC0wrWqHx0vpJraQ6GtHx8tvcg1rlK1byhU5gccxgOgj7B0TDkQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
      "integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001751",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001751.tgz",
      "integrity": "sha512-A0QJhug0Ly64Ii3eIqHu5X51ebln3k4yTUkY1j8drqpWHVreg/VLijN48cZ1bYPiqOQuqpkIKnzr/Ul8V+p6Cw==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chai": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/chai/-/chai-4.5.0.tgz",
      "integrity": "sha512-RITGBfijLkBddZvnn8jdqoTypxvqbOLYQkGGxXzeFjVHvudaPw0HNFD9x928/eUwYWd2dPCugVqspGALTZZQKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "assertion-error": "^1.1.0",
        "check-error": "^1.0.3",
        "deep-eql": "^4.1.3",
        "get-func-name": "^2.0.2",
        "loupe": "^2.3.6",
        "pathval": "^1.1.1",
        "type-detect": "^4.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/chalk": {
      "version": "5.6.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-5.6.2.tgz",
      "integrity": "sha512-7NzBL0rN6fMUW+f7A6Io4h40qQlG+xGmtMxfbnH/K7TAtt8JQWVQK+6g0UXKMeVJoyV5EkkNsErQ8pVD3bLHbA==",
      "license": "MIT",
      "engines": {
        "node": "^12.17.0 || ^14.13 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chalk-template": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/chalk-template/-/chalk-template-0.4.0.tgz",
      "integrity": "sha512-/ghrgmhfY8RaSdeo43hNXxpoHAtxdbskUHjPpfqUWGttFgycUhYPGx3YZBCnUCvOa7Doivn1IZec3DEGFoMgLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^4.1.2"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk-template?sponsor=1"
      }
    },
    "node_modules/chalk-template/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chalk-template/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/char-regex": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/char-regex/-/char-regex-1.0.2.tgz",
      "integrity": "sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/charenc": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/charenc/-/charenc-0.0.2.tgz",
      "integrity": "sha512-yrLQ/yVUFXkzg7EDQsPieE/53+0RlaWTs+wBrvW36cyilJ2SaDWfl4Yj7MtLTXleV9uEKefbAGUPv2/iWSooRA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/check-error": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/check-error/-/check-error-1.0.3.tgz",
      "integrity": "sha512-iKEoDYaRmd1mxM90a2OEfWhjsjPpYPuQ+lMYsoxB126+t8fw7ySEO48nmDg5COTjxDI65/Y2OWpeEHk3ZOe8zg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-func-name": "^2.0.2"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chromedriver": {
      "version": "142.0.0",
      "resolved": "https://registry.npmjs.org/chromedriver/-/chromedriver-142.0.0.tgz",
      "integrity": "sha512-BlMMPFOKAOYOT23tjtAjvci57gyYcasKqd/3yGKOjGMEbFZa5kfwoNcUzwL/5ugZ932MJX1fW/j8zk5KD5mHBw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@testim/chrome-version": "^1.1.4",
        "axios": "^1.12.0",
        "compare-versions": "^6.1.0",
        "extract-zip": "^2.0.1",
        "proxy-agent": "^6.4.0",
        "proxy-from-env": "^1.1.0",
        "tcp-port-used": "^1.0.2"
      },
      "bin": {
        "chromedriver": "bin/chromedriver"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/ci-info": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-4.3.1.tgz",
      "integrity": "sha512-Wdy2Igu8OcBpI2pZePZ5oWjPC38tmDVx5WKUXKwlLYkA0ozo85sLsLvkBbBn/sZaSCMFOGZJ14fvW9t5/d7kdA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/sibiraj-s"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cjs-module-lexer": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cjs-module-lexer/-/cjs-module-lexer-2.1.0.tgz",
      "integrity": "sha512-UX0OwmYRYQQetfrLEZeewIFFI+wSTofC+pMBLNuH3RUuu/xzG1oz84UCEDOSoQlN3fZ4+AzmV50ZYvGqkMh9yA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/class-variance-authority": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/class-variance-authority/-/class-variance-authority-0.7.1.tgz",
      "integrity": "sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==",
      "license": "Apache-2.0",
      "dependencies": {
        "clsx": "^2.1.1"
      },
      "funding": {
        "url": "https://polar.sh/cva"
      }
    },
    "node_modules/cli-boxes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-3.0.0.tgz",
      "integrity": "sha512-/lzGpEWL/8PfI0BmBOPRwp0c/wFNX1RdUML3jK/RcSBA9T8mZDdQpqYBKtCFTOfQbwPqWEOpjqW+Fnayc0969g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-cursor": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-5.0.0.tgz",
      "integrity": "sha512-aCj4O5wKyszjMmDT4tZj93kxyydN/K5zPWSCe6/0AV/AA1pqe5ZBIw0a2ZfPQV7lL5/yb5HsUreJ6UFAF1tEQw==",
      "license": "MIT",
      "dependencies": {
        "restore-cursor": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-spinners": {
      "version": "2.9.2",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.9.2.tgz",
      "integrity": "sha512-ywqV+5MmyL4E7ybXgKys4DugZbX0FC6LnwrhjuykIjnK9k8OQacQ7axGKnjDXWNhns0xot3bZI5h55H8yo9cJg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-width": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-4.1.0.tgz",
      "integrity": "sha512-ouuZd4/dm2Sw5Gmqy6bGyNNNe1qt9RpmxveLSO7KcgsTnU7RXfsw+/bukWGo1abgBiMAic068rclZsO4IWmmxQ==",
      "license": "ISC",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/clipboardy": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/clipboardy/-/clipboardy-3.0.0.tgz",
      "integrity": "sha512-Su+uU5sr1jkUy1sGRpLKjKrvEOVXgSgiSInwa/qeID6aJ07yh+5NWc3h2QfjHjBnfX4LhtFcuAWKUsJ3r+fjbg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "arch": "^2.2.0",
        "execa": "^5.1.1",
        "is-wsl": "^2.2.0"
      },
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/clipboardy/node_modules/execa": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
      "integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cross-spawn": "^7.0.3",
        "get-stream": "^6.0.0",
        "human-signals": "^2.1.0",
        "is-stream": "^2.0.0",
        "merge-stream": "^2.0.0",
        "npm-run-path": "^4.0.1",
        "onetime": "^5.1.2",
        "signal-exit": "^3.0.3",
        "strip-final-newline": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/execa?sponsor=1"
      }
    },
    "node_modules/clipboardy/node_modules/get-stream": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
      "integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/clipboardy/node_modules/human-signals": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
      "integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=10.17.0"
      }
    },
    "node_modules/clipboardy/node_modules/is-stream": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
      "integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/clipboardy/node_modules/npm-run-path": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
      "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/clipboardy/node_modules/onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mimic-fn": "^2.1.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/clipboardy/node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/clipboardy/node_modules/strip-final-newline": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
      "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/cliui": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
      "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.1",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/cliui/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/cliui/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui/node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/co": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
      "integrity": "sha512-QVb0dM5HvG+uaxitm8wONl7jltx8dqhfU33DcqtOZcLSVIKSDDLDi7+0LbAKiyI8hD9u42m2YxXSkMGWThaecQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">= 1.0.0",
        "node": ">= 0.12.0"
      }
    },
    "node_modules/code-block-writer": {
      "version": "13.0.3",
      "resolved": "https://registry.npmjs.org/code-block-writer/-/code-block-writer-13.0.3.tgz",
      "integrity": "sha512-Oofo0pq3IKnsFtuHqSF7TqBfr71aeyZDVJ0HpmqB7FBM2qEigL0iPONSCZSO9pE9dZTAxANe5XHG9Uy0YMv8cg==",
      "license": "MIT"
    },
    "node_modules/collect-v8-coverage": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/collect-v8-coverage/-/collect-v8-coverage-1.0.3.tgz",
      "integrity": "sha512-1L5aqIkwPfiodaMgQunkF1zRhNqifHBmtbbbxcr6yVxxBnliw4TDOW6NxpO8DJLgJ16OT+Y4ztZqP6p/FtXnAw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "license": "MIT"
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/commander": {
      "version": "14.0.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-14.0.1.tgz",
      "integrity": "sha512-2JkV3gUZUVrbNA+1sjBOYLsMZ5cEEl8GTFP2a4AVz5hvasAMCQ1D2l2le/cX+pV4N6ZU17zjUahLpIXRrnWL8A==",
      "license": "MIT",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/compare-versions": {
      "version": "6.1.1",
      "resolved": "https://registry.npmjs.org/compare-versions/-/compare-versions-6.1.1.tgz",
      "integrity": "sha512-4hm4VPpIecmlg59CHXnRDnqGplJFrbLG4aFEl5vl6cK1u76ws3LLvX7ikFnTDl5vo39sjWD6AaDPYodJp/NNHg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/compressible": {
      "version": "2.0.18",
      "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
      "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mime-db": ">= 1.43.0 < 2"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/compression": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/compression/-/compression-1.8.1.tgz",
      "integrity": "sha512-9mAqGPHLakhCLeNyxPkK4xVo746zQ/czLH1Ky+vkitMnWfWZps8r0qXuwhwizagCRttsL4lfG4pIOvaWLpAP0w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bytes": "3.1.2",
        "compressible": "~2.0.18",
        "debug": "2.6.9",
        "negotiator": "~0.6.4",
        "on-headers": "~1.1.0",
        "safe-buffer": "5.2.1",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/compression/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/compression/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/compression/node_modules/negotiator": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.4.tgz",
      "integrity": "sha512-myRT3DiWPHqho5PrJaIRyaMv2kgYf0mUVgBNOYMuCH5Ki1yEiQaf/ZJuQ62nvpc44wL5WDbTX7yGJi1Neevw8w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/content-disposition": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.0.0.tgz",
      "integrity": "sha512-Au9nRL8VNUut/XSzbQA38+M78dzP4D+eqg3gfJHMIHHYa3bg067xj1KxMUWj+VULbiZMowKngFFbKczUrNJ1mg==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "5.2.1"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/core-util-is": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cors": {
      "version": "2.8.5",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/cosmiconfig": {
      "version": "9.0.0",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-9.0.0.tgz",
      "integrity": "sha512-itvL5h8RETACmOTFc4UfIyB2RfEHi71Ax6E/PivVxq9NseKbOWpeyHEOIbmAw1rs8Ak0VursQNww7lf7YtUwzg==",
      "license": "MIT",
      "dependencies": {
        "env-paths": "^2.2.1",
        "import-fresh": "^3.3.0",
        "js-yaml": "^4.1.0",
        "parse-json": "^5.2.0"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/d-fischer"
      },
      "peerDependencies": {
        "typescript": ">=4.9.5"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/create-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
      "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-env": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/cross-env/-/cross-env-10.1.0.tgz",
      "integrity": "sha512-GsYosgnACZTADcmEyJctkJIoqAhHjttw7RsFrVoJNXbsWWqaq6Ym+7kZjq6mS45O0jij6vtiReppKQEtqWy6Dw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@epic-web/invariant": "^1.0.0",
        "cross-spawn": "^7.0.6"
      },
      "bin": {
        "cross-env": "dist/bin/cross-env.js",
        "cross-env-shell": "dist/bin/cross-env-shell.js"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/cross-spawn/node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "license": "ISC"
    },
    "node_modules/cross-spawn/node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/crypt": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/crypt/-/crypt-0.0.2.tgz",
      "integrity": "sha512-mCxBlsHFYh9C+HVpiEacem8FEBnMXgU9gy4zmNC+SXAZNB/1idgp/aulFJ4FgCi7GPEVbfyng092GqL2k2rmow==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "license": "MIT",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/csv-stringify": {
      "version": "6.6.0",
      "resolved": "https://registry.npmjs.org/csv-stringify/-/csv-stringify-6.6.0.tgz",
      "integrity": "sha512-YW32lKOmIBgbxtu3g5SaiqWNwa/9ISQt2EcgOq0+RAIFufFp9is6tqNnKahqE5kuKvrnYAzs28r+s6pXJR8Vcw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/data-uri-to-buffer": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/data-uri-to-buffer/-/data-uri-to-buffer-4.0.1.tgz",
      "integrity": "sha512-0R9ikRb668HB7QDxT1vkpuUBtqc53YyAwMwGeUFKRojY/NWKvdZ+9UYtRfGmhqNbRkTSVpMbmyhXipFFv2cb/A==",
      "license": "MIT",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/date-fns": {
      "version": "2.30.0",
      "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-2.30.0.tgz",
      "integrity": "sha512-fnULvOpxnC5/Vg3NCiWelDsLiUc9bRwAPs/+LfTLNvetFCtCTN+yQz15C/fs4AwX1R9K5GLtLfn8QW+dWisaAw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.21.0"
      },
      "engines": {
        "node": ">=0.11"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/date-fns"
      }
    },
    "node_modules/dateformat": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/dateformat/-/dateformat-3.0.2.tgz",
      "integrity": "sha512-EelsCzH0gMC2YmXuMeaZ3c6md1sUJQxyb1XXc4xaisi/K6qKukqZhKPrEQyRkdNIncgYyLoDTReq0nNyuKerTg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decamelize": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-4.0.0.tgz",
      "integrity": "sha512-9iE1PgSik9HeIIw2JO94IidnE3eBoQrFJ3w7sFuzSX4DpmZ3v5sZpUiV5Swcf6mQEF+Y0ru8Neo+p+nyh2J+hQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/dedent": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/dedent/-/dedent-1.7.0.tgz",
      "integrity": "sha512-HGFtf8yhuhGhqO07SV79tRp+br4MnbdjeVxotpn1QBl30pcLLCQjX5b2295ll0fv8RKDKsmWYrl05usHM9CewQ==",
      "license": "MIT",
      "peerDependencies": {
        "babel-plugin-macros": "^3.1.0"
      },
      "peerDependenciesMeta": {
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/deep-eql": {
      "version": "4.1.4",
      "resolved": "https://registry.npmjs.org/deep-eql/-/deep-eql-4.1.4.tgz",
      "integrity": "sha512-SUwdGfqdKOwxCPeVYjwSyRpJ7Z+fhpwIAtmCUdZIWZ/YP5R9WAsyuSgpLVDi9bjWoN2LXHNss/dk3urXtdQxGg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-detect": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/deepmerge": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.3.1.tgz",
      "integrity": "sha512-3sUqbMEc77XqpdNO7FRyRog+eW3ph+GYCbj+rK+uYyRMuwsVy0rMiVtPn+QJlKFvWP/1PYpapqYn0Me2knFn+A==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/degenerator": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/degenerator/-/degenerator-5.0.1.tgz",
      "integrity": "sha512-TllpMR/t0M5sqCXfj85i4XaAzxmS5tVA16dqvdkMwGmzI+dXLXnw3J+3Vdv7VKw+ThlTMboK6i9rnZ6Nntj5CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ast-types": "^0.13.4",
        "escodegen": "^2.1.0",
        "esprima": "^4.0.1"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/degenerator/node_modules/ast-types": {
      "version": "0.13.4",
      "resolved": "https://registry.npmjs.org/ast-types/-/ast-types-0.13.4.tgz",
      "integrity": "sha512-x1FCFnFifvYDDzTaLII71vG5uvDwgtmDTEVWAxrgeiR8VjMONcCXJx7E+USjDtHlwFmt9MysbqgF9b9Vjr6w+w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "license": "Apache-2.0",
      "optional": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/detect-newline": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-3.1.0.tgz",
      "integrity": "sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
      "license": "Apache-2.0"
    },
    "node_modules/diff": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/diff/-/diff-8.0.2.tgz",
      "integrity": "sha512-sSuxWU5j5SR9QQji/o2qMvqRNYRDOcBTgsJ/DeCf4iSN4gW+gNMXM7wFIP+fdXZxoNiAnHUTGjCr+TSWXdRDKg==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
      "license": "MIT"
    },
    "node_modules/dotenv": {
      "version": "17.2.3",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-17.2.3.tgz",
      "integrity": "sha512-JVUnt+DUIzu87TABbhPmNfVdBDt18BLOWjMUFJMSi/Qqg7NTYtabbvSNJGOJ7afbRuv9D/lngizHtP7QyLQ+9w==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
      "license": "MIT"
    },
    "node_modules/eciesjs": {
      "version": "0.4.16",
      "resolved": "https://registry.npmjs.org/eciesjs/-/eciesjs-0.4.16.tgz",
      "integrity": "sha512-dS5cbA9rA2VR4Ybuvhg6jvdmp46ubLn3E+px8cG/35aEDNclrqoCjg6mt0HYZ/M+OoESS3jSkCrqk1kWAEhWAw==",
      "license": "MIT",
      "dependencies": {
        "@ecies/ciphers": "^0.2.4",
        "@noble/ciphers": "^1.3.0",
        "@noble/curves": "^1.9.7",
        "@noble/hashes": "^1.8.0"
      },
      "engines": {
        "bun": ">=1",
        "deno": ">=2",
        "node": ">=16"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.238",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.238.tgz",
      "integrity": "sha512-khBdc+w/Gv+cS8e/Pbnaw/FXcBUeKrRVik9IxfXtgREOWyJhR4tj43n3amkVogJ/yeQUqzkrZcFhtIxIdqmmcQ==",
      "license": "ISC"
    },
    "node_modules/emittery": {
      "version": "0.13.1",
      "resolved": "https://registry.npmjs.org/emittery/-/emittery-0.13.1.tgz",
      "integrity": "sha512-DeWwawk6r5yR9jFgnDKYt4sLS0LmHJJi3ZOnb5/JdbYwj3nW+FxQnHIjhBKz8YLC7oRNPVM9NQ47I3CVx34eqQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/emittery?sponsor=1"
      }
    },
    "node_modules/emoji-regex": {
      "version": "10.6.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-10.6.0.tgz",
      "integrity": "sha512-toUI84YS5YmxW219erniWD0CIVOo46xGKColeNQRgOzDorgBi1v4D71/OFzgD9GO2UGKIv1C3Sp8DAn0+j5w7A==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/end-of-stream": {
      "version": "1.4.5",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.5.tgz",
      "integrity": "sha512-ooEGc6HP26xXq/N+GCGOT0JKCLDGrq2bQUZrQ7gyrJiZANJ/8YDTxTpQBXGMn+WbIQXNVpyWymm7KYVICQnyOg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "once": "^1.4.0"
      }
    },
    "node_modules/env-paths": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/env-paths/-/env-paths-2.2.1.tgz",
      "integrity": "sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/error-ex": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.4.tgz",
      "integrity": "sha512-sqQamAnR14VgCr1A618A3sGrygcpK+HEbenA/HiEAkkUwcZIIB/tgWqHFxWgOyDh4nB4JCRimh79dR5Ywc9MDQ==",
      "license": "MIT",
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
      "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.21.5",
        "@esbuild/android-arm": "0.21.5",
        "@esbuild/android-arm64": "0.21.5",
        "@esbuild/android-x64": "0.21.5",
        "@esbuild/darwin-arm64": "0.21.5",
        "@esbuild/darwin-x64": "0.21.5",
        "@esbuild/freebsd-arm64": "0.21.5",
        "@esbuild/freebsd-x64": "0.21.5",
        "@esbuild/linux-arm": "0.21.5",
        "@esbuild/linux-arm64": "0.21.5",
        "@esbuild/linux-ia32": "0.21.5",
        "@esbuild/linux-loong64": "0.21.5",
        "@esbuild/linux-mips64el": "0.21.5",
        "@esbuild/linux-ppc64": "0.21.5",
        "@esbuild/linux-riscv64": "0.21.5",
        "@esbuild/linux-s390x": "0.21.5",
        "@esbuild/linux-x64": "0.21.5",
        "@esbuild/netbsd-x64": "0.21.5",
        "@esbuild/openbsd-x64": "0.21.5",
        "@esbuild/sunos-x64": "0.21.5",
        "@esbuild/win32-arm64": "0.21.5",
        "@esbuild/win32-ia32": "0.21.5",
        "@esbuild/win32-x64": "0.21.5"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/escodegen": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-2.1.0.tgz",
      "integrity": "sha512-2NlIDTwUWJN0mRPQOdtQBzbUHvdGY2P1VXSyU83Q3xKxM7WHX2Ql8dKq782Q9TgQUNOLEzEYu9bzLNj1q88I5w==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esprima": "^4.0.1",
        "estraverse": "^5.2.0",
        "esutils": "^2.0.2"
      },
      "bin": {
        "escodegen": "bin/escodegen.js",
        "esgenerate": "bin/esgenerate.js"
      },
      "engines": {
        "node": ">=6.0"
      },
      "optionalDependencies": {
        "source-map": "~0.6.1"
      }
    },
    "node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "license": "BSD-2-Clause",
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/eventsource": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/eventsource/-/eventsource-3.0.7.tgz",
      "integrity": "sha512-CRT1WTyuQoD771GW56XEZFQ/ZoSfWid1alKGDYMmkt2yl8UXrVR4pspqWNEcqKvVIzg6PAltWjxcSSPrboA4iA==",
      "license": "MIT",
      "dependencies": {
        "eventsource-parser": "^3.0.1"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/eventsource-parser": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/eventsource-parser/-/eventsource-parser-3.0.6.tgz",
      "integrity": "sha512-Vo1ab+QXPzZ4tCa8SwIHJFaSzy4R6SHf7BY79rFBDf0idraZWAkYrDjDj8uWaSm3S2TK+hJ7/t1CEmZ7jXw+pg==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/execa": {
      "version": "9.6.0",
      "resolved": "https://registry.npmjs.org/execa/-/execa-9.6.0.tgz",
      "integrity": "sha512-jpWzZ1ZhwUmeWRhS7Qv3mhpOhLfwI+uAX4e5fOcXqwMR7EcJ0pj2kV1CVzHVMX/LphnKWD3LObjZCoJ71lKpHw==",
      "license": "MIT",
      "dependencies": {
        "@sindresorhus/merge-streams": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "figures": "^6.1.0",
        "get-stream": "^9.0.0",
        "human-signals": "^8.0.1",
        "is-plain-obj": "^4.1.0",
        "is-stream": "^4.0.1",
        "npm-run-path": "^6.0.0",
        "pretty-ms": "^9.2.0",
        "signal-exit": "^4.1.0",
        "strip-final-newline": "^4.0.0",
        "yoctocolors": "^2.1.1"
      },
      "engines": {
        "node": "^18.19.0 || >=20.5.0"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/execa?sponsor=1"
      }
    },
    "node_modules/exit-x": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/exit-x/-/exit-x-0.2.2.tgz",
      "integrity": "sha512-+I6B/IkJc1o/2tiURyz/ivu/O0nKNEArIUB5O7zBrlDVJr22SCLH3xTeEry428LvFhRzIA1g8izguxJ/gbNcVQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/expect": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/expect/-/expect-30.2.0.tgz",
      "integrity": "sha512-u/feCi0GPsI+988gU2FLcsHyAHTU0MX1Wg68NhAnN7z/+C5wqG+CY8J53N9ioe8RXgaoz0nBR/TYMf3AycUuPw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/expect-utils": "30.2.0",
        "@jest/get-type": "30.1.0",
        "jest-matcher-utils": "30.2.0",
        "jest-message-util": "30.2.0",
        "jest-mock": "30.2.0",
        "jest-util": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/express": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/express/-/express-5.1.0.tgz",
      "integrity": "sha512-DT9ck5YIRU+8GYzzU5kT3eHGA5iL+1Zd0EutOmTE9Dtk+Tvuzd23VBU+ec7HPNSTxXYO55gPV/hq4pSBJDjFpA==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.0",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/express-rate-limit": {
      "version": "7.5.1",
      "resolved": "https://registry.npmjs.org/express-rate-limit/-/express-rate-limit-7.5.1.tgz",
      "integrity": "sha512-7iN8iPMDzOMHPUYllBEsQdWVB6fPDMPqwjBaFrgr4Jgr/+okjvzAy+UHlYYL/Vs0OsOrMkwS6PJDkFlJwoxUnw==",
      "license": "MIT",
      "engines": {
        "node": ">= 16"
      },
      "funding": {
        "url": "https://github.com/sponsors/express-rate-limit"
      },
      "peerDependencies": {
        "express": ">= 4.11"
      }
    },
    "node_modules/express/node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express/node_modules/mime-types": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.1.tgz",
      "integrity": "sha512-xRc4oEhT6eaBpU1XF7AjpOFD+xQmXNB5OVKwp4tqCuBpHLS/ZbBDrc07mYTDqVMg6PfxUjjNp85O6Cd2Z/5HWA==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/extract-zip": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extract-zip/-/extract-zip-2.0.1.tgz",
      "integrity": "sha512-GDhU9ntwuKyGXdZBUgTIe+vXnWj0fppUEtMDL0+idd5Sta8TGpHssn/eusA9mrPr9qNDym6SxAYZjNvCn/9RBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "debug": "^4.1.1",
        "get-stream": "^5.1.0",
        "yauzl": "^2.10.0"
      },
      "bin": {
        "extract-zip": "cli.js"
      },
      "engines": {
        "node": ">= 10.17.0"
      },
      "optionalDependencies": {
        "@types/yauzl": "^2.9.1"
      }
    },
    "node_modules/extract-zip/node_modules/get-stream": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
      "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pump": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.19.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.19.1.tgz",
      "integrity": "sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==",
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fb-watchman": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.2.tgz",
      "integrity": "sha512-p5161BqbuCaSnB8jIbzQHOlpgsPmK5rJVDfDKO91Axs5NC1uu3HRQm6wt9cd9/+GtQQIO53JdGXXoyDpTAsgYA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "bser": "2.1.1"
      }
    },
    "node_modules/fd-slicer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.1.0.tgz",
      "integrity": "sha512-cE1qsB/VwyQozZ+q1dGxR8LBYNZeofhEdUNGSMbQD3Gw2lAzX9Zb3uIU6Ebc/Fmyjo9AWWfnn0AUCHqtevs/8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pend": "~1.2.0"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fetch-blob": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/fetch-blob/-/fetch-blob-3.2.0.tgz",
      "integrity": "sha512-7yAQpD2UMJzLi1Dqv7qFYnPbaPx7ZfFK6PiIxQ4PfkGPyNyl2Ugx+a/umUonmKqjhM4DnfbMvdX6otXq83soQQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/jimmywarting"
        },
        {
          "type": "paypal",
          "url": "https://paypal.me/jimmywarting"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "node-domexception": "^1.0.0",
        "web-streams-polyfill": "^3.0.3"
      },
      "engines": {
        "node": "^12.20 || >= 14.13"
      }
    },
    "node_modules/figures": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/figures/-/figures-6.1.0.tgz",
      "integrity": "sha512-d+l3qxjSesT4V7v2fh+QnmFnUWv9lSpjarhShNTgBOfA0ttejbQUAlHLitbjkoRiDulW0OPoQPYIGhIC8ohejg==",
      "license": "MIT",
      "dependencies": {
        "is-unicode-supported": "^2.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/finalhandler": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.0.tgz",
      "integrity": "sha512-/t88Ty3d5JWQbWYgaOGCCYfXRwV1+be02WqYYlL6h0lEiUAMPM8o8qKGO01YIkOHzka2up08wvgYD0mDiI+q3Q==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/flat/-/flat-5.0.2.tgz",
      "integrity": "sha512-b6suED+5/3rTpUBdG1gupIl8MPFCAMA0QXwmljLhvCUKcUvdE4gWky9zpuGCcXHOsz4J9wPGNWq6OKpmIzz3hQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "bin": {
        "flat": "cli.js"
      }
    },
    "node_modules/follow-redirects": {
      "version": "1.15.11",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.11.tgz",
      "integrity": "sha512-deG2P0JfjrTxl50XGCDyfI97ZGVCxIpfKYmfyrQ54n5FO/0gfIES8C/Psl6kWVDolizcaaxZJnTS0QSMxvnsBQ==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz",
      "integrity": "sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==",
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.6",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/form-data": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.4.tgz",
      "integrity": "sha512-KrGhL9Q4zjj0kiUt5OO4Mr/A/jlI2jDYs5eHBpYHPcBEVSiipAvn2Ko2HnPe20rmcuuvMHNdZFp+4IlGTMF0Ow==",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/formdata-polyfill": {
      "version": "4.0.10",
      "resolved": "https://registry.npmjs.org/formdata-polyfill/-/formdata-polyfill-4.0.10.tgz",
      "integrity": "sha512-buewHzMvYL29jdeQTVILecSaZKnt/RJWjoZCF5OW60Z67/GmSLBkOFM7qh1PI3zFNtJbaZL5eQu1vLfazOwj4g==",
      "license": "MIT",
      "dependencies": {
        "fetch-blob": "^3.1.2"
      },
      "engines": {
        "node": ">=12.20.0"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fraction.js": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
      "integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "patreon",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/fs-extra": {
      "version": "11.3.2",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-11.3.2.tgz",
      "integrity": "sha512-Xr9F6z6up6Ws+NjzMCZc6WXg2YFRlrLP9NQDO3VQrWrfiojdhS56TzueT88ze0uBdCTwEIhQ3ptnmKeWGFAe0A==",
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=14.14"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/fuzzysort": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/fuzzysort/-/fuzzysort-3.1.0.tgz",
      "integrity": "sha512-sR9BNCjBg6LNgwvxlBd0sBABvQitkLzoVY9MYYROQVX/FvfJ4Mai9LsGhDgd8qYdds0bY77VzYd5iuB+v5rwQQ==",
      "license": "MIT"
    },
    "node_modules/fzf": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fzf/-/fzf-0.5.2.tgz",
      "integrity": "sha512-Tt4kuxLXFKHy8KT40zwsUPUkg1CrsgY25FxA2U/j/0WgEDCk3ddc/zLTCCcbSHX9FcKtLuVaDGtGE/STWC+j3Q==",
      "license": "BSD-3-Clause"
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "license": "ISC",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-east-asian-width": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/get-east-asian-width/-/get-east-asian-width-1.4.0.tgz",
      "integrity": "sha512-QZjmEOC+IT1uk6Rx0sX22V6uHWVwbdbxf1faPqJ1QhLdGgsRGCZoyaQBm/piRdJy/D2um6hM1UP7ZEeQ4EkP+Q==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/get-func-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/get-func-name/-/get-func-name-2.0.2.tgz",
      "integrity": "sha512-8vXOvuE167CtIc3OyItco7N/dpRtBbYOsPsXCz7X/PMnlGjYjSGuZJgM1Y7mmew7BKf9BqvLX2tnOVy1BBUsxQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-own-enumerable-keys": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/get-own-enumerable-keys/-/get-own-enumerable-keys-1.0.0.tgz",
      "integrity": "sha512-PKsK2FSrQCyxcGHsGrLDcK0lx+0Ke+6e8KFFozA9/fIQLhQzPaRvJFdcz7+Axg3jUH/Mq+NI4xa5u/UT2tQskA==",
      "license": "MIT",
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/get-package-type": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
      "integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-stream": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-9.0.1.tgz",
      "integrity": "sha512-kVCxPF3vQM/N0B1PmoqVUqgHP+EeVjmZSQn+1oCRPxd2P21P2F19lIgbR3HBosbB1PUhOAoctJnfEn2GbN2eZA==",
      "license": "MIT",
      "dependencies": {
        "@sec-ant/readable-stream": "^0.4.1",
        "is-stream": "^4.0.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/get-uri": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/get-uri/-/get-uri-6.0.5.tgz",
      "integrity": "sha512-b1O07XYq8eRuVzBNgJLstU6FYc1tS6wnMtF1I1D9lE8LxZSOGZ7LhxN54yPP6mGw5f2CkXY2BQUL9Fx41qvcIg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "basic-ftp": "^5.0.2",
        "data-uri-to-buffer": "^6.0.2",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/get-uri/node_modules/data-uri-to-buffer": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/data-uri-to-buffer/-/data-uri-to-buffer-6.0.2.tgz",
      "integrity": "sha512-7hvf7/GW8e86rW0ptuwS3OcBGDjIi6SZva7hCyWC0yYry2cOPmLIjXAUHI6DK2HsnwJd9ifmt57i8eV2n4YNpw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/glob": {
      "version": "10.4.5",
      "resolved": "https://registry.npmjs.org/glob/-/glob-10.4.5.tgz",
      "integrity": "sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==",
      "license": "ISC",
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^3.1.2",
        "minimatch": "^9.0.4",
        "minipass": "^7.1.2",
        "package-json-from-dist": "^1.0.0",
        "path-scurry": "^1.11.1"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "license": "ISC"
    },
    "node_modules/graphql": {
      "version": "16.11.0",
      "resolved": "https://registry.npmjs.org/graphql/-/graphql-16.11.0.tgz",
      "integrity": "sha512-mS1lbMsxgQj6hge1XZ6p7GPhbrtFwUFYi3wRzXAC/FmYnyXMTvvI3td3rjmQ2u8ewXueaSvRPWaEcgVVOT9Jnw==",
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.16.0 || ^16.0.0 || >=17.0.0"
      }
    },
    "node_modules/handlebars": {
      "version": "4.7.8",
      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.7.8.tgz",
      "integrity": "sha512-vafaFqs8MZkRrSX7sFVUdo3ap/eNiLnb4IakshzvP56X5Nr1iGKAIqdX6tMlm6HcNRIkr6AxO5jFEoJzzpT8aQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.5",
        "neo-async": "^2.6.2",
        "source-map": "^0.6.1",
        "wordwrap": "^1.0.0"
      },
      "bin": {
        "handlebars": "bin/handlebars"
      },
      "engines": {
        "node": ">=0.4.7"
      },
      "optionalDependencies": {
        "uglify-js": "^3.1.4"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/he": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
      "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "he": "bin/he"
      }
    },
    "node_modules/headers-polyfill": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/headers-polyfill/-/headers-polyfill-4.0.3.tgz",
      "integrity": "sha512-IScLbePpkvO846sIwOtOTDjutRMWdXdJmXdMvk6gCBHxFO8d+QKOQedyZSxFTTFYRSmlgSTDtXqqq4pcenBXLQ==",
      "license": "MIT"
    },
    "node_modules/html-entities": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/html-entities/-/html-entities-2.6.0.tgz",
      "integrity": "sha512-kig+rMn/QOVRvr7c86gQ8lWXq+Hkv6CbAH1hLu+RG338StTpE8Z0b44SDVaqVu7HGKf27frdmUYEs9hTUX/cLQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/mdevils"
        },
        {
          "type": "patreon",
          "url": "https://patreon.com/mdevils"
        }
      ],
      "license": "MIT"
    },
    "node_modules/html-escaper": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
      "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/http-errors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
      "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "2.0.0",
        "inherits": "2.0.4",
        "setprototypeof": "1.2.0",
        "statuses": "2.0.1",
        "toidentifier": "1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/http-errors/node_modules/statuses": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
      "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/http-proxy-agent": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-7.0.2.tgz",
      "integrity": "sha512-T1gkAiYYDWYx3V5Bmyu7HcfcvL7mUrTWiM6yOfa3PIphViJ/gFPbvidQ+veqSOHci/PxBcDabeUNCzpOODJZig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz",
      "integrity": "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==",
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/human-signals": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-8.0.1.tgz",
      "integrity": "sha512-eKCa6bwnJhvxj14kZk5NCPc6Hb6BdsU9DZcOnmQKSnO1VKrfV0zCvtttPZUsBvjmNDn8rpcJfpwSYnHBjc95MQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
      "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/immediate": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/immediate/-/immediate-3.0.6.tgz",
      "integrity": "sha512-XXOFtyqDjNDAQxVfYxuF7g9Il/IbWmmlQg2MYKOH8ExIT1qg6xc4zyS3HaEEATgs1btfzxq15ciUiY7gjSXRGQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/import-local": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/import-local/-/import-local-3.2.0.tgz",
      "integrity": "sha512-2SPlun1JUPWoM6t3F0dw0FkCF/jWY8kttcY4f599GLTSjh2OCuuhdTkJQsEcZzBqbXZGKMK2OqW1oZsjtf/gQA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pkg-dir": "^4.2.0",
        "resolve-cwd": "^3.0.0"
      },
      "bin": {
        "import-local-fixture": "fixtures/cli.js"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/ip-address": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/ip-address/-/ip-address-10.0.1.tgz",
      "integrity": "sha512-NWv9YLW4PoW2B7xtzaS3NCot75m6nK7Icdv0o3lfMceJVRfSoQwqD4wEH5rLwoKJwUiZ/rfpiVBhnaF0FK4HoA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/ip-regex": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ip-regex/-/ip-regex-4.3.0.tgz",
      "integrity": "sha512-B9ZWJxHHOHUhUjCPrMpLD4xEq35bUTClHM1S6CBU5ixQnkZmwipwgc96vAd7AAGM9TGHvJR+Uss+/Ak6UphK+Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
      "license": "MIT"
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-docker": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.2.1.tgz",
      "integrity": "sha512-F+i2BKsFrH66iaUFc0woD8sLy8getkwTwtOBjvs56Cx4CgJDeKQeqfz8wAYiSb8JOprWhHH5p77PbmYCvvUuXQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "is-docker": "cli.js"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-generator-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-generator-fn/-/is-generator-fn-2.1.0.tgz",
      "integrity": "sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-interactive": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-2.0.0.tgz",
      "integrity": "sha512-qP1vozQRI+BMOPcjFzrjXuQvdak2pHNUMZoeG2eRbiSqyvbEf/wQtEOTOX1guk6E3t36RkaqiSt8A/6YElNxLQ==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-node-process": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/is-node-process/-/is-node-process-1.2.0.tgz",
      "integrity": "sha512-Vg4o6/fqPxIjtxgUH5QLJhwZ7gW5diGCVlXpuUfELC62CuxM1iHcRe51f2W1FDy04Ai4KJkagKjx3XaqyfRKXw==",
      "license": "MIT"
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-obj": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-3.0.0.tgz",
      "integrity": "sha512-IlsXEHOjtKhpN8r/tRFj2nDyTmHvcfNeu/nrRIcXE17ROeatXchkojffa1SpdqW4cr/Fj6QkEf/Gn4zf6KKvEQ==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-plain-obj": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-4.1.0.tgz",
      "integrity": "sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-port-reachable": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-port-reachable/-/is-port-reachable-4.0.0.tgz",
      "integrity": "sha512-9UoipoxYmSk6Xy7QFgRv2HDyaysmgSG75TFQs6S+3pDM7ZhKTF/bskZV+0UlABHzKjNVhPjYCLfeZUEg1wXxig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/is-regexp": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/is-regexp/-/is-regexp-3.1.0.tgz",
      "integrity": "sha512-rbku49cWloU5bSMI+zaRaXdQHXnthP6DZ/vLnfdSKyL4zUzuWnomtOEiZZOd+ioQ+avFo/qau3KPTc7Fjy1uPA==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-stream": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-4.0.1.tgz",
      "integrity": "sha512-Dnz92NInDqYckGEUJv689RbRiTSEHCQ7wOVeALbkOz999YpqT46yMRIGtSNl2iCL1waAZSx40+h59NV/EwzV/A==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-unicode-supported": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-2.1.0.tgz",
      "integrity": "sha512-mE00Gnza5EEB3Ds0HfMyllZzbBrmLOX3vfWoj9A9PEnTfratQ/BcaJOuMhnkhjXvb2+FkY3VuHqtAGpTPmglFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-url": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/is-url/-/is-url-1.2.4.tgz",
      "integrity": "sha512-ITvGim8FhRiYe4IQ5uHSkj7pVaPDrCTkNd3yq3cV7iZAcJdHTUMPMEHcqSOy9xZ9qFenQCvi+2wjH9a1nXqHww==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/is-wsl": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
      "integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-docker": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is2": {
      "version": "2.0.9",
      "resolved": "https://registry.npmjs.org/is2/-/is2-2.0.9.tgz",
      "integrity": "sha512-rZkHeBn9Zzq52sd9IUIV3a5mfwBY+o2HePMh0wkGBM4z4qjvy2GwVxQ6nNXSfw6MmVP6gf1QIlWjiOavhM3x5g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "ip-regex": "^4.1.0",
        "is-url": "^1.2.4"
      },
      "engines": {
        "node": ">=v0.10.0"
      }
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-3.1.1.tgz",
      "integrity": "sha512-LpB/54B+/2J5hqQ7imZHfdU31OlgQqx7ZicVlkm9kzg9/w8GKLEcFfJl/t7DCEDueOyBAD6zCCwTO6Fzs0NoEQ==",
      "license": "ISC",
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/istanbul-lib-coverage": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.2.2.tgz",
      "integrity": "sha512-O8dpsF+r0WV/8MNRKfnmrtCWhuKjxrq2w+jpzBL5UZKTi2LeVWnWOmWRxFlesJONmc+wLAGvKQZEOanko0LFTg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-instrument": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-6.0.3.tgz",
      "integrity": "sha512-Vtgk7L/R2JHyyGW07spoFlB8/lpjiOLTjMdms6AFMraYt3BaJauod/NGrfnVG/y4Ix1JEuMRPDPEj2ua+zz1/Q==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@babel/core": "^7.23.9",
        "@babel/parser": "^7.23.9",
        "@istanbuljs/schema": "^0.1.3",
        "istanbul-lib-coverage": "^3.2.0",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/istanbul-lib-instrument/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/istanbul-lib-report": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.1.tgz",
      "integrity": "sha512-GCfE1mtsHGOELCU8e/Z7YWzpmybrx/+dSTfLrvY8qRmaY6zXTKWn6WQIjaAFw069icm6GVMNkgu0NzI4iPZUNw==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "istanbul-lib-coverage": "^3.0.0",
        "make-dir": "^4.0.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/istanbul-lib-report/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-source-maps": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-5.0.6.tgz",
      "integrity": "sha512-yg2d+Em4KizZC5niWhQaIomgf5WlL4vOOjZ5xGCmF8SnPE/mDWWXgvRExdcpCgh9lLRRa1/fSYp2ymmbJ1pI+A==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@jridgewell/trace-mapping": "^0.3.23",
        "debug": "^4.1.1",
        "istanbul-lib-coverage": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/istanbul-reports": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.2.0.tgz",
      "integrity": "sha512-HGYWWS/ehqTV3xN10i23tkPkpH46MLCIMFNCaaKNavAXTF1RkqxawEPtnjnGZ6XKSInBKkiOA5BKS+aZiY3AvA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "html-escaper": "^2.0.0",
        "istanbul-lib-report": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jackspeak": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz",
      "integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "@pkgjs/parseargs": "^0.11.0"
      }
    },
    "node_modules/jest": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest/-/jest-30.2.0.tgz",
      "integrity": "sha512-F26gjC0yWN8uAA5m5Ss8ZQf5nDHWGlN/xWZIh8S5SRbsEKBovwZhxGd6LJlbZYxBgCYOtreSUyb8hpXyGC5O4A==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@jest/core": "30.2.0",
        "@jest/types": "30.2.0",
        "import-local": "^3.2.0",
        "jest-cli": "30.2.0"
      },
      "bin": {
        "jest": "bin/jest.js"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      },
      "peerDependencies": {
        "node-notifier": "^8.0.1 || ^9.0.0 || ^10.0.0"
      },
      "peerDependenciesMeta": {
        "node-notifier": {
          "optional": true
        }
      }
    },
    "node_modules/jest-changed-files": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-30.2.0.tgz",
      "integrity": "sha512-L8lR1ChrRnSdfeOvTrwZMlnWV8G/LLjQ0nG9MBclwWZidA2N5FviRki0Bvh20WRMOX31/JYvzdqTJrk5oBdydQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "execa": "^5.1.1",
        "jest-util": "30.2.0",
        "p-limit": "^3.1.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-changed-files/node_modules/execa": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
      "integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cross-spawn": "^7.0.3",
        "get-stream": "^6.0.0",
        "human-signals": "^2.1.0",
        "is-stream": "^2.0.0",
        "merge-stream": "^2.0.0",
        "npm-run-path": "^4.0.1",
        "onetime": "^5.1.2",
        "signal-exit": "^3.0.3",
        "strip-final-newline": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/execa?sponsor=1"
      }
    },
    "node_modules/jest-changed-files/node_modules/get-stream": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
      "integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/jest-changed-files/node_modules/human-signals": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
      "integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=10.17.0"
      }
    },
    "node_modules/jest-changed-files/node_modules/is-stream": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
      "integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/jest-changed-files/node_modules/npm-run-path": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
      "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-changed-files/node_modules/onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mimic-fn": "^2.1.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/jest-changed-files/node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jest-changed-files/node_modules/strip-final-newline": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
      "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jest-circus": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-circus/-/jest-circus-30.2.0.tgz",
      "integrity": "sha512-Fh0096NC3ZkFx05EP2OXCxJAREVxj1BcW/i6EWqqymcgYKWjyyDpral3fMxVcHXg6oZM7iULer9wGRFvfpl+Tg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/environment": "30.2.0",
        "@jest/expect": "30.2.0",
        "@jest/test-result": "30.2.0",
        "@jest/types": "30.2.0",
        "@types/node": "*",
        "chalk": "^4.1.2",
        "co": "^4.6.0",
        "dedent": "^1.6.0",
        "is-generator-fn": "^2.1.0",
        "jest-each": "30.2.0",
        "jest-matcher-utils": "30.2.0",
        "jest-message-util": "30.2.0",
        "jest-runtime": "30.2.0",
        "jest-snapshot": "30.2.0",
        "jest-util": "30.2.0",
        "p-limit": "^3.1.0",
        "pretty-format": "30.2.0",
        "pure-rand": "^7.0.0",
        "slash": "^3.0.0",
        "stack-utils": "^2.0.6"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-circus/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-circus/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-cli": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-30.2.0.tgz",
      "integrity": "sha512-Os9ukIvADX/A9sLt6Zse3+nmHtHaE6hqOsjQtNiugFTbKRHYIYtZXNGNK9NChseXy7djFPjndX1tL0sCTlfpAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/core": "30.2.0",
        "@jest/test-result": "30.2.0",
        "@jest/types": "30.2.0",
        "chalk": "^4.1.2",
        "exit-x": "^0.2.2",
        "import-local": "^3.2.0",
        "jest-config": "30.2.0",
        "jest-util": "30.2.0",
        "jest-validate": "30.2.0",
        "yargs": "^17.7.2"
      },
      "bin": {
        "jest": "bin/jest.js"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      },
      "peerDependencies": {
        "node-notifier": "^8.0.1 || ^9.0.0 || ^10.0.0"
      },
      "peerDependenciesMeta": {
        "node-notifier": {
          "optional": true
        }
      }
    },
    "node_modules/jest-cli/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-cli/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-config": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-30.2.0.tgz",
      "integrity": "sha512-g4WkyzFQVWHtu6uqGmQR4CQxz/CH3yDSlhzXMWzNjDx843gYjReZnMRanjRCq5XZFuQrGDxgUaiYWE8BRfVckA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.27.4",
        "@jest/get-type": "30.1.0",
        "@jest/pattern": "30.0.1",
        "@jest/test-sequencer": "30.2.0",
        "@jest/types": "30.2.0",
        "babel-jest": "30.2.0",
        "chalk": "^4.1.2",
        "ci-info": "^4.2.0",
        "deepmerge": "^4.3.1",
        "glob": "^10.3.10",
        "graceful-fs": "^4.2.11",
        "jest-circus": "30.2.0",
        "jest-docblock": "30.2.0",
        "jest-environment-node": "30.2.0",
        "jest-regex-util": "30.0.1",
        "jest-resolve": "30.2.0",
        "jest-runner": "30.2.0",
        "jest-util": "30.2.0",
        "jest-validate": "30.2.0",
        "micromatch": "^4.0.8",
        "parse-json": "^5.2.0",
        "pretty-format": "30.2.0",
        "slash": "^3.0.0",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@types/node": "*",
        "esbuild-register": ">=3.4.0",
        "ts-node": ">=9.0.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "esbuild-register": {
          "optional": true
        },
        "ts-node": {
          "optional": true
        }
      }
    },
    "node_modules/jest-config/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-config/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-diff": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-30.2.0.tgz",
      "integrity": "sha512-dQHFo3Pt4/NLlG5z4PxZ/3yZTZ1C7s9hveiOj+GCN+uT109NC2QgsoVZsVOAvbJ3RgKkvyLGXZV9+piDpWbm6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/diff-sequences": "30.0.1",
        "@jest/get-type": "30.1.0",
        "chalk": "^4.1.2",
        "pretty-format": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-diff/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-diff/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-docblock": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-30.2.0.tgz",
      "integrity": "sha512-tR/FFgZKS1CXluOQzZvNH3+0z9jXr3ldGSD8bhyuxvlVUwbeLOGynkunvlTMxchC5urrKndYiwCFC0DLVjpOCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "detect-newline": "^3.1.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-each": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-each/-/jest-each-30.2.0.tgz",
      "integrity": "sha512-lpWlJlM7bCUf1mfmuqTA8+j2lNURW9eNafOy99knBM01i5CQeY5UH1vZjgT9071nDJac1M4XsbyI44oNOdhlDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/get-type": "30.1.0",
        "@jest/types": "30.2.0",
        "chalk": "^4.1.2",
        "jest-util": "30.2.0",
        "pretty-format": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-each/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-each/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-environment-node": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-30.2.0.tgz",
      "integrity": "sha512-ElU8v92QJ9UrYsKrxDIKCxu6PfNj4Hdcktcn0JX12zqNdqWHB0N+hwOnnBBXvjLd2vApZtuLUGs1QSY+MsXoNA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/environment": "30.2.0",
        "@jest/fake-timers": "30.2.0",
        "@jest/types": "30.2.0",
        "@types/node": "*",
        "jest-mock": "30.2.0",
        "jest-util": "30.2.0",
        "jest-validate": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-haste-map": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-30.2.0.tgz",
      "integrity": "sha512-sQA/jCb9kNt+neM0anSj6eZhLZUIhQgwDt7cPGjumgLM4rXsfb9kpnlacmvZz3Q5tb80nS+oG/if+NBKrHC+Xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "30.2.0",
        "@types/node": "*",
        "anymatch": "^3.1.3",
        "fb-watchman": "^2.0.2",
        "graceful-fs": "^4.2.11",
        "jest-regex-util": "30.0.1",
        "jest-util": "30.2.0",
        "jest-worker": "30.2.0",
        "micromatch": "^4.0.8",
        "walker": "^1.0.8"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      },
      "optionalDependencies": {
        "fsevents": "^2.3.3"
      }
    },
    "node_modules/jest-html-reporter": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/jest-html-reporter/-/jest-html-reporter-4.3.0.tgz",
      "integrity": "sha512-lq4Zx35yc6Ehw513CXJ1ok3wUmkSiOImWcyLAmylfzrz7DAqtrhDF9V73F4qfstmGxlr8X0QrEjWsl/oqhf4sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/reporters": "^30.0.2",
        "@jest/test-result": "^30.0.2",
        "@jest/types": "^30.0.1",
        "dateformat": "3.0.2",
        "mkdirp": "^1.0.3",
        "strip-ansi": "6.0.1",
        "xmlbuilder": "15.0.0"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "jest": "19.x - 30.x",
        "typescript": "^3.7.x || ^4.3.x || ^5.x"
      }
    },
    "node_modules/jest-html-reporter/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-html-reporter/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-leak-detector": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-30.2.0.tgz",
      "integrity": "sha512-M6jKAjyzjHG0SrQgwhgZGy9hFazcudwCNovY/9HPIicmNSBuockPSedAP9vlPK6ONFJ1zfyH/M2/YYJxOz5cdQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/get-type": "30.1.0",
        "pretty-format": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-matcher-utils": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-30.2.0.tgz",
      "integrity": "sha512-dQ94Nq4dbzmUWkQ0ANAWS9tBRfqCrn0bV9AMYdOi/MHW726xn7eQmMeRTpX2ViC00bpNaWXq+7o4lIQ3AX13Hg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/get-type": "30.1.0",
        "chalk": "^4.1.2",
        "jest-diff": "30.2.0",
        "pretty-format": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-matcher-utils/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-matcher-utils/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-message-util": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-30.2.0.tgz",
      "integrity": "sha512-y4DKFLZ2y6DxTWD4cDe07RglV88ZiNEdlRfGtqahfbIjfsw1nMCPx49Uev4IA/hWn3sDKyAnSPwoYSsAEdcimw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@jest/types": "30.2.0",
        "@types/stack-utils": "^2.0.3",
        "chalk": "^4.1.2",
        "graceful-fs": "^4.2.11",
        "micromatch": "^4.0.8",
        "pretty-format": "30.2.0",
        "slash": "^3.0.0",
        "stack-utils": "^2.0.6"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-message-util/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-message-util/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-mock": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-30.2.0.tgz",
      "integrity": "sha512-JNNNl2rj4b5ICpmAcq+WbLH83XswjPbjH4T7yvGzfAGCPh1rw+xVNbtk+FnRslvt9lkCcdn9i1oAoKUuFsOxRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "30.2.0",
        "@types/node": "*",
        "jest-util": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-pnp-resolver": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/jest-pnp-resolver/-/jest-pnp-resolver-1.2.3.tgz",
      "integrity": "sha512-+3NpwQEnRoIBtx4fyhblQDPgJI0H1IEIkX7ShLUjPGA7TtUTvI1oiKi3SR4oBR0hQhQR80l4WAe5RrXBwWMA8w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "peerDependencies": {
        "jest-resolve": "*"
      },
      "peerDependenciesMeta": {
        "jest-resolve": {
          "optional": true
        }
      }
    },
    "node_modules/jest-regex-util": {
      "version": "30.0.1",
      "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-30.0.1.tgz",
      "integrity": "sha512-jHEQgBXAgc+Gh4g0p3bCevgRCVRkB4VB70zhoAE48gxeSr1hfUOsM/C2WoJgVL7Eyg//hudYENbm3Ne+/dRVVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-resolve": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-30.2.0.tgz",
      "integrity": "sha512-TCrHSxPlx3tBY3hWNtRQKbtgLhsXa1WmbJEqBlTBrGafd5fiQFByy2GNCEoGR+Tns8d15GaL9cxEzKOO3GEb2A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^4.1.2",
        "graceful-fs": "^4.2.11",
        "jest-haste-map": "30.2.0",
        "jest-pnp-resolver": "^1.2.3",
        "jest-util": "30.2.0",
        "jest-validate": "30.2.0",
        "slash": "^3.0.0",
        "unrs-resolver": "^1.7.11"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-resolve-dependencies": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-30.2.0.tgz",
      "integrity": "sha512-xTOIGug/0RmIe3mmCqCT95yO0vj6JURrn1TKWlNbhiAefJRWINNPgwVkrVgt/YaerPzY3iItufd80v3lOrFJ2w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "jest-regex-util": "30.0.1",
        "jest-snapshot": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-resolve/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-resolve/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-runner": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-30.2.0.tgz",
      "integrity": "sha512-PqvZ2B2XEyPEbclp+gV6KO/F1FIFSbIwewRgmROCMBo/aZ6J1w8Qypoj2pEOcg3G2HzLlaP6VUtvwCI8dM3oqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/console": "30.2.0",
        "@jest/environment": "30.2.0",
        "@jest/test-result": "30.2.0",
        "@jest/transform": "30.2.0",
        "@jest/types": "30.2.0",
        "@types/node": "*",
        "chalk": "^4.1.2",
        "emittery": "^0.13.1",
        "exit-x": "^0.2.2",
        "graceful-fs": "^4.2.11",
        "jest-docblock": "30.2.0",
        "jest-environment-node": "30.2.0",
        "jest-haste-map": "30.2.0",
        "jest-leak-detector": "30.2.0",
        "jest-message-util": "30.2.0",
        "jest-resolve": "30.2.0",
        "jest-runtime": "30.2.0",
        "jest-util": "30.2.0",
        "jest-watcher": "30.2.0",
        "jest-worker": "30.2.0",
        "p-limit": "^3.1.0",
        "source-map-support": "0.5.13"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-runner/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-runner/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-runtime": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-30.2.0.tgz",
      "integrity": "sha512-p1+GVX/PJqTucvsmERPMgCPvQJpFt4hFbM+VN3n8TMo47decMUcJbt+rgzwrEme0MQUA/R+1de2axftTHkKckg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/environment": "30.2.0",
        "@jest/fake-timers": "30.2.0",
        "@jest/globals": "30.2.0",
        "@jest/source-map": "30.0.1",
        "@jest/test-result": "30.2.0",
        "@jest/transform": "30.2.0",
        "@jest/types": "30.2.0",
        "@types/node": "*",
        "chalk": "^4.1.2",
        "cjs-module-lexer": "^2.1.0",
        "collect-v8-coverage": "^1.0.2",
        "glob": "^10.3.10",
        "graceful-fs": "^4.2.11",
        "jest-haste-map": "30.2.0",
        "jest-message-util": "30.2.0",
        "jest-mock": "30.2.0",
        "jest-regex-util": "30.0.1",
        "jest-resolve": "30.2.0",
        "jest-snapshot": "30.2.0",
        "jest-util": "30.2.0",
        "slash": "^3.0.0",
        "strip-bom": "^4.0.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-runtime/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-runtime/node_modules/strip-bom": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
      "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-runtime/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-snapshot": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-30.2.0.tgz",
      "integrity": "sha512-5WEtTy2jXPFypadKNpbNkZ72puZCa6UjSr/7djeecHWOu7iYhSXSnHScT8wBz3Rn8Ena5d5RYRcsyKIeqG1IyA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.27.4",
        "@babel/generator": "^7.27.5",
        "@babel/plugin-syntax-jsx": "^7.27.1",
        "@babel/plugin-syntax-typescript": "^7.27.1",
        "@babel/types": "^7.27.3",
        "@jest/expect-utils": "30.2.0",
        "@jest/get-type": "30.1.0",
        "@jest/snapshot-utils": "30.2.0",
        "@jest/transform": "30.2.0",
        "@jest/types": "30.2.0",
        "babel-preset-current-node-syntax": "^1.2.0",
        "chalk": "^4.1.2",
        "expect": "30.2.0",
        "graceful-fs": "^4.2.11",
        "jest-diff": "30.2.0",
        "jest-matcher-utils": "30.2.0",
        "jest-message-util": "30.2.0",
        "jest-util": "30.2.0",
        "pretty-format": "30.2.0",
        "semver": "^7.7.2",
        "synckit": "^0.11.8"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-snapshot/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-snapshot/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/jest-snapshot/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-util": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-30.2.0.tgz",
      "integrity": "sha512-QKNsM0o3Xe6ISQU869e+DhG+4CK/48aHYdJZGlFQVTjnbvgpcKyxpzk29fGiO7i/J8VENZ+d2iGnSsvmuHywlA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/types": "30.2.0",
        "@types/node": "*",
        "chalk": "^4.1.2",
        "ci-info": "^4.2.0",
        "graceful-fs": "^4.2.11",
        "picomatch": "^4.0.2"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-util/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-util/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-validate": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-30.2.0.tgz",
      "integrity": "sha512-FBGWi7dP2hpdi8nBoWxSsLvBFewKAg0+uSQwBaof4Y4DPgBabXgpSYC5/lR7VmnIlSpASmCi/ntRWPbv7089Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/get-type": "30.1.0",
        "@jest/types": "30.2.0",
        "camelcase": "^6.3.0",
        "chalk": "^4.1.2",
        "leven": "^3.1.0",
        "pretty-format": "30.2.0"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-validate/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-validate/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-watcher": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-30.2.0.tgz",
      "integrity": "sha512-PYxa28dxJ9g777pGm/7PrbnMeA0Jr7osHP9bS7eJy9DuAjMgdGtxgf0uKMyoIsTWAkIbUW5hSDdJ3urmgXBqxg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/test-result": "30.2.0",
        "@jest/types": "30.2.0",
        "@types/node": "*",
        "ansi-escapes": "^4.3.2",
        "chalk": "^4.1.2",
        "emittery": "^0.13.1",
        "jest-util": "30.2.0",
        "string-length": "^4.0.2"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jest-watcher/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/jest-watcher/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-worker": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-30.2.0.tgz",
      "integrity": "sha512-0Q4Uk8WF7BUwqXHuAjc23vmopWJw5WH7w2tqBoUOZpOjW/ZnR44GXXd1r82RvnmI2GZge3ivrYXk/BE2+VtW2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@ungap/structured-clone": "^1.3.0",
        "jest-util": "30.2.0",
        "merge-stream": "^2.0.0",
        "supports-color": "^8.1.1"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/jiti": {
      "version": "1.21.7",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.7.tgz",
      "integrity": "sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==",
      "license": "MIT",
      "peer": true,
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-parse-even-better-errors": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsonfile": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.2.0.tgz",
      "integrity": "sha512-FGuPw30AdOIUTRMC2OMRtQV+jkVj2cfPqSeWXv1NEAJ1qZ5zb1X6z1mFhbfOB/iy3ssJCD+3KuZ8r8C3uVFlAg==",
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/jszip": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/jszip/-/jszip-3.10.1.tgz",
      "integrity": "sha512-xXDvecyTpGLrqFrvkrUSoxxfJI5AH7U8zxxtVclpsUtMCq4JQ290LY8AW5c7Ggnr/Y/oK+bQMbqK2qmtk3pN4g==",
      "dev": true,
      "license": "(MIT OR GPL-3.0-or-later)",
      "dependencies": {
        "lie": "~3.3.0",
        "pako": "~1.0.2",
        "readable-stream": "~2.3.6",
        "setimmediate": "^1.0.5"
      }
    },
    "node_modules/kleur": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-4.1.5.tgz",
      "integrity": "sha512-o+NO+8WrRiQEE4/7nwRJhN1HWpVmJm511pBHUxPLtp0BUISzlBplORYSmTclCnJvQq2tKu/sgl3xVpkc7ZWuQQ==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/leven": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
      "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/lie": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/lie/-/lie-3.3.0.tgz",
      "integrity": "sha512-UaiMJzeWRlEujzAuw5LokY1L5ecNQYZKfmyZ9L7wDHb/p5etKaxXhohBcrw0EYby+G/NA52vRSN4N39dxHAIwQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "immediate": "~3.0.5"
      }
    },
    "node_modules/lilconfig": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
      "integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
      "license": "MIT",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antonk52"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "license": "MIT"
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.memoize": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/lodash.memoize/-/lodash.memoize-4.1.2.tgz",
      "integrity": "sha512-t7j+NzmgnQzTAYXcsHYLgimltOV1MXHtlOWf6GjL9Kj8GK5FInw5JotxvbOs+IvV1/Dzo04/fCGfLVs7aXb4Ag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/log-symbols": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-6.0.0.tgz",
      "integrity": "sha512-i24m8rpwhmPIS4zscNzK6MSEhk0DUWa/8iYQWxhffV8jkI4Phvs3F+quL5xvS0gdQR0FyTCMMH33Y78dDTzzIw==",
      "license": "MIT",
      "dependencies": {
        "chalk": "^5.3.0",
        "is-unicode-supported": "^1.3.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/log-symbols/node_modules/is-unicode-supported": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-1.3.0.tgz",
      "integrity": "sha512-43r2mRvz+8JRIKnWJ+3j8JtjRKZ6GmjzfaE/qiBJnikNnYv/6bagRJ1kUhNk8R5EX/GkobD+r+sfxCPJsiKBLQ==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/loglevel": {
      "version": "1.9.2",
      "resolved": "https://registry.npmjs.org/loglevel/-/loglevel-1.9.2.tgz",
      "integrity": "sha512-HgMmCqIJSAKqo68l0rS2AanEWfkxaZ5wNiEFb5ggm08lDs9Xl2KxBlX3PTcaD2chBM1gXAYf491/M2Rv8Jwayg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6.0"
      },
      "funding": {
        "type": "tidelift",
        "url": "https://tidelift.com/funding/github/npm/loglevel"
      }
    },
    "node_modules/loglevel-plugin-prefix": {
      "version": "0.8.4",
      "resolved": "https://registry.npmjs.org/loglevel-plugin-prefix/-/loglevel-plugin-prefix-0.8.4.tgz",
      "integrity": "sha512-WpG9CcFAOjz/FtNht+QJeGpvVl/cdR6P0z6OcXSkr8wFJOsV2GRj2j10JLfjuA4aYkcKCNIEqRGCyTife9R8/g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/loupe": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/loupe/-/loupe-2.3.7.tgz",
      "integrity": "sha512-zSMINGVYkdpYSOBmLi0D1Uo7JU9nVdQKrHxC8eYlV+9YKK9WePqAlL7lSlorG/U2Fw1w0hTBmaa/jrQ3UbPHtA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-func-name": "^2.0.1"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.294.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.294.0.tgz",
      "integrity": "sha512-V7o0/VECSGbLHn3/1O67FUgBwWB+hmzshrgDVRJQhMh8uj5D3HBuIvhuAmQTtlupILSplwIZg5FTc4tTKMA2SA==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0"
      }
    },
    "node_modules/make-dir": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-4.0.0.tgz",
      "integrity": "sha512-hXdUTZYIVOt1Ex//jAQi+wTZZpUpwBj/0QsOzqegb3rGMMeJiSEu5xLHnYfBrRV4RH2+OCSOO95Is/7x1WJ4bw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.5.3"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/make-dir/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/make-error": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
      "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/makeerror": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.12.tgz",
      "integrity": "sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "tmpl": "1.0.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/md5": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/md5/-/md5-2.3.0.tgz",
      "integrity": "sha512-T1GITYmFaKuO91vxyoQMFETst+O71VUPEU3ze5GNzDm0OWdP8v1ziTaAEPUr/3kLsY3Sftgz242A1SetQiDL7g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "charenc": "0.0.2",
        "crypt": "0.0.2",
        "is-buffer": "~1.1.6"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/merge-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
      "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
      "license": "MIT"
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/micromatch/node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mimic-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/mimic-function": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/mimic-function/-/mimic-function-5.0.1.tgz",
      "integrity": "sha512-VP79XUPxV2CigYP3jWwAUFSku2aKqBH7uTAapFWCBqutsbmDo96KY5o8uh6U+/YSIn5OxJnXp73beVkpqMIGhA==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
      "license": "ISC",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/mkdirp": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "mkdirp": "bin/cmd.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/mocha": {
      "version": "10.8.2",
      "resolved": "https://registry.npmjs.org/mocha/-/mocha-10.8.2.tgz",
      "integrity": "sha512-VZlYo/WE8t1tstuRmqgeyBgCbJc/lEdopaa+axcKzTBJ+UIdlAB9XnmvTCAH4pwR4ElNInaedhEBmZD8iCSVEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-colors": "^4.1.3",
        "browser-stdout": "^1.3.1",
        "chokidar": "^3.5.3",
        "debug": "^4.3.5",
        "diff": "^5.2.0",
        "escape-string-regexp": "^4.0.0",
        "find-up": "^5.0.0",
        "glob": "^8.1.0",
        "he": "^1.2.0",
        "js-yaml": "^4.1.0",
        "log-symbols": "^4.1.0",
        "minimatch": "^5.1.6",
        "ms": "^2.1.3",
        "serialize-javascript": "^6.0.2",
        "strip-json-comments": "^3.1.1",
        "supports-color": "^8.1.1",
        "workerpool": "^6.5.1",
        "yargs": "^16.2.0",
        "yargs-parser": "^20.2.9",
        "yargs-unparser": "^2.0.0"
      },
      "bin": {
        "_mocha": "bin/_mocha",
        "mocha": "bin/mocha.js"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/mocha/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mocha/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/mocha/node_modules/chalk/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mocha/node_modules/cliui": {
      "version": "7.0.4",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
      "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^7.0.0"
      }
    },
    "node_modules/mocha/node_modules/diff": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/diff/-/diff-5.2.0.tgz",
      "integrity": "sha512-uIFDxqpRZGZ6ThOk84hEfqWoHx2devRFvpTZcTHur85vImfaxUbTW9Ryh4CpCuDnToOP1CEtXKIgytHBPVff5A==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/mocha/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/mocha/node_modules/glob": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/glob/-/glob-8.1.0.tgz",
      "integrity": "sha512-r8hpEjiQEYlF2QU0df3dS+nxxSIreXQS1qRhMJM0Q5NDdR386C7jb7Hwwod8Fgiuex+k0GFjgft18yvxm5XoCQ==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^5.0.1",
        "once": "^1.3.0"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/mocha/node_modules/is-unicode-supported": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-0.1.0.tgz",
      "integrity": "sha512-knxG2q4UC3u8stRGyAVJCOdxFmv5DZiRcdlIaAQXAbSfJya+OhopNotLQrstBhququ4ZpuKbDc/8S6mgXgPFPw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mocha/node_modules/log-symbols": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.1.0.tgz",
      "integrity": "sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^4.1.0",
        "is-unicode-supported": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mocha/node_modules/minimatch": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.6.tgz",
      "integrity": "sha512-lKwV/1brpG6mBUFHtb7NUmtABCb2WZZmm2wNiOA5hAb8VdCS4B3dtMWyvcoViccwAW/COERjXLt0zP1zXUN26g==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/mocha/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mocha/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mocha/node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/mocha/node_modules/yargs": {
      "version": "16.2.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",
      "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cliui": "^7.0.2",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.0",
        "y18n": "^5.0.5",
        "yargs-parser": "^20.2.2"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/mocha/node_modules/yargs-parser": {
      "version": "20.2.9",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",
      "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/msw": {
      "version": "2.11.6",
      "resolved": "https://registry.npmjs.org/msw/-/msw-2.11.6.tgz",
      "integrity": "sha512-MCYMykvmiYScyUm7I6y0VCxpNq1rgd5v7kG8ks5dKtvmxRUUPjribX6mUoUNBbM5/3PhUyoelEWiKXGOz84c+w==",
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "@inquirer/confirm": "^5.0.0",
        "@mswjs/interceptors": "^0.40.0",
        "@open-draft/deferred-promise": "^2.2.0",
        "@types/statuses": "^2.0.4",
        "cookie": "^1.0.2",
        "graphql": "^16.8.1",
        "headers-polyfill": "^4.0.2",
        "is-node-process": "^1.2.0",
        "outvariant": "^1.4.3",
        "path-to-regexp": "^6.3.0",
        "picocolors": "^1.1.1",
        "rettime": "^0.7.0",
        "statuses": "^2.0.2",
        "strict-event-emitter": "^0.5.1",
        "tough-cookie": "^6.0.0",
        "type-fest": "^4.26.1",
        "until-async": "^3.0.2",
        "yargs": "^17.7.2"
      },
      "bin": {
        "msw": "cli/index.js"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/mswjs"
      },
      "peerDependencies": {
        "typescript": ">= 4.8.x"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/msw/node_modules/cookie": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.0.2.tgz",
      "integrity": "sha512-9Kr/j4O16ISv8zBBhJoi4bXOYNTkFLOqSL3UDB0njXxCXNezjeyVrJyGOWtgfs/q2km1gwBcfH8q1yEGoMYunA==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/mute-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-2.0.0.tgz",
      "integrity": "sha512-WWdIxpyjEn+FhQJQQv9aQAYlHoNVdzIzUySNV1gHUPDSdZJ3yZn7pAAbQcV7B56Mvu881q9FZV+0Vx2xC44VWA==",
      "license": "ISC",
      "engines": {
        "node": "^18.17.0 || >=20.5.0"
      }
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-postinstall": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/napi-postinstall/-/napi-postinstall-0.3.4.tgz",
      "integrity": "sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "napi-postinstall": "lib/cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/napi-postinstall"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/netmask": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/netmask/-/netmask-2.0.2.tgz",
      "integrity": "sha512-dBpDMdxv9Irdq66304OLfEmQ9tbNRFnFTuZiLo+bD+r332bBmMJ8GBLXklIXXgxd3+v9+KUnZaUR5PJMa75Gsg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/next": {
      "version": "16.0.0",
      "resolved": "https://registry.npmjs.org/next/-/next-16.0.0.tgz",
      "integrity": "sha512-nYohiNdxGu4OmBzggxy9rczmjIGI+TpR5vbKTsE1HqYwNm1B+YSiugSrFguX6omMOKnDHAmBPY4+8TNJk0Idyg==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "16.0.0",
        "@swc/helpers": "0.5.15",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "16.0.0",
        "@next/swc-darwin-x64": "16.0.0",
        "@next/swc-linux-arm64-gnu": "16.0.0",
        "@next/swc-linux-arm64-musl": "16.0.0",
        "@next/swc-linux-x64-gnu": "16.0.0",
        "@next/swc-linux-x64-musl": "16.0.0",
        "@next/swc-win32-arm64-msvc": "16.0.0",
        "@next/swc-win32-x64-msvc": "16.0.0",
        "sharp": "^0.34.4"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/node-domexception": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/node-domexception/-/node-domexception-1.0.0.tgz",
      "integrity": "sha512-/jKZoMpw0F8GRwl4/eLROPA3cfcXtLApP0QzLmUT/HuPCZWyB7IY9ZrMeKw2O/nFIqPQB3PVM9aYm0F312AXDQ==",
      "deprecated": "Use your platform's native DOMException instead",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/jimmywarting"
        },
        {
          "type": "github",
          "url": "https://paypal.me/jimmywarting"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=10.5.0"
      }
    },
    "node_modules/node-fetch": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-3.3.2.tgz",
      "integrity": "sha512-dRB78srN/l6gqWulah9SrxeYnxeddIG30+GOqK/9OlLVyLg3HPnr6SqOWTWOXKRwC2eGYCkZ59NNuSgvSrpgOA==",
      "license": "MIT",
      "dependencies": {
        "data-uri-to-buffer": "^4.0.0",
        "fetch-blob": "^3.1.4",
        "formdata-polyfill": "^4.0.10"
      },
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/node-fetch"
      }
    },
    "node_modules/node-int64": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
      "integrity": "sha512-O5lz91xSOeoXP6DulyHfllpq+Eg00MWitZIbtPfoSEvqIHdl5gfcY6hYzDWnj0qD5tz52PI08u9qUvSVeUBeHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-releases": {
      "version": "2.0.26",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.26.tgz",
      "integrity": "sha512-S2M9YimhSjBSvYnlr5/+umAnPHE++ODwt5e2Ij6FoX45HA/s4vHdkDx1eax2pAPeAOqu4s9b7ppahsyEFdVqQA==",
      "license": "MIT"
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-range": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
      "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npm-run-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-6.0.0.tgz",
      "integrity": "sha512-9qny7Z9DsQU8Ou39ERsPU4OZQlSTP47ShQzuKZ6PRXpYLtIFgl/DEBYEXKlvcEa+9tHVcK8CF81Y2V72qaZhWA==",
      "license": "MIT",
      "dependencies": {
        "path-key": "^4.0.0",
        "unicorn-magic": "^0.3.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/npm-run-path/node_modules/path-key": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-4.0.0.tgz",
      "integrity": "sha512-haREypq7xkM7ErfgIyA0z+Bj4AGKlMSdlQE2jvJo6huWD1EdkKYV+G/T4nq0YEF2vgTT8kqMFKo1uHn950r4SQ==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-treeify": {
      "version": "1.1.33",
      "resolved": "https://registry.npmjs.org/object-treeify/-/object-treeify-1.1.33.tgz",
      "integrity": "sha512-EFVjAYfzWqWsBMRHPMAXLCDIJnpMhdWAqR7xG6M6a2cs6PMFpl/+Z20w9zDW4vkxOFfddegBKq9Rehd0bxWE7A==",
      "license": "MIT",
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/on-headers": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.1.0.tgz",
      "integrity": "sha512-737ZY3yNnXy37FHkQxPzt4UZ2UWPWiCZWLvFZ4fu5cueciegX0zGPnrlY6bwRg4FdQOe9YU8MkmJwGhoMybl8A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/onetime": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-7.0.0.tgz",
      "integrity": "sha512-VXJjc87FScF88uafS3JllDgvAm+c/Slfz06lorj2uAY34rlUu0Nt+v8wreiImcrgAjjIHp1rXpTDlLOGw29WwQ==",
      "license": "MIT",
      "dependencies": {
        "mimic-function": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ora": {
      "version": "8.2.0",
      "resolved": "https://registry.npmjs.org/ora/-/ora-8.2.0.tgz",
      "integrity": "sha512-weP+BZ8MVNnlCm8c0Qdc1WSWq4Qn7I+9CJGm7Qali6g44e/PUzbjNqJX5NJ9ljlNMosfJvg1fKEGILklK9cwnw==",
      "license": "MIT",
      "dependencies": {
        "chalk": "^5.3.0",
        "cli-cursor": "^5.0.0",
        "cli-spinners": "^2.9.2",
        "is-interactive": "^2.0.0",
        "is-unicode-supported": "^2.0.0",
        "log-symbols": "^6.0.0",
        "stdin-discarder": "^0.2.2",
        "string-width": "^7.2.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/outvariant": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/outvariant/-/outvariant-1.4.3.tgz",
      "integrity": "sha512-+Sl2UErvtsoajRDKCE5/dBz4DIvHXQQnAxtQTF04OJxY0+DyZXSo5P5Bb7XYWOh81syohlYL24hbDwxedPUJCA==",
      "license": "MIT"
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pac-proxy-agent": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/pac-proxy-agent/-/pac-proxy-agent-7.2.0.tgz",
      "integrity": "sha512-TEB8ESquiLMc0lV8vcd5Ql/JAKAoyzHFXaStwjkzpOpC5Yv+pIzLfHvjTSdf3vpa2bMiUQrg9i6276yn8666aA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tootallnate/quickjs-emscripten": "^0.23.0",
        "agent-base": "^7.1.2",
        "debug": "^4.3.4",
        "get-uri": "^6.0.1",
        "http-proxy-agent": "^7.0.0",
        "https-proxy-agent": "^7.0.6",
        "pac-resolver": "^7.0.1",
        "socks-proxy-agent": "^8.0.5"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/pac-resolver": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/pac-resolver/-/pac-resolver-7.0.1.tgz",
      "integrity": "sha512-5NPgf87AT2STgwa2ntRMr45jTKrYBGkVU36yT0ig/n/GMAa3oPqhZfIQ2kMEimReg0+t9kZViDVZ83qfVUlckg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "degenerator": "^5.0.0",
        "netmask": "^2.0.2"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/package-json-from-dist": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
      "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
      "license": "BlueOak-1.0.0"
    },
    "node_modules/package-manager-detector": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/package-manager-detector/-/package-manager-detector-1.5.0.tgz",
      "integrity": "sha512-uBj69dVlYe/+wxj8JOpr97XfsxH/eumMt6HqjNTmJDf/6NO9s+0uxeOneIz3AsPt2m6y9PqzDzd3ATcU17MNfw==",
      "license": "MIT"
    },
    "node_modules/pako": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
      "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==",
      "dev": true,
      "license": "(MIT AND Zlib)"
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-json": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
      "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.0.0",
        "error-ex": "^1.3.1",
        "json-parse-even-better-errors": "^2.3.0",
        "lines-and-columns": "^1.1.6"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parse-ms": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse-ms/-/parse-ms-4.0.0.tgz",
      "integrity": "sha512-TXfryirbmq34y8QBwgqCVLi+8oA3oWx2eAnSn62ITyEhEYaWRlVZ2DvMM9eZbMs/RfxPu/PK/aBLyGj4IrqMHw==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-browserify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-1.0.1.tgz",
      "integrity": "sha512-b7uo2UCUOYZcnF/3ID0lulOJi/bafxa1xPe7ZPsammBSpjSWQkjNxlt635YGS2MiR9GjvuXCtz2emr3jbsz98g==",
      "license": "MIT"
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-is-inside": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/path-is-inside/-/path-is-inside-1.0.2.tgz",
      "integrity": "sha512-DUWJr3+ULp4zXmol/SZkFf3JGsS9/SIv+Y3Rt93/UjPpDpklB5f1er4O3POIbUuUJ3FXgqte2Q7SrU6zAqwk8w==",
      "dev": true,
      "license": "(WTFPL OR MIT)"
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^10.2.0",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
      },
      "engines": {
        "node": ">=16 || 14 >=14.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-scurry/node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "license": "ISC"
    },
    "node_modules/path-to-regexp": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-6.3.0.tgz",
      "integrity": "sha512-Yhpw4T9C6hPpgPeA28us07OJeqZ5EzQTkbfwuhsUg0c237RomFoETJgmp2sa3F/41gfLE6G5cqcYwznmeEeOlQ==",
      "license": "MIT"
    },
    "node_modules/pathval": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/pathval/-/pathval-1.1.1.tgz",
      "integrity": "sha512-Dp6zGqpTdETdR63lehJYPeIOqpiNBNtc7BpWSLrOje7UaIsE5aY92r/AunQA7rsXvet3lrJ3JnZX29UPTKXyKQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/pend": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/pend/-/pend-1.2.0.tgz",
      "integrity": "sha512-F3asv42UuXchdzt+xXqfW1OGlVBe+mxa2mqI0pg5yAHZPvFmY3Y6drSf/GQ1A86WgWEN9Kzh/WrgKa6iGcHXLg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
      "integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz",
      "integrity": "sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/pkce-challenge": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/pkce-challenge/-/pkce-challenge-5.0.0.tgz",
      "integrity": "sha512-ueGLflrrnvwB3xuo/uGob5pd5FN7l0MsLf0Z87o/UQmRtwjvfylfc9MurIxRAWywCYTgrvpXBcqjV4OfCYGCIQ==",
      "license": "MIT",
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/pkg-dir": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
      "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "find-up": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pkg-dir/node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pkg-dir/node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pkg-dir/node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/pkg-dir/node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-import": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
      "license": "MIT",
      "dependencies": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.0"
      }
    },
    "node_modules/postcss-js": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.1.0.tgz",
      "integrity": "sha512-oIAOTqgIo7q2EOwbhb8UalYePMvYoIeRY2YKntdpFQXNosSu3vLrniGgmH9OKs/qAkfoj5oB3le/7mINW1LCfw==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "camelcase-css": "^2.0.1"
      },
      "engines": {
        "node": "^12 || ^14 || >= 16"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/postcss-load-config": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-6.0.1.tgz",
      "integrity": "sha512-oPtTM4oerL+UXmx+93ytZVN82RrlY/wPUV8IeDxFrzIjXOLF1pN+EmKPLbubvKHT2HC20xXsCAH2Z+CKV6Oz/g==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "lilconfig": "^3.1.1"
      },
      "engines": {
        "node": ">= 18"
      },
      "peerDependencies": {
        "jiti": ">=1.21.0",
        "postcss": ">=8.0.9",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        },
        "postcss": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/postcss-nested": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "postcss-selector-parser": "^6.1.1"
      },
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.2.14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "license": "MIT"
    },
    "node_modules/pretty-format": {
      "version": "30.2.0",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-30.2.0.tgz",
      "integrity": "sha512-9uBdv/B4EefsuAL+pWqueZyZS2Ba+LxfFeQ9DN14HU4bN8bhaxKdkpjpB6fs9+pSjIBu+FXQHImEg8j/Lw0+vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/schemas": "30.0.5",
        "ansi-styles": "^5.2.0",
        "react-is": "^18.3.1"
      },
      "engines": {
        "node": "^18.14.0 || ^20.0.0 || ^22.0.0 || >=24.0.0"
      }
    },
    "node_modules/pretty-format/node_modules/ansi-styles": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz",
      "integrity": "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/pretty-ms": {
      "version": "9.3.0",
      "resolved": "https://registry.npmjs.org/pretty-ms/-/pretty-ms-9.3.0.tgz",
      "integrity": "sha512-gjVS5hOP+M3wMm5nmNOucbIrqudzs9v/57bWRHQWLYklXqoXKrVfYW2W9+glfGsqtPgpiz5WwyEEB+ksXIx3gQ==",
      "license": "MIT",
      "dependencies": {
        "parse-ms": "^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prompts": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.4.2.tgz",
      "integrity": "sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==",
      "license": "MIT",
      "dependencies": {
        "kleur": "^3.0.3",
        "sisteransi": "^1.0.5"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/prompts/node_modules/kleur": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
      "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/proxy-agent": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/proxy-agent/-/proxy-agent-6.5.0.tgz",
      "integrity": "sha512-TmatMXdr2KlRiA2CyDu8GqR8EjahTG3aY3nXjdzFyoZbmB8hrBsTyMezhULIXKnC0jpfjlmiZ3+EaCzoInSu/A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "^4.3.4",
        "http-proxy-agent": "^7.0.1",
        "https-proxy-agent": "^7.0.6",
        "lru-cache": "^7.14.1",
        "pac-proxy-agent": "^7.1.0",
        "proxy-from-env": "^1.1.0",
        "socks-proxy-agent": "^8.0.5"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/proxy-agent/node_modules/lru-cache": {
      "version": "7.18.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-7.18.3.tgz",
      "integrity": "sha512-jumlc0BIUrS3qJGgIkWZsyfAM7NCWiBcCDhnd+3NNM5KbBmLTgHVfWBcg6W+rLUsIpzpERPsvwUP7CckAQSOoA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/proxy-from-env": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
      "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==",
      "license": "MIT"
    },
    "node_modules/pump": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.3.tgz",
      "integrity": "sha512-todwxLMY7/heScKmntwQG8CXVkWUOdYxIvY2s0VWAAMh/nd8SoYiRaKjlr7+iCs984f2P8zvrfWcDDYVb73NfA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pure-rand": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/pure-rand/-/pure-rand-7.0.1.tgz",
      "integrity": "sha512-oTUZM/NAZS8p7ANR3SHh30kXB+zK2r2BPcEn/awJIbOvq82WoMN4p62AWWp3Hhw50G0xMsw1mhIBLqHw64EcNQ==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/dubzzz"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fast-check"
        }
      ],
      "license": "MIT"
    },
    "node_modules/qs": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.14.0.tgz",
      "integrity": "sha512-YWWTjgABSKcvs/nWBi9PycY/JiPJqOD4JA6o9Sej2AtvSGarXxKC3OQSk4pAarbdQlKAh5D4FCQkJNkW+GAn3w==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
      "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "^5.1.0"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.1.tgz",
      "integrity": "sha512-9G8cA+tuMS75+6G/TzW8OtLzmBDMo8p1JRxN5AZ+LAp8uxGA8V8GZm4GQ4/N5QNQEnLmg6SS7wyuSmbKepiKqA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "3.1.2",
        "http-errors": "2.0.0",
        "iconv-lite": "0.7.0",
        "unpipe": "1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/raw-body/node_modules/iconv-lite": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.0.tgz",
      "integrity": "sha512-cf6L2Ds3h57VVmkZe+Pn+5APsT7FpqJtEhhieDCvrE2MK5Qk9MyffgQyuxQTm6BChfeZNtcOLHp9IcWRVcIcBQ==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "dev": true,
      "license": "(BSD-2-Clause OR MIT OR Apache-2.0)",
      "dependencies": {
        "deep-extend": "^0.6.0",
        "ini": "~1.3.0",
        "minimist": "^1.2.0",
        "strip-json-comments": "~2.0.1"
      },
      "bin": {
        "rc": "cli.js"
      }
    },
    "node_modules/rc/node_modules/strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha512-4gB8na07fecVVkOI6Rs4e7T6NOTki5EmL7TUduTs6bu3EdnSycntVJ4re8kgZA+wx9IueI2Y11bfbgwtzuE0KQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
      "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "loose-envify": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
      "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.23.2"
      },
      "peerDependencies": {
        "react": "^18.3.1"
      }
    },
    "node_modules/react-is": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-18.3.1.tgz",
      "integrity": "sha512-/LLMVyas0ljjAtoYiPqYiL8VWXzUUdThrmU5+n20DZv+a+ClRoevUzw5JxU+Ieh5/c87ytoTBV9G1FiKfNJdmg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/react-refresh": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.17.0.tgz",
      "integrity": "sha512-z6F7K9bV85EfseRCp2bzrpyQ0Gkw1uLoCel9XBVWPg/TjRj94SkJzUTGfOa4bs7iJvBWtQG0Wq7wnI0syw3EBQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-router": {
      "version": "6.30.1",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-6.30.1.tgz",
      "integrity": "sha512-X1m21aEmxGXqENEPG3T6u0Th7g0aS4ZmoNynhbs+Cn+q+QGTLt+d5IQ2bHAXKzKcxGJjxACpVbnYQSCRcfxHlQ==",
      "license": "MIT",
      "dependencies": {
        "@remix-run/router": "1.23.0"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "react": ">=16.8"
      }
    },
    "node_modules/react-router-dom": {
      "version": "6.30.1",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-6.30.1.tgz",
      "integrity": "sha512-llKsgOkZdbPU1Eg3zK8lCn+sjD9wMRZZPuzmdWWX5SUs8OFkN5HnFVC0u5KMeMaC9aoancFI/KoLuKPqN+hxHw==",
      "license": "MIT",
      "dependencies": {
        "@remix-run/router": "1.23.0",
        "react-router": "6.30.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "react": ">=16.8",
        "react-dom": ">=16.8"
      }
    },
    "node_modules/read-cache": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
      "license": "MIT",
      "dependencies": {
        "pify": "^2.3.0"
      }
    },
    "node_modules/readable-stream": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz",
      "integrity": "sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/readable-stream/node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/readdirp/node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/recast": {
      "version": "0.23.11",
      "resolved": "https://registry.npmjs.org/recast/-/recast-0.23.11.tgz",
      "integrity": "sha512-YTUo+Flmw4ZXiWfQKGcwwc11KnoRAYgzAE2E7mXKCjSviTKShtxBsN6YUUBB2gtaBzKzeKunxhUwNHQuRryhWA==",
      "license": "MIT",
      "dependencies": {
        "ast-types": "^0.16.1",
        "esprima": "~4.0.0",
        "source-map": "~0.6.1",
        "tiny-invariant": "^1.3.3",
        "tslib": "^2.0.1"
      },
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/registry-auth-token": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-3.3.2.tgz",
      "integrity": "sha512-JL39c60XlzCVgNrO+qq68FoNb56w/m7JYvGR2jT5iR1xBrUA3Mfx5Twk5rqTThPmQKMWydGmq8oFtDlxfrmxnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "rc": "^1.1.6",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/registry-url": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-3.1.0.tgz",
      "integrity": "sha512-ZbgR5aZEdf4UKZVBPYIgaglBmSF2Hi94s2PcIHhRGFjKYu+chjJdYfHn4rt3hB6eCKLJ8giVIIfgMa1ehDfZKA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "rc": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.11",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.11.tgz",
      "integrity": "sha512-RfqAvLnMl313r7c9oclB1HhUEAezcpLjz95wFH4LVuhk9JF/r22qmVP9AMmOU4vMX7Q8pN8jwNg/CSpdFnMjTQ==",
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.16.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-cwd": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
      "integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-from": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve-cwd/node_modules/resolve-from": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
      "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/restore-cursor": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-5.1.0.tgz",
      "integrity": "sha512-oMA2dcrw6u0YfxJQXm342bFKX/E4sG9rbTzO9ptUcR/e8A33cHuvStiYOwH7fszkZlZ1z/ta9AAoPk2F4qIOHA==",
      "license": "MIT",
      "dependencies": {
        "onetime": "^7.0.0",
        "signal-exit": "^4.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ret": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.5.0.tgz",
      "integrity": "sha512-I1XxrZSQ+oErkRR4jYbAyEEu2I0avBvvMM5JN+6EBprOGRCs63ENqZ3vjavq8fBw2+62G5LF5XelKwuJpcvcxw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/rettime": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/rettime/-/rettime-0.7.0.tgz",
      "integrity": "sha512-LPRKoHnLKd/r3dVxcwO7vhCW+orkOGj9ViueosEBK6ie89CijnfRlhaDhHq/3Hxu4CkWQtxwlBG0mzTQY6uQjw==",
      "license": "MIT"
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rollup": {
      "version": "4.52.5",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.52.5.tgz",
      "integrity": "sha512-3GuObel8h7Kqdjt0gxkEzaifHTqLVW56Y/bjN7PSQtkKr0w3V/QYSdt6QWYtd7A1xUtYQigtdUfgj1RvWVtorw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.52.5",
        "@rollup/rollup-android-arm64": "4.52.5",
        "@rollup/rollup-darwin-arm64": "4.52.5",
        "@rollup/rollup-darwin-x64": "4.52.5",
        "@rollup/rollup-freebsd-arm64": "4.52.5",
        "@rollup/rollup-freebsd-x64": "4.52.5",
        "@rollup/rollup-linux-arm-gnueabihf": "4.52.5",
        "@rollup/rollup-linux-arm-musleabihf": "4.52.5",
        "@rollup/rollup-linux-arm64-gnu": "4.52.5",
        "@rollup/rollup-linux-arm64-musl": "4.52.5",
        "@rollup/rollup-linux-loong64-gnu": "4.52.5",
        "@rollup/rollup-linux-ppc64-gnu": "4.52.5",
        "@rollup/rollup-linux-riscv64-gnu": "4.52.5",
        "@rollup/rollup-linux-riscv64-musl": "4.52.5",
        "@rollup/rollup-linux-s390x-gnu": "4.52.5",
        "@rollup/rollup-linux-x64-gnu": "4.52.5",
        "@rollup/rollup-linux-x64-musl": "4.52.5",
        "@rollup/rollup-openharmony-arm64": "4.52.5",
        "@rollup/rollup-win32-arm64-msvc": "4.52.5",
        "@rollup/rollup-win32-ia32-msvc": "4.52.5",
        "@rollup/rollup-win32-x64-gnu": "4.52.5",
        "@rollup/rollup-win32-x64-msvc": "4.52.5",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/router/node_modules/path-to-regexp": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.3.0.tgz",
      "integrity": "sha512-7jdwVIRtsP8MYpdXSwOS0YdD0Du+qOoF/AEPIt88PcCFrZCzx41oxku1jD88hZBwbNUIEfpqvuhjFaMAqMTWnA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safe-regex2": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/safe-regex2/-/safe-regex2-5.0.0.tgz",
      "integrity": "sha512-YwJwe5a51WlK7KbOJREPdjNrpViQBI3p4T50lfwPuDhZnE3XGVTlGvi+aolc5+RvxDD6bnUmjVsU9n1eboLUYw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "ret": "~0.5.0"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/scheduler": {
      "version": "0.23.2",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
      "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      }
    },
    "node_modules/selenium-webdriver": {
      "version": "4.38.0",
      "resolved": "https://registry.npmjs.org/selenium-webdriver/-/selenium-webdriver-4.38.0.tgz",
      "integrity": "sha512-5/UXXFSQmn7FGQkbcpAqvfhzflUdMWtT7QqpEgkFD6Q6rDucxB5EUfzgjmr6JbUj30QodcW3mDXehzoeS/Vy5w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/SeleniumHQ"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/selenium"
        }
      ],
      "license": "Apache-2.0",
      "dependencies": {
        "@bazel/runfiles": "^6.3.1",
        "jszip": "^3.10.1",
        "tmp": "^0.2.5",
        "ws": "^8.18.3"
      },
      "engines": {
        "node": ">= 20.0.0"
      }
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/send": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.0.tgz",
      "integrity": "sha512-uaW0WwXKpL9blXE2o0bRhoL2EGXIrZxQ2ZQ4mgcfoBxdFmQold+qWsD2jLrfZ0trjKL6vOw0j//eAwcALFjKSw==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.3.5",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "mime-types": "^3.0.1",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/send/node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/send/node_modules/mime-types": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.1.tgz",
      "integrity": "sha512-xRc4oEhT6eaBpU1XF7AjpOFD+xQmXNB5OVKwp4tqCuBpHLS/ZbBDrc07mYTDqVMg6PfxUjjNp85O6Cd2Z/5HWA==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/serialize-javascript": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.2.tgz",
      "integrity": "sha512-Saa1xPByTTq2gdeFZYLLo+RFE35NHZkAbqZeWNd3BpzppeVisAqpDjcp8dyf6uIvEqJRd46jemmyA4iFIeVk8g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "randombytes": "^2.1.0"
      }
    },
    "node_modules/serve": {
      "version": "14.2.5",
      "resolved": "https://registry.npmjs.org/serve/-/serve-14.2.5.tgz",
      "integrity": "sha512-Qn/qMkzCcMFVPb60E/hQy+iRLpiU8PamOfOSYoAHmmF+fFFmpPpqa6Oci2iWYpTdOUM3VF+TINud7CfbQnsZbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@zeit/schemas": "2.36.0",
        "ajv": "8.12.0",
        "arg": "5.0.2",
        "boxen": "7.0.0",
        "chalk": "5.0.1",
        "chalk-template": "0.4.0",
        "clipboardy": "3.0.0",
        "compression": "1.8.1",
        "is-port-reachable": "4.0.0",
        "serve-handler": "6.1.6",
        "update-check": "1.5.4"
      },
      "bin": {
        "serve": "build/main.js"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/serve-handler": {
      "version": "6.1.6",
      "resolved": "https://registry.npmjs.org/serve-handler/-/serve-handler-6.1.6.tgz",
      "integrity": "sha512-x5RL9Y2p5+Sh3D38Fh9i/iQ5ZK+e4xuXRd/pGbM4D13tgo/MGwbttUk8emytcr1YYzBYs+apnUngBDFYfpjPuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bytes": "3.0.0",
        "content-disposition": "0.5.2",
        "mime-types": "2.1.18",
        "minimatch": "3.1.2",
        "path-is-inside": "1.0.2",
        "path-to-regexp": "3.3.0",
        "range-parser": "1.2.0"
      }
    },
    "node_modules/serve-handler/node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/serve-handler/node_modules/bytes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
      "integrity": "sha512-pMhOfFDPiv9t5jjIXkHosWmkSyQbvsgEVNkz0ERHbuLh2T/7j4Mqqpz523Fe8MVY89KC6Sh/QfS2sM+SjgFDcw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/serve-handler/node_modules/content-disposition": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.2.tgz",
      "integrity": "sha512-kRGRZw3bLlFISDBgwTSA1TMBFN6J6GWDeubmDE3AF+3+yXL8hTWv8r5rkLbqYXY4RjPk/EzHnClI3zQf1cFmHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/serve-handler/node_modules/mime-db": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.33.0.tgz",
      "integrity": "sha512-BHJ/EKruNIqJf/QahvxwQZXKygOQ256myeN/Ew+THcAa5q+PjyTTMMeNQC4DZw5AwfvelsUrA6B67NKMqXDbzQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/serve-handler/node_modules/mime-types": {
      "version": "2.1.18",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.18.tgz",
      "integrity": "sha512-lc/aahn+t4/SWV/qcmumYjymLsWfN3ELhpmVuUFjgsORruuZPVSwAQryq+HHGvO/SI2KVX26bx+En+zhM8g8hQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mime-db": "~1.33.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/serve-handler/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/serve-handler/node_modules/path-to-regexp": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-3.3.0.tgz",
      "integrity": "sha512-qyCH421YQPS2WFDxDjftfc1ZR5WKQzVzqsp4n9M2kQhVOo/ByahFoUNJfl58kOcEGfQ//7weFTDhm+ss8Ecxgw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/serve-handler/node_modules/range-parser": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.0.tgz",
      "integrity": "sha512-kA5WQoNVo4t9lNx2kQNFCxKeBl5IbbSNBl1M/tLkw9WCn+hxNBAW5Qh8gdhs63CJnhjJ2zQWFoqPJP2sK1AV5A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.0.tgz",
      "integrity": "sha512-61g9pCh0Vnh7IutZjtLGGpTA355+OPn2TyDv/6ivP2h/AdAVX9azsoxmg2/M6nZeQZNYBEwIcsne1mJd9oQItQ==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/serve/node_modules/ajv": {
      "version": "8.12.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.12.0.tgz",
      "integrity": "sha512-sRu1kpcO9yLtYxBKvqfTeh9KzZEwO3STyX1HT+4CaDzC6HpTGYhIhPIzj9XuKU7KYDwnaeh5hcOwjy1QuJzBPA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/serve/node_modules/chalk": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-5.0.1.tgz",
      "integrity": "sha512-Fo07WOYGqMfCWHOzSXOt2CxDbC6skS/jO9ynEcmpANMoPrD+W1r1K6Vx7iNm+AQmETU1Xr2t+n8nzkV9t6xh3w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.17.0 || ^14.13 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/serve/node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/setimmediate": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
      "integrity": "sha512-MATJdZp8sLqDl/68LfQmbP8zKPLQNV6BIZoIgrscFDQ+RsvK/BxeDQOgyxKKoh0y/8h3BqVFnCqQ/gd+reiIXA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/shadcn": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/shadcn/-/shadcn-3.4.2.tgz",
      "integrity": "sha512-afa1UIHC9UzWX2NMHHwaZf6GfT5VGkTDen77RtyUBMfJ5i6ZQuzXOFTE1bFHTaWwftb8wQnMiG8kXdEu3Kx9IQ==",
      "license": "MIT",
      "dependencies": {
        "@antfu/ni": "^25.0.0",
        "@babel/core": "^7.28.0",
        "@babel/parser": "^7.28.0",
        "@babel/plugin-transform-typescript": "^7.28.0",
        "@babel/preset-typescript": "^7.27.1",
        "@dotenvx/dotenvx": "^1.48.4",
        "@modelcontextprotocol/sdk": "^1.17.2",
        "browserslist": "^4.26.2",
        "commander": "^14.0.0",
        "cosmiconfig": "^9.0.0",
        "dedent": "^1.6.0",
        "deepmerge": "^4.3.1",
        "diff": "^8.0.2",
        "execa": "^9.6.0",
        "fast-glob": "^3.3.3",
        "fs-extra": "^11.3.1",
        "fuzzysort": "^3.1.0",
        "https-proxy-agent": "^7.0.6",
        "kleur": "^4.1.5",
        "msw": "^2.10.4",
        "node-fetch": "^3.3.2",
        "ora": "^8.2.0",
        "postcss": "^8.5.6",
        "prompts": "^2.4.2",
        "recast": "^0.23.11",
        "stringify-object": "^5.0.0",
        "ts-morph": "^26.0.0",
        "tsconfig-paths": "^4.2.0",
        "zod": "^3.24.1",
        "zod-to-json-schema": "^3.24.6"
      },
      "bin": {
        "shadcn": "dist/index.js"
      }
    },
    "node_modules/sharp": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.34.4.tgz",
      "integrity": "sha512-FUH39xp3SBPnxWvd5iib1X8XY7J0K0X7d93sie9CJg2PO8/7gmg89Nve6OjItK53/MlAushNNxteBYfM6DEuoA==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/colour": "^1.0.0",
        "detect-libc": "^2.1.0",
        "semver": "^7.7.2"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.34.4",
        "@img/sharp-darwin-x64": "0.34.4",
        "@img/sharp-libvips-darwin-arm64": "1.2.3",
        "@img/sharp-libvips-darwin-x64": "1.2.3",
        "@img/sharp-libvips-linux-arm": "1.2.3",
        "@img/sharp-libvips-linux-arm64": "1.2.3",
        "@img/sharp-libvips-linux-ppc64": "1.2.3",
        "@img/sharp-libvips-linux-s390x": "1.2.3",
        "@img/sharp-libvips-linux-x64": "1.2.3",
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.3",
        "@img/sharp-libvips-linuxmusl-x64": "1.2.3",
        "@img/sharp-linux-arm": "0.34.4",
        "@img/sharp-linux-arm64": "0.34.4",
        "@img/sharp-linux-ppc64": "0.34.4",
        "@img/sharp-linux-s390x": "0.34.4",
        "@img/sharp-linux-x64": "0.34.4",
        "@img/sharp-linuxmusl-arm64": "0.34.4",
        "@img/sharp-linuxmusl-x64": "0.34.4",
        "@img/sharp-wasm32": "0.34.4",
        "@img/sharp-win32-arm64": "0.34.4",
        "@img/sharp-win32-ia32": "0.34.4",
        "@img/sharp-win32-x64": "0.34.4"
      }
    },
    "node_modules/sharp/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/sisteransi": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
      "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==",
      "license": "MIT"
    },
    "node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/smart-buffer": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz",
      "integrity": "sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6.0.0",
        "npm": ">= 3.0.0"
      }
    },
    "node_modules/socks": {
      "version": "2.8.7",
      "resolved": "https://registry.npmjs.org/socks/-/socks-2.8.7.tgz",
      "integrity": "sha512-HLpt+uLy/pxB+bum/9DzAgiKS8CX1EvbWxI4zlmgGCExImLdiad2iCwXT5Z4c9c3Eq8rP2318mPW2c+QbtjK8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ip-address": "^10.0.1",
        "smart-buffer": "^4.2.0"
      },
      "engines": {
        "node": ">= 10.0.0",
        "npm": ">= 3.0.0"
      }
    },
    "node_modules/socks-proxy-agent": {
      "version": "8.0.5",
      "resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-8.0.5.tgz",
      "integrity": "sha512-HehCEsotFqbPW9sJ8WVYB6UbmIMv7kUUORIF2Nncq4VQvBfNBLibW9YZR5dlYCSUhwcD628pRllm7n+E+YTzJw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "^4.3.4",
        "socks": "^2.8.3"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.13",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.13.tgz",
      "integrity": "sha512-SHSKFHadjVA5oR4PPqhtAVdcBWwRYVd6g6cAXnIbRiIwc2EhPrTuKUBdSLvlEKyIP3GCf89fltvcZiP9MMFA1w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/stack-utils": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-2.0.6.tgz",
      "integrity": "sha512-XlkWvfIm6RmsWtNJx+uqtKLS8eqFbxUg0ZzLXqY0caEy9l7hruX8IpiDnjsLavoBgqCCR71TqWO8MaXYheJ3RQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "escape-string-regexp": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/stack-utils/node_modules/escape-string-regexp": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
      "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/stdin-discarder": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/stdin-discarder/-/stdin-discarder-0.2.2.tgz",
      "integrity": "sha512-UhDfHmA92YAlNnCfhmq0VeNL5bDbiZGg7sZ2IvPsXubGkiNa9EC+tUTsjBRsYUAz87btI6/1wf4XoVvQ3uRnmQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/strict-event-emitter": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/strict-event-emitter/-/strict-event-emitter-0.5.1.tgz",
      "integrity": "sha512-vMgjE/GGEPEFnhFub6pa4FmJBRBVOLpIII2hvCZ8Kzb7K0hlHo7mQv6xYrBvCL2LtAIBwFUK8wvuJgTVSQ5MFQ==",
      "license": "MIT"
    },
    "node_modules/string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/string_decoder/node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/string-length": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/string-length/-/string-length-4.0.2.tgz",
      "integrity": "sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "char-regex": "^1.0.2",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/string-length/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-length/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
      "integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^10.3.0",
        "get-east-asian-width": "^1.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/string-width-cjs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/stringify-object": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/stringify-object/-/stringify-object-5.0.0.tgz",
      "integrity": "sha512-zaJYxz2FtcMb4f+g60KsRNFOpVMUyuJgA51Zi5Z1DOTC3S59+OQiVOzE9GZt0x72uBGWKsQIuBKeF9iusmKFsg==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "get-own-enumerable-keys": "^1.0.0",
        "is-obj": "^3.0.0",
        "is-regexp": "^3.1.0"
      },
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/yeoman/stringify-object?sponsor=1"
      }
    },
    "node_modules/strip-ansi": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.2.tgz",
      "integrity": "sha512-gmBGslpoQJtgnMAvOVqGZpEz9dyoKTCzy2nfz/n8aIFhN/jCE/rCmcxabB6jOOHV+0WNnylOxaxBQPSvcWklhA==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-final-newline": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-4.0.0.tgz",
      "integrity": "sha512-aulFJcD6YK8V1G7iRB5tigAP4TsHBZZrOV8pjV++zdUwmeV8uzbY7yn6h9MswN62adStNZFuCIx4haBnRuMDaw==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/sucrase": {
      "version": "3.35.0",
      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
      "integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.2",
        "commander": "^4.0.0",
        "glob": "^10.3.10",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/sucrase/node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/supports-color": {
      "version": "8.1.1",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
      "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/supports-color?sponsor=1"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/synckit": {
      "version": "0.11.11",
      "resolved": "https://registry.npmjs.org/synckit/-/synckit-0.11.11.tgz",
      "integrity": "sha512-MeQTA1r0litLUf0Rp/iisCaL8761lKAZHaimlbGK4j0HysC4PLfqygQj9srcs0m2RdtDYnF8UuYyKpbjHYp7Jw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@pkgr/core": "^0.2.9"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/synckit"
      }
    },
    "node_modules/tailwind-merge": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-3.3.1.tgz",
      "integrity": "sha512-gBXpgUm/3rp1lMZZrM/w7D8GKqshif0zAymAhbCyIt8KMe+0v9DQ7cdYLR4FHH/cKpdTXb+A/tKKU3eolfsI+g==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/dcastil"
      }
    },
    "node_modules/tailwindcss": {
      "version": "3.4.18",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.18.tgz",
      "integrity": "sha512-6A2rnmW5xZMdw11LYjhcI5846rt9pbLSabY5XPxo+XWdxwZaFEn47Go4NzFiHu9sNNmr/kXivP1vStfvMaK1GQ==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "arg": "^5.0.2",
        "chokidar": "^3.6.0",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.3.2",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "jiti": "^1.21.7",
        "lilconfig": "^3.1.3",
        "micromatch": "^4.0.8",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.1.1",
        "postcss": "^8.4.47",
        "postcss-import": "^15.1.0",
        "postcss-js": "^4.0.1",
        "postcss-load-config": "^4.0.2 || ^5.0 || ^6.0",
        "postcss-nested": "^6.2.0",
        "postcss-selector-parser": "^6.1.2",
        "resolve": "^1.22.8",
        "sucrase": "^3.35.0"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tailwindcss-animate": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/tailwindcss-animate/-/tailwindcss-animate-1.0.7.tgz",
      "integrity": "sha512-bl6mpH3T7I3UFxuvDEXLxy/VuFxBk5bbzplh7tXI68mwMokNYd1t9qPBHlnyTwfa4JGC4zP516I1hYYtQ/vspA==",
      "license": "MIT",
      "peerDependencies": {
        "tailwindcss": ">=3.0.0 || insiders"
      }
    },
    "node_modules/tailwindcss/node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/tcp-port-used": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/tcp-port-used/-/tcp-port-used-1.0.2.tgz",
      "integrity": "sha512-l7ar8lLUD3XS1V2lfoJlCBaeoaWo/2xfYt81hM7VlvR4RrMVFqfmzfhLVk40hAb368uitje5gPtBRL1m/DGvLA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "4.3.1",
        "is2": "^2.0.6"
      }
    },
    "node_modules/tcp-port-used/node_modules/debug": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
      "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/tcp-port-used/node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/test-exclude": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
      "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@istanbuljs/schema": "^0.1.2",
        "glob": "^7.1.4",
        "minimatch": "^3.0.4"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/test-exclude/node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/test-exclude/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/test-exclude/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
      "license": "MIT",
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/tiny-invariant": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/tiny-invariant/-/tiny-invariant-1.3.3.tgz",
      "integrity": "sha512-+FbBPE1o9QAYvviau/qC5SE3caw21q3xkvWKBtja5vgqOWIHHJ3ioaq1VPfn/Szqctz2bU/oYeKd9/z5BL+PVg==",
      "license": "MIT"
    },
    "node_modules/tinyexec": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-1.0.1.tgz",
      "integrity": "sha512-5uC6DDlmeqiOwCPmK9jMSdOuZTh8bU39Ys6yidB+UTt5hfZUPGAypSgFRiEp+jbi9qH40BLDvy85jIU88wKSqw==",
      "license": "MIT"
    },
    "node_modules/tldts": {
      "version": "7.0.17",
      "resolved": "https://registry.npmjs.org/tldts/-/tldts-7.0.17.tgz",
      "integrity": "sha512-Y1KQBgDd/NUc+LfOtKS6mNsC9CCaH+m2P1RoIZy7RAPo3C3/t8X45+zgut31cRZtZ3xKPjfn3TkGTrctC2TQIQ==",
      "license": "MIT",
      "dependencies": {
        "tldts-core": "^7.0.17"
      },
      "bin": {
        "tldts": "bin/cli.js"
      }
    },
    "node_modules/tldts-core": {
      "version": "7.0.17",
      "resolved": "https://registry.npmjs.org/tldts-core/-/tldts-core-7.0.17.tgz",
      "integrity": "sha512-DieYoGrP78PWKsrXr8MZwtQ7GLCUeLxihtjC1jZsW1DnvSMdKPitJSe8OSYDM2u5H6g3kWJZpePqkp43TfLh0g==",
      "license": "MIT"
    },
    "node_modules/tmp": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.2.5.tgz",
      "integrity": "sha512-voyz6MApa1rQGUxT3E+BK7/ROe8itEx7vD8/HEvt4xwXucvQ5G5oeEiHkmHZJuBO21RpOf+YYm9MOivj709jow==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.14"
      }
    },
    "node_modules/tmpl": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.5.tgz",
      "integrity": "sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw==",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/tough-cookie": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-6.0.0.tgz",
      "integrity": "sha512-kXuRi1mtaKMrsLUxz3sQYvVl37B0Ns6MzfrtV5DvJceE9bPyspOqk9xxv7XbZWcfLWbFmm997vl83qUWVJA64w==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "tldts": "^7.0.5"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
      "license": "Apache-2.0"
    },
    "node_modules/ts-jest": {
      "version": "29.4.5",
      "resolved": "https://registry.npmjs.org/ts-jest/-/ts-jest-29.4.5.tgz",
      "integrity": "sha512-HO3GyiWn2qvTQA4kTgjDcXiMwYQt68a1Y8+JuLRVpdIzm+UOLSHgl/XqR4c6nzJkq5rOkjc02O2I7P7l/Yof0Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bs-logger": "^0.2.6",
        "fast-json-stable-stringify": "^2.1.0",
        "handlebars": "^4.7.8",
        "json5": "^2.2.3",
        "lodash.memoize": "^4.1.2",
        "make-error": "^1.3.6",
        "semver": "^7.7.3",
        "type-fest": "^4.41.0",
        "yargs-parser": "^21.1.1"
      },
      "bin": {
        "ts-jest": "cli.js"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || ^18.0.0 || >=20.0.0"
      },
      "peerDependencies": {
        "@babel/core": ">=7.0.0-beta.0 <8",
        "@jest/transform": "^29.0.0 || ^30.0.0",
        "@jest/types": "^29.0.0 || ^30.0.0",
        "babel-jest": "^29.0.0 || ^30.0.0",
        "jest": "^29.0.0 || ^30.0.0",
        "jest-util": "^29.0.0 || ^30.0.0",
        "typescript": ">=4.3 <6"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "@jest/transform": {
          "optional": true
        },
        "@jest/types": {
          "optional": true
        },
        "babel-jest": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jest-util": {
          "optional": true
        }
      }
    },
    "node_modules/ts-jest/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/ts-morph": {
      "version": "26.0.0",
      "resolved": "https://registry.npmjs.org/ts-morph/-/ts-morph-26.0.0.tgz",
      "integrity": "sha512-ztMO++owQnz8c/gIENcM9XfCEzgoGphTv+nKpYNM1bgsdOVC/jRZuEBf6N+mLLDNg68Kl+GgUZfOySaRiG1/Ug==",
      "license": "MIT",
      "dependencies": {
        "@ts-morph/common": "~0.27.0",
        "code-block-writer": "^13.0.3"
      }
    },
    "node_modules/ts-node": {
      "version": "10.9.2",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz",
      "integrity": "sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@cspotcode/source-map-support": "^0.8.0",
        "@tsconfig/node10": "^1.0.7",
        "@tsconfig/node12": "^1.0.7",
        "@tsconfig/node14": "^1.0.0",
        "@tsconfig/node16": "^1.0.2",
        "acorn": "^8.4.1",
        "acorn-walk": "^8.1.1",
        "arg": "^4.1.0",
        "create-require": "^1.1.0",
        "diff": "^4.0.1",
        "make-error": "^1.1.1",
        "v8-compile-cache-lib": "^3.0.1",
        "yn": "3.1.1"
      },
      "bin": {
        "ts-node": "dist/bin.js",
        "ts-node-cwd": "dist/bin-cwd.js",
        "ts-node-esm": "dist/bin-esm.js",
        "ts-node-script": "dist/bin-script.js",
        "ts-node-transpile-only": "dist/bin-transpile.js",
        "ts-script": "dist/bin-script-deprecated.js"
      },
      "peerDependencies": {
        "@swc/core": ">=1.2.50",
        "@swc/wasm": ">=1.2.50",
        "@types/node": "*",
        "typescript": ">=2.7"
      },
      "peerDependenciesMeta": {
        "@swc/core": {
          "optional": true
        },
        "@swc/wasm": {
          "optional": true
        }
      }
    },
    "node_modules/ts-node/node_modules/arg": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
      "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ts-node/node_modules/diff": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
      "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/tsconfig-paths": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-4.2.0.tgz",
      "integrity": "sha512-NoZ4roiN7LnbKn9QqE1amc9DJfzvZXxF4xDavcOWt1BPkdx+m+0gJuPM+S0vCe7zTJMYUP0R8pO2XMr+Y8oLIg==",
      "license": "MIT",
      "dependencies": {
        "json5": "^2.2.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/type-detect": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.1.0.tgz",
      "integrity": "sha512-Acylog8/luQ8L7il+geoSxhEkazvkslg7PSNKOX59mbB9cOveP5aq9h74Y7YU8yDpJwetzQQrfIwtf4Wp4LKcw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/type-fest": {
      "version": "4.41.0",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-4.41.0.tgz",
      "integrity": "sha512-TeTSQ6H5YHvpqVwBRcnLDCBnDOHWYu7IvGbHT6N8AOymcr9PJGjc1GTtiWZTYg0NCgYwvnYWEkVChQAr9bjfwA==",
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/type-is": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.0.1.tgz",
      "integrity": "sha512-OZs6gsjF4vMp32qrCbiVSkrFmXtG/AZhY3t0iAMrMBiAZyV9oALtXO8hsrHbMXF9x6L3grlFuwW2oAz7cav+Gw==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^1.0.5",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/type-is/node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/type-is/node_modules/mime-types": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.1.tgz",
      "integrity": "sha512-xRc4oEhT6eaBpU1XF7AjpOFD+xQmXNB5OVKwp4tqCuBpHLS/ZbBDrc07mYTDqVMg6PfxUjjNp85O6Cd2Z/5HWA==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "peer": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/uglify-js": {
      "version": "3.19.3",
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.19.3.tgz",
      "integrity": "sha512-v3Xu+yuwBXisp6QYTcH4UbH+xYJXqnq2m/LtQVWKWzYc1iehYnLixoQDN9FH6/j9/oybfd6W9Ghwkl8+UMKTKQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "optional": true,
      "bin": {
        "uglifyjs": "bin/uglifyjs"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/undici-types": {
      "version": "7.16.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.16.0.tgz",
      "integrity": "sha512-Zz+aZWSj8LE6zoxD+xrjh4VfkIG8Ya6LvYkZqtUQGJPZjYl53ypCaUwWqo7eI0x66KBGeRo+mlBEkMSeSZ38Nw==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/unicorn-magic": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/unicorn-magic/-/unicorn-magic-0.3.0.tgz",
      "integrity": "sha512-+QBBXBCvifc56fsbuxZQ6Sic3wqqc3WWaqxs58gvJrcOuN83HGTCwz3oS5phzU9LthRNE9VrJCFCLUgHeeFnfA==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/unrs-resolver": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.11.1.tgz",
      "integrity": "sha512-bSjt9pjaEBnNiGgc9rUiHGKv5l4/TGzDmYw3RhnkJGtLhbnnA/5qJj7x3dNDCRx/PJxu774LlH8lCOlB4hEfKg==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "napi-postinstall": "^0.3.0"
      },
      "funding": {
        "url": "https://opencollective.com/unrs-resolver"
      },
      "optionalDependencies": {
        "@unrs/resolver-binding-android-arm-eabi": "1.11.1",
        "@unrs/resolver-binding-android-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-x64": "1.11.1",
        "@unrs/resolver-binding-freebsd-x64": "1.11.1",
        "@unrs/resolver-binding-linux-arm-gnueabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm-musleabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-ppc64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-s390x-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-musl": "1.11.1",
        "@unrs/resolver-binding-wasm32-wasi": "1.11.1",
        "@unrs/resolver-binding-win32-arm64-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-ia32-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-x64-msvc": "1.11.1"
      }
    },
    "node_modules/until-async": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/until-async/-/until-async-3.0.2.tgz",
      "integrity": "sha512-IiSk4HlzAMqTUseHHe3VhIGyuFmN90zMTpD3Z3y8jeQbzLIq500MVM7Jq2vUAnTKAFPJrqwkzr6PoTcPhGcOiw==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/kettanaito"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.3.tgz",
      "integrity": "sha512-UxhIZQ+QInVdunkDAaiazvvT/+fXL5Osr0JZlJulepYu6Jd7qJtDZjlur0emRlT71EN3ScPoE7gvsuIKKNavKw==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/update-check": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/update-check/-/update-check-1.5.4.tgz",
      "integrity": "sha512-5YHsflzHP4t1G+8WGPlvKbJEbAJGCgw+Em+dGR1KmBUbr1J36SJBqlHLjR7oob7sco5hWHGQVcr9B2poIVDDTQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "registry-auth-token": "3.3.2",
        "registry-url": "3.1.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/v8-compile-cache-lib": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",
      "integrity": "sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/v8-to-istanbul": {
      "version": "9.3.0",
      "resolved": "https://registry.npmjs.org/v8-to-istanbul/-/v8-to-istanbul-9.3.0.tgz",
      "integrity": "sha512-kiGUalWN+rgBJ/1OHZsBtU4rXZOfj/7rKQxULKlIzwzQSvMJUUNgPwJEEh7gU6xEVxC0ahoOBvN2YI8GH6FNgA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@jridgewell/trace-mapping": "^0.3.12",
        "@types/istanbul-lib-coverage": "^2.0.1",
        "convert-source-map": "^2.0.0"
      },
      "engines": {
        "node": ">=10.12.0"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/vite": {
      "version": "5.4.21",
      "resolved": "https://registry.npmjs.org/vite/-/vite-5.4.21.tgz",
      "integrity": "sha512-o5a9xKjbtuhY6Bi5S3+HvbRERmouabWbyUcpXXUA1u+GNUKoROi9byOJ8M0nHbHYHkYICiMlqxkg1KkYmm25Sw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "esbuild": "^0.21.3",
        "postcss": "^8.4.43",
        "rollup": "^4.20.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || >=20.0.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/walker": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.8.tgz",
      "integrity": "sha512-ts/8E8l5b7kY0vlWLewOkDXMmPdLcVV4GmOQLyxuSswIJsweeFZtAsMF7k1Nszz+TYBQrlYRmzOnr398y1JemQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "makeerror": "1.0.12"
      }
    },
    "node_modules/web-streams-polyfill": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/web-streams-polyfill/-/web-streams-polyfill-3.3.3.tgz",
      "integrity": "sha512-d2JWLCivmZYTSIoge9MsgFCZrt571BikcWGYkjC1khllbTeDlGqZ2D8vD8E/lJa8WGWbb7Plm8/XJYV7IJHZZw==",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/which/-/which-4.0.0.tgz",
      "integrity": "sha512-GlaYyEb07DPxYCKhKzplCWBJtvxZcZMrL+4UkrTSJHHPyZU4mYYTv3qaOe77H7EODLSSopAUFAc6W8U4yqvscg==",
      "license": "ISC",
      "dependencies": {
        "isexe": "^3.1.1"
      },
      "bin": {
        "node-which": "bin/which.js"
      },
      "engines": {
        "node": "^16.13.0 || >=18.0.0"
      }
    },
    "node_modules/widest-line": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-4.0.1.tgz",
      "integrity": "sha512-o0cyEG0e8GPzT4iGHphIOh0cJOV8fivsXxddQasHPHfoZf1ZexrfeA21w2NaEN1RHE+fXlfISmOE8R9N3u3Qig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "string-width": "^5.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/widest-line/node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/widest-line/node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/wordwrap": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
      "integrity": "sha512-gvVzJFlPycKc5dZN4yPkP8w7Dc37BtP1yczEneOb4uq34pXZcvrtRTmWV8W+Ume+XCxKgbjM+nevkyFPMybd4Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/workerpool": {
      "version": "6.5.1",
      "resolved": "https://registry.npmjs.org/workerpool/-/workerpool-6.5.1.tgz",
      "integrity": "sha512-Fs4dNYcsdpYSAfVxhnl1L5zTksjvOJxtC5hzMNl+1t9B8hTJTdKDyZ5ju7ztgPy+ft9tBFXoOlDNiOT9WUXZlA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/wrap-ansi": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
      "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/wrap-ansi/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    },
    "node_modules/write-file-atomic": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-5.0.1.tgz",
      "integrity": "sha512-+QU2zd6OTD8XWIJCbffaiQeH9U73qIqafo1x6V1snCWYGJf6cVE0cDR4D8xRzcEnfI21IFrUPzPGtcPf8AC+Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "imurmurhash": "^0.1.4",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": "^14.17.0 || ^16.13.0 || >=18.0.0"
      }
    },
    "node_modules/ws": {
      "version": "8.18.3",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.18.3.tgz",
      "integrity": "sha512-PEIGCY5tSlUt50cqyMXfCzX+oOPqN0vuGqWzbcJ2xvnkzkq46oOpz7dQaTDBdfICb4N14+GARUDw2XV2N4tvzg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/xmlbuilder": {
      "version": "15.0.0",
      "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-15.0.0.tgz",
      "integrity": "sha512-KLu/G0DoWhkncQ9eHSI6s0/w+T4TM7rQaLhtCaL6tORv8jFlJPlnGumsgTcGfYeS1qZ/IHqrvDG7zJZ4d7e+nw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "license": "ISC"
    },
    "node_modules/yargs": {
      "version": "17.7.2",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.2.tgz",
      "integrity": "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==",
      "license": "MIT",
      "dependencies": {
        "cliui": "^8.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.3",
        "y18n": "^5.0.5",
        "yargs-parser": "^21.1.1"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yargs-parser": {
      "version": "21.1.1",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
      "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yargs-unparser": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/yargs-unparser/-/yargs-unparser-2.0.0.tgz",
      "integrity": "sha512-7pRTIA9Qc1caZ0bZ6RYRGbHJthJWuakf+WmHK0rVeLkNrrGhfoabBNdue6kdINI6r4if7ocq9aD/n7xwKOdzOA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "camelcase": "^6.0.0",
        "decamelize": "^4.0.0",
        "flat": "^5.0.2",
        "is-plain-obj": "^2.1.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs-unparser/node_modules/is-plain-obj": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-2.1.0.tgz",
      "integrity": "sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/yargs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yauzl": {
      "version": "2.10.0",
      "resolved": "https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz",
      "integrity": "sha512-p4a9I6X6nu6IhoGmBqAcbJy1mlC4j27vEPZX9F4L4/vZT3Lyq1VkFHw/V/PUcB9Buo+DG3iHkT0x3Qya58zc3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer-crc32": "~0.2.3",
        "fd-slicer": "~1.1.0"
      }
    },
    "node_modules/yn": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
      "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/yoctocolors": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/yoctocolors/-/yoctocolors-2.1.2.tgz",
      "integrity": "sha512-CzhO+pFNo8ajLM2d2IW/R93ipy99LWjtwblvC1RsoSUMZgyLbYFr221TnSNT7GjGdYui6P459mw9JH/g/zW2ug==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/yoctocolors-cjs": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/yoctocolors-cjs/-/yoctocolors-cjs-2.1.3.tgz",
      "integrity": "sha512-U/PBtDf35ff0D8X8D0jfdzHYEPFxAI7jJlxZXwCSez5M3190m+QobIfh+sWDWSHMCWWJN2AWamkegn6vr6YBTw==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "3.25.76",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.25.76.tgz",
      "integrity": "sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==",
      "license": "MIT",
      "peer": true,
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-to-json-schema": {
      "version": "3.24.6",
      "resolved": "https://registry.npmjs.org/zod-to-json-schema/-/zod-to-json-schema-3.24.6.tgz",
      "integrity": "sha512-h/z3PKvcTcTetyjl1fkj79MHNEjm+HpD6NXheWjzOekY7kV+lwDYnHw+ivHkijnCSMz1yJaWBD9vu/Fcmk+vEg==",
      "license": "ISC",
      "peerDependencies": {
        "zod": "^3.24.1"
      }
    }
  }
}

```

---

### <a id="📄-package-json"></a>📄 `package.json`

**File Info:**
- **Size**: 1.53 KB
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `package.json`
- **Relative Path**: `root`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-03 09:24:15 (Asia/Colombo / GMT+06:30)
- **MD5**: `807e32b6cd4a761addfb115614523740`
- **SHA256**: `e1e36572a19d45d525f3f84bf4af3b39b635586bc52989140ecdbfbcfac1df67`
- **Encoding**: ASCII

**File code content:**

```json
{
  "name": "admin-web-app",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "test:selenium": "mocha tests/selenium/**/*.test.js --timeout 60000"
  },
  "dependencies": {
    "axios": "^1.6.2",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "date-fns": "^2.30.0",
    "dotenv": "^17.2.3",
    "lucide-react": "^0.294.0",
    "next": "16.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.20.0",
    "shadcn": "3.4.2",
    "tailwind-merge": "3.3.1",
    "tailwindcss-animate": "1.0.7"
  },
  "devDependencies": {
    "@types/chai": "^5.2.3",
    "@types/jest": "^30.0.0",
    "@types/mocha": "^10.0.10",
    "@types/node": "^24.9.1",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@types/selenium-webdriver": "^4.35.3",
    "@vitejs/plugin-react": "^4.2.1",
    "@wdio/allure-reporter": "^9.20.0",
    "allure-commandline": "^2.34.1",
    "autoprefixer": "^10.4.16",
    "chai": "^4.5.0",
    "chromedriver": "^142.0.0",
    "jest": "^30.2.0",
    "jest-html-reporter": "^4.3.0",
    "mocha": "^10.8.2",
    "postcss": "^8.4.32",
    "selenium-webdriver": "^4.38.0",
    "serve": "^14.2.5",
    "tailwindcss": "^3.4.17",
    "ts-jest": "^29.4.5",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3",
    "vite": "^5.0.8"
  }
}


```

---

### <a id="📄-postcss-config-js"></a>📄 `postcss.config.js`

**File Info:**
- **Size**: 86 B
- **Extension**: `.js`
- **Language**: `javascript`
- **Location**: `postcss.config.js`
- **Relative Path**: `root`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `5b84f4567208c7c747079c0477373231`
- **SHA256**: `374f669f08b18e67d0a7264fa45b71228017e604fe7f6db8a5c1bd5ba27e5c98`
- **Encoding**: ASCII

**File code content:**

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

---

### <a id="📄-readme-md"></a>📄 `README.md`

**File Info:**
- **Size**: 2.01 KB
- **Extension**: `.md`
- **Language**: `text`
- **Location**: `README.md`
- **Relative Path**: `root`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `b5e2f1fc4dab70e21a4aa9378b289048`
- **SHA256**: `feda92098d0ae8582f88393d80e6f3a5999b6b35aa9d35012ed736e171737012`
- **Encoding**: UTF-8

**File code content:**

````markdown
# Admin Web App

A React + TypeScript admin dashboard for managing users, roles, and audit logs with AWS Cognito authentication.

## Project Structure

\`\`\`
src/
├── components/
│   ├── layout/
│   │   ├── MainLayout.tsx
│   │   ├── Sidebar.tsx
│   │   └── Header.tsx
│   ├── dashboard/
│   │   └── DashboardContent.tsx
│   └── ProtectedRoute.tsx
├── context/
│   └── AuthContext.tsx
├── pages/
│   ├── LoginPage.tsx
│   └── DashboardPage.tsx
├── services/
│   └── api.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
\`\`\`

## Setup Instructions

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Create `.env` file:**
   \`\`\`bash
   cp .env.example .env
   \`\`\`

3. **Update `.env` with your backend URL:**
   \`\`\`
   REACT_APP_API_URL=http://localhost:8080
   \`\`\`

4. **Start development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Build for production:**
   \`\`\`bash
   npm run build
   \`\`\`

## Features

- **OAuth2 Authentication**: AWS Cognito integration with OIDC
- **Protected Routes**: Automatic redirection for unauthenticated users
- **API Client**: Axios-based HTTP client with token management
- **Responsive Layout**: Sidebar navigation with collapsible menu
- **User Context**: Global authentication state management

## API Integration

The app integrates with your Spring Boot backend at `http://localhost:8080`:

- **Login**: Redirects to `/oauth2/authorization/cognito`
- **Users**: `GET /api/v1/admin/users`
- **User Details**: `GET /api/v1/admin/users/{id}`
- **Update Roles**: `PATCH /api/v1/admin/users/{id}/roles`
- **Audit Logs**: `GET /api/v1/admin/audit-log`
- **Logout**: `POST /api/v1/sessions/logout`

## Next Steps

1. Implement User Management page
2. Implement Audit Log page
3. Add Role Management features
4. Add User Profile editing
#   S t a f f - M a n a g e m e n t - - - R e a c t - A d m i n  
 
````

---

### <a id="📄-structure-txt"></a>📄 `structure.txt`

**File Info:**
- **Size**: 2.47 KB
- **Extension**: `.txt`
- **Language**: `text`
- **Location**: `structure.txt`
- **Relative Path**: `root`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `f7dfe6758a0e28cbd3ec26b968a5bcd1`
- **SHA256**: `cc997ae6ca03c4e83a1e4ec76bd40c0b6ae5c24303ca8e07c2586f0edf1deaf8`
- **Encoding**: UTF-16

**File code content:**

```text
��|       . g i t i g n o r e  
 |       i n d e x . h t m l  
 |       p a c k a g e - l o c k . j s o n  
 |       p a c k a g e . j s o n  
 |       p o s t c s s . c o n f i g . j s  
 |       R E A D M E . m d  
 |       s t r u c t u r e . t x t  
 |       t a i l w i n d . c o n f i g . j s  
 |       t s c o n f i g . j s o n  
 |       t s c o n f i g . n o d e . j s o n  
 |       v i t e . c o n f i g . t s  
 + - - - s r c  
 |       |       A p p . t s x  
 |       |       i n d e x . c s s  
 |       |       m a i n . t s x  
 |       |        
 |       + - - - c o m p o n e n t s  
 |       |       |       A d m i n R o u t e . t s x  
 |       |       |       P r o t e c t e d R o u t e . t s x  
 |       |       |        
 |       |       + - - - a u d i t  
 |       |       |               A u d i t F i l t e r s . t s x  
 |       |       |               A u d i t L o g s L i s t . t s x  
 |       |       |                
 |       |       + - - - d a s h b o a r d  
 |       |       |               D a s h b o a r d C o n t e n t . t s x  
 |       |       |                
 |       |       + - - - l a y o u t  
 |       |       |               H e a d e r . t s x  
 |       |       |               M a i n L a y o u t . t s x  
 |       |       |               S i d e b a r . t s x  
 |       |       |                
 |       |       + - - - s e t t i n g s  
 |       |       |               P r o f i l e S e t t i n g s . t s x  
 |       |       |               R o l e M a n a g e m e n t . t s x  
 |       |       |                
 |       |       \ - - - u s e r s  
 |       |                       U s e r D e t a i l M o d a l . t s x  
 |       |                       U s e r s L i s t . t s x  
 |       |                        
 |       + - - - c o n t e x t  
 |       |               A u t h C o n t e x t . t s x  
 |       |                
 |       + - - - p a g e s  
 |       |               A u d i t L o g s P a g e . t s x  
 |       |               D a s h b o a r d P a g e . t s x  
 |       |               L o g i n P a g e . t s x  
 |       |               S e t t i n g s P a g e . t s x  
 |       |               U s e r s P a g e . t s x  
 |       |                
 |       + - - - s e r v i c e s  
 |       |               a p i . t s  
 |       |                
 |       \ - - - t y p e s  
 |                       i n d e x . t s  
 |                        
 \ - - - t e s t  
 
```

---

### <a id="📄-tailwind-config-js"></a>📄 `tailwind.config.js`

**File Info:**
- **Size**: 340 B
- **Extension**: `.js`
- **Language**: `javascript`
- **Location**: `tailwind.config.js`
- **Relative Path**: `root`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `f8b863581bf5ef15be92df3b2f9e5b6f`
- **SHA256**: `854ff1216433277a0926c4d6ca691b7b040959b8216a27dc99a09d796098ae8c`
- **Encoding**: ASCII

**File code content:**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};

```

---

### <a id="📄-test-index-html"></a>📄 `test_index.html`

**File Info:**
- **Size**: 17.35 KB
- **Extension**: `.html`
- **Language**: `html`
- **Location**: `test_index.html`
- **Relative Path**: `root`
- **Created**: 2025-11-02 16:19:04 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 16:19:07 (Asia/Colombo / GMT+06:30)
- **MD5**: `1e2b22a93639c9a15474467c5d6feb76`
- **SHA256**: `5577c161fd5924d22ff0c17894018927db41dd47b7330863ffc5754cd5f77b61`
- **Encoding**: ASCII

**File code content:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Test Report</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
        }

        .header h1 {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .header p {
            opacity: 0.9;
            font-size: 14px;
        }

        .summary {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            padding: 30px;
            background: #f8f9fa;
        }

        .summary-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
        }

        .summary-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .summary-card h3 {
            font-size: 14px;
            color: #6c757d;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .summary-card .value {
            font-size: 36px;
            font-weight: bold;
        }

        .summary-card.passed .value {
            color: #28a745;
        }

        .summary-card.failed .value {
            color: #dc3545;
        }

        .summary-card.total .value {
            color: #667eea;
        }

        .summary-card.duration .value {
            color: #17a2b8;
            font-size: 28px;
        }

        .tests-container {
            padding: 30px;
        }

        .filter-buttons {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .filter-btn {
            padding: 8px 16px;
            border: 2px solid #667eea;
            background: white;
            color: #667eea;
            border-radius: 20px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s;
        }

        .filter-btn:hover,
        .filter-btn.active {
            background: #667eea;
            color: white;
        }

        .test-suite {
            margin-bottom: 30px;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            overflow: hidden;
        }

        .suite-header {
            background: #f8f9fa;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            user-select: none;
        }

        .suite-header:hover {
            background: #e9ecef;
        }

        .suite-title {
            font-size: 18px;
            font-weight: 600;
            color: #212529;
        }

        .suite-stats {
            display: flex;
            gap: 15px;
            font-size: 14px;
        }

        .stat-badge {
            padding: 4px 12px;
            border-radius: 12px;
            font-weight: 500;
        }

        .stat-badge.passed {
            background: #d4edda;
            color: #155724;
        }

        .stat-badge.failed {
            background: #f8d7da;
            color: #721c24;
        }

        .test-case {
            padding: 20px;
            border-bottom: 1px solid #e9ecef;
            transition: background 0.2s;
        }

        .test-case:last-child {
            border-bottom: none;
        }

        .test-case:hover {
            background: #f8f9fa;
        }

        .test-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 10px;
        }

        .status-icon {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
            flex-shrink: 0;
        }

        .status-icon.passed {
            background: #28a745;
            color: white;
        }

        .status-icon.failed {
            background: #dc3545;
            color: white;
        }

        .test-name {
            flex: 1;
            font-size: 16px;
            font-weight: 500;
            color: #212529;
        }

        .test-duration {
            color: #6c757d;
            font-size: 14px;
        }

        .error-message {
            background: #f8d7da;
            border-left: 4px solid #dc3545;
            padding: 15px;
            margin-top: 10px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 13px;
            color: #721c24;
            overflow-x: auto;
        }

        .console-log {
            background: #f8f9fa;
            border-left: 4px solid #17a2b8;
            padding: 15px;
            margin-top: 10px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            color: #495057;
            max-height: 200px;
            overflow-y: auto;
        }

        .screenshot {
            margin-top: 10px;
            max-width: 100%;
            border-radius: 4px;
            border: 2px solid #e9ecef;
        }

        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
        }

        .progress-bar {
            height: 8px;
            background: #e9ecef;
            border-radius: 4px;
            overflow: hidden;
            margin-top: 20px;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #28a745 0%, #20c997 100%);
            transition: width 0.3s;
        }

        .hidden {
            display: none;
        }

        @media (max-width: 768px) {
            .summary {
                grid-template-columns: 1fr 1fr;
            }

            .suite-stats {
                flex-direction: column;
                gap: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Dashboard Test Report</h1>
            <p>Test Execution Date: 2025-11-02 14:32:15</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 80%"></div>
            </div>
        </div>

        <div class="summary">
            <div class="summary-card total">
                <h3>Total Tests</h3>
                <div class="value">10</div>
            </div>
            <div class="summary-card passed">
                <h3>Passed</h3>
                <div class="value">8</div>
            </div>
            <div class="summary-card failed">
                <h3>Failed</h3>
                <div class="value">2</div>
            </div>
            <div class="summary-card duration">
                <h3>Duration</h3>
                <div class="value">45.2s</div>
            </div>
        </div>

        <div class="tests-container">
            <div class="filter-buttons">
                <button class="filter-btn active" onclick="filterTests('all')">All Tests</button>
                <button class="filter-btn" onclick="filterTests('passed')">Passed Only</button>
                <button class="filter-btn" onclick="filterTests('failed')">Failed Only</button>
            </div>

            <div class="test-suite">
                <div class="suite-header" onclick="toggleSuite(this)">
                    <div class="suite-title">Dashboard Tests</div>
                    <div class="suite-stats">
                        <span class="stat-badge passed">8 passed</span>
                        <span class="stat-badge failed">2 failed</span>
                    </div>
                </div>

                <div class="test-case" data-status="passed">
                    <div class="test-header">
                        <div class="status-icon passed">✓</div>
                        <div class="test-name">should load dashboard page successfully</div>
                        <div class="test-duration">2.3s</div>
                    </div>
                    <div class="console-log">
                        [INFO] Navigating to http://localhost:3000<br>
                        [INFO] Page loaded successfully<br>
                        [INFO] Title verified: "My Dashboard"
                    </div>
                </div>

                <div class="test-case" data-status="passed">
                    <div class="test-header">
                        <div class="status-icon passed">✓</div>
                        <div class="test-name">should display header</div>
                        <div class="test-duration">1.8s</div>
                    </div>
                </div>

                <div class="test-case" data-status="passed">
                    <div class="test-header">
                        <div class="status-icon passed">✓</div>
                        <div class="test-name">should display dashboard title</div>
                        <div class="test-duration">1.5s</div>
                    </div>
                </div>

                <div class="test-case" data-status="passed">
                    <div class="test-header">
                        <div class="status-icon passed">✓</div>
                        <div class="test-name">should display dashboard cards</div>
                        <div class="test-duration">2.1s</div>
                    </div>
                    <div class="console-log">
                        [INFO] Found 6 dashboard cards<br>
                        [INFO] All cards are visible
                    </div>
                </div>

                <div class="test-case" data-status="failed">
                    <div class="test-header">
                        <div class="status-icon failed">✗</div>
                        <div class="test-name">should navigate to settings page</div>
                        <div class="test-duration">5.2s</div>
                    </div>
                    <div class="error-message">
                        Error: Element not found: [data-testid="settings-button"]
                        
                        at DashboardPage.clickElement (tests/pages/DashboardPage.ts:54:11)
                        at Object.&lt;anonymous&gt; (tests/specs/dashboard.test.ts:42:5)
                        
                        Expected: Settings page to load
                        Received: Timeout waiting for element
                    </div>
                    <div class="console-log">
                        [INFO] Attempting to click settings button<br>
                        [ERROR] Element not found after 5000ms<br>
                        [INFO] Screenshot captured: failure-settings.png
                    </div>
                </div>

                <div class="test-case" data-status="passed">
                    <div class="test-header">
                        <div class="status-icon passed">✓</div>
                        <div class="test-name">should filter data by date range</div>
                        <div class="test-duration">3.7s</div>
                    </div>
                </div>

                <div class="test-case" data-status="passed">
                    <div class="test-header">
                        <div class="status-icon passed">✓</div>
                        <div class="test-name">should display charts correctly</div>
                        <div class="test-duration">4.2s</div>
                    </div>
                    <div class="console-log">
                        [INFO] Found 3 chart elements<br>
                        [INFO] Chart data loaded successfully<br>
                        [INFO] All charts rendered within viewport
                    </div>
                </div>

                <div class="test-case" data-status="passed">
                    <div class="test-header">
                        <div class="status-icon passed">✓</div>
                        <div class="test-name">should handle responsive layout</div>
                        <div class="test-duration">6.8s</div>
                    </div>
                    <div class="console-log">
                        [INFO] Testing desktop viewport: 1920x1080<br>
                        [INFO] Testing tablet viewport: 768x1024<br>
                        [INFO] Testing mobile viewport: 375x667<br>
                        [INFO] All viewports rendered correctly
                    </div>
                </div>

                <div class="test-case" data-status="failed">
                    <div class="test-header">
                        <div class="status-icon failed">✗</div>
                        <div class="test-name">should validate form submission</div>
                        <div class="test-duration">8.1s</div>
                    </div>
                    <div class="error-message">
                        Error: Assertion Failed
                        
                        Expected success message to be displayed
                        Received: Error message "Invalid input format"
                        
                        at Object.&lt;anonymous&gt; (tests/specs/dashboard.test.ts:78:5)
                    </div>
                    <div class="console-log">
                        [INFO] Filling form fields<br>
                        [INFO] Field 'name': John Doe<br>
                        [INFO] Field 'email': john@example.com<br>
                        [INFO] Clicking submit button<br>
                        [ERROR] Validation error occurred<br>
                        [INFO] Screenshot captured: failure-form.png
                    </div>
                </div>

                <div class="test-case" data-status="passed">
                    <div class="test-header">
                        <div class="status-icon passed">✓</div>
                        <div class="test-name">should handle user interactions</div>
                        <div class="test-duration">9.5s</div>
                    </div>
                    <div class="console-log">
                        [INFO] Testing button clicks<br>
                        [INFO] Testing hover effects<br>
                        [INFO] Testing keyboard navigation<br>
                        [INFO] All interactions working correctly
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>Generated by jest-html-reporter | Selenium WebDriver with TypeScript</p>
            <p>Framework: Jest + React + Tailwind CSS</p>
        </div>
    </div>

    <script>
        function toggleSuite(element) {
            const suite = element.parentElement;
            const testCases = suite.querySelectorAll('.test-case');
            testCases.forEach(testCase => {
                testCase.classList.toggle('hidden');
            });
        }

        function filterTests(filter) {
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const testCases = document.querySelectorAll('.test-case');
            testCases.forEach(testCase => {
                const status = testCase.getAttribute('data-status');
                if (filter === 'all' || status === filter) {
                    testCase.classList.remove('hidden');
                } else {
                    testCase.classList.add('hidden');
                }
            });
        }

        // Add animation on load
        window.addEventListener('load', () => {
            const testCases = document.querySelectorAll('.test-case');
            testCases.forEach((testCase, index) => {
                testCase.style.opacity = '0';
                testCase.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    testCase.style.transition = 'all 0.3s ease';
                    testCase.style.opacity = '1';
                    testCase.style.transform = 'translateY(0)';
                }, index * 50);
            });
        });
    </script>
</body>
</html>
```

---

### <a id="📄-testconfig-js"></a>📄 `testconfig.js`

**File Info:**
- **Size**: 0 B
- **Extension**: `.js`
- **Language**: `javascript`
- **Location**: `testconfig.js`
- **Relative Path**: `root`
- **Created**: 2025-11-02 16:15:03 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-03 07:52:48 (Asia/Colombo / GMT+06:30)
- **MD5**: `d41d8cd98f00b204e9800998ecf8427e`
- **SHA256**: `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`
- **Encoding**: ASCII

**File code content:**

```javascript

```

---

### <a id="📄-tsconfig-json"></a>📄 `tsconfig.json`

**File Info:**
- **Size**: 774 B
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `tsconfig.json`
- **Relative Path**: `root`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `8eb9ae9915e4d4436c8d23a4d1ef175d`
- **SHA256**: `a9a92e53e04a10f9a212097d82d99280a07d991e0e606785b946cd3d60e5bffb`
- **Encoding**: ASCII

**File code content:**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```

---

### <a id="📄-tsconfig-node-json"></a>📄 `tsconfig.node.json`

**File Info:**
- **Size**: 223 B
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `tsconfig.node.json`
- **Relative Path**: `root`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `281e378713152cccc7860c818db55849`
- **SHA256**: `6ec602b8aa146888c76f0b41ca3515f91f95919f6e6417a4670decaba8fcb982`
- **Encoding**: ASCII

**File code content:**

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}

```

---

### <a id="📄-vite-config-ts"></a>📄 `vite.config.ts`

**File Info:**
- **Size**: 412 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `vite.config.ts`
- **Relative Path**: `root`
- **Created**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **Modified**: 2025-11-02 09:32:59 (Asia/Colombo / GMT+06:30)
- **MD5**: `3b9211c99e611a2133bdb53adade6edf`
- **SHA256**: `3ac6766a55a0c37cc2a6953b69736bf7a6d58324628cfd964ca87e72199e5990`
- **Encoding**: ASCII

**File code content:**

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});

```

---

