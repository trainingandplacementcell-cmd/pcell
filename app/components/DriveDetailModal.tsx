"use client";

import { useEffect } from "react";
import { FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { Drive } from "@/types/drive";

interface DriveDetailModalProps {
  drive: Drive;
  onClose: () => void;
  onImageClick?: () => void;
}

export default function DriveDetailModal({ drive, onClose, onImageClick }: DriveDetailModalProps) {
  // Close on escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  function getTypeLabel(type: string) {
    const labels: Record<string, string> = {
      placement: "Placement Drive",
      internship: "Internship Drive",
      ppt: "Pre-Placement Talk",
      other: "Other Event",
    };
    return labels[type] || type;
  }

  function formatDateRange(startDate: string, endDate: string) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const sameDay = start.toDateString() === end.toDateString();
    
    if (sameDay) {
      return start.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    
    const startStr = start.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
    const endStr = end.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    
    return `${startStr} - ${endStr}`;
  }

  const displayCompanies = drive.companies.slice(0, 6);
  const remainingCompanies = drive.companies.length - 6;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
        >
          <FaTimes size={20} />
        </button>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative bg-neutral-100 flex items-center justify-center min-h-[300px] lg:min-h-[600px]">
            {drive.imageUrl ? (
              <div 
                className="relative w-full h-full flex items-center justify-center p-4 cursor-zoom-in"
                onClick={onImageClick}
              >
                <img
                  src={drive.imageUrl}
                  alt={drive.title}
                  className="max-w-full max-h-[400px] lg:max-h-[550px] object-contain rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full opacity-70 hover:opacity-100 transition-opacity">
                  Click to zoom
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-neutral-400">
                <span className="text-6xl mb-2">🎓</span>
                <span className="text-sm">No image available</span>
              </div>
            )}
          </div>

          {/* Right - Details */}
          <div className="p-5 sm:p-6 lg:p-8 overflow-y-auto max-h-[50vh] lg:max-h-[95vh]">
            {/* Header */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F1E8] text-[#37322F] px-3 py-1.5 text-xs font-medium mb-3">
                {getTypeLabel(drive.type)}
              </span>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#37322F] leading-tight">
                {drive.title}
              </h2>
            </div>

            {/* Meta Info */}
            <div className="space-y-3 mb-5 text-sm">
              <div className="flex items-center gap-2 text-[#605A57]">
                <FaCalendarAlt className="text-[#37322F] flex-shrink-0" />
                <span>{formatDateRange(drive.startDate, drive.endDate)}</span>
              </div>
              
              {drive.location && (
                <div className="flex items-center gap-2 text-[#605A57]">
                  <FaMapMarkerAlt className="text-[#37322F] flex-shrink-0" />
                  <span>{drive.location}</span>
                </div>
              )}
            </div>

            {/* Description */}
            {drive.description && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[#37322F] mb-2 uppercase tracking-wide">
                  About the Event
                </h3>
                <p className="text-[#605A57] leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
                  {drive.description}
                </p>
              </div>
            )}

            {/* Companies */}
            {drive.companies.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[#37322F] mb-3 uppercase tracking-wide flex items-center gap-2">
                  <FaBuilding className="text-[#605A57]" />
                  Participating Companies
                  {remainingCompanies > 0 && (
                    <span className="text-xs font-normal text-[#605A57] normal-case">
                      (+{remainingCompanies} more)
                    </span>
                  )}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {displayCompanies.map((company) => (
                    <div
                      key={company.id}
                      className="flex flex-col items-center p-3 bg-[#F7F1E8] rounded-xl border border-[rgba(55,50,47,0.08)]"
                    >
                      {company.logoUrl ? (
                        <img
                          src={company.logoUrl}
                          alt={company.name}
                          className="h-10 w-auto object-contain mb-2"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-[#37322F] flex items-center justify-center text-white text-sm font-medium mb-2">
                          {company.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="text-xs text-[#37322F] text-center font-medium line-clamp-2">
                        {company.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}