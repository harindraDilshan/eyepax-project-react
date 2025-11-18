import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, CheckCircle, XCircle, AlertCircle, Loader2 } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';

// Types
interface LeaveRequest {
  request_id: number;
  employee_id: number;
  email: string;
  reason: string;
  start_date: string;
  end_date: string;
  status: 'pending' | 'approved' | 'not-approved';
  approved_date: string | null;
  created_at: string;
  updated_at: string;
}

interface LeaveResponse {
  userSync: string;
  message: string;
  user: {
    employee_id: number;
    email: string;
    cognito_groups: string;
  };
  totalRecords: number;
  leaveRequests: LeaveRequest[];
  timestamp: string;
}

// API Service
const apiService = {
  async getLeaveRequests(): Promise<LeaveResponse> {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(
      'https://8iv05x1jp7.execute-api.us-east-1.amazonaws.com/prod/leave/request',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    if (!response.ok) throw new Error('Failed to fetch leave requests');
    return response.json();
  },

  async updateLeaveStatus(requestId: number, status: 'approved' | 'not-approved'): Promise<any> {
    const token = localStorage.getItem('accessToken');
    console.log(`--------------> ${status}`)
    const response = await fetch(
      'https://8iv05x1jp7.execute-api.us-east-1.amazonaws.com/prod/leave/request',
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          request_id: requestId,
          status: status
        })
      }
    );
    if (!response.ok) throw new Error('Failed to update leave status');
    return response.json();
  }
};

// Main Component
const LeaveManagementPage: React.FC = () => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const fetchLeaveRequests = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiService.getLeaveRequests();
      setLeaveRequests(response.leaveRequests || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch leave requests');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (requestId: number, newStatus: 'approved' | 'not-approved') => {
    setUpdatingId(requestId);
    setError(null);
    try {
      await apiService.updateLeaveStatus(requestId, newStatus);
      // Update local state
      setLeaveRequests(prev =>
        prev.map(req =>
          req.request_id === requestId
            ? { ...req, status: newStatus, updated_at: new Date().toISOString() }
            : req
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update status');
    } finally {
      setUpdatingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const calculateDuration = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return days;
  };

  // Filter and paginate
  const filteredRequests = leaveRequests.filter(req => 
    filterStatus === 'all' ? true : req.status === filterStatus
  );
  const totalPages = Math.ceil(filteredRequests.length / pageSize);
  const paginatedRequests = filteredRequests.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-400 bg-green-900/30 border-green-700';
      case 'not-approved': return 'text-red-400 bg-red-900/30 border-red-700';
      case 'pending': return 'text-yellow-400 bg-yellow-900/30 border-yellow-700';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-700';
    }
  };

  return (
    <MainLayout>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Leave Management</h1>
          <p className="text-gray-400">Review and manage employee leave requests</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-gray-400 text-sm mb-1">Total Requests</p>
            <p className="text-2xl font-bold text-white">{leaveRequests.length}</p>
          </div>
          <div className="bg-gray-800 border border-green-700/30 rounded-xl p-4">
            <p className="text-gray-400 text-sm mb-1">Approved</p>
            <p className="text-2xl font-bold text-green-400">
              {leaveRequests.filter(r => r.status === 'approved').length}
            </p>
          </div>
          <div className="bg-gray-800 border border-yellow-700/30 rounded-xl p-4">
            <p className="text-gray-400 text-sm mb-1">Pending</p>
            <p className="text-2xl font-bold text-yellow-400">
              {leaveRequests.filter(r => r.status === 'pending').length}
            </p>
          </div>
          <div className="bg-gray-800 border border-red-700/30 rounded-xl p-4">
            <p className="text-gray-400 text-sm mb-1">Not Approved</p>
            <p className="text-2xl font-bold text-red-400">
              {leaveRequests.filter(r => r.status === 'not-approved').length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-4">
            <label className="text-gray-300 text-sm font-medium">Filter by Status:</label>
            <div className="flex gap-2">
              {['all', 'pending', 'approved', 'not-approved'].map(status => (
                <button
                  key={status}
                  onClick={() => {
                    setFilterStatus(status);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterStatus === status
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/40 border border-red-700 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-red-300">Error</p>
              <p className="text-sm text-red-400">{error}</p>
            </div>
          </div>
        )}

        {/* Leave Requests List */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
            </div>
          ) : paginatedRequests.length === 0 ? (
            <div className="text-center py-20">
              <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No leave requests found</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-700">
              {paginatedRequests.map(request => (
                <div
                  key={request.request_id}
                  className="p-6 hover:bg-gray-750 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Left Section - Employee Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-indigo-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-white">
                              Employee ID: {request.employee_id}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(request.status)}`}>
                              {request.status.toUpperCase()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                            <Mail className="w-4 h-4" />
                            <span>{request.email}</span>
                          </div>
                          <div className="bg-gray-900/50 rounded-lg p-3 mt-3">
                            <p className="text-sm text-gray-300">
                              <span className="font-medium text-gray-200">Reason: </span>
                              {request.reason}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Middle Section - Dates */}
                    <div className="lg:border-l lg:border-gray-700 lg:pl-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-indigo-400" />
                          <div>
                            <p className="text-xs text-gray-500">Start Date</p>
                            <p className="text-sm font-medium text-white">
                              {formatDate(request.start_date)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-indigo-400" />
                          <div>
                            <p className="text-xs text-gray-500">End Date</p>
                            <p className="text-sm font-medium text-white">
                              {formatDate(request.end_date)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-indigo-400" />
                          <div>
                            <p className="text-xs text-gray-500">Duration</p>
                            <p className="text-sm font-medium text-white">
                              {calculateDuration(request.start_date, request.end_date)} days
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Actions */}
                    <div className="lg:border-l lg:border-gray-700 lg:pl-6">
                      <div className="flex flex-col gap-2 min-w-[160px]">
                        <button
                          onClick={() => handleUpdateStatus(request.request_id, 'approved')}
                          disabled={updatingId === request.request_id || request.status === 'approved'}
                          className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
                            request.status === 'approved'
                              ? 'bg-green-900/30 text-green-400 border border-green-700 cursor-not-allowed'
                              : 'bg-green-600 text-white hover:bg-green-700 disabled:opacity-50'
                          }`}
                        >
                          {updatingId === request.request_id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <CheckCircle className="w-4 h-4" />
                          )}
                          <span>Approve</span>
                        </button>
                        <button
                          onClick={() => handleUpdateStatus(request.request_id, 'not-approved')}
                          disabled={updatingId === request.request_id || request.status === 'not-approved'}
                          className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
                            request.status === 'not-approved'
                              ? 'bg-red-900/30 text-red-400 border border-red-700 cursor-not-allowed'
                              : 'bg-red-600 text-white hover:bg-red-700 disabled:opacity-50'
                          }`}
                        >
                          {updatingId === request.request_id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <XCircle className="w-4 h-4" />
                          )}
                          <span>Not Approve</span>
                        </button>
                      </div>
                      <div className="mt-3 text-xs text-gray-500">
                        <p>Updated: {formatDate(request.updated_at)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {!loading && paginatedRequests.length > 0 && (
          <div className="mt-6 flex items-center justify-between text-gray-300">
            <p className="text-sm">
              Page {currentPage} of {totalPages} ({filteredRequests.length} requests)
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-700 rounded-lg text-gray-300 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage >= totalPages}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </MainLayout>
  );
};

export default LeaveManagementPage;