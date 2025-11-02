"use client"

import type React from "react"
import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-900/60 backdrop-blur-sm">
          <div className="p-6">
            <div className="bg-gray-800/70 rounded-2xl shadow-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
