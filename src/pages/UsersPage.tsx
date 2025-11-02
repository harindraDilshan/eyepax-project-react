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
