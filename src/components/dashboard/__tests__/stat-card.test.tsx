import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatCard } from "../stat-card";
import type { StatCardData } from "@/lib/types/dashboard";

describe("StatCard", () => {
  const baseData: StatCardData = {
    label: "待處理",
    value: "24",
    trend: "12% 比上週",
    trendDirection: "up",
    icon: "pending",
  };

  it("renders label and value", () => {
    render(<StatCard data={baseData} />);
    expect(screen.getByText("待處理")).toBeDefined();
    expect(screen.getByText("24")).toBeDefined();
  });

  it("renders trend text", () => {
    render(<StatCard data={baseData} />);
    expect(screen.getByText("12% 比上週")).toBeDefined();
  });

  it("renders with down trend", () => {
    const downData: StatCardData = {
      ...baseData,
      trendDirection: "down",
      icon: "check_circle",
    };
    render(<StatCard data={downData} />);
    expect(screen.getByText("12% 比上週")).toBeDefined();
  });

  it("renders with flat trend", () => {
    const flatData: StatCardData = {
      ...baseData,
      trendDirection: "flat",
      icon: "autorenew",
      trend: "持平狀態",
    };
    render(<StatCard data={flatData} />);
    expect(screen.getByText("持平狀態")).toBeDefined();
  });
});
