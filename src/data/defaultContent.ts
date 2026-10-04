import {
  AudioTrack,
  CertificationItem,
  EducationItem,
  ExperienceItem,
  GalleryItem,
  NoteItem,
  ProfileData,
  Project,
  WallpaperOption,
} from '../types';

export const WALLPAPERS: WallpaperOption[] = [
  {
    id: 'sonoma-fluid',
    name: 'Sonoma Fluid (Generated)',
    type: 'image',
    value: '/src/assets/images/macos_desktop_wallpaper_1791034868561.jpg',
  },
  {
    id: 'aurora-deep',
    name: 'Aurora Borealis',
    type: 'gradient',
    value: 'radial-gradient(ellipse at top left, #1e1b4b 0%, #0f172a 40%, #030712 100%), linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.15) 50%, rgba(14,165,233,0.1) 100%)',
  },
  {
    id: 'midnight-violet',
    name: 'Midnight Glass',
    type: 'gradient',
    value: 'linear-gradient(135deg, #09090b 0%, #1e1b4b 50%, #020617 100%)',
  },
  {
    id: 'cyber-emerald',
    name: 'Deep Forest',
    type: 'gradient',
    value: 'linear-gradient(135deg, #022c22 0%, #064e3b 35%, #020617 100%)',
  },
  {
    id: 'studio-sand',
    name: 'Warm Slate',
    type: 'gradient',
    value: 'linear-gradient(135deg, #1c1917 0%, #292524 50%, #0c0a09 100%)',
  },
];

export const DEFAULT_EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.Tech in Computer Science (Specialization in Data Science)',
    institution: 'Vellore Institute of Technology (VIT)',
    location: 'Vellore, India',
    period: 'Sep 2022 – Jul 2026',
    grade: 'CGPA: 8.44',
  },
  {
    id: 'edu-2',
    degree: 'State Board – Class 12',
    institution: 'DCFL, Deeksha Main Campus',
    location: 'Bangalore, India',
    period: 'Jun 2021 – Jun 2022',
    grade: 'Score: 96%',
  },
  {
    id: 'edu-3',
    degree: 'CBSE – Class 10',
    institution: 'National Public School',
    location: 'Bangalore, India',
    period: 'Apr 2019 – Apr 2020',
    grade: 'Score: 94%',
  },
];

export const DEFAULT_CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Microsoft Certified: Azure Data Scientist Associate (DP-100)',
    issuer: 'Microsoft',
  },
  {
    id: 'cert-2',
    title: 'Building AI Agents and Agentic AI Systems via Microsoft AutoGen',
    issuer: 'DeepLearning.AI / Microsoft',
  },
];

