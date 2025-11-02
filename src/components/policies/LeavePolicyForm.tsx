import { useState } from "react";
import { XCircle, AlertCircle } from "lucide-react";

interface LeavePolicyFormProps {
  initialData?: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

export default function LeavePolicyForm({
  initialData,
  onClose,
  onSave,
}: LeavePolicyFormProps) {
  const [form, setForm] = useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
    default_days: initialData?.default_days || 0,
    requires_approval: initialData?.requires_approval || false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [target.name]: target.checked }));
    } else {
      setForm((prev) => ({ ...prev, [target.name]: target.value }));
    }
  };

  // 🔍 Validation function
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) {
      newErrors.name = "Policy name is required.";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Policy name must be at least 3 characters.";
    }

    if (form.description.trim().length > 200) {
      newErrors.description = "Description can't exceed 200 characters.";
    }

    const days = Number(form.default_days);
    if (!days || isNaN(days)) {
      newErrors.default_days = "Default days must be a valid number.";
    } else if (days < 1 || days > 60) {
      newErrors.default_days = "Default days must be between 1 and 60.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      onSave(form);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative border border-gray-200">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <XCircle className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {initialData ? "Edit Leave Policy" : "New Leave Policy"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Policy Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${
                errors.name
                  ? "border-red-400 focus:ring-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${
                errors.description
                  ? "border-red-400 focus:ring-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.description}
              </p>
            )}
          </div>

          {/* Default Days */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Days
            </label>
            <input
              type="number"
              name="default_days"
              value={form.default_days}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${
                errors.default_days
                  ? "border-red-400 focus:ring-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.default_days && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.default_days}
              </p>
            )}
          </div>

          {/* Requires Approval */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="requires_approval"
              checked={form.requires_approval}
              onChange={handleChange}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label className="text-sm text-gray-700">
              Requires approval for requests
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-5 py-2 rounded-lg text-white transition-colors ${
                isSubmitting
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
