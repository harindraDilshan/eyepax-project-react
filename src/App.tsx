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
import LeaveRequestsPage from "./pages/LeaveRequestsPage";
import LeaveCalendar from "./components/calender/LeaveCalendar";


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
            path="/users"
            element={
              <AdminRoute>
                <UsersPage />
              </AdminRoute>
            }
          />
          <Route
            path="/leave-management"
            element={
              <AdminRoute>
                <LeaveRequestsPage />
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
            path="/leave-calendar"
            element={
              <AdminRoute>
                <LeaveCalendar />
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
