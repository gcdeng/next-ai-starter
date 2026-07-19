import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { UserPermissionCard } from "../user-permission-card";

describe("UserPermissionCard", () => {
  it("renders title and badge", () => {
    render(<UserPermissionCard />);
    expect(screen.getByText("帳戶權限")).toBeDefined();
    expect(screen.getByText("ACTIVE")).toBeDefined();
  });

  it("renders permission items", () => {
    render(<UserPermissionCard />);
    expect(screen.getByText("系統管理權限")).toBeDefined();
    expect(screen.getByText("數據分析存取")).toBeDefined();
  });

  it("renders last login text", () => {
    render(<UserPermissionCard />);
    expect(screen.getByText(/最後登錄/)).toBeDefined();
  });
});
