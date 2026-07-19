"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Download, Filter, MoreVertical } from "lucide-react";
import { useMemo } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  type DashboardRequest,
  mockRequests,
  type RequestStatus,
} from "@/lib/types/dashboard";

const statusStyles: Record<string, string> = {
  pending:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-0 rounded-full",
  in_progress:
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-0 rounded-full",
  resolved:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-0 rounded-full",
};

const columns: ColumnDef<DashboardRequest>[] = [
  {
    accessorKey: "displayId",
    header: "編號",
    cell: ({ getValue }) => (
      <span className="text-sm font-medium">{getValue<string>()}</span>
    ),
  },
  {
    accessorKey: "userName",
    header: "申請用戶",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar className="size-8">
          <AvatarFallback>{row.original.userInitials}</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-sm font-medium">{row.original.userName}</div>
          <div className="text-xs text-muted-foreground">
            {row.original.userEmail}
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "typeLabel",
    header: "類型",
    cell: ({ getValue }) => (
      <span className="text-sm">{getValue<string>()}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "狀態",
    cell: ({ getValue, row }) => {
      const status = getValue<RequestStatus>();
      return (
        <Badge className={statusStyles[status] ?? ""}>
          {row.original.statusLabel}
        </Badge>
      );
    },
  },
  {
    accessorKey: "date",
    header: "日期",
    cell: ({ getValue }) => (
      <span className="text-sm">{getValue<string>()}</span>
    ),
  },
  {
    id: "actions",
    header: "操作",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger
          className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
        >
          <MoreVertical className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>檢視</DropdownMenuItem>
          <DropdownMenuItem>編輯</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">刪除</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function RecentRequestsTable() {
  const data = useMemo(() => mockRequests, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold">近期申請案件</h3>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Filter data-icon="inline-start" />
            篩選
          </Button>
          <Button variant="ghost" size="sm">
            <Download data-icon="inline-start" />
            匯出
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader className="bg-muted/50">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          顯示 1 到 {mockRequests.length} 筆，共 {mockRequests.length} 筆
        </span>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
