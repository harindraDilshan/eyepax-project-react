import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LeaveManagementPage from "../src/pages/LeaveRequestsPage";
import { apiClient } from "../src/services/api";
// Mock MainLayout
jest.mock("../src/components/layout/MainLayout", () => ({
  MainLayout: ({ children }: any) => <div data-testid="main-layout">{children}</div>,
}));

// Mock lucide-react icons
jest.mock("lucide-react", () => ({
  Calendar: () => <div data-testid="calendar-icon" />,
  Clock: () => <div data-testid="clock-icon" />,
  User: () => <div data-testid="user-icon" />,
  Mail: () => <div data-testid="mail-icon" />,
  CheckCircle: () => <div data-testid="check-icon" />,
  XCircle: () => <div data-testid="x-icon" />,
  AlertCircle: () => <div data-testid="alert-icon" />,
  Loader2: () => <div data-testid="loader-icon" />,
}));

describe("LeaveManagementPage", () => {
  const mockApiResponse = {
    userSync: "User already exists. No update required.",
    message: "Leave requests retrieved successfully",
    user: {
      employee_id: 1,
      email: "osah.dilshan@gmail.com",
      cognito_groups: "Admin",
    },
    totalRecords: 1,
    leaveRequests: [
      {
        request_id: 1,
        employee_id: 2,
        reason: "Family vacation",
        approved_date: "2025-11-17T00:00:00.000Z",
        status: "not-approved",
        start_date: "2025-12-20T00:00:00.000Z",
        end_date: "2025-12-27T00:00:00.000Z",
        created_at: "2025-11-17T07:21:15.790Z",
        updated_at: "2025-11-17T11:52:05.834Z",
        email: "s19588@sci.pdn.ac.lk",
      },
    ],
    timestamp: "2025-11-17T11:58:02.021Z",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders leave requests correctly", async () => {
    (apiClient.getLeaveRequests as jest.Mock).mockResolvedValue(mockApiResponse);

    render(<LeaveManagementPage />);

    // Wait for API data to load
    await waitFor(() => {
      expect(apiClient.getLeaveRequests).toHaveBeenCalledTimes(1);
    });

    // Check main layout rendered
    expect(screen.getByTestId("main-layout")).toBeInTheDocument();

    // Check leave request details
    expect(screen.getByText(/Employee ID: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Family vacation/i)).toBeInTheDocument();
    expect(screen.getByText(/s19588@sci.pdn.ac.lk/i)).toBeInTheDocument();
    expect(screen.getByText(/NOT-APPROVED/i)).toBeInTheDocument();
  });

  test("updates leave status to approved", async () => {
    (apiClient.getLeaveRequests as jest.Mock).mockResolvedValue(mockApiResponse);
    (apiClient.updateLeaveRequestStatus as jest.Mock).mockResolvedValue({ success: true });

    render(<LeaveManagementPage />);

    await waitFor(() => screen.getByText(/Employee ID: 2/i));

    const approveButton = screen.getByText(/Approve/i);
    fireEvent.click(approveButton);

    await waitFor(() => {
      expect(apiClient.updateLeaveRequestStatus).toHaveBeenCalledWith(1, "approved");
    });

    // Status badge should now show APPROVED
    expect(screen.getByText(/APPROVED/i)).toBeInTheDocument();
  });

  test("shows error when API fails", async () => {
    (apiClient.getLeaveRequests as jest.Mock).mockRejectedValue(new Error("API Error"));

    render(<LeaveManagementPage />);

    await waitFor(() => {
      expect(screen.getByText(/API Error/i)).toBeInTheDocument();
    });
  });
});
