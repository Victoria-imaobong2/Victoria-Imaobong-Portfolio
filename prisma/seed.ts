import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        title: 'PODCHAIN PWA',
        category: 'Blockchain',
        description: 'Decentralized proof-of-delivery platform utilizing Solidity smart contracts, off-chain IPFS document storage, and FastAPI services for logistics management.',
        techStack: ['Solidity', 'FastAPI', 'PostgreSQL', 'IPFS', 'Next.js'],
        githubUrl: 'https://github.com/Victoria-imaobong2/pod-chain',
        liveUrl: 'https://pod-chain.vercel.app/',
        imageUrl: '/Received.png',
        featured: true,
      },
      {
      title: 'MarketAbroad E-commerce Platform',
        category: 'Fullstack',
        description: 'Full-featured e-commerce web application with product catalog, shopping cart, user authentication, admin section and payment processing.',
        techStack: ['React', 'Node.js', 'Neon DB postgresl', 'Paystack API'],
        githubUrl: 'https://github.com/Victoria-imaobong2/MarketAbroad-Shopping-Website',
        liveUrl: 'https://market-abroad.vercel.app/',
        imageUrl: '/marketAbroad.png',
        featured: true,
      },
      {
        title: 'Patient Management Microservices',
        category: 'DevOps & Cloud',
        description: 'Cloud-native microservices backend deployed with Docker and AWS, featuring automated CI/CD pipelines and Prometheus/Grafana observability.',
        techStack: ['Docker', 'AWS', 'Grafana', 'Prometheus', 'Ansible', 'GitHub Actions', 'Java'],
        githubUrl: 'https://github.com/Victoria-imaobong2/java-services-App-in-Production',
        liveUrl: 'https://github.com/Victoria-imaobong2/java-services-App-in-Production',
        imageUrl: null,
        featured: true,
      },
      {
        title: 'WhatsApp Mobile App Clone',
        category: 'Mobile',
        description: 'Real-time mobile messaging application built with cross-platform Flutter layouts, state management, and real-time Firebase synchronization.',
        techStack: ['Flutter', 'Dart', 'Firebase', 'Android'],
        githubUrl: 'https://github.com/Victoria-imaobong2/Whatsapp-clone-MobileApp-dev',
        liveUrl: 'https://drive.google.com/file/d/13FkJ2zgRF212ZgTOiyDzdT_9-V0W9wW4/view?usp=drivesdk',
        imageUrl: null,
        featured: true,
      },
      {
      title: 'Photography Portfolio Website',
        category: 'Frontend',
        description: 'Responsive photography portfolio website with image galleries, contact forms, and social media integration.',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        githubUrl: 'https://github.com/Victoria-imaobong2/cowrywise-portfolio-project',
        liveUrl: 'https://photography-portfolio-bice-seven.vercel.app/',
        imageUrl: '/photography Portfolio.png',
        featured: false,
      },
      {
        title: 'Haunted House 3D Game',
        category: 'Game Dev',
        description: '3D interactive horror game built in Unity, featuring waypoint AI patrol logic, ambient audio triggers, and custom atmospheric level design.',
        techStack: ['Unity', 'C#', '3D Design'],
        githubUrl: 'https://github.com/Victoria-imaobong2/Haunted-House-game-development',
        liveUrl: 'https://github.com/Victoria-imaobong2/Haunted-House-game-development',
        imageUrl: null,
        featured: false,
      },
      {
        title: 'Tasty Relish Restaurant Website',
        category: 'Frontend',
        description: 'Responsive restaurant web interface showcasing interactive menu layouts, dish pricing, and table reservation booking workflows.',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        githubUrl: 'https://github.com/Victoria-imaobong2/Tasty-Relish-Website',
        liveUrl: 'https://tastyrelish.netlify.app/',
        imageUrl: '/tastyRelish.png',
        featured: false,
      },

      {
        title: 'Willmore Construction Website',
        category: 'Frontend',
        description: 'Corporate construction company portal presenting portfolio case studies, service offerings, consultation scheduling, and client inquiry forms.',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        githubUrl: 'https://github.com/Victoria-imaobong2/WillmoreWebsite',
        liveUrl: 'https://willmoreconstruct.netlify.app/',
        imageUrl: '/willmore-construction.png',
        featured: false,
      },
      {
        title: 'Interactive Wedding Platform',
        category: 'Fullstack',
        description: 'Custom event invitation platform featuring pre-wedding photo galleries, automated RSVP submission tracking, and guestbook data integration.',
        techStack: ['Python', 'Flask', 'Google Sheets API', 'HTML5', 'CSS3'],
        githubUrl: 'https://github.com/Victoria-imaobong2/wedding-website',
        liveUrl: 'https://github.com/Victoria-imaobong2/wedding-website',
        imageUrl: null,
        featured: false,
      },
      {
        title: '2nd Brain Mobile App (UI/UX)',
        category: 'UI/UX Design',
        description: 'User experience research and high-fidelity prototype for a personal cognitive assistant app managing tasks, quick notes, and contextual reminders.',
        techStack: ['Figma', 'User Research', 'Information Architecture'],
        githubUrl: null,
        liveUrl: 'https://www.figma.com',
        imageUrl: null,
        featured: false,
      },
      {
        title: 'Jeti Jewelry E-commerce SRS',
        category: 'Requirement Engineering',
        description: 'Comprehensive Software Requirement Specifications (SRS) document, UML use-case diagrams, and functional architecture analysis for an online store.',
        techStack: ['Requirement Analysis', 'SRS Documentation', 'UML'],
        githubUrl: null,
        liveUrl: null,
        imageUrl: null,
        featured: false,
      },
    ],
  });

  console.log('Database successfully re-seeded with all 9 GitHub projects!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });