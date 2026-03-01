"use client";

import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface ImageLightboxProps {
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export default function ImageLightbox({ imageUrl, title, onClose }: ImageLightboxProps) {
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

  return (
    <div
      className="fixed inset-0 bg-black/95 flex items-center justify-center z-[60] p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
      >
        <FaTimes size={24} />
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
        
        {/* Title Overlay */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-b-lg">
            <h3 className="text-white text-xl font-semibold text-center">{title}</h3>
            <p className="text-white/70 text-sm text-center mt-1">Click anywhere to close</p>
          </div>
        )}
      </div>
    </div>
  );
}