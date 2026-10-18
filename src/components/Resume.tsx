'use client';

import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-rose-200/80 pb-6 mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-serif text-stone-900 mb-2">Curriculum Vitae</h2>
          <p className="text-stone-600 text-xs tracking-wider uppercase font-medium">
            Education, professional experience, and key engineering milestones.
          </p>
        </div>
        <a
          href="/Victoria_Solomon_Resume.pdf"
          download
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium tracking-wider uppercase transition shadow-sm w-fit"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download PDF</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience */}
        <div className="bg-white/90 backdrop-blur-sm border border-rose-200/80 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 pb-2 border-b border-rose-100 text-stone-900">
            <Briefcase className="w-4 h-4 text-rose-800" />
            <h3 className="font-serif font-bold text-lg">Work & Practical Experience</h3>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-serif font-bold text-stone-900 text-sm">SIWES Software Engineering Intern</h4>
                <span className="text-[10px] font-mono text-stone-500">2025</span>
              </div>
              <p className="text-xs font-medium text-rose-900 mb-2">Omney Payments</p>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Gained industry experience in financial technology workflows, backend services integration, system documentation, and software deployment processes.
              </p>
            </div>

            <div className="border-t border-rose-100 pt-4">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-serif font-bold text-stone-900 text-sm">Fullstack & Systems Developer</h4>
                <span className="text-[10px] font-mono text-stone-500">2024 - Present</span>
              </div>
              <p className="text-xs font-medium text-rose-900 mb-2">Independent / Academic Projects</p>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Designed and deployed blockchain logistics platforms (PODChain), cloud microservices, creator analytics dashboards, and responsive web applications.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="bg-white/90 backdrop-blur-sm border border-rose-200/80 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 pb-2 border-b border-rose-100 text-stone-900">
            <GraduationCap className="w-4 h-4 text-rose-800" />
            <h3 className="font-serif font-bold text-lg">Education & Focus</h3>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-serif font-bold text-stone-900 text-sm">B.Tech in Software Engineering</h4>
              <span className="text-[10px] font-mono text-stone-500">Expected 2026</span>
            </div>
            <p className="text-xs font-medium text-rose-900 mb-2">Federal University of Technology, Owerri (FUTO)</p>
            <p className="text-xs text-stone-600 font-light leading-relaxed mb-6">
              Final-year undergraduate focusing on blockchain systems, distributed cloud architecture, AI ethics, and software engineering methodologies.
            </p>
          </div>

          <div className="flex items-center gap-2 mb-4 pt-4 border-t border-rose-100 text-stone-900">
            <Award className="w-4 h-4 text-rose-800" />
            <h4 className="font-serif font-bold text-sm">Key Academic Research</h4>
          </div>
          <p className="text-xs text-stone-600 font-light leading-relaxed">
            <strong className="font-semibold text-stone-800">Final Year Research Project:</strong> Blockchain-Enabled Proof-of-Delivery System for Small and Medium Enterprises (SMEs) utilizing smart contracts and off-chain storage.
          </p>
        </div>
      </div>
    </section>
  );
}