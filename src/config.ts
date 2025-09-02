export interface Project {
  name: string;
  description: string;
  link?: string;
  skills: string[];
}

export interface Experience {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: {
    email: string;
    linkedin: string;
    twitter?: string;
    github: string;
    resume?: string;
  };
  aboutMe: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}

export const siteConfig: SiteConfig = {
  name: "Nick Ebert",
  title: "Senior Software Engineer",
  description: "Portfolio website of Nicholas Ebert",
  accentColor: "#1d4ed8",
  social: {
    email: "nick.ebert2@gmail.com",
    linkedin: "https://linkedin.com/in/ebertn",
    github: "https://github.com/ebertn",
    resume: "Nicholas\ F\ Ebert\ Resume.pdf", // Update this with your actual resume URL or path
  },
  aboutMe:
    "I'm a software engineer with 5+ years of expertise in building AI infrastructure, data platforms, and backend systems that power machine learning, analytics, and feature development at scale. I have a proven track record of architecting high-performance systems that process real-time data for millions of users, with deep specialization in MLOps, distributed systems, and end-to-end machine learning workflows.",
  skills: ["Python", "Java", "Go", "JavaScript", "Apache Kafka", "Apache Flink", "AWS", "Azure", "Kubernetes", "SQL", "Distributed Systems", "Machine Learning"],
  projects: [
    {
      name: "Atom Visualizer",
      description:
        "Visualize the Bohr model structure of an atom in three dimensions.",
      link: "/atom-visualizer/",
      skills: ["React", "Node.js", "Three.js", "Fly.io"],
    },
    {
      name: "Unsure Calculator",
      description:
        "A calculator for making decisions based on with uncertain values.",
      link: "/unsure-calculator/",
      skills: ["React", "Node.js", "Fly.io"],
    }
  ],
  experience: [
    {
      company: "Mercedes Benz Research & Development North America",
      title: "Senior Software & Data Engineer",
      dateRange: "June 2020 - Present",
      bullets: [
        "Led backend engineering to enable vehicle service scheduling in Mercedes Benz mobile app",
        "Architected multitenant Kafka platform supporting all machine learning and real time analytics for over 32 million vehicles worldwide",
        "Built and maintained remote app delivery platform including Spotify, Netflix, Tiktok, Tidal, etc. to 5 million vehicles worldwide",
        "Mentored team of 5 mobile developers in backend feature development best practices",
      ],
    },
  ],
  education: [
    {
      school: "Purdue University",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2016 - 2020",
      achievements: [
        "Purdue Electric Racing team software & electrical engineer",
        "Designed and implemented a multicore CPU with a coherent cache and pipeline in SystemVerilog running on FPGA",
      ],
    },
  ],
};