export const DEFAULT_PROFILE: ProfileData = {
  name: 'Megan Das',
  title: 'AI/ML Engineer & Data Science Specialist',
  headline: 'Engineering multi-agent AI systems, repository-aware RAG pipelines, and high-precision ML models.',
  location: 'Bangalore, India',
  phone: '+91 8431734881',
  email: 'megansikata@gmail.com',
  avatar: '/src/assets/images/megan_das_profile_photo_1791125613668.jpg',
  statusMessage: 'Building multi-agent AI systems & repository-aware RAG pipelines.',
  bioParagraphs: [
    'I am a Computer Science and Data Science engineer from Vellore Institute of Technology (VIT), specializing in Artificial Intelligence, Machine Learning, Deep Learning, and Agentic AI systems. I focus on developing production-ready multi-agent workflows, LLM orchestration via LangChain & AutoGen, and high-precision predictive models.',
    'Recently, I built an AI-powered Pull Request Reviewer & Repository Intelligence Platform using IBM watsonx Granite, LangChain, and ChromaDB for the IBM TechXchange 2026 Dev Day Hackathon, ranking among the Top 50 teams. My experience also spans dual-layered cybersecurity threat engines (95% precision with <200ms latency) and enterprise Azure AI chatbots.',
    'As an active open-source contributor, I have contributed merged production fixes to The Boring Education (TBE-Web) using Next.js, React, and TypeScript. I am a certified Microsoft Azure Data Scientist Associate (DP-100) and certified in building Agentic AI systems via Microsoft AutoGen.',
  ],
  socials: {
    github: 'https://github.com/megandas',
    linkedin: 'https://www.linkedin.com/in/megan-das/',
    twitter: 'https://x.com',
  },
  education: DEFAULT_EDUCATION,
  certifications: DEFAULT_CERTIFICATIONS,
  metrics: [
    {
      label: 'Threat Detection Precision',
      value: '95%',
      context: 'Dual-layered cybersecurity anomaly detection in <200ms',
    },
    {
      label: 'Hackathon Standing',
      value: 'Top 50',
      context: 'Ranked in IBM TechXchange 2026 Dev Day Hackathon',
    },
    {
      label: 'Academic Standing',
      value: '8.44',
      context: 'CGPA in B.Tech Computer Science (Data Science) at VIT',
    },
    {
      label: 'Enterprise Data Scale',
      value: '50K+',
      context: 'SQL records analyzed in Azure for predictive analytics',
    },
  ],
  skills: [
    {
      category: 'Core AI & Data Science',
      items: [
        'Agentic AI & Multi-Agent Systems',
        'Generative AI & LLMs (RAG)',
        'Deep Learning & Transformers (BERT)',
        'LangChain & Microsoft AutoGen',
        'ChromaDB & Vector Embeddings',
        'Statistical Modeling & EDA',
      ],
    },
    {
      category: 'Languages & Backend',
      items: [
        'Python (Expert)',
        'SQL (MySQL)',
        'FastAPI & Flask',
        'TypeScript & JavaScript',
        'R & Java',
        'Object-Oriented Programming (OOP)',
      ],
    },
    {
      category: 'Frameworks, Cloud & Tools',
      items: [
        'TensorFlow & Scikit-learn',
        'Microsoft Azure (Azure AI, Blob Storage)',
        'IBM watsonx & Granite LLMs',
        'Docker & Streamlit',
        'Pandas, NumPy, Matplotlib, Seaborn',
        'Git, GitHub, JIRA, VS Code Extensions',
      ],
    },
  ],
  extracurriculars: [
    'Open-Source Contributor: Contributed a merged production fix to The Boring Education (TBE-Web) using Next.js, React, TypeScript, HTML, CSS.',
    'Ranked among the Top 50 teams in the IBM TechXchange 2026 Dev Day Hackathon.',
  ],
};

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'ai-pr-reviewer',
    title: 'AI Pull Request Review & Repository Intelligence Platform',
    subtitle: 'Autonomous Code Analysis, Health Scores & VS Code Extension — IBM Hackathon',
    category: 'Agentic AI & LLMs',
    year: '2026',
    client: 'IBM TechXchange Dev Day Hackathon (Top 50 Team)',
    role: 'Lead AI Engineer & Full-Stack Architect',
    metrics: [
      'Top 50 Hackathon Team',
      'Multi-Dimensional Code Review',
      'Context-Aware RAG Pipeline',
    ],
    description:
      'Engineered an AI-powered Pull Request reviewer that analyzes code diffs across security vulnerabilities, performance bottlenecks, and testing completeness, generating structured issues, actionable fixes, health scores, and merge-readiness recommendations.',
    challenge:
      'Large development teams suffer from code review fatigue, delayed PR turnaround, and subtle security bugs slipping into production without repository-wide context.',
    solution:
      'Built a repository-aware RAG pipeline using LangChain, ChromaDB, and IBM watsonx Granite to retrieve related code modules and documentation. Created an interactive VS Code extension providing PR dashboards, AI chat, review replay, and code impact visualizers.',
    highlights: [
      'Engineered repository-aware RAG pipeline using ChromaDB vector database for deep semantic code retrieval',
      'Integrated IBM watsonx Granite LLMs for structured AST-level code vulnerability audits',
      'Developed custom VS Code extension with live PR chat, repository dependency graphs, and code review replay',
      'Ranked among the Top 50 teams globally in the IBM TechXchange 2026 Dev Day Hackathon',
    ],
    techStack: [
      'Python',
      'FastAPI',
      'IBM watsonx Granite',
      'LangChain',
      'ChromaDB',
      'Hugging Face',
      'TypeScript',
      'VS Code Extension',
    ],
    image: '/src/assets/images/project_pr_reviewer_1791035369586.jpg',
    featured: true,
    aiPromptContext:
      'Megan Das built an AI Pull Request Reviewer and Repository Intelligence Platform for the IBM Hackathon (Top 50 team) using FastAPI, IBM watsonx Granite, LangChain, ChromaDB, and a custom VS Code extension.',
  },
  {
    id: 'contentpilot-ai',
    title: 'ContentPilot AI',
    subtitle: 'Turn One Piece of Long-Form Content into a Complete Social Media Campaign',
    category: 'Agentic AI & LLMs',
    year: '2026',
    client: 'Content Strategy & Generative AI',
    role: 'Creator & Full-Stack AI Engineer',
    metrics: [
      '7-Day Content Calendar',
      'Google Gemini API',
      'Automated Quality Score',
    ],
    description:
      'Transforms articles, blog posts, and transcripts into ready-to-use, platform-specific social media campaigns across LinkedIn, X Threads, Instagram, and YouTube while maintaining consistent brand strategy.',
    challenge:
      'Content creators and founders waste hours manually reformatting articles into varied social media formats, often losing core narrative focus and scheduling consistency.',
    solution:
      'Built a full Streamlit application powered by Google Gemini and structured prompt engineering that analyzes source text and auto-generates platform-tailored copy, video concepts, 7-day social calendars, and campaign quality audits.',
    highlights: [
      'Engineered multi-platform generation: thought-leadership LinkedIn posts, engaging X threads, Instagram captions/hashtags, and YouTube scripts',
      'Generates automated 7-day weekly posting schedule with platform-specific execution advice',
      'Built an AI Quality Score evaluator assessing audience resonance and suggesting concrete campaign improvements',
      'Deployed live on Streamlit Cloud with public GitHub repository',
    ],
    techStack: [
      'Python',
      'Streamlit',
      'Google Gemini API',
      'Prompt Engineering',
      'JSON',
      'Git',
    ],
    image: '/src/assets/images/project_contentpilot_ai_1791124934973.jpg',
    liveUrl: 'https://contentpilotai.streamlit.app/',
    githubUrl: 'https://github.com/megandas/contentpilot-ai',
    featured: true,
    aiPromptContext:
      'ContentPilot AI was created by Megan Das to transform long-form articles into complete multi-platform campaigns using Streamlit and Google Gemini API, including 7-day calendars and quality scores.',
  },
  {
    id: 'linkedin-icebreaker-bot',
    title: 'LinkedIn AI Icebreaker Bot',
    subtitle: 'Conversational RAG Chatbot with LlamaIndex, ChromaDB & TinyLlama',
    category: 'Agentic AI & LLMs',
    year: '2026',
    client: 'Open Source / Retrieval-Augmented Generation',
    role: 'AI & RAG Engineer',
    metrics: [
      'Zero API Keys Required',
      'MiniLM Vector Embeddings',
      'LlamaIndex + ChromaDB',
    ],
    description:
      'An end-to-end Retrieval-Augmented Generation (RAG) system built in Google Colab that answers queries on LinkedIn profiles and uploaded PDF resumes using semantic retrieval and a local TinyLlama model.',
    challenge:
      'Traditional keyword search lacks semantic awareness of candidate backgrounds, while cloud LLMs can hallucinate qualifications and require costly API credentials.',
    solution:
      'Architected a modular RAG pipeline using LlamaIndex SentenceSplitter, MiniLM sentence embeddings, ChromaDB vector indexing, and local TinyLlama inference wrapped in an interactive 4-tab Gradio UI.',
    highlights: [
      '4-tab interactive Gradio interface: conversational Q&A, networking icebreaker generator, interesting facts extractor, and resume PDF upload',
      'Full semantic search avoiding keyword limitations via sentence-transformers/all-MiniLM-L6-v2 embeddings',
      'Grounded local LLM inference using TinyLlama to prevent hallucinations and maintain data privacy without paid API keys',
      'Document chunking with SentenceSplitter preserving career milestones and semantic coherence',
    ],
    techStack: [
      'Python',
      'LlamaIndex',
      'ChromaDB',
      'TinyLlama',
      'Hugging Face',
      'Gradio',
      'Google Colab',
    ],
    image: '/src/assets/images/project_linkedin_icebreaker_1791124921515.jpg',
    githubUrl: 'https://github.com/megandas/LinkedIn-AI-Icebreaker-Bot',
    featured: true,
    aiPromptContext:
      'Megan Das created the LinkedIn AI Icebreaker Bot, an end-to-end RAG system using LlamaIndex, ChromaDB, Hugging Face TinyLlama, MiniLM, and Gradio for profile Q&A, networking icebreakers, and resume analysis without API keys.',
  },
  {
    id: 'analyzer-gpt',
    title: 'Analyzer GPT — Multi-Agent AI Data Analyzer',
    subtitle: 'Autonomous Multi-Agent CSV Intelligence & Docker Code Execution',
    category: 'Agentic AI & LLMs',
    year: '2025–2026',
    client: 'Autonomous Data Intelligence',
    role: 'AI Systems Engineer',
    metrics: [
      'Multi-Agent AutoGen Pipeline',
      'Docker-Isolated Sandbox',
      'Instant Visual Chart Generation',
    ],
    description:
      'Developed a multi-agent conversational AI system using Microsoft AutoGen to analyze tabular datasets through natural-language queries, autonomously generating Python execution code and statistical insights.',
    challenge:
      'Business analysts and non-technical stakeholders needed deep statistical insights and plots from raw CSV files without writing boilerplate Python code or risking arbitrary code execution vulnerabilities.',
    solution:
      'Designed an autonomous multi-agent dialogue system featuring specialized Data Analyzer and Code Executor agents operating inside Docker-isolated execution containers, paired with a dynamic Streamlit UI.',
    highlights: [
      'Architected multi-agent conversation loop between Data Analyzer agent and Code Executor agent using Microsoft AutoGen',
      'Implemented secure Docker sandbox execution preventing unauthorized system commands while allowing dynamic Matplotlib/Seaborn rendering',
      'Built intuitive Streamlit interface allowing seamless drag-and-drop CSV upload, interactive charts, and natural language data exploration',
    ],
    techStack: [
      'Python',
      'Microsoft AutoGen',
      'LLMs',
      'Docker',
      'Streamlit',
      'Pandas',
      'Matplotlib',
      'Seaborn',
    ],
    image: '/src/assets/images/project_analyzer_gpt_1791035384064.jpg',
    featured: true,
    aiPromptContext:
      'Analyzer GPT is an autonomous multi-agent AI system built by Megan Das using Microsoft AutoGen. It features Data Analyzer and Code Executor agents running inside Docker containers with a Streamlit interface for natural language dataset exploration.',
  },
  {
    id: 'cybersecurity-ml',
    title: 'Dual-Layer Cybersecurity Attack Detection Engine',
    subtitle: 'Signature Filtering & Real-Time HTTP ML Anomaly Detection',
    category: 'Systems & Security',
    year: '2026',
    client: 'VIT Vellore Capstone Project',
    role: 'Cybersecurity & AI/ML Capstone Intern',
    metrics: [
      '95% Threat Detection Precision',
      '< 200 ms Response Time',
      'Real-Time Anomaly Processing',
    ],
    description:
      'Developed a dual-layered web attack detection engine combining signature-based heuristic filtering and machine-learning-driven behavioral analysis to identify zero-day HTTP exploits.',
    challenge:
      'Traditional Web Application Firewalls (WAFs) fail to detect novel zero-day attacks or slow down web traffic with heavy inspection overhead.',
    solution:
      'Engineered a dual-stage architecture: Level 1 conducts ultra-fast signature matching, while Level 2 executes ML anomaly scoring based on HTTP payload entropy, parameter lengths, and special-character distributions.',
    highlights: [
      'Achieved 95% threat detection precision with sub-200ms real-time latency across high-throughput web traffic',
      'Engineered domain-specific HTTP request features including Shannon payload entropy, query parameter distributions, and header anomalies',
      'Managed agile lifecycle using JIRA covering Epics, User Stories, Subtasks, and Bug triage over a 5-month cycle',
    ],
    techStack: ['Python', 'Flask', 'Machine Learning', 'JIRA', 'Scikit-learn'],
    image: '/src/assets/images/project_cybersecurity_ml_1791035397122.jpg',
    featured: true,
    aiPromptContext:
      'Megan Das developed a dual-layered web attack detection engine during her Capstone at VIT Vellore, achieving 95% threat detection precision in under 200ms using signature filtering and ML behavioral analysis on HTTP payload entropy.',
  },
  {
    id: 'chronic-kidney-disease-detection',
    title: 'Chronic Kidney Disease Prediction & Clinical ML',
    subtitle: 'Supervised Clinical Classification with 5-Fold Stratified Cross-Validation',
    category: 'Machine Learning',
    year: '2026',
    client: 'Clinical Diagnostic Intelligence',
    role: 'Machine Learning Engineer',
    metrics: [
      '24 Clinical Features Evaluated',
      '5-Fold Stratified CV',
      'Comparative Model Benchmark',
    ],
    description:
      'A supervised machine learning classification pipeline predicting whether a patient has Chronic Kidney Disease (CKD) based on 400 patient records across 24 clinical and laboratory indicators.',
    challenge:
      'Medical records often suffer from missing lab entries, mixed categorical/numerical types, and severe diagnostic risk where false negatives are critical.',
    solution:
      'Executed full clinical preprocessing (median imputation, one-hot encoding, standard scaling) and benchmarked Logistic Regression, Decision Tree, Random Forest, and Gradient Boosting under 5-fold stratified cross-validation.',
    highlights: [
      'Cleaned and preprocessed 400 patient diagnostic records spanning blood pressure, albumin, serum creatinine, and hemoglobin',
      'Employed 5-Fold Stratified Cross-Validation to prevent data leakage and guarantee balanced class evaluation',
      'Analyzed model performance using precision, recall, confusion matrices, and feature importance rankings',
    ],
    techStack: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
    ],
    image: '/src/assets/images/project_ckd_detection_1791124949290.jpg',
    githubUrl: 'https://github.com/megandas/Chronic-Kidney-Disease-Detection',
    featured: false,
    aiPromptContext:
      'Megan Das engineered a supervised ML model for Chronic Kidney Disease detection analyzing 400 clinical records across 24 features using 5-Fold Stratified Cross-Validation with Random Forest and Gradient Boosting.',
  },
  {
    id: 'employee-promotion-prediction',
    title: 'Employee Promotion Prediction & HR Analytics',
    subtitle: 'End-to-End Flask Web Application, Trained ML Model & REST API',
    category: 'Machine Learning',
    year: '2026',
    client: 'Enterprise Workforce Analytics',
    role: 'Full-Stack ML Engineer',
    metrics: [
      'Interactive Flask Web App',
      'REST JSON API Endpoint',
      'Session History Tracker',
    ],
    description:
      'An end-to-end Flask web application and JSON API that predicts whether an employee is eligible for promotion based on department, performance ratings, training scores, and tenure.',
    challenge:
      'Talent promotion cycles in large enterprises often face evaluation delays, opaque criteria, and lack of automated prediction tools for HR managers.',
    solution:
      'Trained an employee promotion classification model, built a responsive Flask web app with Jinja2 templates, form validation, and deployed a POST /api/predict JSON API endpoint.',
    highlights: [
      'Trained and serialized ML classification model (promotion.pkl) with evaluation metrics',
      'Built clean web UI with form validation, probability estimates, and session-based prediction history',
      'Provided production JSON REST endpoint (POST /api/predict) for easy integration with corporate HR portals',
    ],
    techStack: [
      'Python',
      'Flask',
      'Scikit-learn',
      'Jinja2',
      'REST API',
      'HTML/CSS',
    ],
    image: '/src/assets/images/project_employee_promotion_1791124963186.jpg',
    githubUrl: 'https://github.com/megandas/Human-Resource-Management-Predicting-Employee-Promotions',
    featured: false,
    aiPromptContext:
      'Megan Das developed an end-to-end Employee Promotion Prediction web app using Flask, Scikit-learn, and Jinja2 with an interactive UI and REST API endpoint for HR decision support.',
  },
  {
    id: 'fake-news-bert',
    title: 'Fake News Detection Using BERT Transformers',
    subtitle: 'Deep Bidirectional NLP Text Classification Pipeline',
    category: 'Machine Learning',
    year: '2024–2025',
    client: 'NLP Research & Verification Lab',
    role: 'Machine Learning Engineer',
    metrics: [
      '92% Classification Accuracy',
      'BERT Transformer Architecture',
      'Custom Tokenization Pipelines',
    ],
    description:
      'Developed a binary text classification model leveraging Bidirectional Encoder Representations from Transformers (BERT) to identify misinformation and fabricated news articles with 92% accuracy.',
    challenge:
      'Disinformation campaigns employ nuanced linguistic phrasing and context switching that conventional n-gram or TF-IDF classifiers fail to detect.',
    solution:
      'Fine-tuned a pre-trained BERT transformer with custom attention masks, specialized text normalization pipelines, and Scikit-learn validation routines.',
    highlights: [
      'Attained 92% classification accuracy on comprehensive labeled benchmark datasets',
      'Constructed complete NLP preprocessing pipeline including cleaning, subword tokenization, and attention masking',
      'Fine-tuned transformer heads to minimize false positives in journalistic fact-checking',
    ],
    techStack: [
      'Python',
      'Transformers',
      'Hugging Face',
      'BERT',
      'Scikit-learn',
      'Pandas',
      'NumPy',
    ],
    image: '/src/assets/images/project_arrive_ai_1791034900832.jpg',
    featured: false,
    aiPromptContext:
      'Megan Das built a fake news detection model using BERT Transformers achieving 92% accuracy with custom tokenization, attention masks, and Scikit-learn pipelines.',
  },
];

