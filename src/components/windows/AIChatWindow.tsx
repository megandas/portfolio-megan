import React, { useState, useRef, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ChatMessage } from '../../types';
import { generateAIResponse } from '../../utils/aiCaseStudyAgent';
import {
  Sparkles,
  Send,
  User,
  ArrowRight,
  Bot,
  RotateCcw,
} from 'lucide-react';

export const AIChatWindow: React.FC = () => {
  const { profile, projects, openWindow } = usePortfolio();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I'm Megan Das's AI Assistant. You can explore her work in Agentic AI, examine her Top 50 finish in the IBM TechXchange Hackathon with watsonx Granite, delve into Analyzer GPT with Microsoft AutoGen, or ask about her dual-layer cybersecurity ML model at VIT Vellore.\n\nClick any topic below or type your own question!`,
      timestamp: 'Just now',
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const response = generateAIResponse(text, profile, projects);
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
        projectReference: response.projectReference,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'assistant',
        text: `Chat reset. Ask me anything about Megan's projects, design systems, or AI workflows!`,
        timestamp: 'Just now',
      },
    ]);
  };

  const quickPrompts = [
    'Tell me about ContentPilot AI with Google Gemini',
    'How does LinkedIn AI Icebreaker Bot use LlamaIndex & TinyLlama?',
    'Tell me about the IBM Hackathon project & Top 50 standing',
    'How does Analyzer GPT use Microsoft AutoGen & Docker?',
    'Tell me about the Dual-Layer Cybersecurity ML engine',
    'Explain the Chronic Kidney Disease 5-Fold CV model',
  ];

  return (
    <div className="flex flex-col h-full bg-slate-950/80">
      {/* Top Banner */}
      <div className="px-5 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-violet-600/30 border border-violet-400/40 flex items-center justify-center text-violet-300">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span>Ask Megan AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[11px] text-slate-400">
              Interactive Case Study Exploration
            </div>
          </div>
        </div>

        <button
          onClick={handleResetChat}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2 py-1 rounded hover:bg-white/5 transition-colors cursor-pointer"
          title="Reset Conversation"
        >
          <RotateCcw className="w-3 h-3" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* Messages Stream */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                isUser ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${
                  isUser
                    ? 'bg-sky-600/40 border-sky-400/40 text-sky-200'
                    : 'bg-violet-600/40 border-violet-400/40 text-violet-200'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[85%] sm:max-w-xl rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-sky-600 text-white rounded-tr-none'
                    : 'bg-white/10 text-slate-100 rounded-tl-none border border-white/10'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {/* Referenced Project Card if available */}
                {msg.projectReference && (
                  <div className="mt-3 pt-3 border-t border-white/15">
                    <button
                      onClick={() => {
                        openWindow('projects', { projectId: msg.projectReference });
                      }}
                      className="w-full text-left p-2.5 rounded-xl bg-black/40 hover:bg-black/60 border border-white/15 transition-all flex items-center justify-between cursor-pointer group"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="text-[11px] text-sky-400 font-semibold uppercase tracking-wider">
                          Referenced Case Study
                        </div>
                        <div className="text-xs font-bold text-white truncate">
                          View full project deep-dive & assets
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform shrink-0" />
                    </button>
                  </div>
                )}

                <div
                  className={`text-[10px] mt-1.5 ${
                    isUser ? 'text-sky-200' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-violet-600/40 border border-violet-400/40 flex items-center justify-center text-violet-200">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 border border-white/10 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      <div className="px-4 py-2 border-t border-white/10 bg-slate-950/60 overflow-x-auto shrink-0 flex items-center gap-2">
        <span className="text-[11px] text-slate-400 whitespace-nowrap font-medium">
          Suggested:
        </span>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-[11px] text-slate-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer shrink-0"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-3 sm:p-4 border-t border-white/10 bg-slate-950/90 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ask about Arrive, design tokens, agent loops, metrics..."
            className="flex-1 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 outline-none focus:border-violet-500 transition-colors"
          />
          <button
            type="submit"
            disabled={!inputVal.trim()}
            className="p-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 active:bg-violet-700 disabled:opacity-40 text-white transition-colors cursor-pointer disabled:cursor-not-allowed shrink-0"
            title="Send Message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
