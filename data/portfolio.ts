/**
 * All portfolio content lives here. Edit this file to update the site.
 */

export type SkillGroupIcon =
  | "frontend"
  | "backend"
  | "messaging"
  | "database"
  | "ai"
  | "devops";

export type ProjectCategory = "Golang" | "Laravel" | "React & Node" | "AI";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[]; // short metric bullets shown on the card
  details: string[]; // full bullet list shown in the modal
  tech: string[];
  categories: ProjectCategory[];
  featured?: boolean;
  /** Path under /public (e.g. "/projects/ost.png") or a full URL. Leave empty for a placeholder. */
  image: string;
  /** Leave empty to hide the button. */
  liveUrl: string;
  /** Leave empty to hide the button. */
  githubUrl: string;
}

export const site = {
  name: "Myo Min",
  title: "Senior Full-Stack Software Engineer",
  tagline:
    "10+ years building scalable web apps, microservices and AI-powered products.",
  location: "Phnom Penh, Cambodia",
  email: "myomin313@gmail.com",
  cvUrl: "/Myo_Min_CV.pdf",
  profileImage: "/profile.jpg",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://myomin.vercel.app",
  description:
    "Myo Min — Senior Full-Stack Software Engineer with 10+ years of experience in Golang, Node.js, Laravel, React/Next.js, microservices and AI-powered products.",
  socials: {
    github: "https://github.com/myomin313",
    linkedin: "https://linkedin.com/in/myo-min-40041912a",
    email: "mailto:myomin313@gmail.com",
  },
};

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "5,000+", label: "Concurrent Users Handled" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "Senior Full-Stack Software Engineer with 10+ years of experience designing and delivering scalable web applications, backend microservices, and cloud-native systems.",
    "Experienced in Golang, Node.js, PHP (Laravel), React.js, REST APIs, Redis, Kafka, Docker, Kubernetes, and event-driven architectures.",
    "Passionate about AI-assisted software development — using modern AI coding tools to accelerate development, debugging, and productivity. Strong experience collaborating with cross-functional teams and leading technical initiatives from design through production deployment.",
  ],
  languages: [
    { name: "Myanmar", level: "Native" },
    { name: "English", level: "Professional" },
  ],
};

export const skillGroups: {
  title: string;
  icon: SkillGroupIcon;
  skills: string[];
}[] = [
  {
    title: "Frontend",
    icon: "frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: [
      "Golang",
      "Fiber",
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "REST APIs",
    ],
  },
  {
    title: "Messaging & Caching",
    icon: "messaging",
    skills: ["Kafka", "Redis Pub/Sub", "Redis Caching"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "pgvector"],
  },
  {
    title: "AI",
    icon: "ai",
    skills: [
      "OpenAI API",
      "RAG Pipelines",
      "Embeddings & Semantic Search",
      "LLM Tool/Function Calling",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "devops",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Jenkins",
      "Grafana",
      "Nginx",
      "Linux",
      "Git",
    ],
  },
];