export const DEFAULT_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Cybersecurity and AI/ML Capstone Intern',
    company: 'VIT Vellore',
    period: 'Jan 2026 – May 2026',
    location: 'Bangalore, India',
    description:
      'Researched and built a dual-layered web attack detection engine combining signature-based filtering and ML behavioral analysis.',
    bullets: [
      'Developed a dual-layered web attack detection engine achieving 95% threat detection precision with under 200 ms response time.',
      'Engineered and preprocessed HTTP request features (payload entropy, parameter length, special-character distribution) to improve real-time anomaly detection.',
      'Managed Epics, User Stories, Subtasks and Bugs in JIRA across a 5-month project lifecycle.',
    ],
    technologies: ['Python', 'Flask', 'Machine Learning', 'JIRA'],
  },
  {
    id: 'exp-2',
    role: 'Data Science Intern',
    company: 'Cognifyz Technologies',
    period: 'May 2025 – Jun 2025',
    location: 'Bangalore, India',
    description:
      'Executed statistical analysis, exploratory data analysis, and predictive restaurant rating models.',
    bullets: [
      'Conducted exploratory data analysis on 25+ restaurant records, applying statistical analysis and geospatial visualization to identify 10+ key trends in customer behavior and rating distribution.',
      'Developed and evaluated 3 machine learning models (Linear Regression, Decision Tree, Random Forest) to predict restaurant ratings, achieving approximately 85% prediction accuracy.',
    ],
    technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Seaborn'],
  },
  {
    id: 'exp-3',
    role: 'AI/ML Intern',
    company: 'Mphasis',
    period: 'May 2024 – Jun 2024',
    location: 'Bangalore, India',
    description:
      'Engineered cloud AI chatbots and predictive employee attrition analytics on Microsoft Azure.',
    bullets: [
      'Built and deployed an AI chatbot using Microsoft Azure Services and Power BI Q&A, enabling natural language queries across 10K+ company records and real-time employee attrition insights.',
      'Extracted and managed 50K+ SQL records in Azure Blob Storage and integrated Azure AI Services for predictive employee attrition analytics, achieving ~80% model accuracy.',
    ],
    technologies: [
      'Microsoft Azure (Azure AI Services, Azure Blob Storage)',
      'Power BI',
      'SQL',
      'Python',
    ],
  },
];

