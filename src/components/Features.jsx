import React from 'react';
import { Bot, BarChart3, Target, MessageSquare, Mic } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Adaptive AI interviews',
    desc: 'Dynamic voice agent probes deeper based on answers to uncover motivations and objections.',
  },
  {
    icon: Mic,
    title: 'Voice & visual prompts',
    desc: 'Mix voice questions with interactive cards for higher completion and richer context.',
  },
  {
    icon: MessageSquare,
    title: 'Automatic transcription',
    desc: 'Accurate, speaker-aware transcripts with key quotes and sentiment highlights.',
  },
  {
    icon: BarChart3,
    title: 'Insight dashboards',
    desc: 'Themes, segments, and trends auto-clustered into dashboards you can ship to the team.',
  },
  {
    icon: Target,
    title: 'Actionable recommendations',
    desc: 'From friction to fix—get prioritized experiments and copy suggestions instantly.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.15)_0%,rgba(17,24,39,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to learn fast</h2>
          <p className="mt-3 text-white/70">Ship conversational surveys, get clean insights, and route actions to your stack—without researcher overhead.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden group">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/20 to-cyan-400/20 blur-2xl pointer-events-none" />
      <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 grid place-items-center">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/75 leading-relaxed">{desc}</p>
      {/* Mini illustrative strip */}
      <div className="mt-4 grid grid-cols-5 gap-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="h-2 rounded bg-gradient-to-r from-fuchsia-500/40 to-cyan-400/40 group-hover:from-fuchsia-500/60 group-hover:to-cyan-400/60 transition"
            style={{ gridColumn: `span ${((i % 3) + 1)}` }}
          />
        ))}
      </div>
    </div>
  );
}
