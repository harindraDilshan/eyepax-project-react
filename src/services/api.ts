import axios, { type AxiosInstance, type AxiosError } from "axios";

// --- Base URLs ---
const JAVA_API_BASE_URL = "http://localhost:8080";
const EXPRESS_API_BASE_URL = "http://localhost:4000";

// ====================================================
// 🔹 Java Backend API Client (secured, uses token)
// ====================================================
class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: JAVA_API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Attach token to requests
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Handle unauthorized responses
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // Prevent infinite reloads: only handle 401s from the Java backend
        if (
          error.response?.status === 401 &&
          error.config?.baseURL?.includes("8080")
        ) {
          localStorage.removeItem("accessToken");
          if (window.location.pathname !== "/login") {
            window.location.href = "/login";
          }
        }
        return Promise.reject(error);
      }
    );
  }

  // ===== Auth endpoints =====
  getLoginUrl() {
    return `${JAVA_API_BASE_URL}/oauth2/authorization/cognito`;
  }

  async getCurrentUser() {
    return this.client.get("/api/v1/me");
  }

  // ===== User endpoints =====
  async getUsers(page = 0, size = 10, query?: string) {
    const params = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
    });
    if (query) {
      params.append("query", query);
    }
    return this.client.get(`/api/v1/admin/users?${params}`);
  }

  async getUserById(id: string) {
    return this.client.get(`/api/v1/admin/users/${id}`);
  }

  async updateUserRoles(userId: string, roleIds: string[], roleName: string) {
    return this.client.patch(
      `/api/v1/admin/users/${userId}/roles?roleName=${roleName}`,
      { roleIds }
    );
  }

  async updateProfile(data: {
    displayName: string;
    locale: string;
    phone: string;
  }) {
    return this.client.patch("/api/v1/me", data);
  }

  async getAuditLogs(page = 0, size = 10, userId?: string, dateRange?: string) {
    const params = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
    });
    if (userId) params.append("userId", userId);
    if (dateRange) params.append("dateRange", dateRange);
    return this.client.get(`/api/v1/admin/audit-log?${params}`);
  }

  // In your apiClient
async getAttendanceLogs(email: string) {
  const params = new URLSearchParams({ id: email });
  
  // Get the Cognito token from your auth service/context
  const token = localStorage.getItem("accessToken"); // or however you store it
  // OR: const token = await Auth.currentSession().getIdToken().getJwtToken();
  console.log(`===============>>>>${token}`);
  return this.client.get(
    `https://8iv05x1jp7.execute-api.us-east-1.amazonaws.com/prod/attendance/employee-attendances?${params}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

async getLeaveTypes() {
  const token = localStorage.getItem("accessToken");
  return this.client.get(
    "https://8iv05x1jp7.execute-api.us-east-1.amazonaws.com/prod/leave/types",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

async updateLeaveType(data: {
  leave_type_id: number;
  description: string;
  accrual_frequency: string;
  accrual_amount: number;
  no_pay_effect: boolean;
}) {
  const token = localStorage.getItem("accessToken");
  return this.client.patch(
    "https://8iv05x1jp7.execute-api.us-east-1.amazonaws.com/prod/leave/types",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

  // ===== Error handler =====
  handleError(error: unknown): string {
    if (axios.isAxiosError(error)) {
      return (
        (error.response?.data as any)?.message ||
        error.message ||
        "An error occurred"
      );
    }
    return "An unexpected error occurred";
  }
}

export const apiClient = new ApiClient();

// ====================================================
// 🔹 Express Backend API Client (no token required)
// ====================================================
export const expressApi = axios.create({
  baseURL: EXPRESS_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ====================================================
// 🔹 Leave Policies (Express endpoints)
// ====================================================
export const getPolicies = async () => {
  const res = await expressApi.get("/api/v1/policies");
  return res.data;
};

export const createPolicy = async (data: {
  name: string;
  description: string;
  default_days: number;
  requires_approval: boolean;
}) => {
  const res = await expressApi.post("/api/v1/policies", data);
  return res.data;
};

export const updatePolicy = async (id: string, data: any) => {
  const res = await expressApi.patch(`/api/v1/policies/${id}`, data);
  return res.data;
};

// ====================================================
// 🔹 Leave Requests (Approvals - Express backend)
// ====================================================
export const getLeaveRequests = async () => {
  const res = await expressApi.get("/api/v1/leave/requests");
  return res.data.data;
};

export const updateLeaveRequestStatus = async (
  id: string,
  data: { status: "APPROVED" | "REJECTED"; actor_user_id: string }
) => {
  const res = await expressApi.patch(`/api/v1/leave/requests/${id}`, data);
  return res.data;
};

// --- Payroll Reports (Express backend) ---
export const getPayrollReport = async (start: string, end: string) => {
  const res = await expressApi.get(
    `/api/v1/reports/payroll?start=${start}&end=${end}`
  );
  return res.data;
};

export const downloadPayrollCSV = async (start: string, end: string) => {
  const res = await expressApi.get(
    `/api/v1/reports/payroll?start=${start}&end=${end}&format=csv`,
    { responseType: "blob" }
  );
  return res.data;
};

// ====================================================
// 🔹 Default export (for legacy usage)
// ====================================================
const api = axios.create({
  baseURL: JAVA_API_BASE_URL,
  withCredentials: true,
});

export default api;
