import type React from "react";
import { useState, useEffect } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { UsersList } from "../components/users/UsersList";
import { UserDetailModal } from "../components/users/UserDetailModal";
import { apiClient } from "../services/api";
import type { User, PaginatedResponse, UserDB } from "../types";
import { Search, AlertCircle } from "lucide-react";

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserDB[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserDB | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Fetch users
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

  // Initial load
  useEffect(() => {
    fetchUsers(0);
  }, []);

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(0);
    fetchUsers(0, query);
  };

  // Handle user selection
  const handleSelectUser = (user: UserDB) => {
    setSelectedUser(user);
    setShowDetailModal(true);
  };

  // Handle pagination
  const handleNextPage = () => {
    if (page < totalPages - 1) {
      fetchUsers(page + 1, searchQuery);
    }
  };

  const handlePrevPage = () => {
    if (page > 0) {
      fetchUsers(page - 1, searchQuery);
    }
  };

  return (
    <MainLayout>
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Users Management</h1>
          <p className="text-gray-600 mt-2">
            Manage user accounts and assign roles
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Users List */}
        <UsersList
          users={users}
          loading={loading}
          onSelectUser={handleSelectUser}
        />

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Page {page + 1} of {totalPages} ({users.length} users)
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

        {/* User Detail Modal */}
        {selectedUser && (
          <UserDetailModal
            user={selectedUser}
            isOpen={showDetailModal}
            onClose={() => {
              setShowDetailModal(false);
              setSelectedUser(null);
            }}
            onUserUpdated={() => {
              fetchUsers(page, searchQuery);
            }}
          />
        )}
      </div>
    </MainLayout>
  );
};
