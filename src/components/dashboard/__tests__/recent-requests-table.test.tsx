import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { RecentRequestsTable } from "../recent-requests-table";

describe("RecentRequestsTable", () => {
  it("renders section title", () => {
    render(<RecentRequestsTable />);
    expect(screen.getByText("近期申請案件")).toBeDefined();
  });

  it("renders filter and export buttons", () => {
    render(<RecentRequestsTable />);
    expect(screen.getByText("篩選")).toBeDefined();
    expect(screen.getByText("匯出")).toBeDefined();
  });

  it("renders table headers", () => {
    render(<RecentRequestsTable />);
    expect(screen.getByText("編號")).toBeDefined();
    expect(screen.getByText("申請用戶")).toBeDefined();
    expect(screen.getByText("類型")).toBeDefined();
    expect(screen.getByText("狀態")).toBeDefined();
    expect(screen.getByText("日期")).toBeDefined();
    expect(screen.getByText("操作")).toBeDefined();
  });

  it("renders request data", () => {
    render(<RecentRequestsTable />);
    expect(screen.getByText("#REQ-8291")).toBeDefined();
    expect(screen.getByText("#REQ-8290")).toBeDefined();
    expect(screen.getByText("系統權限申請")).toBeDefined();
  });

  it("renders pagination info", () => {
    render(<RecentRequestsTable />);
    expect(screen.getByText(/顯示 1 到/)).toBeDefined();
  });
});
