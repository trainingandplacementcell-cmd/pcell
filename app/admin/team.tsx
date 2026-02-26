"use client";

import { useEffect, useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { StudentTeamMember } from "@/types/student";
import AddMemberModal from "./AddMemberModal";
import EditMemberModal from "./EditMemberModal";

export default function AdminTeam() {
  const [team, setTeam] = useState<StudentTeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<StudentTeamMember | null>(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch("/api/admin/team")
      .then((res) => res.json())
      .then(setTeam)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading team…</p>;

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Student Team</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setOpen(true)}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Add Member
          </button>
          <button
            onClick={() => setEditMode(!editMode)}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg"
          >
            {editMode ? "Done Editing" : "Edit Members"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {team.map((m) => (
          <div key={m.id} className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex gap-4">
              <img
                src={m.image || "/profilepic.png"}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium">{m.name}</h3>
                <p className="text-[11px] text-gray-400 break-all">ID: {m.id}</p>
                <p className="text-xs text-gray-500">{m.position}</p>
                <p className="text-xs text-gray-400">
                  {m.course} · {m.year}
                </p>
              </div>
            </div>

            {m.about && (
              <p className="mt-3 text-sm text-gray-600">{m.about}</p>
            )}

            <div className="mt-4 flex gap-3">
              {m.linkedin && (
                <a href={m.linkedin} target="_blank">
                  <FaLinkedin />
                </a>
              )}
              {m.email && (
                <a href={`mailto:${m.email}`}>
                  <FaEnvelope />
                </a>
              )}
            </div>
            {editMode && (
              <button
                onClick={() => {
                  setSelectedMember(m);
                  setEditOpen(true);
                }}
                className="text-xs underline text-gray-600"
              >
                Edit
              </button>
            )}
          </div>
        ))}

      </div>
        {open && (
        <AddMemberModal
          onClose={() => setOpen(false)}
          onSuccess={() => {
            fetch("/api/admin/team")
              .then((res) => res.json())
              .then(setTeam);
          }}
        />
        )}
        {editOpen && selectedMember && (
          <EditMemberModal
            member={selectedMember}
            onClose={() => {
              setEditOpen(false);
              setSelectedMember(null);
            }}
            onSuccess={() => {
              fetch("/api/admin/team")
                .then((res) => res.json())
                .then(setTeam);
              setEditOpen(false);
              setSelectedMember(null);
            }}
          />
        )}
      
    </section>

    
  );

  
}