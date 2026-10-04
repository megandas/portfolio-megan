# Megan Das — macOS Developer Portfolio & Case Studies 

A responsive macOS Sonoma desktop environment engineered with **React 19**, **TypeScript**, **Tailwind CSS**, and **Motion**, showcasing production AI/ML systems, repository-aware RAG pipelines, and deep learning models.

---

## 🌟 Overview & Key Highlights

- **macOS Desktop Architecture**: Floating, draggable, resizable window manager with z-index stacking, dock magnification, live Sonoma desktop widgets, control center, and spotlight search (`Cmd + K`).
- **Interactive AI Case Study Explorer**: Powered by the Google Gemini API with smart suggestions, domain-specific prompt engineering, and deep project context awareness.
- **Projects & Architectures**:
  - **ContentPilot AI**: Autonomous multi-channel content engine using the Google Gemini API with platform-tailored prompts.
  - **AI-Powered Pull Request Reviewer & Repository Intelligence Platform**: Top 50 team at IBM TechXchange 2026 Dev Day Hackathon (watsonx Granite LLM + ChromaDB + AST Parser).
  - **LinkedIn AI Icebreaker Bot**: 100% local RAG pipeline with SentenceSplitter, MiniLM embeddings, ChromaDB, and TinyLlama in Gradio.
  - **Analyzer GPT**: Multi-agent conversational system using Microsoft AutoGen with isolated Docker code execution.
  - **Dual-Layer Cybersecurity Threat Engine**: Heuristic signature matching (<5ms) + ML entropy anomaly scoring (<200ms) with 95% precision.
  - **Chronic Kidney Disease Detection**: 5-fold stratified cross-validation ML pipeline across 24 clinical features.
  - **Employee Promotion Prediction**: Serialized Scikit-learn classifier with Flask API & web application.
  - **Fake News Detection using BERT**: Fine-tuned bidirectional transformer encoder achieving 92% benchmark accuracy.
- **Interactive Developer Terminal**: Fully functional UNIX command-line simulator with `help`, `cat`, `skills`, `projects`, `clear`, `contact`, and audio controls.
- **In-App Portfolio Customizer**: Edit profile bio, contact info, upload custom profile pictures, and adjust wallpapers directly within the Settings app.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Integration**: [@google/genai](https://www.npmjs.com/package/@google/genai)

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js 18+ or Bun
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/megandas/portfolio.git

# Navigate into the project directory
cd portfolio

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 📂 Project Structure

```text
├── src/
│   ├── assets/              # Wallpapers, audio tracks, and profile photo
│   ├── components/
│   │   ├── Desktop.tsx      # Main desktop orchestrator
│   │   ├── DesktopIcons.tsx # Draggable desktop shortcuts
│   │   ├── DesktopWidgets.tsx# Live Sonoma calendar & weather widgets
│   │   ├── Dock.tsx         # Animated macOS dock with magnification
│   │   ├── MenuBar.tsx      # Top menu bar with clock & status trays
│   │   ├── SpotlightSearch.tsx # Cmd + K fast search overlay
│   │   └── windows/         # Floating application windows
│   │       ├── AboutWindow.tsx
│   │       ├── AIChatWindow.tsx
│   │       ├── ContactWindow.tsx
│   │       ├── ProjectsWindow.tsx
│   │       ├── ResumeWindow.tsx
│   │       ├── SettingsWindow.tsx
│   │       ├── TerminalWindow.tsx
│   │       └── WindowFrame.tsx
│   ├── context/
│   │   └── PortfolioContext.tsx # Central state & window manager
│   ├── data/
│   │   └── defaultContent.ts   # Megan Das's resume, credentials & milestones
│   └── types.ts             # TypeScript interface definitions
├── package.json
└── vite.config.ts
```

---

## 👤 Author

**Megan Das**  
- **Email**: megansikata@gmail.com  
- **LinkedIn**: [linkedin.com/in/megan-das](https://www.linkedin.com/in/megan-das/)  
- **GitHub**: [github.com/megandas](https://github.com/megandas)
