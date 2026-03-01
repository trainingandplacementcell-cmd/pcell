"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

type TeamMember = {
  id: string;
  name: string;
  position: string;
  year?: string | null;
  course?: string | null;
  about?: string | null;
  image?: string | null;
  linkedin?: string | null;
  github?: string | null;
  email?: string | null;
};

type TeamProps = {
  teamMembers: TeamMember[];
};

const fallbackImage = "/profilepic.png";

export default function Team({ teamMembers }: TeamProps) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative z-10">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900 dark:text-black">
            Our Team
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Student Leadership
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No team members found.
            </div>
          ) : (
            teamMembers.map((member) => {
              const imageUrl = member.image || fallbackImage;

              return (
                <div
                  key={member.id}
                  className="flex flex-col rounded-xl p-4 md:p-6 bg-transparent
                             backdrop-blur-[3px] shadow-lg border border-gray-200
                             dark:bg-neutral-900 dark:border-neutral-700
                             transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Header */}
                  <div className="flex items-center gap-x-4">
                    <img
                      className="w-24 h-24 object-cover rounded-lg border border-gray-200 dark:border-neutral-700"
                      src={imageUrl}
                      alt={member.name}
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                    />

                    <div className="grow">
                      <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                        {member.name}
                      </h3>

                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-400">
                        {member.position}
                      </p>

                      {member.course && (
                        <p className="text-xs text-gray-500 dark:text-neutral-400">
                          {member.course}
                        </p>
                      )}

                      {member.year && (
                        <p className="text-xs text-gray-500 dark:text-neutral-400">
                          {member.year}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* About */}
                  {member.about && (
                    <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
                      {member.about}
                    </p>
                  )}

                  {/* Social Icons */}
                  <div className="mt-4 flex gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="inline-flex justify-center items-center size-8 rounded-lg
                                   border border-blue-400 bg-blue-50 text-blue-700
                                   hover:bg-blue-200 transition"
                      >
                        <FaLinkedin />
                      </a>
                    )}

                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="inline-flex justify-center items-center size-8 rounded-lg
                                   border border-gray-400 bg-gray-50 text-gray-700
                                   hover:bg-gray-200 transition"
                      >
                        <FaGithub />
                      </a>
                    )}

                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label="Email"
                        className="inline-flex justify-center items-center size-8 rounded-lg
                                   border border-green-400 bg-green-50 text-green-700
                                   hover:bg-green-200 transition"
                      >
                        <FaEnvelope />
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}