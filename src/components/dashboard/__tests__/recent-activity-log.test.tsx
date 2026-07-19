import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { RecentActivityLog } from "../recent-activity-log";

describe("RecentActivityLog", () => {
  it("renders section title", () => {
    render(<RecentActivityLog />);
    expect(screen.getByText("最近活動日誌")).toBeDefined();
  });

  it("renders activity entries", () => {
    render(<RecentActivityLog />);
    expect(screen.getByText("新申請案件 #REQ-8291")).toBeDefined();
    expect(screen.getByText("案件 #REQ-8289 已標記為完成")).toBeDefined();
    expect(screen.getByText("案件 #REQ-8290 狀態變更")).toBeDefined();
  });

  it("renders timestamps", () => {
    render(<RecentActivityLog />);
    expect(screen.getByText("10 分鐘前")).toBeDefined();
  });
});
