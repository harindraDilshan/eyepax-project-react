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