import { MainLayout } from "../components/layout/MainLayout";
import LeavePoliciesList from "../components/policies/LeavePoliciesList";

export function LeavePoliciesPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <LeavePoliciesList />
      </div>
    </MainLayout>
  );
}
