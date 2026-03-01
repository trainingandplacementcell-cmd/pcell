"use client";

import { useState } from "react";
import CloudinaryUpload from "@/app/components/CloudinaryUpload";

export default function AddMemberModal({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    position: "",
    year: "",
    course: "",
    about: "",
    image: "",
    linkedin: "",
    email: "",
    googleSheetUrl: "",
  });

  const cleanForm = (data: Record<string, string>) => {
    return Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== "" && value !== null
      )
    );
  };

  const submit = async () => {
    if (!form.name.trim() || !form.position.trim()) {
      alert("Name and Position are required");
      return;
    }

    const { googleSheetUrl, id, ...dbForm } = form;
    const payload = cleanForm(dbForm);

    const res = await fetch("/api/admin/team", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data?.error || "Failed to add member");
      return;
    }

    onSuccess();
    onClose();
  };

  const handleInputChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-neutral-800 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold text-white mb-6">
          Add New Team Member
        </h2>

        <div className="space-y-4">
          {/* Basic Info Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Name *
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Position *
              </label>
              <input
                type="text"
                placeholder="e.g., President, Coordinator"
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.position}
                onChange={(e) => handleInputChange("position", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Year
              </label>
              <input
                type="text"
                placeholder="e.g., 3rd Year"
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.year}
                onChange={(e) => handleInputChange("year", e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Course
              </label>
              <input
                type="text"
                placeholder="e.g., B.Com (Hons)"
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.course}
                onChange={(e) => handleInputChange("course", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              About
            </label>
            <textarea
              placeholder="Brief description about the member..."
              rows={3}
              className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.about}
              onChange={(e) => handleInputChange("about", e.target.value)}
            />
          </div>

          {/* Profile Photo Upload */}
          <CloudinaryUpload
            onUpload={(url) => handleInputChange("image", url)}
            value={form.image}
            folder="team"
            entityName={form.name || "unnamed-member"}
            label="Profile Photo"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                LinkedIn URL
              </label>
              <input
                type="url"
                placeholder="https://linkedin.com/in/username"
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.linkedin}
                onChange={(e) => handleInputChange("linkedin", e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
          </div>

          <hr className="border-neutral-700 my-4" />

          {/* Google Sheets Sync */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-neutral-300">
              Google Sheets Sync
            </h3>

            <input
              placeholder="Paste Google Sheets share link"
              className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.googleSheetUrl}
              onChange={(e) => handleInputChange("googleSheetUrl", e.target.value)}
            />

            <p className="text-xs text-neutral-400">
              Sheet must be public or shared with view access.
            </p>

            <button
              disabled={!form.googleSheetUrl}
              onClick={async () => {
                alert("Google Sheets sync coming next 👀");
              }}
              className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition"
            >
              Sync from Google Sheets
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-neutral-700">
            <button
              onClick={submit}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              Add Member
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-neutral-600 text-white rounded-lg hover:bg-neutral-500 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}