import React from "react";

export const LoginPage: React.FC = () => {
  const handleLogin = () => {
    // Redirect user to Spring Boot OAuth2 (which then redirects to Cognito)
    window.location.href = "http://localhost:8080/oauth2/authorization/cognito";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>
        <button
          onClick={handleLogin}
          className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Login with Cognito
        </button>
      </div>
    </div>
  );
};

