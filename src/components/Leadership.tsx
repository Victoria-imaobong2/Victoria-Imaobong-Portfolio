'use client';

export default function Leadership() {
  const VOLUNTEERING = [
    {
      role: 'Head of Volunteers',
      organization: 'Hack4FUTO',
      period: '2026',
      description:
        'Member of the Core team that organized the fifth edition of Hack4FUTO. Organized and coordinated volunteer recruitment, operational workflows, participant check-ins, and management of volunteers includin trainig, monitoring and handling issues that arose before or during the university hackathon.',
    },
    {
      role: 'Vice Chairperson / Event Anchor',
      organization: 'IEEE FUTO Student Branch SIGHT Group',
      period: '2024/2025',
      description:
        'Humanitarian tech initiatives, anchored student subsection events, and facilitated STEM workshops focused on social impact technology.',
    },
    {
      role: 'Secretary General',
      organization: 'ASICTS (Association of School of Information and Communication Technology Students)',
      period: '2023/2024',
      description:
        'Managed Faculty Secretarial duties, meeting records, student communications, and student leadership events.',
    },
  ];

  return (
    <section id="leadership" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="border-b border-rose-200/80 pb-6 mb-10">
        <h2 className="text-3xl font-serif text-stone-900 mb-2">Leadership & Volunteering</h2>
        <p className="text-stone-600 text-xs tracking-wider uppercase font-medium">
          Community building, event coordination, and student branch initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {VOLUNTEERING.map((item) => (
          <div
            key={item.role}
            className="bg-white/90 backdrop-blur-sm border border-rose-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-rose-800 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200/60 inline-block mb-3">
                {item.period}
              </span>
              <h3 className="font-serif font-bold text-lg text-stone-900 mb-1">{item.role}</h3>
              <p className="text-xs font-medium text-rose-900 mb-3">{item.organization}</p>
              <p className="text-stone-600 text-xs leading-relaxed font-light">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}