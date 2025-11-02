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