export const DEFAULT_NOTES: NoteItem[] = [
  {
    id: 'note-1',
    title: 'Architecting Multi-Agent Dialogue with Microsoft AutoGen',
    date: 'February 2026',
    readTime: '5 min read',
    summary:
      'How decomposing complex data science tasks into specialized conversational agents (Analyzer + Code Executor) eliminates hallucinated code.',
    content: `When building autonomous AI systems that write and execute code, relying on a single prompt often leads to hallucinations, syntax errors, or unconstrained execution.

In Analyzer GPT, I implemented a multi-agent loop using Microsoft AutoGen:

1. **Role Separation**:
   - The *Data Analyzer Agent* receives user natural-language questions, inspects column schemas, and writes Python data analysis code.
   - The *Code Executor Agent* runs the generated script in an isolated Docker container and returns the execution stdout, errors, or generated Matplotlib figures.

2. **Autonomous Self-Correction**:
   - If the code throws a KeyError or TypeError, the Executor sends the traceback back into the conversation thread.
   - The Analyzer inspects the error and rewrites the script automatically without human intervention.

3. **Docker Isolation**:
   - Sandboxing execution guarantees safety against destructive commands while maintaining full access to Pandas and NumPy libraries.`,
    tags: ['Agentic AI', 'AutoGen', 'Docker', 'Python'],
  },
  {
    id: 'note-2',
    title: 'Dual-Layer Cybersecurity: Combining Signatures with ML Entropy',
    date: 'January 2026',
    readTime: '6 min read',
    summary:
      'Why pure ML in network intrusion creates latency bottlenecks, and how dual-layered architecture delivers 95% precision under 200ms.',
    content: `Detecting web attacks in high-throughput production environments faces a fundamental trade-off: speed versus zero-day adaptability.

Signature-based filtering is nearly instantaneous (O(1) regex lookups) but blind to obfuscated attacks. Pure machine learning catches complex anomalies but introduces unmanageable CPU latency per request.

Our architecture solves this through dual-staging:

- **Stage 1 (Signature Filter)**: Evaluates high-confidence attack vectors (SQLi injection strings, XSS script tags) within 5ms. Known threats are rejected immediately.
- **Stage 2 (ML Behavioral Anomaly Scoring)**: Only non-trivial requests pass to the ML engine. We extract domain features such as Shannon payload entropy, parameter lengths, and special-character distributions.

Result: 95% detection precision on complex exploits with sub-200ms response times.`,
    tags: ['Cybersecurity', 'Machine Learning', 'Flask', 'VIT Vellore'],
  },
  {
    id: 'note-3',
    title: 'Repository-Aware RAG for Automated Code Reviews',
    date: 'December 2025',
    readTime: '4 min read',
    summary:
      'Lessons learned building an AI Pull Request reviewer with IBM watsonx Granite and ChromaDB for the IBM TechXchange Hackathon.',
    content: `Reviewing pull requests using standard LLM prompts produces shallow comments like "rename variable x to y".

To provide true engineering value, an AI reviewer needs full repository awareness:
- How does this changed function affect downstream consumers?
- Does this new API endpoint follow existing repository authentication patterns?

By indexing the entire codebase in ChromaDB and building a contextual RAG pipeline, our reviewer retrieves related modules, type declarations, and unit tests before formulating suggestions.

Integrating IBM watsonx Granite models allowed us to output structured JSON issues, severity scores, and automated test coverage recommendations.`,
    tags: ['RAG', 'IBM watsonx', 'LangChain', 'Code Review'],
  },
];

