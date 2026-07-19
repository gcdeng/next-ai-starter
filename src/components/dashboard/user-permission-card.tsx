"use client";

import { BarChart3, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { mockUserPermissions } from "@/lib/types/dashboard";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  verified_user: ShieldCheck,
  analytics: BarChart3,
};

export function UserPermissionCard() {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold">帳戶權限</h3>
        <Badge variant="outline" className="text-xs">
          ACTIVE
        </Badge>
      </div>
      <div className="flex flex-col gap-3">
        {mockUserPermissions.map((perm, index) => {
          const Icon = iconMap[perm.icon] ?? ShieldCheck;
          return (
            <div key={perm.label}>
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Icon className="size-4" />
                </div>
                <span className="text-sm">{perm.label}</span>
              </div>
              {index < mockUserPermissions.length - 1 && (
                <Separator className="mt-3" />
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        最後登錄: 2023-11-20 14:30
      </p>
    </Card>
  );
}
