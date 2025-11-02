import { MainLayout } from "../components/layout/MainLayout";
import PayrollReport from "../components/reports/PayrollReport";

export function ReportsPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <PayrollReport />
      </div>
    </MainLayout>
  );
}
