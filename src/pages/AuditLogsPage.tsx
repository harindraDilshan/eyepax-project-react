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
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(0);
  const [userId, setUserId] = useState<string>("");
  const [dateRange, setDateRange] = useState<string>("");
  const [actionFilter, setActionFilter] = useState<string>("");

  // Fetch audit logs
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

      // Handle case where response.data is an array
      if (Array.isArray(response.data)) {
        const totalItems = response.data.length;
        const start = pageNum * pageSize;
        const end = start + pageSize;
        const paginatedLogs = response.data.slice(start, end);

        console.log("Array data detected, paginating:", paginatedLogs);
        setLogs(paginatedLogs);
        setTotalPages(Math.ceil(totalItems / pageSize));
        setPage(pageNum);
      }
      // Handle case where response.data is a paginated object
      else if (
        response.data &&
        typeof response.data === "object" &&
        "content" in response.data
      ) {
        const data = response.data as PaginatedResponse<AuditLog>;
        console.log("Paginated data detected:", data.content);
        setLogs(data.content);
        setTotalPages(data.totalPages);
        setPage(data.currentPage);
      }
      // Handle unexpected data format
      else {
        console.error("Unexpected data format:", response.data);
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

  // Initial load
  useEffect(() => {
    fetchAuditLogs(0);
  }, []);

  // Handle filter changes
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

  // Handle pagination
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
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Audit Logs</h1>
          <p className="text-gray-600 mt-2">
            View login and role change events
          </p>
        </div>

        {/* Filters */}
        {/* <AuditFilters onApplyFilters={handleApplyFilters} /> */}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Audit Logs List */}
        <AuditLogsList
          logs={logs}
          loading={loading}
          actionFilter={actionFilter}
        />

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Page {page + 1} of {totalPages} ({logs.length} events)
          </p>
          <div className="flex gap-2">
            <button
              onClick={handlePrevPage}
              disabled={page === 0 || loading}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
