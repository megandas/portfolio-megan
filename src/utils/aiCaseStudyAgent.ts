import { ProfileData, Project } from '../types';

export function generateAIResponse(
  userQuery: string,
  profile: ProfileData,
  projects: Project[]
): { text: string; projectReference?: string } {
  const query = userQuery.toLowerCase().trim();

  // 1. AI Pull Request Reviewer & IBM Hackathon
  if (
    query.includes('pr review') ||
    query.includes('pull request') ||
    query.includes('ibm') ||
    query.includes('watsonx') ||
    query.includes('granite') ||
    query.includes('hackathon') ||
    query.includes('vs code') ||
    query.includes('rag')
  ) {
    const prProject = projects.find((p) => p.id === 'ai-pr-reviewer');
    return {
      text: `For the IBM TechXchange 2026 Dev Day Hackathon, ${profile.name} built an AI-powered Pull Request Reviewer & Repository Intelligence Platform that placed in the Top 50 teams worldwide!\n\nKey Highlights:\n• Automated Code Review: Analyzes git diffs across security vulnerabilities, performance bottlenecks, and testing gaps using IBM watsonx Granite LLMs.\n• Repository-Aware RAG: Uses LangChain & ChromaDB to retrieve relevant files and architectural patterns for context-rich review feedback.\n• VS Code Extension: Interactive developer extension with PR dashboards, AI chat, review replay, and visual code impact heatmaps.`,
      projectReference: prProject ? 'ai-pr-reviewer' : undefined,
    };
  }

  // 2. ContentPilot AI (Google Gemini + Streamlit)
  if (
    query.includes('contentpilot') ||
    query.includes('content pilot') ||
    query.includes('gemini') ||
    query.includes('social media') ||
    query.includes('campaign') ||
    query.includes('7-day')
  ) {
    const cp = projects.find((p) => p.id === 'contentpilot-ai');
    return {
      text: `ContentPilot AI was built by ${profile.name} to transform one piece of long-form content (articles, blogs, transcripts) into complete multi-platform social media campaigns.\n\nKey Highlights:\n• Multi-Platform Formats: Auto-generates LinkedIn thought leadership posts, X threads, Instagram captions/hashtags, and YouTube scripts.\n• 7-Day Social Calendar: Creates an actionable weekly schedule maintaining brand voice and messaging consistency.\n• AI Quality Score: Audits the generated campaign and suggests concrete improvements.\n• Live Demo: Deployed on Streamlit Cloud (https://contentpilotai.streamlit.app/) powered by Google Gemini API.`,
      projectReference: cp ? 'contentpilot-ai' : undefined,
    };
  }

  // 3. LinkedIn AI Icebreaker Bot (LlamaIndex + ChromaDB + TinyLlama)
  if (
    query.includes('icebreaker') ||
    query.includes('linkedin bot') ||
    query.includes('llamaindex') ||
    query.includes('tinyllama') ||
    query.includes('gradio') ||
    query.includes('colab') ||
    query.includes('resume upload')
  ) {
    const ib = projects.find((p) => p.id === 'linkedin-icebreaker-bot');
    return {
      text: `The LinkedIn AI Icebreaker Bot is an end-to-end RAG application created by ${profile.name} in Google Colab.\n\nKey Highlights:\n• Conversational RAG: Semantic search over LinkedIn profiles and uploaded PDF resumes using sentence-transformers MiniLM embeddings and ChromaDB vector store.\n• Zero API Keys Needed: Uses local Hugging Face TinyLlama inference to generate grounded, hallucination-free responses.\n• Interactive Gradio UI: Features 4 tabs for profile Q&A, networking icebreaker generation, interesting facts, and resume document chat.`,
      projectReference: ib ? 'linkedin-icebreaker-bot' : undefined,
    };
  }

  // 4. Analyzer GPT & Microsoft AutoGen
  if (
    query.includes('analyzer') ||
    query.includes('autogen') ||
    query.includes('agentic') ||
    query.includes('agent') ||
    query.includes('docker') ||
    query.includes('csv') ||
    query.includes('streamlit')
  ) {
    const analyzer = projects.find((p) => p.id === 'analyzer-gpt');
    return {
      text: `Analyzer GPT is ${profile.name}'s autonomous multi-agent data intelligence platform built using Microsoft AutoGen.\n\nHow it works:\n• Multi-Agent Collaboration: Pairs a Data Analyzer agent with a Code Executor agent that autonomously writes, tests, and refines Python analysis code.\n• Docker Sandboxing: All execution is safely isolated in Docker containers to avoid security vulnerabilities while rendering dynamic Matplotlib and Seaborn graphs.\n• Streamlit Interface: Enables users to drag-and-drop CSV datasets and chat in natural language for instant statistical analysis.`,
      projectReference: analyzer ? 'analyzer-gpt' : undefined,
    };
  }

  // 5. Cybersecurity & Web Attack Detection
  if (
    query.includes('cyber') ||
    query.includes('security') ||
    query.includes('attack') ||
    query.includes('threat') ||
    query.includes('vit') ||
    query.includes('vellore') ||
    query.includes('95%') ||
    query.includes('entropy') ||
    query.includes('capstone')
  ) {
    const cyber = projects.find((p) => p.id === 'cybersecurity-ml');
    return {
      text: `During her Capstone internship at VIT Vellore, ${profile.name} engineered a dual-layered web attack detection engine achieving 95% threat precision with under 200 ms response times.\n\nArchitecture:\n• Level 1 Signature Filter: Blazing-fast regex inspection rejecting known SQLi and XSS payloads within milliseconds.\n• Level 2 ML Behavioral Anomaly Detection: Features extracted from HTTP requests (Shannon payload entropy, query parameter lengths, special-character distributions) to catch obfuscated zero-day exploits.\n• Managed via agile JIRA sprints over a 5-month project lifecycle.`,
      projectReference: cyber ? 'cybersecurity-ml' : undefined,
    };
  }

  // 6. Chronic Kidney Disease Prediction
  if (
    query.includes('kidney') ||
    query.includes('ckd') ||
    query.includes('chronic') ||
    query.includes('clinical') ||
    query.includes('stratified')
  ) {
    const ckd = projects.find((p) => p.id === 'chronic-kidney-disease-detection');
    return {
      text: `${profile.name} built a clinical machine learning classification pipeline for Chronic Kidney Disease (CKD) prediction based on 400 patient records across 24 clinical indicators (blood pressure, albumin, serum creatinine, hemoglobin).\n\nKey Highlights:\n• Complete clinical ML workflow with median imputation, one-hot encoding, and standard scaling.\n• Evaluated Logistic Regression, Decision Tree, Random Forest, and Gradient Boosting under 5-Fold Stratified Cross-Validation to guarantee balanced class evaluation and minimize false negatives.`,
      projectReference: ckd ? 'chronic-kidney-disease-detection' : undefined,
    };
  }

  // 7. Employee Promotion Prediction
  if (
    query.includes('promotion') ||
    query.includes('employee') ||
    query.includes('hr') ||
    query.includes('flask')
  ) {
    const ep = projects.find((p) => p.id === 'employee-promotion-prediction');
    return {
      text: `${profile.name} engineered an end-to-end Employee Promotion Prediction web application and JSON API.\n\nKey Highlights:\n• Built with Python and Flask with Jinja2 templates, featuring clean responsive UI, form validation, and probability estimates.\n• Serialized ML classification model (promotion.pkl) and session-based prediction history.\n• Production-ready JSON REST API endpoint (POST /api/predict) for easy integration with enterprise HR portals.`,
      projectReference: ep ? 'employee-promotion-prediction' : undefined,
    };
  }

  // 8. BERT Fake News Model
  if (
    query.includes('bert') ||
    query.includes('fake news') ||
    query.includes('nlp') ||
    query.includes('classification') ||
    query.includes('transformer') ||
    query.includes('92%')
  ) {
    const bert = projects.find((p) => p.id === 'fake-news-bert');
    return {
      text: `${profile.name} developed a binary text classification model using BERT (Bidirectional Encoder Representations from Transformers) to detect misinformation with 92% accuracy on benchmark labeled datasets.\n\nShe implemented comprehensive NLP pipelines including tokenization, attention masks, and Scikit-learn validation routines, significantly reducing false positive classifications.`,
      projectReference: bert ? 'fake-news-bert' : undefined,
    };
  }

  // 6. Education & Academic Background
  if (
    query.includes('education') ||
    query.includes('college') ||
    query.includes('degree') ||
    query.includes('vit') ||
    query.includes('cgpa') ||
    query.includes('grades') ||
    query.includes('school')
  ) {
    return {
      text: `${profile.name} is pursuing her B.Tech in Computer Science with a Specialization in Data Science at Vellore Institute of Technology (VIT Vellore), graduating in July 2026 with a strong CGPA of 8.44.\n\nPrior to VIT:\n• State Board Class 12: DCFL, Deeksha Main Campus, Bangalore (96%)\n• CBSE Class 10: National Public School, Bangalore (94%)`,
    };
  }

  // 7. Certifications
  if (
    query.includes('certification') ||
    query.includes('certified') ||
    query.includes('dp-100') ||
    query.includes('microsoft') ||
    query.includes('credential')
  ) {
    return {
      text: `${profile.name} holds prestigious industry certifications:\n1. Microsoft Certified: Azure Data Scientist Associate (DP-100)\n2. Building AI Agents and Agentic AI Systems via Microsoft AutoGen (DeepLearning.AI / Microsoft)`,
    };
  }

  // 8. Open Source & Extracurriculars
  if (
    query.includes('open source') ||
    query.includes('boring education') ||
    query.includes('extracurricular') ||
    query.includes('contribute')
  ) {
    return {
      text: `${profile.name} is an active open-source contributor! She contributed a merged production fix to The Boring Education (TBE-Web) using Next.js, React, TypeScript, HTML, and CSS.\n\nShe was also recognized among the Top 50 teams in the IBM TechXchange 2026 Dev Day Hackathon.`,
    };
  }

  // 9. Contact Info & Location
  if (
    query.includes('contact') ||
    query.includes('email') ||
    query.includes('phone') ||
    query.includes('reach') ||
    query.includes('location') ||
    query.includes('hire') ||
    query.includes('bangalore')
  ) {
    return {
      text: `${profile.name} is based in ${profile.location}.\n• Email: ${profile.email}\n• Phone: ${profile.phone}\n• LinkedIn: https://www.linkedin.com/in/megan-das/\n• GitHub: https://github.com/megandas\n\nYou can also launch the Mail app on this desktop to send an instant message!`,
    };
  }

  // 10. Skills & Tech Stack
  if (query.includes('skill') || query.includes('tech') || query.includes('stack') || query.includes('python') || query.includes('langchain')) {
    return {
      text: `${profile.name}'s technical toolkit:\n• AI / ML: Agentic AI, Multi-Agent AutoGen, LangChain, RAG, Transformers (BERT), TensorFlow, Scikit-learn, Hugging Face, Deep Learning\n• Languages: Python (Expert), SQL (MySQL), TypeScript, R, Java, OOP\n• Cloud & Tools: Microsoft Azure (Azure AI, Blob Storage), Docker, ChromaDB, IBM watsonx Granite, FastAPI, Flask, Power BI, Streamlit, Git, JIRA`,
    };
  }

  // Default intelligent assistant response
  return {
    text: `Hello! As ${profile.name}'s portfolio assistant, I can tell you all about her work in Agentic AI, her Top 50 finish in the IBM TechXchange Hackathon with IBM watsonx Granite, Analyzer GPT with Microsoft AutoGen, or her dual-layer cybersecurity ML engine from VIT Vellore.\n\nTry asking: "Tell me about the IBM Hackathon project", "How does Analyzer GPT work?", or "What are her certifications?"`,
  };
}
