import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Leadership from '@/components/Leadership';
import Resume from '@/components/Resume';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbebe8] text-stone-900">
      <Hero />
      <Projects />
      <Skills />
      <Leadership />
      <Resume />
    </main>
  );
}