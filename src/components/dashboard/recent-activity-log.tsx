"use client";

import { Activity } from "lucide-react";

import { Card } from "@/components/ui/card";
import { mockActivityLog } from "@/lib/types/dashboard";

export function RecentActivityLog() {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center gap-2">
        <Activity className="size-4 text-muted-foreground" />
        <h3 className="text-base font-semibold">最近活動日誌</h3>
      </div>
      <div className="flex flex-col gap-4">
        {mockActivityLog.map((entry) => (
          <div
            key={entry.id}
            className="relative border-l-2 border-border pl-4"
          >
            <div className="absolute left-[-5px] top-1 size-2 rounded-full bg-primary" />
            <p className="text-sm font-medium">{entry.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {entry.description}
            </p>
            <p className="mt-1 text-xs text-muted-foreground/60">
              {entry.timeAgo}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
