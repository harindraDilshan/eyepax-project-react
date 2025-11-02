import { useEffect, useState } from "react";
import { getPolicies, updatePolicy, createPolicy } from "../../services/api";
import { PlusCircle, Edit, FileText } from "lucide-react";
import LeavePolicyForm from "./LeavePolicyForm";

interface Policy {
  id: string;
  name: string;
  description: string;
  default_days: number;
  requires_approval: boolean;
  created_at?: string;
}

export default function LeavePoliciesList() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [selected, setSelected] = useState<Policy | null>(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadPolicies();
  }, []);

  const loadPolicies = async () => {
    try {
      setLoading(true);
      const data = await getPolicies();
      setPolicies(data);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (formData: Partial<Policy>) => {
    if (selected) await updatePolicy(selected.id, formData);
    else await createPolicy(formData as any);
    setShowForm(false);
    setSelected(null);
    loadPolicies();
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-indigo-600" />
          Leave Policies
        </h2>
        <button
          onClick={() => {
            setSelected(null);
            setShowForm(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <PlusCircle className="w-4 h-4" /> New Policy
        </button>
      </div>

      {policies.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No policies available</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50 text-sm text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Name</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
                <th className="px-4 py-3 text-center font-medium">Default Days</th>
                <th className="px-4 py-3 text-center font-medium">Approval</th>
                <th className="px-4 py-3 text-center font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {policies.map((p) => (
                <tr
                  key={p.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-4 py-3">{p.description}</td>
                  <td className="px-4 py-3 text-center">{p.default_days}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        p.requires_approval
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {p.requires_approval ? "Required" : "Not Required"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => {
                        setSelected(p);
                        setShowForm(true);
                      }}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <Edit className="w-4 h-4 mr-1" /> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <LeavePolicyForm
          initialData={selected}
          onClose={() => setShowForm(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
