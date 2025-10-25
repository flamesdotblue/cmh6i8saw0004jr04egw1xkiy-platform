import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(17,24,39,0)_0%,rgba(17,24,39,0.3)_40%,rgba(17,24,39,0.75)_75%,rgba(17,24,39,1)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs text-white/80 mb-5">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 inline-block"></span>
            AI voice + visual surveys for marketers
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Identify exactly what your customers want
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto lg:mx-0">
            VoxaSurvey uses an AI voice agent and adaptive questions to uncover motivations, friction, and buying signals—then turns conversations into ready-to-act insights.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 transition">
              See how it works
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 text-left">
            {[
              { kpi: '92%', label: 'Completion rate' },
              { kpi: '3x', label: 'Faster insights' },
              { kpi: '24h', label: 'From survey to strategy' },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">{item.kpi}</div>
                <div className="text-white/70 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column illustrative panel */}
        <div className="relative">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 shadow-[0_0_120px_-20px_rgba(168,85,247,0.35)]">
            <div className="grid gap-4">
              <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                <div className="text-sm text-white/70">Live transcript</div>
                <div className="mt-2 h-28 overflow-hidden rounded-lg bg-neutral-900/80 p-3 text-white/80 text-sm leading-relaxed">
                  “I usually compare options on mobile and abandon when shipping looks high. I care about fast delivery and clear pricing.”
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                  <div className="text-xs text-white/60">Top intent</div>
                  <div className="mt-1 text-white font-medium">Fast delivery</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                  <div className="text-xs text-white/60">Obstacle</div>
                  <div className="mt-1 text-white font-medium">Shipping cost</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                  <div className="text-xs text-white/60">Segment</div>
                  <div className="mt-1 text-white font-medium">Mobile buyers</div>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Recommended action</span>
                  <span className="text-emerald-400">Impact: High</span>
                </div>
                <div className="mt-2 text-white/90">Test free shipping threshold with delivery ETA badge on PDP.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
