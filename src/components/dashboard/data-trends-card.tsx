"use client";

import { BarChart3 } from "lucide-react";

import { Card } from "@/components/ui/card";

export function DataTrendsCard() {
  return (
    <Card className="p-5">
      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
        <BarChart3 className="size-5" />
      </div>
      <h3 className="mt-3 text-lg font-semibold">數據趨勢分析</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        整合過去 30 天的申請負載趨勢。系統已自動優化資源配置。
      </p>
      <div className="relative mt-4 h-48 overflow-hidden rounded-lg bg-gradient-to-t from-primary/5 to-primary/20">
        {/* Vertical trend bars */}
        <div className="absolute inset-0 flex items-end justify-around px-8 pb-6">
          {[
            { value: 30, label: "期初" },
            { value: 55, label: "期中" },
            { value: 80, label: "現在" },
          ].map((bar) => (
            <div
              key={bar.label}
              className="w-10 rounded-t-md bg-primary/20"
              style={{ height: `${bar.value}%` }}
            />
          ))}
        </div>
        {/* Trend line SVG overlay */}
        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 300 192"
          preserveAspectRatio="none"
          role="img"
          aria-label="30 天申請負載趨勢圖"
        >
          <title>30 天申請負載趨勢圖</title>
          <defs>
            <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--color-primary)"
                stopOpacity="0.3"
              />
              <stop
                offset="100%"
                stopColor="var(--color-primary)"
                stopOpacity="0.05"
              />
            </linearGradient>
          </defs>
          <path
            d="M0,160 L75,120 L150,80 L225,40 L300,50"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-60"
          />
          <path
            d="M0,160 L75,120 L150,80 L225,40 L300,50 L300,192 L0,192 Z"
            fill="url(#trendGrad)"
          />
        </svg>
      </div>
    </Card>
  );
}