export const experience = [
  {
    company: "Loma Technology",
    role: "Full-Stack Developer",
    location: "Cambodia",
    start: "08/2025",
    end: "Present",
    bullets: [
      "Architect and maintain scalable backend microservices and RESTful APIs in Golang and PHP following Clean Architecture.",
      "Designed secure JWT-based authentication and authorization.",
      "Used Goroutines and Channels to process high-concurrency betting transactions efficiently.",
      "Implemented event-driven communication with Redis Pub/Sub and Kafka.",
      "Documented APIs with Swagger/OpenAPI; wrote unit and integration tests to reduce production issues.",
    ],
  },
  {
    company: "Tiltedxyz",
    role: "Full-Stack Developer",
    location: "Bangkok, Thailand",
    start: "09/2024",
    end: "04/2025",
    bullets: [
      "Developed responsive React.js applications and reusable UI components.",
      "Integrated RESTful APIs with Axios; collaborated with backend engineers on scalable platforms.",
      "Optimized performance through lazy loading and code splitting.",
    ],
  },
  {
    company: "Findix Myanmar",
    role: "System Development Team Leader",
    location: "Yangon, Myanmar",
    start: "06/2019",
    end: "06/2024",
    bullets: [
      "Led frontend development and mentored developers on React best practices.",
      "Designed and built scalable web applications with React.js and Next.js.",
      "Built reusable components for video streaming and dashboard features.",
      "Developed responsive interfaces with Tailwind CSS and Bootstrap; optimized rendering performance.",
    ],
  },
  {
    company: "Netcore Internet",
    role: "Senior Web Developer",
    location: "Yangon, Myanmar",
    start: "02/2017",
    end: "02/2019",
    bullets: [
      "Built complex web features with Laravel, Bootstrap, and jQuery.",
      "Optimized MySQL queries, reducing report generation time by up to 40%.",
      "Documented 100% of implemented features, speeding up onboarding of new developers.",
      "Enforced clean code and OOP design patterns.",
    ],
  },
  {
    company: "Groovez Asia",
    role: "Web Developer",
    location: "Yangon, Myanmar",
    start: "02/2016",
    end: "10/2016",
    bullets: [
      "Delivered 10+ client projects across different business domains.",
      "Built full-stack applications that reduced clients' manual operations by up to 30%.",
    ],
  },
  {
    company: "Active Agent",
    role: "Web Developer",
    location: "Yangon, Myanmar",
    start: "10/2014",
    end: "11/2015",
    bullets: [
      "Built custom web applications with PHP (CodeIgniter), JavaScript, and MySQL.",
    ],
  },
];

export const projectFilters = [
  "All",
  "Golang",
  "Laravel",
  "React & Node",
  "AI",
] as const;

