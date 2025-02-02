"use client";
import NavBar from "@/components/NavBar";
import ProtectedRoute from "@/components/ProtectedRoute.tsx";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/view/Dashboard";
import { useState } from "react";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <ProtectedRoute>
      <NavBar isOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Dashboard isOpen={isSidebarOpen} />
    </ProtectedRoute>
  );
}
