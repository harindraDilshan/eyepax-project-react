import React from "react";

export const LoginPage: React.FC = () => {
  const handleLogin = () => {
    // Redirect user to Spring Boot OAuth2 (which then redirects to Cognito)
    window.location.href = "http://localhost:8080/oauth2/authorization/cognito";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="p-10 bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-3xl font-bold text-white tracking-wide mb-8 text-center">
          WELCOME TO <span className="text-indigo-400">ADMIN DASHBOARD</span>
        </h2>
        <button
          onClick={handleLogin}
          className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 hover:shadow-lg transition-all duration-300"
        >
          Login
        </button>
      </div>
      <p className="text-gray-500 text-sm mt-8">
        Powered by <span className="text-indigo-400">AWS Cognito</span> & Spring Boot
      </p>
    </div>
  );
};
