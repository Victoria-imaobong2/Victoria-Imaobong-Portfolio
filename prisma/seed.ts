import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        title: 'PODCHAIN PWA',
        category: 'Blockchain and Frontend',
        description: 'Blockchain-enabled proof of delivery system for logistics designed for SMEs.',
        techStack: ['Solidity', 'FastAPI', 'PostgreSQL', 'IPFS', 'PWA'],
        githubUrl: 'https://github.com/Victoria-imaobong2/pod-chain',
        liveUrl: 'https://podchain.vercel.app/',
        featured: true,
      },
      {
        title: 'Patient Management System Microservices',
        category: 'DevOps & Cloud',
        description: 'Production-ready microservices application built with Docker, deployed on AWS, and monitored with Prometheus and Grafana. Features CI/CD pipelines via GitHub Actions and Ansible.',
        techStack: ['Docker', 'AWS', 'Grafana', 'Prometheus', 'Ansible', 'GitHub Actions', 'PostgreSQL', 'Java'],
        githubUrl: 'https://github.com/victoria-imaobong2',
        liveUrl: null,
        featured: true,
      },
      {
        title: 'WhatsApp Mobile App Clone',
        category: 'Mobile / Android',
        description: 'Real-time messaging android mobile application developed with state management and Firebase synchronization.',
        techStack: ['Flutter', 'Dart', 'Firebase'],
        githubUrl: 'https://github.com/victoria-imaobong2',
        liveUrl: 'https://drive.google.com/file/d/13FkJ2zgRF212ZgTOiyDzdT_9-V0W9wW4/view?usp=drivesdk',
        featured: true,
      },
      {
        title: '30-Cycle Build-to-Ship Platform',
        category: 'Fullstack',
        description: 'Web application built during an industry hackathon to improve user experience and conversion with influencers across social media platforms.',
        techStack: ['Next.js', 'React.js', 'PostgreSQL', 'Tailwind CSS'],
        githubUrl: 'https://github.com/victoria-imaobong2',
        liveUrl: null,
        featured: true,
      },
      {
        title: 'Tasty Relish Restaurant Website',
        category: 'Frontend',
        description: 'Responsive frontend web application displaying interactive menu items, pricing details, and customer selections.',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git'],
        githubUrl: 'https://github.com/victoria-imaobong2',
        liveUrl: null,
        featured: false,
      },
      {
        title: 'Willmore Construction Website',
        category: 'Frontend',
        description: 'Corporate frontend application showcasing past construction projects, consultation booking workflows, and contact features.',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        githubUrl: 'https://github.com/victoria-imaobong2',
        liveUrl: null,
        featured: false,
      },
      {
        title: 'Interactive Wedding Platform',
        category: 'Fullstack',
        description: 'Interactive guest invitation platform featuring RSVP management, pre-wedding photo galleries, digital guestbook, and automated data collection.',
        techStack: ['Python', 'Flask', 'Google Sheets API', 'HTML5', 'CSS3'],
        githubUrl: 'https://github.com/victoria-imaobong2',
        liveUrl: null,
        featured: false,
      },
      {
        title: '2nd Brain Mobile App (UI/UX)',
        category: 'UI/UX Design',
        description: 'Information architecture and UX design for a cognitive assist application helping users take notes, manage tasks, and track reminders.',
        techStack: ['Figma', 'User Research', 'Information Architecture', 'UX Design'],
        githubUrl: null,
        liveUrl: null,
        featured: false,
      },
      {
        title: 'Jeti Jewelry E-commerce Platform',
        category: 'Requirement Engineering',
        description: 'Software Requirement Specifications (SRS) document, functional/non-functional requirements analysis, and system architecture for an online jewelry store.',
        techStack: ['Requirement Analysis', 'SRS Documentation', 'UML', 'Qualitative Analysis'],
        githubUrl: null,
        liveUrl: null,
        featured: false,
      },
      {
        title: 'Haunted House Game',
        category: 'Game Dev',
        description: '3D interactive game mechanics and custom environment layout created in Unity.',
        techStack: ['Unity', 'C#', '3D Design'],
        githubUrl: 'https://github.com/victoria-imaobong2',
        liveUrl: null,
        featured: false,
      },
        {title: 'Market Abroad E-commerce Platform',
        category: 'Fullstack',
        description: 'E-commerce platform for international buyers and sellers, featuring product listings, shopping cart, and payment integration.',
        techStack: ['Next.js', 'React.js', 'Node.js', 'Express', 'PostgreSql', 'Stripe API'],
        githubUrl: 'https://github.com/victoria-imaobong2/market-abroad',
        liveUrl: 'https://market-abroad.vercel.app/',
        featured: true,
      },
    ],
  });

  console.log('Database seeded successfully with all CV projects!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });