'use client';

import { Mail, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-[#fbebe8]">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-rose-200 text-rose-900 text-xs font-medium mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          Software Engineer & Creative
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif tracking-tight text-stone-900 mb-6 leading-snug">
          Hi, I am <br />
          <span className="italic font-normal text-rose-900">Victoria-Imaobong</span> Solomon
        </h1>

        <p className="text-stone-700 text-base sm:text-lg mb-8 leading-relaxed font-light max-w-lg">
          I build high-performance web systems, cloud microservices, mobile apps, and smart logistics platforms with thoughtful design and solid architecture.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs tracking-wider uppercase transition shadow-md"
          >
            Explore Projects
          </a>
          <a
            href="https://github.com/Victoria-imaobong2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white/90 hover:bg-white text-stone-900 border border-rose-200 font-medium text-xs tracking-wider uppercase transition flex items-center gap-1.5 shadow-sm"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-600" />
          </a>
          <a
            href="mailto:solomonvictoria2023@gmail.com"
            className="p-3 rounded-full bg-white/90 hover:bg-white text-stone-800 border border-rose-200 transition shadow-sm"
          >
            <Mail className="w-4 h-4 text-stone-800" />
          </a>
        </div>
      </div>

      {/* Portrait Photo */}
      <div className="relative shrink-0">
        <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-xl shadow-rose-950/10 bg-[#f4deda]">
          <img
            src="/image.png"
            alt="Victoria-Imaobong Solomon"
            className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}