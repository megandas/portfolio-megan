import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  MapPin,
  Mail,
  Sparkles,
  ExternalLink,
  Briefcase,
  Layers,
  GraduationCap,
  Calendar,
  CheckCircle,
  Award,
  Phone,
  GitBranch,
} from 'lucide-react';

export const AboutWindow: React.FC = () => {
  const { profile, experience, openWindow } = usePortfolio();

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-4xl mx-auto">
      {/* Hero Header Lockup */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-white/10">
        <div className="relative shrink-0">
          <img
            src={profile.avatar}
            alt={profile.name}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-white/20 shadow-xl"
          />
          <span
            className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 shadow"
            title="Available for AI/ML engineering roles"
          />
        </div>

        <div className="space-y-1.5 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {profile.name}
            </h1>
          </div>

          <p className="text-base text-slate-300 font-medium">
            {profile.headline}
          </p>

          <div className="flex items-center gap-3 text-xs text-slate-400 flex-wrap pt-0.5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {profile.location}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              {profile.phone}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to Opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Key Metrics / Highlights */}
      <div>
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Key Performance & Academic Indicators
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {profile.metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col justify-between"
            >
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                {m.value}
              </div>
              <div className="mt-1.5">
                <div className="text-xs font-semibold text-slate-200">
                  {m.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  {m.context}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Narrative */}
      <div className="space-y-3.5">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Profile & Engineering Focus
        </h2>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed font-normal">
          {profile.bioParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Action Row */}
        <div className="pt-2 flex items-center gap-3 flex-wrap">
          <button
            onClick={() => openWindow('aichat')}
            className="px-4 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 active:bg-violet-700 rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-violet-900/30"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ask Megan AI About My Projects</span>
          </button>

          <button
            onClick={() => openWindow('contact')}
            className="px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-white/10"
          >
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>Send Direct Message</span>
          </button>

          <button
            onClick={() => openWindow('resume')}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            View Official Resume →
          </button>
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-4 pt-2 border-t border-white/10">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
          <span>Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {profile.education?.map((edu) => (
            <div
              key={edu.id}
              className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-1.5"
            >
              <div className="text-xs font-bold text-white leading-snug">
                {edu.degree}
              </div>
              <div className="text-xs text-sky-300 font-medium">
                {edu.institution}
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>{edu.period}</span>
                <span className="font-mono text-emerald-400 font-bold">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="space-y-4 pt-2 border-t border-white/10">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Professional Certifications</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {profile.certifications?.map((cert) => (
            <div
              key={cert.id}
              className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-snug">
                  {cert.title}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Issued by {cert.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="space-y-4 pt-2 border-t border-white/10">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <Briefcase className="w-3.5 h-3.5 text-amber-400" />
          <span>Work Experience & Internships</span>
        </h2>

        <div className="space-y-4">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10 space-y-3 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {exp.role}{' '}
                    <span className="text-slate-400 font-normal">at</span>{' '}
                    <span className="text-sky-300">{exp.company}</span>
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {exp.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-1.5 pt-1">
                {exp.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-2 text-xs text-slate-300"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.technologies && (
                <div className="pt-2 flex items-center gap-1.5 text-[11px] text-slate-400 flex-wrap">
                  <span className="font-semibold text-slate-300">Stack:</span>
                  <span>{exp.technologies.join(' · ')}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="space-y-4 pt-2 border-t border-white/10">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span>Technical Skills & Tooling</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {profile.skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2.5"
            >
              <div className="text-xs font-semibold text-white">
                {skillGroup.category}
              </div>
              <div className="space-y-1.5">
                {skillGroup.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="text-xs text-slate-300 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extracurriculars & Open Source */}
      <div className="space-y-3 pt-2 border-t border-white/10">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
          <span>Extracurricular & Open Source</span>
        </h2>

        <div className="space-y-2">
          {profile.extracurriculars?.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-xl p-3 border border-white/10 text-xs text-slate-300 flex items-start gap-2.5"
            >
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 flex-wrap gap-3">
        <span>Connect with {profile.name}:</span>
        <div className="flex items-center gap-4">
          <a
            href={profile.socials.linkedin || 'https://www.linkedin.com/in/megan-das/'}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={profile.socials.github || 'https://github.com/megandas'}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>{profile.email}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
