export type RequestStatus = "pending" | "in_progress" | "resolved" | "closed";

export type RequestType =
  | "system_access"
  | "maintenance"
  | "account_restore"
  | "license_update"
  | "other";

export interface DashboardRequest {
  id: string;
  displayId: string;
  userName: string;
  userEmail: string;
  userInitials: string;
  type: RequestType;
  typeLabel: string;
  status: RequestStatus;
  statusLabel: string;
  date: string;
}

export interface StatCardData {
  label: string;
  value: string;
  trend: string;
  trendDirection: "up" | "down" | "flat";
  icon: string;
}

export interface ActivityLogEntry {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  timeAgo: string;
}

export interface UserPermission {
  label: string;
  icon: string;
}

export const mockRequests: DashboardRequest[] = [
  {
    id: "1",
    displayId: "#REQ-8291",
    userName: "王小明",
    userEmail: "wang.m@email.com",
    userInitials: "WL",
    type: "system_access",
    typeLabel: "系統權限申請",
    status: "pending",
    statusLabel: "Pending",
    date: "2023-11-21",
  },
  {
    id: "2",
    displayId: "#REQ-8290",
    userName: "張淑芬",
    userEmail: "s.chang@email.com",
    userInitials: "JS",
    type: "maintenance",
    typeLabel: "設備維修回報",
    status: "in_progress",
    statusLabel: "In Progress",
    date: "2023-11-20",
  },
  {
    id: "3",
    displayId: "#REQ-8289",
    userName: "李浩然",
    userEmail: "hao.li@email.com",
    userInitials: "LH",
    type: "account_restore",
    typeLabel: "帳號異常修復",
    status: "resolved",
    statusLabel: "Resolved",
    date: "2023-11-19",
  },
  {
    id: "4",
    displayId: "#REQ-8288",
    userName: "陳雅筑",
    userEmail: "y.chen@email.com",
    userInitials: "CY",
    type: "license_update",
    typeLabel: "軟體授權更新",
    status: "resolved",
    statusLabel: "Resolved",
    date: "2023-11-18",
  },
];

export const mockStatCards: StatCardData[] = [
  {
    label: "待處理",
    value: "24",
    trend: "12% 比上週",
    trendDirection: "up",
    icon: "pending",
  },
  {
    label: "進行中",
    value: "48",
    trend: "持平狀態",
    trendDirection: "flat",
    icon: "autorenew",
  },
  {
    label: "已完成",
    value: "1,284",
    trend: "5% 平均處理時間",
    trendDirection: "down",
    icon: "check_circle",
  },
];

export const mockActivityLog: ActivityLogEntry[] = [
  {
    id: "1",
    title: "新申請案件 #REQ-8291",
    description: "由 王小明 於 10 分鐘前提交。等待初步審核中。",
    timestamp: "2023-11-21T09:00:00",
    timeAgo: "10 分鐘前",
  },
  {
    id: "2",
    title: "案件 #REQ-8289 已標記為完成",
    description: "處理人: Admin User。解決方案：權限重置與郵件驗證成功。",
    timestamp: "2023-11-20T16:30:00",
    timeAgo: "2 小時前",
  },
  {
    id: "3",
    title: "案件 #REQ-8290 狀態變更",
    description: "狀態由 Pending 變更為 In Progress。負責部門：技術支持二組。",
    timestamp: "2023-11-20T14:00:00",
    timeAgo: "4 小時前",
  },
];

export const mockUserPermissions: UserPermission[] = [
  { label: "系統管理權限", icon: "verified_user" },
  { label: "數據分析存取", icon: "analytics" },
];
