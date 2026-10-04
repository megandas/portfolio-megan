import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  FolderKanban,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ExternalLink,
  Cpu,
  GitBranch,
  Terminal,
  Workflow,
  Code2,
} from 'lucide-react';

interface WorkflowStep {
  step: string;
  type: string;
  title: string;
  desc: string;
}

function getProjectWorkflowNodes(id: string): WorkflowStep[] {
  switch (id) {
    case 'contentpilot-ai':
      return [
        {
          step: 'Step 01',
          type: 'Input',
          title: 'Source Long-Form Text',
          desc: 'Blog post, technical article, or video transcript ingestion',
        },
        {
          step: 'Step 02',
          type: 'Strategy',
          title: 'Narrative Extraction',
          desc: 'Identifies core takeaways, hooks, and target audience tone',
        },
        {
          step: 'Step 03',
          type: 'GenAI Engine',
          title: 'Google Gemini API',
          desc: 'Prompt-engineered generation across platform constraints',
        },
        {
          step: 'Step 04',
          type: 'Deliverables',
          title: 'Multi-Channel Plan',
          desc: 'LinkedIn, X threads, Instagram, YouTube & 7-day calendar',
        },
      ];

    case 'linkedin-icebreaker-bot':
      return [
        {
          step: 'Step 01',
          type: 'Ingestion',
          title: 'Profile JSON / PDF Resume',
          desc: 'Document loading via LlamaIndex SimpleDirectoryReader',
        },
        {
          step: 'Step 02',
          type: 'Embeddings',
          title: 'MiniLM Vectorization',
          desc: 'SentenceSplitter chunking into dense semantic embeddings',
        },
        {
          step: 'Step 03',
          type: 'Vector DB',
          title: 'ChromaDB Top-K Search',
          desc: 'Retrieves relevant career nodes without keyword limits',
        },
        {
          step: 'Step 04',
          type: 'Local LLM',
          title: 'TinyLlama + Gradio UI',
          desc: '100% local inference with zero API keys and grounded answers',
        },
      ];

    case 'ai-pr-reviewer':
      return [
        {
          step: 'Step 01',
          type: 'Webhook',
          title: 'Git Diff & PR Payload',
          desc: 'Captures added/modified lines and PR author metadata',
        },
        {
          step: 'Step 02',
          type: 'RAG Pipeline',
          title: 'ChromaDB Codebase Index',
          desc: 'Retrieves related classes, dependencies, and unit tests',
        },
        {
          step: 'Step 03',
          type: 'Granite LLM',
          title: 'IBM watsonx Audit',
          desc: 'Multi-dimensional scan for security, performance & testing',
        },
        {
          step: 'Step 04',
          type: 'VS Code Tool',
          title: 'Structured Diagnostics',
          desc: 'Health scores, inline fix recommendations, and review replay',
        },
      ];

    case 'analyzer-gpt':
      return [
        {
          step: 'Step 01',
          type: 'Dataset',
          title: 'CSV Tabular Ingestion',
          desc: 'Streamlit drag-and-drop file upload with preview',
        },
        {
          step: 'Step 02',
          type: 'Agent Loop',
          title: 'Microsoft AutoGen',
          desc: 'Orchestrates Data Analyzer agent & Code Executor agent',
        },
        {
          step: 'Step 03',
          type: 'Security',
          title: 'Docker-Isolated Sandbox',
          desc: 'Safely executes generated Python code without host risk',
        },
        {
          step: 'Step 04',
          type: 'Output',
          title: 'Visual Statistical Plots',
          desc: 'Auto-renders Matplotlib/Seaborn graphs with metrics',
        },
      ];

    case 'cybersecurity-ml':
      return [
        {
          step: 'Step 01',
          type: 'Traffic',
          title: 'HTTP Request Stream',
          desc: 'Continuous real-time payload traffic in Flask server',
        },
        {
          step: 'Step 02',
          type: 'Level 1',
          title: 'Signature Regex Filter',
          desc: 'Instant rejection of known SQLi/XSS attack strings in <5ms',
        },
        {
          step: 'Step 03',
          type: 'Level 2',
          title: 'ML Behavioral Anomaly',
          desc: 'Shannon entropy & special character distributions in <200ms',
        },
        {
          step: 'Step 04',
          type: 'Mitigation',
          title: '95% Threat Precision',
          desc: 'Zero-day exploit blocking with minimal false positive rate',
        },
      ];

    case 'chronic-kidney-disease-detection':
      return [
        {
          step: 'Step 01',
          type: 'Clinical Data',
          title: '400 Patient Records',
          desc: '24 Diagnostic indicators (blood pressure, albumin, etc.)',
        },
        {
          step: 'Step 02',
          type: 'Prep Pipeline',
          title: 'Imputation & Scaling',
          desc: 'Median imputation, one-hot encoding, and StandardScaler',
        },
        {
          step: 'Step 03',
          type: 'Validation',
          title: '5-Fold Stratified CV',
          desc: 'Prevents leakage and guarantees balanced disease class splits',
        },
        {
          step: 'Step 04',
          type: 'Ensemble ML',
          title: 'Random Forest & Boosting',
          desc: 'Confusion matrix & ROC evaluation minimizing false negatives',
        },
      ];

    case 'employee-promotion-prediction':
      return [
        {
          step: 'Step 01',
          type: 'Features',
          title: 'Employee Metrics',
          desc: 'Department, previous rating, training scores, and tenure',
        },
        {
          step: 'Step 02',
          type: 'App / API',
          title: 'Flask Web & JSON REST',
          desc: 'Responsive web interface and POST /api/predict endpoint',
        },
        {
          step: 'Step 03',
          type: 'Serialized ML',
          title: 'Model Inference',
          desc: 'Trained Scikit-learn classifier pipeline (promotion.pkl)',
        },
        {
          step: 'Step 04',
          type: 'Audit',
          title: 'Score & Session History',
          desc: 'Promotion probability estimate and session prediction log',
        },
      ];

    default:
      return [
        {
          step: 'Step 01',
          type: 'Corpus',
          title: 'News Article Corpus',
          desc: 'Labeled benchmark datasets of verified and fabricated text',
        },
        {
          step: 'Step 02',
          type: 'Tokenizer',
          title: 'BERT Subword Pipeline',
          desc: 'Cleaning, WordPiece tokenization, and attention masking',
        },
        {
          step: 'Step 03',
          type: 'Transformer',
          title: 'Bidirectional Encoding',
          desc: 'Deep contextual representations across sentence semantics',
        },
        {
          step: 'Step 04',
          type: 'Benchmark',
          title: '92% Classification',
          desc: 'Scikit-learn pipeline reducing false positive flags',
        },
      ];
  }
}

