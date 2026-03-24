import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-[#181818]/57 border-t border-primary/10 backdrop-blur-xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-8 py-16 max-w-7xl mx-auto w-full">
        <div className="space-y-6">
          <div className="text-lg font-bold text-primary font-headline uppercase tracking-widest">
            Thumos Tech
          </div>
          <p className="font-body text-sm leading-relaxed text-zinc-400">
            Defending the digital frontier with unyielding precision. Our mission is to ensure your data remains
            your most secure asset.
          </p>
          <SocialLinks compact />
        </div>
        <div className="space-y-6">
          <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-primary">
            Resources
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="font-manrope text-sm tracking-widest uppercase text-zinc-500 hover:text-primary hover:underline underline-offset-4 transition-opacity opacity-80"
                href="#"
              >
                Security Audit
              </Link>
            </li>
            <li>
              <Link
                className="font-manrope text-sm tracking-widest uppercase text-zinc-500 hover:text-primary hover:underline underline-offset-4 transition-opacity opacity-80"
                href="#"
              >
                Threat Map
              </Link>
            </li>
            <li>
              <Link
                className="font-manrope text-sm tracking-widest uppercase text-zinc-500 hover:text-primary hover:underline underline-offset-4 transition-opacity opacity-80"
                href="#"
              >
                Documentation
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-primary">
            Legal
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="font-manrope text-sm tracking-widest uppercase text-zinc-500 hover:text-primary hover:underline underline-offset-4 transition-opacity opacity-80"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="font-manrope text-sm tracking-widest uppercase text-zinc-500 hover:text-primary hover:underline underline-offset-4 transition-opacity opacity-80"
                href="#"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                className="font-manrope text-sm tracking-widest uppercase text-zinc-500 hover:text-primary hover:underline underline-offset-4 transition-opacity opacity-80"
                href="#"
              >
                Compliance
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8 text-center md:text-left">
        <p className="font-manrope text-sm tracking-widest uppercase text-zinc-500">
          Copyright 2026 Thumos Tech.
        </p>
        <div className="flex gap-8">
          <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-primary">
            System Status: All Operational
          </span>
        </div>
      </div>
    </footer>
  );
}
