import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import React from "react";

export default function DashboardLayout({ children }) {
  const renderedChildren = React.Children.toArray(children);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-900">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-auto p-6 bg-gray-800/50 text-amber-50">
          {renderedChildren}
        </main>
      </div>
    </div>
  );
}
