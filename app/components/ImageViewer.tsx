"use client";

import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface ImageViewerProps {
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export default function ImageViewer({ imageUrl, title, onClose }: ImageViewerProps) {
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

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
      >
        <FaTimes size={24} />
      </button>

      {/* Image container */}
      <div
        className="relative max-w-5xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
        {title && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
          </div>
        )}
      </div>
    </div>
  );
}