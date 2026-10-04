import React, { useState, useRef, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalWindow: React.FC = () => {
  const { profile, projects, togglePlayMusic, openWindow } = usePortfolio();

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-emerald-400 font-bold">
            Megan Das AI/ML Engineering Console (darwin-arm64)
          </div>
          <div>
            Type <span className="text-amber-300 font-semibold">&apos;help&apos;</span> to see available commands, <span className="text-amber-300 font-semibold">&apos;education&apos;</span>, or <span className="text-amber-300 font-semibold">&apos;projects&apos;</span> to inspect system architectures.
          </div>
        </div>
      ),
    },
  ]);

  const [commandList, setCommandList] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    setCommandList((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    const parts = raw.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-white font-semibold mb-1">Available Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 font-mono">
              <div><span className="text-emerald-400">about</span> - Background & engineering focus</div>
              <div><span className="text-emerald-400">projects</span> - View all ML & Agentic AI projects</div>
              <div><span className="text-emerald-400">education</span> - VIT Vellore & academic scores</div>
              <div><span className="text-emerald-400">certs</span> - Azure DP-100 & AutoGen credentials</div>
              <div><span className="text-emerald-400">hackathon</span> - IBM TechXchange Top 50 details</div>
              <div><span className="text-emerald-400">cat [file]</span> - Read file (e.g. pr_reviewer, autogen, resume)</div>
              <div><span className="text-emerald-400">skills</span> - Core domain, languages & cloud tools</div>
              <div><span className="text-emerald-400">contact</span> - Phone, email & profile links</div>
              <div><span className="text-emerald-400">play</span> - Toggle deep code lo-fi music</div>
              <div><span className="text-emerald-400">clear</span> - Clear terminal output</div>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'whoami':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-white font-bold">{profile.name} — {profile.title}</div>
            <div className="text-sky-300">{profile.location} | {profile.phone}</div>
            <p className="mt-1 leading-relaxed text-slate-300">{profile.bioParagraphs[0]}</p>
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-2 text-xs">
            <div className="text-white font-bold">Academic Qualifications:</div>
            {profile.education?.map((e) => (
              <div key={e.id} className="border-l-2 border-sky-400 pl-2.5 py-0.5">
                <div className="text-white font-semibold">{e.degree}</div>
                <div className="text-slate-400">{e.institution} ({e.period})</div>
                <div className="text-emerald-300 font-mono text-[11px] mt-0.5">{e.grade}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        output = (
          <div className="space-y-1.5 text-xs">
            <div className="text-white font-bold">Professional Certifications:</div>
            {profile.certifications?.map((c) => (
              <div key={c.id} className="flex items-center gap-2 text-slate-300">
                <span className="text-amber-400">★</span>
                <span>{c.title} ({c.issuer})</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'hackathon':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="text-white font-bold text-emerald-400">
              IBM TechXchange 2026 Dev Day Hackathon — Top 50 Standing
            </div>
            <p>
              Built an AI-powered Pull Request Reviewer & Repository Intelligence Platform using IBM watsonx Granite, LangChain, ChromaDB, and a custom VS Code extension.
            </p>
          </div>
        );
        break;

      case 'ls':
      case 'dir':
        output = (
          <div className="flex gap-4 text-xs font-mono flex-wrap">
            <span className="text-blue-400">ai_pr_reviewer/</span>
            <span className="text-emerald-400">contentpilot_ai/</span>
            <span className="text-purple-400">linkedin_icebreaker/</span>
            <span className="text-yellow-400">analyzer_gpt/</span>
            <span className="text-pink-400">cybersecurity_ml/</span>
            <span className="text-teal-400">ckd_prediction/</span>
            <span className="text-indigo-400">promotion_flask_app/</span>
            <span className="text-rose-400">bert_fake_news/</span>
            <span className="text-slate-300">MEGAN_DAS_RESUME.pdf</span>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <div className="text-white font-bold">Engineering Projects:</div>
            {projects.map((p) => (
              <div key={p.id} className="border-l-2 border-sky-400 pl-2.5 py-0.5">
                <div className="text-white font-semibold">
                  {p.title} <span className="text-slate-400 font-normal">({p.year})</span>
                </div>
                <div className="text-slate-400">{p.subtitle}</div>
                <div className="text-emerald-300 font-mono text-[11px] mt-0.5">
                  Metrics: {p.metrics.join(' | ')}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            {profile.skills.map((s, idx) => (
              <div key={idx}>
                <div className="text-sky-300 font-semibold">{s.category}:</div>
                <div className="text-slate-300 font-mono text-[11px]">{s.items.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'cat':
        if (!arg) {
          output = <div className="text-amber-400">Usage: cat [filename] (try: contentpilot, icebreaker, pr_reviewer, autogen, ckd, promotion, resume)</div>;
        } else if (arg.includes('content') || arg.includes('pilot')) {
          const cp = projects.find((p) => p.id === 'contentpilot-ai');
          output = (
            <div className="text-xs space-y-1 text-slate-300">
              <div className="text-white font-bold">{cp?.title}</div>
              <p>{cp?.solution}</p>
              <div className="text-emerald-400 font-mono mt-1">Live: {cp?.liveUrl} | GitHub: {cp?.githubUrl}</div>
            </div>
          );
        } else if (arg.includes('icebreaker') || arg.includes('linkedin')) {
          const ib = projects.find((p) => p.id === 'linkedin-icebreaker-bot');
          output = (
            <div className="text-xs space-y-1 text-slate-300">
              <div className="text-white font-bold">{ib?.title}</div>
              <p>{ib?.solution}</p>
              <div className="text-emerald-400 font-mono mt-1">GitHub: {ib?.githubUrl}</div>
            </div>
          );
        } else if (arg.includes('ckd') || arg.includes('kidney')) {
          const ckd = projects.find((p) => p.id === 'chronic-kidney-disease-detection');
          output = (
            <div className="text-xs space-y-1 text-slate-300">
              <div className="text-white font-bold">{ckd?.title}</div>
              <p>{ckd?.solution}</p>
              <div className="text-emerald-400 font-mono mt-1">GitHub: {ckd?.githubUrl}</div>
            </div>
          );
        } else if (arg.includes('promotion') || arg.includes('employee')) {
          const ep = projects.find((p) => p.id === 'employee-promotion-prediction');
          output = (
            <div className="text-xs space-y-1 text-slate-300">
              <div className="text-white font-bold">{ep?.title}</div>
              <p>{ep?.solution}</p>
              <div className="text-emerald-400 font-mono mt-1">GitHub: {ep?.githubUrl}</div>
            </div>
          );
        } else if (arg.includes('pr') || arg.includes('ibm')) {
          const pr = projects.find((p) => p.id === 'ai-pr-reviewer');
          output = (
            <div className="text-xs space-y-1 text-slate-300">
              <div className="text-white font-bold">{pr?.title}</div>
              <p>{pr?.solution}</p>
              <div className="text-emerald-400 font-mono mt-1">Stack: {pr?.techStack.join(', ')}</div>
            </div>
          );
        } else if (arg.includes('autogen') || arg.includes('analyzer')) {
          const arr = projects.find((p) => p.id === 'analyzer-gpt');
          output = (
            <div className="text-xs space-y-1 text-slate-300">
              <div className="text-white font-bold">{arr?.title}</div>
              <p>{arr?.solution}</p>
              <div className="text-emerald-400 font-mono mt-1">Docker sandbox + AutoGen multi-agent loop</div>
            </div>
          );
        } else if (arg.includes('resume') || arg.includes('bio')) {
          output = (
            <div className="text-xs space-y-1 text-slate-300">
              <div className="text-white font-bold">MEGAN DAS — RESUME SUMMARY</div>
              <div>Location: Bangalore, India | Phone: {profile.phone}</div>
              <div>Email: {profile.email}</div>
              <div>Education: VIT Vellore (B.Tech Data Science, CGPA 8.44)</div>
              <div>Standing: Ranked Top 50 in IBM TechXchange 2026 Dev Day Hackathon</div>
            </div>
          );
        } else {
          output = <div className="text-rose-400">File &apos;{arg}&apos; not found. Type &apos;ls&apos; for list.</div>;
        }
        break;

      case 'contact':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <div>Phone: <span className="text-white">{profile.phone}</span></div>
            <div>Email: <a href={`mailto:${profile.email}`} className="text-sky-400 underline">{profile.email}</a></div>
            <div>LinkedIn: <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 underline">{profile.socials.linkedin}</a></div>
            <div>GitHub: <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-sky-400 underline">{profile.socials.github}</a></div>
            <div>Location: {profile.location}</div>
          </div>
        );
        break;

      case 'play':
        togglePlayMusic();
        output = <div className="text-sky-400 text-xs">Toggled deep code lo-fi music.</div>;
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'gui':
        openWindow('projects');
        output = <div className="text-emerald-400 text-xs">Opened Projects catalog.</div>;
        break;

      default:
        output = (
          <div className="text-rose-400 text-xs">
            command not found: {raw}. Type <span className="text-amber-300 font-semibold">&apos;help&apos;</span> for list.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: raw, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandList[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandList.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandList[nextIndex]);
      }
    }
  };

  return (
    <div
      className="h-full bg-slate-950 font-mono text-xs text-slate-200 p-4 overflow-y-auto flex flex-col space-y-3 cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* History Stream */}
      {history.map((item, idx) => (
        <div key={idx} className="space-y-1">
          {item.command !== 'welcome' && (
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400">megan@macbook:~$</span>
              <span className="text-white">{item.command}</span>
            </div>
          )}
          <div>{item.output}</div>
        </div>
      ))}

      {/* Prompt Input Line */}
      <div className="flex items-center gap-2 pt-1">
        <span className="text-emerald-400 whitespace-nowrap">megan@macbook:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 bg-transparent text-white outline-none border-none caret-emerald-400"
        />
      </div>

      <div ref={bottomRef} />
    </div>
  );
};
