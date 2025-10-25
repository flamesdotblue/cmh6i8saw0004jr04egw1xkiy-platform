import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 grid place-items-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">VoxaSurvey</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex px-3 py-1.5 rounded-md border border-white/15 text-white/90 hover:text-white hover:bg-white/5 transition">Sign in</button>
          <button className="inline-flex px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">Get started</button>
        </div>
      </div>
    </header>
  );
}
