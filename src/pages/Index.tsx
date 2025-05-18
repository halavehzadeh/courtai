
import { DashboardCards } from "@/components/dashboard/DashboardCards";
import { RecentCases } from "@/components/dashboard/RecentCases";

const Index = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      <div className="space-y-6">
        <DashboardCards />
        <RecentCases />
      </div>
    </>
  );
};

export default Index;
