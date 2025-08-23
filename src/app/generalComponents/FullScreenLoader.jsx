// components/FullScreenLoader.jsx
"use client";
import React from "react";

export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
    </div>
  );
}
