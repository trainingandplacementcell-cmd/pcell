"use client";

import Team from "./team";
import { useState } from "react";

type Teacher = {
  name: string;
  role: string;
  image: string;
};

const teachers = [
  {
    name: "Dr. Varun Bhandari",
    role: "Convener",
    image: "/teachers/Varun.jpeg",
    about:
      "A finance expert with a Ph.D. from Delhi School of Economics, Dr. Bhandari specializes in Corporate Governance and Green Investing. An internationally recognized researcher, he bridges advanced financial research with industry practice and, as TPC Convenor, creates high-impact career opportunities for SLC students.",
  },
  {
    name: "Dr. Megha Jain",
    role: "Faculty",
    image: "/teachers/Megha.jpg",
    about:
      "An FMS alumna with over a decade of industry experience, Dr. Megha Jain specializes in Climate Finance and Sustainability. She connects academic research with real-world policy and industry practice, serving as a strong mentor for students aspiring to impactful careers in finance and think tanks.",
  },
  {
    name: "Dr. Nidhi Jain",
    role: "Faculty",
    image: "/teachers/nidhijain.jpg",
    about:
      "A tech-driven finance expert with a Ph.D. in Behavioral Biases, Dr. Nidhi Jain holds two patents in Supply Chain and Banking. With 17+ international publications and a background in Computer Applications, she mentors students in navigating data-driven, modern financial systems through insights into investor psychology.",
  },
  {
    name: "Ms. Richa Tyagi",
    role: "Faculty",
    image: "/teachers/richa.jpeg",
    about:
      "An HR strategist and consumer behaviour researcher, Ms. Richa Tyagi brings strong management and counselling expertise to the TPC. With a background as a Senior Counsellor, she excels at identifying student potential and aligning it with industry demands, making her a key mentor for navigating today's competitive corporate landscape.",
  },
  {
    name: "Dr. Pawan Kumar Adewa",
    role: "Faculty",
    image: "/teachers/pawan.jpg",
    about:
      "A dedicated academician strengthening industry-academia collaboration and student employability. He actively guides students in professional skill development and career planning, ensuring they are well-prepared for the evolving global workforce.",
  },
  {
    name: "Dr. Kanika Solanki",
    role: "Faculty",
    image: "/teachers/kanika.jpg",
    about:
      "Specialising in student engagement, Dr. Kanika mentors students to align academic learning with professional goals. Her focus is on ensuring a smooth and confident transition from campus to corporate careers.",
  },
  {
    name: "Dr. Pranav Das",
    role: "Faculty",
    image: "/teachers/pranav.jpg",
    about:
      "A core member of the placement team, Dr. Pranav mentors students on career-specific strategies and niche opportunities. His guidance builds confidence and prepares students for high-stakes interviews",
  },
  {
    name: "Dr. Ankit Mittal",
    role: "Faculty",
    image: "/teachers/ankit.jpg",
    about:
      "He brings strong academic rigour to the placement process, helping students apply analytical and research skills to real industry needs. He also works closely with corporate partners to create diverse recruitment opportunities, guiding students toward long-term career growth.",
  },
  {
    name: "Ms. Shraddha Aggarwal",
    role: "Faculty",
    image: "/teachers/shraddha.jpeg",
    about:
      "She focuses on student outreach and coordinating recruitment drives, ensuring smooth placement operations. Her work connects student aspirations with corporate requirements, maximizing opportunities across campus.",
  },
  {
    name: "Ms. Radha Bhola",
    role: "Faculty",
    image: "/profilepic.png", // yet to be added
    about:
      "She specialises in soft-skills training and interview preparation, helping students refine communication, presentation, and group discussion skills. Her mentorship enables students to stand out in competitive recruitment processes.",
  },
  {
    name: "Ms. Ashani Dhar",
    role: "Faculty",
    image: "/teachers/ashani.jpg",
    about:
      "She strengthens corporate relations and expands the TPC's recruiter network, focusing on emerging industry trends to prepare students for future roles and ensure diverse internship and placement opportunities.",
  },
  {
    name: "Dr. Ravinder Kumar", // not found
    role: "Faculty",
    image: "/profilepic.png", // not found
    about:
      "He provides strategic career guidance, helping students build strong personal brands and confidently communicate their value to potential employers.",
  },
  {
    name: "Dr. Dipak Shukla", //not found
    role: "Faculty",
    image: "/teachers/dipak.jpeg",
    about:
      "He supports the smooth execution of placement activities and student mentorship programs, ensuring initiatives remain accessible and effective for the entire student community.",
  },
  {
    name: "Dr. Rohit Jahari",
    role: "Faculty",
    image: "/teachers/rohit.jpg", // found
    about:
      "Contributes to career counseling and training initiatives for student placements.", // notfound
  },
  {
    name: "Dr. Nidhi Mishra",
    role: "Faculty",
    image: "/teachers/nidhi.jpg", //found
    about:
      "Contributes to mentorship and placement support activities for students.", //not found
  },
];

