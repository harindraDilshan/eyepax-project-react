// Authentication & User Types
export interface User {
  // id: string
  // email: string
  // name: string | null
  // roles: Role[]
  // createdAt: string
  // lastLogin?: string

  app_metadata: {
    createdAt: string;
    displayName: string;
    isActive: boolean;
    lastLoginAt?: string;
    role: string;
    phone: string;
  };

  profile: {
    email: string;
    email_verified: boolean | null;
    locale: string | null;
    name: string | null;
    sub: string;
    status: string;
  };
}

export interface UserDB {
  active: boolean;
  createdAt: string;
  displayName: string;
  email: string;
  id: string;
  lastLoginAt?: string;
  locale: string | null;

  metadata: {
    lastProfileUpdate: string;
  };

  mfaEnabled: boolean;
  phone: string | null;
  role: {
    id: string;
    name: string;
    description: string;
    createdAt: string;
  };
  sub: string;
  username: string | null;
}

export interface Role {
  id: string;
  name: string;
  description: string;
}

export interface AuthToken {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}

export interface AuthContext {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
}

// API Response Types
export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

export interface AuditLog {
  createdAt: string;
  details: { email: string; source: string; timestamp: string };
  eventType: "LOGIN" | "LOGOUT" | "ROLE_CHANGE";
  id: string;
  ip?: string;
  userAgent: string;
}

export interface UserProfile {
  user: UserDB;
  roles: Role[];
  recent_audits: Array<AuditLog>;
  auditSummary: {
    totalLogins: number;
    lastLoginDate?: string;
    roleChanges: number;
  };
}
