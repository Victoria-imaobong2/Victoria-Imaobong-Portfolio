'use client';

import { useState } from 'react';
import { Terminal, Mail, ExternalLink } from 'lucide-react';

export default function Hero() {
  const [inputCommand, setInputCommand] = useState('');
  const [logs, setLogs] = useState<string[]>([
    'System initialized. Type "help" or "skills" for commands.',
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputCommand.trim().toLowerCase();
    let response = '';

    switch (cmd) {
      case 'help':
        response = 'Available commands: about, skills, projects, contact, clear';
        break;
      case 'about':
        response = 'Victoria-Imaobong Solomon | Software Engineering Graduate from FUTO. Full-stack, DevOps & Blockchain dev.';
        break;
      case 'skills':
        response = 'Next.js, React, FastAPI, Java, Solidity, Docker, AWS, PostgreSQL, Flutter, Unity, Tailwind CSS.';
        break;
      case 'projects':
        response = 'Scroll down to explore featured projects: PODCHAIN PWA, Patient Mgmt Microservices, WhatsApp Clone, and more.';
        break;
      case 'contact':
        response = 'Email: solomonvictoria2023@gmail.com | LinkedIn: linkedin.com/in/victoria-imaobongsolomon';
        break;
      case 'clear':
        setLogs([]);
        setInputCommand('');
        return;
      default:
        response = `Command not recognized: "${cmd}". Type "help" for assistance.`;
    }

    setLogs((prev) => [...prev, `> ${inputCommand}`, response]);
    setInputCommand('');
  };

  return (
    <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Available for Software Engineering Roles
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
          Victoria-Imaobong <br />
          <span className="bg-gradient-to-r from-emerald-400 to-indigo-500 bg-clip-text text-transparent">
            Solomon
          </span>
        </h1>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          Software Engineer specializing in web applications, cloud microservices, blockchain logistics, and cross-platform mobile solutions.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a
            href="https://github.com/victoria-imaobong2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl transition border border-slate-700/50"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
             <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/victoria-imaobongsolomon"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl transition border border-slate-700/50"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          </a>
          <a
            href="mailto:solomonvictoria2023@gmail.com"
            className="p-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl transition border border-slate-700/50"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm">
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <Terminal className="w-4 h-4" />
            <span>victoria-cli v1.0.0</span>
          </div>
        </div>
        <div className="p-4 h-64 overflow-y-auto space-y-2 text-slate-300">
          {logs.map((log, i) => (
            <div key={i} className={log.startsWith('>') ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
              {log}
            </div>
          ))}
        </div>
        <form onSubmit={handleCommand} className="border-t border-slate-800 p-3 bg-slate-950 flex items-center gap-2">
          <span className="text-emerald-400">$</span>
          <input
            type="text"
            value={inputCommand}
            onChange={(e) => setInputCommand(e.target.value)}
            placeholder="type 'help'..."
            className="bg-transparent text-slate-100 flex-1 outline-none font-mono text-sm"
          />
        </form>
      </div>
    </section>
  );
}