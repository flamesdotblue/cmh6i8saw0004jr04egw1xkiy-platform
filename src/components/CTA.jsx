import React from 'react';

export default function CTA() {
  return (
    <section id="pricing" className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_100%,rgba(16,185,129,0.08)_0%,rgba(17,24,39,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-8 md:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold">Launch your first AI survey in minutes</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Start free with 50 responses. Upgrade anytime for advanced targeting, integrations, and unlimited dashboards.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">
              Create free account
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 transition">
              Book a demo
            </a>
          </div>
          <div className="mt-6 text-xs text-white/60">No credit card required • Cancel anytime</div>
        </div>

        <footer className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div>© {new Date().getFullYear()} VoxaSurvey</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
