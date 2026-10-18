'use client';

import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

const CATEGORIES = ['All', 'Blockchain', 'DevOps & Cloud', 'Fullstack', 'Mobile', 'Game Dev', 'Frontend', 'UI/UX Design', 'Requirement Engineering'];

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
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-16 px-6 max-w-7xl mx-auto bg-[#fbebe8]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-rose-200/80 pb-8">
        <div>
          <h2 className="text-3xl font-serif text-stone-900 mb-2">Featured Work</h2>
          <p className="text-stone-600 text-xs tracking-wider uppercase font-medium">Software engineering across web, cloud, and mobile.</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs transition ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white font-medium shadow-sm'
                  : 'bg-white/80 text-stone-700 hover:bg-white border border-rose-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-stone-500 text-sm font-serif italic">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white/90 backdrop-blur-sm border border-rose-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose-900/5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Image / Header Banner */}
                <div className="h-48 bg-[#f4deda]/60 overflow-hidden relative border-b border-rose-100 flex items-center justify-center p-6 text-center">
                  {p.imageUrl ? (
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <span className="font-serif text-lg font-bold text-rose-950 mb-1">
                        {p.title}
                      </span>
                      <span className="text-[10px] text-rose-700 uppercase tracking-widest font-medium">Project Preview</span>
                    </div>
                  )}
                  <span className="absolute top-3 left-3 text-[10px] uppercase font-medium tracking-wider px-3 py-1 rounded-full bg-white text-rose-950 border border-rose-200/80 shadow-sm">
                    {p.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">{p.title}</h3>
                  <p className="text-stone-600 text-xs leading-relaxed mb-4 font-light">{p.description}</p>
                </div>
              </div>

              <div className="px-6 pb-6">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-3 mb-5 border-t border-rose-100">
                  {p.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-sans text-stone-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200/60">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Dual Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-rose-100">
                  {p.githubUrl ? (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium transition"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-stone-700" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-stone-50 text-stone-400 text-xs font-medium border border-stone-100 cursor-not-allowed"
                    >
                      <span>GitHub</span>
                    </button>
                  )}

                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition shadow-sm"
                    >
                      <span>Live Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-stone-50 text-stone-400 text-xs font-medium border border-stone-100 cursor-not-allowed"
                    >
                      <span>No Link</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}