"use client";

import { Plus } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { DataTrendsCard } from "@/components/dashboard/data-trends-card";
import { RecentActivityLog } from "@/components/dashboard/recent-activity-log";
import { RecentRequestsTable } from "@/components/dashboard/recent-requests-table";
import { StatCard } from "@/components/dashboard/stat-card";
import { UserPermissionCard } from "@/components/dashboard/user-permission-card";
import { Button } from "@/components/ui/button";
import { mockStatCards } from "@/lib/types/dashboard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
        {/* Left column — main content */}
        <div className="flex flex-col gap-6">
          {/* Welcome section */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                歡迎回來，這是目前的申請與狀態摘要報告。
              </p>
            </div>
            <Button className="gap-2 shrink-0">
              <Plus data-icon="inline-start" />
              Create New Request
            </Button>
          </div>

          {/* Stat cards row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {mockStatCards.map((card) => (
              <StatCard key={card.label} data={card} />
            ))}
          </div>

          {/* Recent requests table */}
          <RecentRequestsTable />

          {/* Data trends card */}
          <DataTrendsCard />
        </div>

        {/* Right column — sidebar panels */}
        <div className="flex flex-col gap-6">
          <UserPermissionCard />
          <RecentActivityLog />
        </div>
      </div>
    </DashboardLayout>
  );
}
