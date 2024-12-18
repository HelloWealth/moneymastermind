import { DollarSign } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-primary">
      <DollarSign className="h-8 w-8" />
      <span className="text-2xl font-bold">HelloWealth</span>
    </div>
  );
};