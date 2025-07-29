import { Button } from "@/components/ui/button";
import { Filter, RefreshCw } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-foreground">Day Trader News Feed</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="gap-2">
          <Filter size={16} />
          Filter
        </Button>
        
        <Button variant="outline" size="sm" className="gap-2">
          <RefreshCw size={16} />
          Refresh
        </Button>
        
        <div className="flex items-center gap-2 ml-4">
          <div className="w-2 h-2 rounded-full bg-status-connected shadow-sm shadow-status-connected/50"></div>
          <span className="text-sm text-secondary">Connected</span>
        </div>
      </div>
    </header>
  );
};