export default function MobileTeam() {
  const [activeTeacher, setActiveTeacher] = useState<Teacher | null>(null);
  return (
    <div>
      <section className="relative w-full min-h-screen flex items-center justify-center bg-transparent px-5 lg:px-0">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-36 items-center text-center lg:text-left">
          {/* LEFT — Content */}
          <div className="space-y-6">
            <span className="text-sm uppercase tracking-widest text-black dark:text-white">
              Training & Placement Cell
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-gray-900">
              Faculty guiding
              <br />
              every placement journey
            </h1>

            <p className="text-base sm:text-lg text-black dark:text-white max-w-xl mx-auto lg:mx-0">
              Meet the academic leadership behind internships, placements,
              industry engagement, and career guidance at Shyam Lal College.
            </p>

            <div className="pt-6 flex items-center justify-center lg:justify-start gap-4">
              <span className="hidden sm:inline text-sm text-black dark:text-gray-100">
                Scroll to explore faculty
              </span>
              <div className="h-px w-24 bg-gray-300" />
            </div>
          </div>

          {/* RIGHT — Visual anchor */}
          <div className="block w-full">
            <div className="h-[320px] sm:h-[280px] lg:h-[420px] w-full rounded-2xl bg-gray-200 flex items-center justify-center ">
              <span className="text-gray-400 text-sm ">
                <img
                  src="team.png"
                  alt="none"
                  className=" w-full h-full px-5  "
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full px-5 py-16 bg-transparent">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Faculty Team
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Dedicated educators guiding placements and career development
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                onClick={() => setActiveTeacher(teacher)}
                className="rounded-2xl bg-white border border-gray-200 dark:border-slate-100  dark:bg-[#ffffff] shadow-sm p-5 cursor-pointer active:scale-[0.98] transition"
              >
                <div className="h-40 w-full rounded-xl bg-gray-100 mb-4 overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-lg text-gray-900 dark:text-[#000000] text-transform uppercase">
                  {teacher.name}
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-slate-800">
                  {teacher.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="outro-section relative  ">{/* <Team /> */}</section>

      {/* {activeTeacher && (
                <div
                  className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
                  onClick={() => setActiveTeacher(null)}
                >
                  
                  <div
                    className="relative w-full max-w-md rounded-2xl bg-white p-6 text-gray-900"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={activeTeacher.image}
                        alt={activeTeacher.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h2 className="text-lg font-semibold">{activeTeacher.name}</h2>
                        <p className="text-sm text-gray-500">{activeTeacher.role}</p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-700">
                      {activeTeacher.about}
                    </p>

                    <button
                      className="mt-6 w-full rounded-lg bg-gray-900 text-white py-2 text-sm font-medium"
                      onClick={() => setActiveTeacher(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )} */}
    </div>
  );
}
