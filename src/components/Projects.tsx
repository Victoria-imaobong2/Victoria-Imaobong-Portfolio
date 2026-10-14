'use client';

import { useEffect, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const CATEGORIES = ['All', 'Blockchain', 'DevOps & Cloud', 'Fullstack', 'Mobile', 'Game Dev'];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const url = selectedCategory === 'All' 
          ? '/api/projects' 
          : `/api/projects?category=${encodeURIComponent(selectedCategory)}`;
        const res = await fetch(url);
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
      } flex {
        setLoading(false);
      }
    }
    loadProjects();
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
          <p className="text-slate-400">Engineering solutions across distributed systems, cloud, and web apps.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-500">Loading engineering projects...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 transition flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-md bg-slate-800 text-emerald-400 border border-slate-700/50">
                    {p.category}
                  </span>
                  <div className="flex items-center gap-3">
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {p.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}