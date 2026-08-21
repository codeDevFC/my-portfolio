"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface ResponsiveTabsProps {
  items: TabItem[];
  className?: string;
  defaultTab?: string;
}

export function ResponsiveTabs({ items, className, defaultTab }: ResponsiveTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id || "");

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-wrap gap-2 border-b border-border pb-2">
        {items.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"}
            onClick={() => setActiveTab(item.id)}
            className="text-sm"
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div className="mt-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              "transition-opacity duration-200",
              activeTab === item.id ? "block" : "hidden"
            )}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
