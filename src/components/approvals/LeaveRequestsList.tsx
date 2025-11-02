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
