'use client';

export default function Skills() {
  const SKILLS_DATA = [
    {
      category: 'Languages',
      items: ['English (Advanced)', 'Igbo (Fluent)', 'German (Basic)'],
    },
    {
      category: 'Technical & Software Development',
      items: [
        'Artificial Intelligence & Machine Learning',
        'UI/UX Design',
        'Requirements Analysis & PRDs',
        'Software Development (HTML, CSS, JavaScript, Next.js, Python)',
        'Wix & No-Code Systems',
        'UML Diagramming',
      ],
    },
    {
      category: 'Tools & Platforms',
      items: [
        'Unified Modelling Language',
        'Visual Paradigm',
        'MySQL & XAMPP',
        'Jupyter Notebooks',
        'Lucidchart & Canva',
        'Jira & Google Workspace',
        'Outlook',
      ],
    },
    {
      category: 'Core Activities',
      items: ['System Reporting', 'PRD & Technical Documentation', 'UI & Brand Designs', 'Community Volunteering', 'Research Writing', 'Lifestyle Writing'],
    },
    {
      category: 'Interests & Focus Areas',
      items: ['Telemedicine', 'Fullstack Software Development', 'AI Ethics', 'Emerging AI Technologies', 'Tech Entrepreneurship', 'AI Innovation'],
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="border-b border-rose-200/80 pb-6 mb-10">
        <h2 className="text-3xl font-serif text-stone-900 mb-2">Skills & Expertise</h2>
        <p className="text-stone-600 text-xs tracking-wider uppercase font-medium">
          Technical competencies, tools, languages, and strategic focus areas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS_DATA.map((group) => (
          <div
            key={group.category}
            className="bg-white/90 backdrop-blur-sm border border-rose-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-4 pb-2 border-b border-rose-100">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-stone-700 text-xs font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}