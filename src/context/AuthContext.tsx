import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { User } from "@/types";

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   roles?: string[];
//   [key: string]: any;
// }

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const res = await api.get<User>("/api/v1/me", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Fetched user:", res.data);
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    const checkTokenAndFetchUser = async () => {
      // Check if we have a token in the URL
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get("token");

      if (tokenFromUrl) {
        console.log("Found token in URL, storing it");
        // Store the token
        localStorage.setItem("accessToken", tokenFromUrl);
        // Clean up the URL
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }

      // Now fetch the user
      await fetchUser();
    };

    checkTokenAndFetchUser();
  }, []);

  const logout = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await api.get("/api/v1/sessions/logout", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const logoutUrl = response.data.logout_url;

      // Clear local auth state
      setUser(null);

      // Redirect to Cognito logout URL if provided, otherwise fallback to login page
      if (logoutUrl) {
        window.location.href = logoutUrl;
      }
      // } else {
      //   window.location.href = "/login";
      // }
    } catch (error) {
      console.error("Logout error:", error);
      // Even if there's an error, clear the local state and redirect to login
      setUser(null);
      // window.location.href = "/login";
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
