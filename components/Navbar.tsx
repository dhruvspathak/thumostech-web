"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-orange-500 border-b-2 border-orange-500 pb-1 font-manrope font-semibold tracking-tight text-sm"
      : "text-zinc-400 hover:text-orange-400 transition-colors duration-300 font-manrope font-semibold tracking-tight text-sm";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-xl">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto w-full relative">
        <Link href="/" className="text-2xl font-black text-orange-500 tracking-tighter font-headline">
          Thumos Tech
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          <Link className={getLinkClass("/solutions")} href="/solutions">
            Solutions
          </Link>
          <Link className={getLinkClass("/about")} href="/about">
            About
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="material-symbols-outlined text-orange-500 hover:text-orange-400 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
        <div className="bg-gradient-to-b from-orange-500/10 to-transparent h-[2px] w-full absolute bottom-0 left-0"></div>
      </div>
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0e0e0e]/95 backdrop-blur-3xl border-b border-orange-500/20 shadow-2xl z-40">
          <div className="flex flex-col px-4 py-8 space-y-6 items-center">
            <Link className={getLinkClass("/solutions")} href="/solutions" onClick={() => setIsMobileMenuOpen(false)}>
              Solutions
            </Link>
            <Link className={getLinkClass("/about")} href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
