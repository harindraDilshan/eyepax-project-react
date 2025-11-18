import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react"; // <-- added waitFor
import { AttendanceLogsPage } from "../src/pages/AttendanceLogsPage";
import { apiClient } from "../src/services/api";

//  Mock MainLayout because it wraps children
jest.mock("../src/components/layout/MainLayout", () => ({
  MainLayout: ({ children }: any) => <div>{children}</div>,
}));

// Mock apiClient
jest.mock("../src/services/api", () => ({
  apiClient: {
    getAttendanceLogs: jest.fn(),
    handleError: jest.fn((err) => "API Error Occurred"),
  },
}));

describe("AttendanceLogsPage", () => {
  const mockResponse = {
    userSync: "User synced",
    message: "Fetched successfully",
    requestedBy: {
      employee_id: 1,
      email: "admin@test.com",
      cognito_groups: "Admin",
    },
    employee: {
      employee_id: 4,
      email: "testuser@test.com",
      cognito_groups: "User",
    },
    totalRecords: 1,
    attendances: [
      {
        attendance_id: 10,
        employee_id: 4,
        date: "2025-10-20",
        clock_in_time: "2025-10-20T08:00:00Z",
        clock_out_time: "2025-10-20T17:00:00Z",
        status: "Present",
        created_at: "2025-10-20T17:01:00Z",
        updated_at: "2025-10-20T17:05:00Z",
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders page and search input", () => {
    render(<AttendanceLogsPage />);
    expect(screen.getByText("Attendance Logs")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter employee email/i)).toBeInTheDocument();
  });

  test("shows error when clicking search with empty email", async () => {
    render(<AttendanceLogsPage />);
    fireEvent.click(screen.getByText("Search"));
    expect(await screen.findByText("Please enter an email address")).toBeInTheDocument();
  });

  test("calls API and displays employee info & attendance records", async () => {
    (apiClient.getAttendanceLogs as jest.Mock).mockResolvedValue({ data: mockResponse });
    render(<AttendanceLogsPage />);

    fireEvent.change(screen.getByPlaceholderText(/Enter employee email/i), {
      target: { value: "testuser@test.com" },
    });

    fireEvent.click(screen.getByText("Search"));

    await waitFor(() => {
      expect(apiClient.getAttendanceLogs).toHaveBeenCalledWith("testuser@test.com");
    });

    expect(screen.getByText("Employee Information")).toBeInTheDocument();
    expect(screen.getByText("testuser@test.com")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();
    expect(screen.getByText("Attendance Records")).toBeInTheDocument();
    expect(screen.getByText(/Attendance ID: #10/i)).toBeInTheDocument();
    expect(screen.getByText(/Present/i)).toBeInTheDocument();
  });

  test("shows 'No data found' message when attendances array is empty", async () => {
    (apiClient.getAttendanceLogs as jest.Mock).mockResolvedValue({
      data: { ...mockResponse, totalRecords: 0, attendances: [] },
    });
    render(<AttendanceLogsPage />);

    fireEvent.change(screen.getByPlaceholderText(/Enter employee email/i), {
      target: { value: "empty@test.com" },
    });

    fireEvent.click(screen.getByText("Search"));

    await waitFor(() => {
      expect(screen.getByText("No attendance records found for this employee.")).toBeInTheDocument();
    });
  });

  test("displays API error when request fails", async () => {
    (apiClient.getAttendanceLogs as jest.Mock).mockRejectedValue(new Error("Bad request"));
    render(<AttendanceLogsPage />);

    fireEvent.change(screen.getByPlaceholderText(/Enter employee email/i), {
      target: { value: "wrong@test.com" },
    });

    fireEvent.click(screen.getByText("Search"));

    await waitFor(() => {
      expect(screen.getByText("API Error Occurred")).toBeInTheDocument();
    });
  });
});
