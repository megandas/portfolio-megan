import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Mail, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';

export const ContactWindow: React.FC = () => {
  const { profile } = usePortfolio();

  const [fromEmail, setFromEmail] = useState('');
  const [subject, setSubject] = useState('Product Design Inquiry / Opportunity');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fromEmail || !message) return;
    setIsSent(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-2xl mx-auto h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-sky-400" />
            <span>New Message to {profile.name}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Discussing product leadership, advisory, design systems, or speaking inquiries.
          </p>
        </div>

        <button
          onClick={handleCopyEmail}
          className="text-xs text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-300">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      {isSent ? (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-3 my-auto">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <h2 className="text-lg font-bold text-white">Message Dispatched!</h2>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Thank you for reaching out. A message notification has been simulated for {profile.name} at{' '}
            <span className="text-emerald-300 font-mono">{profile.email}</span>. You can also open your mail client directly below.
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Launch Default Mail Client</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setIsSent(false)}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Compose Another
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Recipient */}
            <div className="flex items-center gap-3 pb-2 border-b border-white/10 text-xs">
              <span className="text-slate-400 w-16">To:</span>
              <span className="text-sky-300 font-semibold">{profile.name}</span>
              <span className="text-slate-500 font-mono text-[11px]">&lt;{profile.email}&gt;</span>
            </div>

            {/* Sender Email */}
            <div className="flex items-center gap-3 pb-2 border-b border-white/10 text-xs">
              <label htmlFor="from-email-input" className="text-slate-400 w-16">From:</label>
              <input
                id="from-email-input"
                type="email"
                required
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                placeholder="your.email@company.com"
                className="flex-1 bg-transparent text-white outline-none border-none placeholder-slate-500 text-xs"
              />
            </div>

            {/* Subject */}
            <div className="flex items-center gap-3 pb-2 border-b border-white/10 text-xs">
              <label htmlFor="subject-input" className="text-slate-400 w-16">Subject:</label>
              <input
                id="subject-input"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Project inquiry or coffee chat"
                className="flex-1 bg-transparent text-white outline-none border-none placeholder-slate-500 text-xs"
              />
            </div>

            {/* Message Body */}
            <div>
              <textarea
                required
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Megan, I loved your work at Arrive and wanted to chat about..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 outline-none focus:border-sky-400 leading-relaxed resize-none"
              />
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              Direct Inquiries: <span className="text-slate-200">{profile.email}</span>
            </span>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-lg shadow-sky-500/20 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