export const DEFAULT_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'AI PR Reviewer Architecture',
    category: 'IBM Hackathon',
    image: '/src/assets/images/project_pr_reviewer_1791035369586.jpg',
    caption: 'Repository-aware code intelligence dashboard and VS Code review extension built with IBM watsonx Granite.',
    aspectRatio: '16/9',
  },
  {
    id: 'gal-2',
    title: 'ContentPilot AI Campaign Studio',
    category: 'Generative AI',
    image: '/src/assets/images/project_contentpilot_ai_1791124934973.jpg',
    caption: 'Multi-platform social campaign and 7-day calendar generator built with Google Gemini and Streamlit.',
    aspectRatio: '16/9',
  },
  {
    id: 'gal-3',
    title: 'LinkedIn AI Icebreaker Bot',
    category: 'RAG Pipeline',
    image: '/src/assets/images/project_linkedin_icebreaker_1791124921515.jpg',
    caption: 'Gradio conversational interface and semantic retrieval powered by LlamaIndex, ChromaDB, and TinyLlama.',
    aspectRatio: '16/9',
  },
  {
    id: 'gal-4',
    title: 'Analyzer GPT Agent Loop',
    category: 'Agentic AI',
    image: '/src/assets/images/project_analyzer_gpt_1791035384064.jpg',
    caption: 'Multi-agent AutoGen dialogue loop executing statistical plots inside Docker sandbox.',
    aspectRatio: '16/9',
  },
  {
    id: 'gal-5',
    title: 'Cybersecurity Telemetry Console',
    category: 'ML Intrusion Detection',
    image: '/src/assets/images/project_cybersecurity_ml_1791035397122.jpg',
    caption: 'Real-time HTTP payload entropy and threat precision scoring console developed at VIT Vellore.',
    aspectRatio: '16/9',
  },
  {
    id: 'gal-6',
    title: 'Chronic Kidney Disease Telemetry',
    category: 'Clinical ML',
    image: '/src/assets/images/project_ckd_detection_1791124949290.jpg',
    caption: 'Supervised classification metrics and feature importances with 5-Fold Stratified Cross-Validation.',
    aspectRatio: '16/9',
  },
];

export const DEFAULT_AUDIO_TRACKS: AudioTrack[] = [
  {
    id: 'track-1',
    title: 'Bangalore Neon (Lo-Fi Synth)',
    artist: 'Megan Das Lab',
    album: 'Deep Code Sessions',
    duration: '3:45',
    frequency: 220,
    waveformColor: '#818cf8',
  },
  {
    id: 'track-2',
    title: 'Vector Space Calm (Ambient)',
    artist: 'Megan Das Lab',
    album: 'Embedding Journeys',
    duration: '4:12',
    frequency: 330,
    waveformColor: '#38bdf8',
  },
  {
    id: 'track-3',
    title: 'Agentic Flow (Minimal Pulse)',
    artist: 'Megan Das Lab',
    album: 'Multi-Agent Loops',
    duration: '2:58',
    frequency: 440,
    waveformColor: '#34d399',
  },
];