export const ProjectsWindow: React.FC = () => {
  const { projects, openWindow, selectedProjectId, setSelectedProjectId } =
    usePortfolio();

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Agentic AI & LLMs',
    'Machine Learning',
    'Systems & Security',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const activeProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId)
    : null;

  // Deep-dive view
  if (activeProject) {
    const workflowNodes = getProjectWorkflowNodes(activeProject.id);

    return (
      <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-6">
        {/* Navigation & Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 gap-3 flex-wrap">
          <button
            onClick={() => setSelectedProjectId(null)}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to All Projects</span>
          </button>

          <div className="flex items-center gap-2 flex-wrap">
            {activeProject.liveUrl && (
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-xs font-semibold text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Live Demo</span>
              </a>
            )}

            {activeProject.githubUrl && (
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-white/15 text-xs font-semibold text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <GitBranch className="w-3.5 h-3.5 text-sky-400" />
                <span>View on GitHub</span>
              </a>
            )}

            <button
              onClick={() => {
                openWindow('aichat', { projectId: activeProject.id });
              }}
              className="px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-xs font-semibold text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask AI About This</span>
            </button>
          </div>
        </div>

        {/* Project Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-sky-300 font-mono text-[11px]">
              {activeProject.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{activeProject.client}</span>
            <span aria-hidden="true">·</span>
            <span>{activeProject.year}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            {activeProject.title}
          </h1>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            {activeProject.subtitle}
          </p>
        </div>

        {/* Real Engineering Architecture & Workflow Diagram (Clean Code Representation) */}
        <div className="rounded-2xl border border-white/15 bg-slate-950/80 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="font-mono text-slate-400 pl-2 flex items-center gap-1.5">
                <Workflow className="w-3.5 h-3.5 text-sky-400" />
                <span>system_architecture_pipeline.json</span>
              </span>
            </div>
            <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-400/20">
              Verified Architecture
            </span>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="text-slate-400 uppercase tracking-wider font-semibold text-[11px]">
                End-to-End Pipeline & Dataflow Execution
              </span>
              <span className="font-mono text-slate-400 text-[11px]">
                Primary Language: Python
              </span>
            </div>

            {/* Architecture Node Chain */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {workflowNodes.map((node, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between space-y-2 hover:border-sky-400/30 transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-sky-400 font-bold">{node.step}</span>
                    <span className="text-slate-400 text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/5">
                      {node.type}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white">{node.title}</div>
                  <div className="text-[11px] text-slate-300 leading-snug">{node.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {activeProject.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-xl p-4 border border-white/10 text-center"
            >
              <div className="text-lg md:text-xl font-bold text-white font-mono">
                {metric}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-2">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>The Architectural Challenge</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeProject.challenge}
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-2">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>The Strategic Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeProject.solution}
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-3">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>Key Project Milestones & Implementation</span>
          </div>
          <ul className="space-y-2">
            {activeProject.highlights.map((h, i) => (
              <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
            <Cpu className="w-3.5 h-3.5 text-slate-400" />
            <span>Technologies & Frameworks:</span>
            <span className="text-slate-200 font-mono">
              {activeProject.techStack.join(' · ')}
            </span>
          </div>

          <button
            onClick={() => setSelectedProjectId(null)}
            className="text-xs text-sky-400 hover:underline cursor-pointer"
          >
            ← Browse Other Projects
          </button>
        </div>
      </div>
    );
  }

  // Catalog grid view (Clean code-first developer cards without fake images)
  return (
    <div className="p-6 md:p-8 space-y-6 max-w-5xl mx-auto">
      {/* Catalog Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <FolderKanban className="w-5 h-5 text-sky-400" />
            <span>Engineering Projects & Open-Source Work</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Agentic AI systems, RAG retrieval pipelines, clinical ML models, and cybersecurity detection engines.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-1 p-1 bg-white/5 rounded-xl border border-white/10 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="group bg-white/5 hover:bg-white/[0.08] rounded-2xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between shadow-lg hover:shadow-2xl overflow-hidden"
            >
              {/* Card Header Bar */}
              <div className="px-5 py-3.5 bg-slate-900/60 border-b border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500/70" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="font-mono text-[11px] text-slate-400 pl-1">
                    {project.client}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-sky-500/10 text-sky-300 border border-sky-400/20 font-mono">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3
                    onClick={() => setSelectedProjectId(project.id)}
                    className="text-base font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-emerald-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 flex-wrap">
                  <Code2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{project.techStack.slice(0, 4).join(' · ')}</span>
                  {project.techStack.length > 4 && (
                    <span className="text-slate-500">+{project.techStack.length - 4} more</span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 py-3 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-xs flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>GitHub</span>
                      <GitBranch className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProjectId(project.id)}
                  className="text-slate-300 hover:text-white font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer ml-auto"
                >
                  <span>Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
