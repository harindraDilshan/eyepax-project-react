import type React from "react";
import { useAuth } from "../context/AuthContext";
import { MainLayout } from "../components/layout/MainLayout";
import { DashboardContent } from "../components/dashboard/DashboardContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      localStorage.setItem("accessToken", token);
    } else {
      const storedToken = localStorage.getItem("accessToken");
      if (!storedToken) navigate("/login");
    }
  }, []);

  return (
    <MainLayout>
      <DashboardContent user={user} />
    </MainLayout>
  );
};
