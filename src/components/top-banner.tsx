"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";

export function TopBanner() {
  const [open, setOpen] = useState(true);

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <div
      className={`w-full bg-[#1a0f4d] text-white py-3 px-4 flex items-center justify-center relative ${open ? "block" : "hidden"}`}
    >
      <div className="text-center text-sm">
        Unlock the #1 AI powered influencer marketing tool in the world
        <Link
          href="/try-free"
          className="ml-2 text-white hover:text-white/90 font-medium inline-flex items-center"
        >
          Try for free
          <span className="ml-2">→</span>
        </Link>
      </div>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
        <X className="h-4 w-4" onClick={closeHandler} />
        <span className="sr-only">Close banner</span>
      </button>
    </div>
  );
}
