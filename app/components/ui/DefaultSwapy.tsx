"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { SlotItemMapArray, utils } from "swapy";
import {
  Briefcase,
  GraduationCap,
  Users,
  Building2,
  FileText,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";
import { SwapyItem, SwapySlot, SwapyLayout } from "../swapy";

export function ProjectViewsCard() {
  return (
    <div className="bg-[#37322F] rounded-2xl h-full p-6 flex flex-col justify-between shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-between">
        <div className="text-[#F7F1E8] text-sm font-semibold tracking-wide">Placement Highlights</div>
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-[#F7F1E8]" />
        </div>
      </div>

      <div className="mt-5">
        <div className="text-[#F7F1E8] text-4xl md:text-5xl font-semibold leading-none">₹7.5 LPA</div>
        <div className="text-[#F7F1E8]/80 text-sm mt-2">Highest package (2023–24)</div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white/10 p-3">
          <div className="text-[#F7F1E8]/70 text-xs">Average</div>
          <div className="text-[#F7F1E8] font-semibold">₹4.2 LPA</div>
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <div className="text-[#F7F1E8]/70 text-xs">Median</div>
          <div className="text-[#F7F1E8] font-semibold">₹3.75 LPA</div>
        </div>
      </div>
    </div>
  );
}
export function NewUsersCard() {
  return (
    <div className="bg-white rounded-2xl h-full p-6 flex flex-col justify-between border border-[rgba(55,50,47,0.12)] shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold tracking-wide text-[#37322F]">Internship Highlights</div>
          <div className="text-xs text-[#605A57] mt-1">Stipends & opportunities</div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#F7F1E8] flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-[#37322F]" />
        </div>
      </div>

      <div className="mt-5">
        <div className="text-4xl md:text-5xl font-semibold text-[#37322F] leading-none">₹25K</div>
        <div className="text-sm text-[#605A57] mt-2">Highest stipend per month</div>
      </div>

      <div className="mt-5 rounded-xl bg-[#F7F1E8] p-3">
        <div className="text-xs text-[#605A57]">Average stipend</div>
        <div className="text-[#37322F] font-semibold">₹6,952/month</div>
      </div>
    </div>
  );
}
export function TeamCard() {
  return (
    <div className="bg-[#1F3A5F] rounded-2xl p-6 h-full flex flex-col justify-between relative overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.14)]">
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
      <div className="absolute -left-10 -bottom-10 w-44 h-44 rounded-full bg-white/10" />

      <div className="relative flex items-center justify-between">
        <div className="text-white text-sm font-semibold tracking-wide">Recruiter Connect</div>
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
          <Building2 className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="relative mt-6">
        <div className="text-white text-4xl md:text-5xl font-semibold leading-none">40+ </div>
        <div className="text-white/80 text-sm mt-2">Companies engaged through fairs & drives</div>
      </div>

      <div className="relative mt-5 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white/10 p-3">
          <div className="text-white/70 text-xs">Roles</div>
          <div className="text-white font-semibold">25+</div>
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <div className="text-white/70 text-xs">Registrations</div>
          <div className="text-white font-semibold">550+</div>
        </div>
      </div>
    </div>
  );
}
export function AgencyCard() {
  return (
    <div className="bg-white rounded-2xl h-full p-6 border border-[rgba(55,50,47,0.12)] shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold tracking-wide text-[#37322F]">Placement Journey</div>
          <div className="text-xs text-[#605A57] mt-1">Prepare → Apply → Get hired</div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#F7F1E8] flex items-center justify-center">
          <ArrowUpRight className="w-5 h-5 text-[#37322F]" />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#F7F1E8] flex items-center justify-center text-sm font-semibold text-[#37322F]">1</div>
          <div>
            <div className="text-sm font-semibold text-[#37322F]">Prepare</div>
            <div className="text-xs text-[#605A57]">Profile, resume, aptitude & mock interviews</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#F7F1E8] flex items-center justify-center text-sm font-semibold text-[#37322F]">2</div>
          <div>
            <div className="text-sm font-semibold text-[#37322F]">Apply</div>
            <div className="text-xs text-[#605A57]">Register for drives, roles & deadlines</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#F7F1E8] flex items-center justify-center text-sm font-semibold text-[#37322F]">3</div>
          <div>
            <div className="text-sm font-semibold text-[#37322F]">Get Hired</div>
            <div className="text-xs text-[#605A57]">Assessments, interviews & offers</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function LogoCard() {
  return (
    <div className="bg-[#F7F1E8] rounded-2xl h-full p-6 border border-[rgba(55,50,47,0.12)] shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold tracking-wide text-[#37322F]">Training Modules</div>
          <div className="text-xs text-[#605A57] mt-1">Career readiness stack</div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center">
          <Users className="w-5 h-5 text-[#37322F]" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white p-3">
          <div className="text-xs font-semibold text-[#37322F]">Aptitude</div>
          <div className="text-xs text-[#605A57] mt-1">Logic & reasoning</div>
        </div>
        <div className="rounded-xl bg-white p-3">
          <div className="text-xs font-semibold text-[#37322F]">Resume</div>
          <div className="text-xs text-[#605A57] mt-1">ATS-ready profile</div>
        </div>
        <div className="rounded-xl bg-white p-3">
          <div className="text-xs font-semibold text-[#37322F]">Mock Interviews</div>
          <div className="text-xs text-[#605A57] mt-1">HR + technical</div>
        </div>
        <div className="rounded-xl bg-white p-3">
          <div className="text-xs font-semibold text-[#37322F]">Soft Skills</div>
          <div className="text-xs text-[#605A57] mt-1">Communication</div>
        </div>
      </div>
    </div>
  );
}
export function UserTrustCard() {
  return (
    <div className="bg-[#0F2A1D] rounded-2xl h-full p-6 flex flex-col justify-between shadow-[0_18px_45px_rgba(0,0,0,0.14)]">
      <div className="flex items-center justify-between">
        <div className="text-[#F7F1E8] text-sm font-semibold tracking-wide">Student Support</div>
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
          <Users className="w-5 h-5 text-[#F7F1E8]" />
        </div>
      </div>

      <div className="mt-6">
        <div className="text-[#F7F1E8] text-4xl md:text-5xl font-semibold leading-none">Equal</div>
        <div className="text-[#F7F1E8]/80 text-sm mt-2">Opportunity & career guidance for all eligible students.</div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white/10 p-3">
          <div className="text-[#F7F1E8]/70 text-xs">Workshops</div>
          <div className="text-[#F7F1E8] font-semibold">Skill sessions</div>
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <div className="text-[#F7F1E8]/70 text-xs">Mentorship</div>
          <div className="text-[#F7F1E8] font-semibold">Alumni & experts</div>
        </div>
      </div>
    </div>
  )
}
export function FontCard() {
  return (
    <div className="bg-[#2C2A28] rounded-2xl h-full p-6 shadow-[0_18px_45px_rgba(0,0,0,0.14)]">
      <div className="flex items-center justify-between">
        <div className="text-[#F7F1E8] text-sm font-semibold tracking-wide">Reports & Downloads</div>
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
          <FileText className="w-5 h-5 text-[#F7F1E8]" />
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="rounded-xl bg-white/10 p-1.5">
          <div className="text-[#F7F1E8] font-semibold text-sm">Placement Track Record</div>
          <div className="text-[#F7F1E8]/70 text-xs mt-1">Year-wise outcomes & stats</div>
        </div>
        <div className="rounded-xl bg-white/10 p-1.5">
          <div className="text-[#F7F1E8] font-semibold text-sm">Internship Track Record</div>
          <div className="text-[#F7F1E8]/70 text-xs mt-1">Stipends and domains</div>
        </div>
        <div className="rounded-xl bg-white/10 p-1.5">
          <div className="text-[#F7F1E8] font-semibold text-sm">Event Reports</div>
          <div className="text-[#F7F1E8]/70 text-xs mt-1">PROSPECT, COMPITO, seminars</div>
        </div>
      </div>
    </div>
  );
}
export function DesignIndustryCard() {
  return (
    <div className="bg-white rounded-2xl h-full p-6 border border-[rgba(55,50,47,0.12)] shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold tracking-wide text-[#37322F]">Events & Seminars</div>
          <div className="text-xs text-[#605A57] mt-1">Industry exposure</div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#F7F1E8] flex items-center justify-center">
          <CalendarDays className="w-5 h-5 text-[#37322F]" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-[#F7F1E8] p-3">
          <div className="text-xs font-semibold text-[#37322F]">PROSPECT'25</div>
          <div className="text-xs text-[#605A57] mt-1">550+ registrations</div>
        </div>
        <div className="rounded-xl bg-[#F7F1E8] p-3">
          <div className="text-xs font-semibold text-[#37322F]">COMPITO'24</div>
          <div className="text-xs text-[#605A57] mt-1">580+ registrations</div>
        </div>
        <div className="rounded-xl bg-[#F7F1E8] p-3">
          <div className="text-xs font-semibold text-[#37322F]">Interview Seminar</div>
          <div className="text-xs text-[#605A57] mt-1">75+ attendees</div>
        </div>
        <div className="rounded-xl bg-[#F7F1E8] p-3">
          <div className="text-xs font-semibold text-[#37322F]">UPES Session</div>
          <div className="text-xs text-[#605A57] mt-1">60+ attendees</div>
        </div>
      </div>
    </div>
  );
}
export function CardBalanceCard() {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl h-full p-6 border border-[rgba(55,50,47,0.12)] shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold tracking-wide text-[#37322F]">Our Commitment</div>
          <div className="text-xs text-[#605A57] mt-1">Ethics & transparency</div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#F7F1E8] flex items-center justify-center">
          <FileText className="w-5 h-5 text-[#37322F]" />
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {[
          "Transparent processes",
          "Equal opportunities",
          "Professional environment",
          "Strong recruiter relationships",
          "Student-first support",
        ].map((t) => (
          <div key={t} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#37322F]" />
            <div className="text-sm text-[#37322F]">{t}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


type Item = {
  id: string;
  title: string;
  widgets: React.ReactNode;
  className?: string;
};

const initialItems: Item[] = [
  {
    id: "1",
    title: "1",
    widgets: <ProjectViewsCard />,
    className: "lg:col-span-4 sm:col-span-7 col-span-12",
  },
  { id: "2", title: "2", widgets: <NewUsersCard  />, className: "lg:col-span-3 sm:col-span-5 col-span-12" },
  { id: "3", title: "3", widgets: <DesignIndustryCard />, className: "lg:col-span-5 sm:col-span-5 col-span-12" },
  { id: "4", title: "4", widgets: <TeamCard/>, className: "lg:col-span-5 sm:col-span-7 col-span-12" },
  { id: "5", title: "5", widgets: <LogoCard />, className: "lg:col-span-4 sm:col-span-6 col-span-12" },
  { id: "6", title: "6", widgets: <FontCard />, className: "lg:col-span-3 sm:col-span-6 col-span-12" },
  {
    id: "7",
    title: "7",
    widgets: <AgencyCard />,
    className: "lg:col-span-4 sm:col-span-5 col-span-12",
  },
  { id: "8", title: "8", widgets: <UserTrustCard />, className: "lg:col-span-4 sm:col-span-7 col-span-12" },
  { id: "9", title: "9", widgets: <CardBalanceCard />, className: "lg:col-span-4 sm:col-span-12 col-span-12" },
];


function DefaultSwapy() {
  const [slotItemMap, setSlotItemMap] = useState<SlotItemMapArray>(
    utils.initSlotItemMap(initialItems, "id")
  );

  const slottedItems = useMemo(
    () => utils.toSlottedItems(initialItems, "id", slotItemMap),
    [initialItems, slotItemMap]
  );

  return (
    <SwapyLayout
      id="swapy"
      className="w-full"
      config={{
        swapMode: "hover",
      }}
      onSwap={(event: { newSlotItemMap: { asArray: any; }; }) => {
        // console.log("Swap detected!", event.newSlotItemMap.asArray);
      }}
    >
      <div className="grid w-full  grid-cols-12 gap-2 md:gap-6 py-4">
        {slottedItems.map(({ slotId, itemId }) => {
          const item = initialItems.find((i) => i.id === itemId);

          return (
            <SwapySlot
              key={slotId}
              className={`swapyItem rounded-2xl h-[260px] sm:h-[280px] ${item?.className}`}
              id={slotId}
            >
              <SwapyItem
                id={itemId}
                className="relative rounded-2xl w-full h-full text-sm"
                key={itemId}
              >
                {item?.widgets}
              </SwapyItem>
            </SwapySlot>
          );
        })}
      </div>
    </SwapyLayout>
  );
}

export default DefaultSwapy;
