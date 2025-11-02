import { MainLayout } from "../components/layout/MainLayout";
import LeaveRequestsList from "../components/approvals/LeaveRequestsList";

export function ApprovalsPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <LeaveRequestsList />
      </div>
    </MainLayout>
  );
}
