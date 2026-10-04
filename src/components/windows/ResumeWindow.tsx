import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Printer, Mail, MapPin, Phone, FileCode2, ExternalLink } from 'lucide-react';

export const ResumeWindow: React.FC = () => {
  const { profile } = usePortfolio();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="h-full flex flex-col bg-slate-900/90 text-slate-100">
      {/* Top Document Toolbar */}
      <div className="px-5 py-2.5 bg-slate-950/90 border-b border-white/10 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
          <FileCode2 className="w-4 h-4 text-rose-400" />
          <span>MEGAN_DAS_RESUME.pdf</span>
          <span className="text-[10px] font-mono text-slate-500">· Official Resume · 1 Page Document</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Sheet Viewport */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/60">
        <div className="w-full max-w-3xl mx-auto bg-white text-slate-900 rounded-xl p-8 sm:p-12 shadow-2xl space-y-5 print:m-0 print:p-0 print:shadow-none print:rounded-none font-sans text-xs sm:text-[13px] leading-snug mb-8">
          {/* Header */}
          <div className="text-center space-y-1.5 border-b border-slate-300 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide uppercase text-slate-950">
              MEGAN DAS
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-700 flex-wrap">
              <span>Bangalore, India</span>
              <span aria-hidden="true">|</span>
              <span>+91 8431734881</span>
              <span aria-hidden="true">|</span>
              <a href={`mailto:${profile.email}`} className="text-blue-700 underline font-medium">
                {profile.email}
              </a>
              <span aria-hidden="true">|</span>
              <a
                href={profile.socials?.linkedin || 'https://www.linkedin.com/in/megan-das/'}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline font-medium hover:text-blue-900"
              >
                LinkedIn
              </a>
              <span aria-hidden="true">|</span>
              <a
                href={profile.socials?.github || 'https://github.com/megandas'}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline font-medium hover:text-blue-900"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-900 pb-0.5">
              EDUCATION
            </h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-start font-bold text-slate-900">
                  <span>B.Tech in Computer Science (Specialization in Data Science)</span>
                  <span className="font-normal text-slate-600">Sep 2022 – Jul 2026</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Vellore Institute of Technology | Vellore, India</span>
                  <span className="font-semibold text-slate-900">CGPA: 8.44</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start font-bold text-slate-900">
                  <span>State Board – Class 12</span>
                  <span className="font-normal text-slate-600">Jun 2021 – Jun 2022</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>DCFL, Deeksha Main Campus | Bangalore, India</span>
                  <span className="font-semibold text-slate-900">Score: 96%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start font-bold text-slate-900">
                  <span>CBSE – Class 10</span>
                  <span className="font-normal text-slate-600">Apr 2019 – Apr 2020</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>National Public School | Bangalore, India</span>
                  <span className="font-semibold text-slate-900">Score: 94%</span>
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-900 pb-0.5">
              SKILLS
            </h2>
            <div className="space-y-1 text-slate-800">
              <div>
                <span className="font-bold">Core Domain: </span>
                Artificial Intelligence (AI), Machine Learning (ML), Data science, Data Analysis, Deep Learning (DL), Agentic AI, Generative AI, LLMs, RAG, Langchain, Analytical Thinking, Problem Solving, Communication, Teamwork, Adaptability
              </div>
              <div>
                <span className="font-bold">Programming: </span>
                Python, SQL (MySQL), R, Java, Object-Oriented Programming (OOP)
              </div>
              <div>
                <span className="font-bold">Frameworks and Libraries: </span>
                TensorFlow, Scikit-learn, AutoGen, Flask, Pandas, NumPy, Matplotlib, Seaborn, FastAPI, Transformers, EDA, Hugging Face
              </div>
              <div>
                <span className="font-bold">Tools and Cloud: </span>
                Microsoft Azure (Azure AI, Blob Storage), Power BI, Git, GitHub, JIRA, Docker, ChromaDB, IBM watsonx
              </div>
            </div>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-900 pb-0.5">
              WORK EXPERIENCE
            </h2>

            {/* Experience 1 */}
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <span className="font-bold text-slate-900">
                  Cybersecurity and AI/ML Capstone Intern | VIT Vellore | Bangalore, India
                </span>
                <span className="text-slate-600 font-medium">Jan 2026 – May 2026</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-800">
                <li>
                  Developed a dual-layered web attack detection engine combining signature-based filtering and ML-driven behavioral analysis, achieving 95% threat detection precision with under 200 ms response time.
                </li>
                <li>
                  Engineered and preprocessed HTTP request features (payload entropy, parameter length, special-character distribution, etc.) to improve real-time anomaly detection performance.
                </li>
                <li>
                  Managed Epics, User Stories, Subtasks and Bugs in JIRA across a 5-month project lifecycle.
                </li>
              </ul>
              <div className="text-[11px] text-slate-600">
                <span className="font-bold">Technologies / Skills Used: </span>
                Python, Flask, Machine Learning, JIRA
              </div>
            </div>

            {/* Experience 2 */}
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <span className="font-bold text-slate-900">
                  Data Science Intern | Cognifyz Technologies | Bangalore, India
                </span>
                <span className="text-slate-600 font-medium">May 2025 – Jun 2025</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-800">
                <li>
                  Conducted exploratory data analysis on 25+ restaurant records, applying statistical analysis and geospatial visualization to identify 10+ key trends in customer behavior and rating distribution.
                </li>
                <li>
                  Developed and evaluated 3 machine learning models (Linear Regression, Decision Tree, Random Forest) to predict restaurant ratings, achieving approximately 85% prediction accuracy.
                </li>
              </ul>
              <div className="text-[11px] text-slate-600">
                <span className="font-bold">Technologies / Skills Used: </span>
                Pandas, NumPy, Matplotlib, Scikit-learn, Seaborn
              </div>
            </div>

            {/* Experience 3 */}
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <span className="font-bold text-slate-900">
                  AI/ML Intern | Mphasis | Bangalore, India
                </span>
                <span className="text-slate-600 font-medium">May 2024 – Jun 2024</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-800">
                <li>
                  Built and deployed an AI chatbot using Microsoft Azure Services and Power BI Q&A, enabling natural language queries across 10K+ company records and real-time employee attrition insights.
                </li>
                <li>
                  Extracted and managed 50K+ SQL records in Azure Blob Storage and integrated Azure AI Services for predictive employee attrition analytics, achieving ~80% model accuracy.
                </li>
              </ul>
              <div className="text-[11px] text-slate-600">
                <span className="font-bold">Technologies / Skills Used: </span>
                Microsoft Azure (Azure AI Services, Azure Blob Storage), Power BI, SQL, Python
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-900 pb-0.5">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc pl-4 space-y-0.5 text-slate-800">
              <li>Microsoft Azure Data Scientist Associate (DP-100)</li>
              <li>Building AI Agents and Agentic AI Systems via Microsoft AutoGen</li>
            </ul>
          </div>

          {/* PROJECTS */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-900 pb-0.5">
              PROJECTS
            </h2>

            {/* Project 1 */}
            <div className="space-y-0.5">
              <div className="font-bold text-slate-900">
                Analyzer GPT – AI-Powered Data Analyzer
              </div>
              <div className="text-[11px] text-slate-600">
                <span className="font-bold">Technologies: </span>
                Python, Microsoft AutoGen, LLMs, Docker, Streamlit, Pandas, Matplotlib, Seaborn
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-800">
                <li>
                  Developed a multi-agent AI system using Microsoft AutoGen to analyze CSV datasets through natural-language queries and generate Python-based insights.
                </li>
                <li>
                  Implemented Data Analyzer and Code Executor agents with Docker-isolated execution, automating data analysis and visualization.
                </li>
                <li>
                  Built a Streamlit interface enabling CSV uploads, conversational data analysis, and automatic generation of analysis results and visualizations.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-0.5">
              <div className="font-bold text-slate-900">
                Predicting Fake News Using BERT
              </div>
              <div className="text-[11px] text-slate-600">
                <span className="font-bold">Technologies: </span>
                Pandas, NumPy, Matplotlib, Scikit-learn
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-800">
                <li>
                  Developed a binary text classification model using Bidirectional Encoder Representations from Transformers (BERT) to detect fake news articles, achieving approximately 92% classification accuracy on a labeled dataset.
                </li>
                <li>
                  Executed comprehensive data preprocessing including text cleaning, tokenization, and attention mask generation.
                </li>
                <li>
                  Fine-tuned a pre-trained BERT model using Scikit-learn pipelines, improving precision and recall for fake news detection and reducing misclassification.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-0.5">
              <div className="font-bold text-slate-900">
                AI Pull Request Review & Repository Intelligence Platform – IBM Hackathon
              </div>
              <div className="text-[11px] text-slate-600">
                <span className="font-bold">Technologies: </span>
                Python, FastAPI, IBM watsonx Granite, LangChain, ChromaDB, Hugging Face, TypeScript, VS Code Extension
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-800">
                <li>
                  Built an AI-powered Pull Request reviewer that analyzes code changes across security, performance, and testing, generating structured issues, fixes, health scores, and merge-readiness recommendations.
                </li>
                <li>
                  Engineered a repository-aware RAG pipeline to retrieve relevant code and documentation for contextual AI code reviews and developer Q&A.
                </li>
                <li>
                  Developed a VS Code extension with an interactive PR dashboard, AI chat, repository analysis, review replay, and code impact visualization.
                </li>
              </ul>
            </div>
          </div>

          {/* EXTRACURRICULAR */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-900 pb-0.5">
              EXTRACURRICULAR
            </h2>
            <ul className="list-disc pl-4 space-y-0.5 text-slate-800">
              <li>
                <span className="font-bold">Open-Source Contributor: </span>
                Contributed a merged production fix to The Boring Education (TBE-Web) using Next.js, React, TypeScript, HTML, CSS.
              </li>
              <li>
                Ranked among the Top 50 teams in the IBM TechXchange 2026 Dev Day Hackathon
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