export const projects: Project[] = [
  {
    slug: "ost-infinity",
    title: "Ost Infinity Platform",
    subtitle: "AI Knowledge Assistant",
    summary:
      "Full-stack AI assistant to upload documents and query project knowledge in natural language.",
    highlights: [
      "RAG pipeline with embeddings & vector similarity retrieval",
      "Semantic search across the whole project",
      "Streaming responses with LLM tool/function calling",
    ],
    details: [
      "Full-stack AI assistant: upload documents and query project knowledge in natural language.",
      "RAG pipeline: document chunking, embeddings, vector storage, similarity retrieval.",
      "Semantic search across the whole project; LLM structured outputs and tool/function calling.",
      "Role-based auth, conversation history, and streaming AI responses.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "OpenAI API",
      "pgvector",
    ],
    categories: ["AI", "React & Node"],
    featured: true,
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    slug: "kla-klouk",
    title: "Kla Klouk",
    subtitle: "Real-time Betting Platform",
    summary:
      "Real-time WebSocket microservices for a high-concurrency betting platform.",
    highlights: [
      "5,000+ concurrent users over WebSockets",
      "40% less DB load, sub-50ms responses at peak",
      "ACID-compliant wallet preventing double-spending",
    ],
    details: [
      "Real-time WebSocket microservices handling 5,000+ concurrent users.",
      "Redis caching cut database load by 40% with sub-50ms response times at peak.",
      "Distributed ACID-compliant wallet system preventing double-spending.",
    ],
    tech: ["Golang", "WebSockets", "Redis", "Microservices"],
    categories: ["Golang"],
    featured: true,
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    slug: "tournament-management",
    title: "Tournament Management Platform",
    subtitle: "End-to-end Tournament Lifecycle",
    summary:
      "Registration, brackets, scheduling, match progression, scoring and results in one platform.",
    highlights: [
      "REST APIs for tournaments, teams, matches & rankings",
      "Async notifications via Laravel queues & events",
      "Dockerized for dev and production",
    ],
    details: [
      "Full tournament lifecycle: registration, brackets, scheduling, match progression, scoring, results.",
      "REST APIs for tournaments, players/teams, matches and rankings.",
      "Laravel queues/jobs/events for async notifications; query optimization, caching and Redis.",
      "Containerized with Docker for dev and production.",
    ],
    tech: ["PHP", "Laravel", "MySQL", "Redis", "Docker"],
    categories: ["Laravel"],
    featured: true,
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    slug: "tilted",
    title: "Tilted",
    subtitle: "Video Streaming Dashboard",
    summary:
      "Streaming dashboard with real-time chat, live game feeds and payments.",
    highlights: [
      "Component library cut UI dev time by 30%",
      "Sub-200ms reel loading via MongoDB index tuning",
    ],
    details: [
      "Real-time chat and live game feeds; reusable component library cut UI dev time by 30%.",
      "Payment gateway integration; MongoDB index tuning for sub-200ms reel loading.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "WebRTC",
      "Tailwind CSS",
    ],
    categories: ["React & Node"],
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    slug: "school-management",
    title: "School Management System",
    subtitle: "Attendance, Timetables & Reports",
    summary: "School platform serving 500+ students and 50+ teachers.",
    highlights: [
      "Attendance accuracy 75% → 98%",
      "Timetable creation 2 weeks → 2 hours",
      "Reports 5s → under 500ms",
    ],
    details: [
      "Serves 500+ students and 50+ teachers.",
      "Attendance accuracy improved from 75% to 98%; timetable creation from 2 weeks to 2 hours.",
      "Report generation reduced from 5s to under 500ms via indexing and aggregation pipelines.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    categories: ["React & Node"],
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    slug: "erp",
    title: "Integrated Management System",
    subtitle: "ERP",
    summary:
      "ERP for 200+ employees covering attendance, leave and vehicle logistics.",
    highlights: [
      "Role-based permissions for 5 user tiers",
      "Payroll processing 3 days → 4 hours",
    ],
    details: [
      "ERP for 200+ employees: attendance, leave, vehicle logistics.",
      "Configurable role-based permissions for 5 user tiers.",
      "Automated overtime calculation: payroll processing from 3 days to 4 hours.",
    ],
    tech: ["Laravel", "JavaScript", "MySQL", "AJAX", "Bootstrap"],
    categories: ["Laravel"],
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    slug: "job-portal",
    title: "Job Portal Website",
    subtitle: "Recruitment Marketplace",
    summary: "Marketplace connecting 500+ job seekers and 100+ employers.",
    highlights: [
      "$10,000+ recurring revenue from job-post packages",
      "Sub-200ms multi-filter search over 1,000+ listings",
    ],
    details: [
      "Marketplace connecting 500+ job seekers and 100+ employers.",
      "Payment gateway for job-post packages generating $10,000+ recurring revenue.",
      "Multi-filter search returning results in under 200ms across 1,000+ listings.",
    ],
    tech: ["Laravel", "MySQL", "jQuery", "AJAX", "Bootstrap"],
    categories: ["Laravel"],
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    slug: "house-rent",
    title: "House Rent Website",
    subtitle: "Rental Marketplace",
    summary:
      "Rental marketplace for individuals, companies and agencies with 1,000+ active listings.",
    highlights: [
      "Geolocation search within 300ms",
      "Landlord response time 48h → under 2h",
    ],
    details: [
      "Rental marketplace for individuals, companies and agencies; 1,000+ active listings.",
      "Geolocation-based search delivering results within 300ms.",
      "Landlord contact system cutting response time from 48 hours to under 2 hours.",
    ],
    tech: ["Laravel", "MySQL", "jQuery", "AJAX", "Bootstrap"],
    categories: ["Laravel"],
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    slug: "myanbox",
    title: "Myanbox Construction Mall",
    subtitle: "Construction Directory Platform",
    summary:
      "Directory for service companies, suppliers, renovation businesses and freelancers.",
    highlights: [
      "Custom WordPress themes & plugins",
      "Company/freelancer management and blog modules",
    ],
    details: [
      "Directory platform for service companies, suppliers, renovation businesses and freelancers.",
      "Custom WordPress themes, plugins, admin, company/freelancer management and blog modules.",
    ],
    tech: ["PHP", "WordPress", "MySQL", "jQuery", "AJAX"],
    categories: [],
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
];

export const education = [
  {
    degree: "BA (English)",
    school: "Dagon University",
    location: "Yangon, Myanmar",
  },
  {
    degree: "Diploma in Project Management",
    school: "ABE (UK)",
    location: "Yangon, Myanmar",
  },
  {
    degree: "Web Development Course",
    school: "IMCS Education Center",
    location: "Yangon, Myanmar",
  },
];

export const contact = {
  heading: "Let's work together",
  text: "Open to senior full-stack, backend (Golang/Node.js) and AI engineering roles — remote or on-site.",
  /** Formspree form ID, read from env so it isn't hard-coded. Form is hidden when empty. */
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || "",
};
