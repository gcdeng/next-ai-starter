"use client";

import {
  CheckCircle2,
  Clock,
  Minus,
  RefreshCw,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import type { StatCardData } from "@/lib/types/dashboard";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  pending: Clock,
  autorenew: RefreshCw,
  check_circle: CheckCircle2,
};

const trendIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  up: TrendingUp,
  down: TrendingDown,
  flat: Minus,
};

const trendColorMap: Record<string, string> = {
  up: "text-emerald-600",
  down: "text-amber-600",
  flat: "text-muted-foreground",
};

export function StatCard({ data }: { data: StatCardData }) {
  const Icon = iconMap[data.icon] ?? Clock;
  const TrendIcon = trendIconMap[data.trendDirection] ?? Minus;

  return (
    <Card className="p-6">
      <div className="flex flex-col gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-muted p-2">
          <Icon className="size-5" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-semibold">{data.value}</span>
          <span className="text-sm text-muted-foreground">{data.label}</span>
        </div>
        <div
          className={cn(
            "flex items-center gap-1 text-sm",
            trendColorMap[data.trendDirection],
          )}
        >
          <TrendIcon className="size-4" />
          <span>{data.trend}</span>
        </div>
      </div>
    </Card>
  );
}
