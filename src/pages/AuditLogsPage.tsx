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
