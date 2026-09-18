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
  description:
    "Nick Ebert is a senior software engineer specializing in distributed systems, data platforms, and production ML infrastructure.",
  accentColor: "#1d4ed8",
  social: {
    email: "nick.ebert2@gmail.com",
    linkedin: "https://linkedin.com/in/ebertn",
    github: "https://github.com/ebertn",
    resume: "/Nicholas-Ebert-Resume.pdf?v=29084142686f",
  },
  aboutMe:
    "I'm a senior software engineer specializing in distributed systems, data platforms, and production ML infrastructure. I build systems spanning real-time streaming, large-scale data processing, APIs, and user-facing tools. My work has supported advertising forecasting across Disney's streaming portfolio and connected-vehicle products serving tens of millions of vehicles worldwide.",
  skills: ["Databricks", "Apache Spark", "Apache Kafka", "Apache Flink", "Java", "Python", "Go", "TypeScript", "React", "Kubernetes", "AWS", "Azure", "SQL", "Distributed Systems", "MLOps"],
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
        "A calculator for making decisions with uncertain values.",
      link: "/unsure-calculator/",
      skills: ["React", "Node.js", "Fly.io"],
    },
  ],
  experience: [
    {
      company: "The Walt Disney Company",
      title: "Senior Software Engineer",
      dateRange: "November 2025 – Present",
      bullets: [
        "Build Databricks and Spark forecasting pipelines and APIs supporting the pricing and reservation of $5.5B in advertising inventory across Hulu, Disney+, and ESPN",
        "Lead engineering for the Inventory Forecasting Portal, including technical design, roadmap planning, and delivery",
        "Design a governed, self-service forecast-adjustment platform to replace manual engineer-operated workflows",
        "Migrate production pipelines from Airflow to Databricks and Unity Catalog and deliver GDPR viewer-consent support for Disney+'s European ad-platform migration",
        "Lead root cause analysis and remediation of production incidents to improve forecast API reliability and observability",
      ],
    },
    {
      company: "Mercedes-Benz Research & Development North America",
      title: "Senior Software & Data Engineer",
      dateRange: "June 2020 – November 2025",
      bullets: [
        "Architected a multitenant Kafka platform supporting telemetry and real-time analytics for more than 32 million vehicles worldwide",
        "Built high-volume Apache Flink SQL pipelines with LLM-powered text enrichment for machine learning workloads",
        "Automated infrastructure and tenant isolation to meet data privacy requirements across a shared platform",
        "Led backend engineering for mobile vehicle-service scheduling used by approximately 1 million users and more than 3,000 monthly appointments",
      ],
    },
  ],
  education: [
    {
      school: "Purdue University",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2016 – 2020",
      achievements: [
        "Purdue Electric Racing team software & electrical engineer",
        "Designed and implemented a multicore CPU with a coherent cache and pipeline in SystemVerilog running on FPGA",
      ],
    },
  ],
};
