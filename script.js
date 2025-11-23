// Data
const personalDetails = {
  name: "Shreyash Jagtap",
  role: "Cloud & DevOps Engineer",
  location: "Pune, Maharashtra, India - 411006",
  phone: "+91 7058004255",
  email: "shreyash5522@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/shreyas5522",
    github: "https://github.com/shreyas5522",
    twitter: "https://twitter.com/shreyas5522"
  },
  summary: "Cloud and DevOps engineer who makes releases predictable: CI/CD pipelines with policy guardrails, hardened Linux hosts, Kubernetes and Docker orchestration, and observability wired into every stage across AWS, Azure, GCP, and OCI."
};

const skills = {
  cloud_infrastructure: ["AWS", "GCP", "OCI", "Azure", "Cloud-Native Architecture"],
  devops_automation: ["Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform", "CI/CD Pipelines", "Linux (RHEL/Ubuntu)"],
  ai_data: ["Generative AI", "NLP", "Computer Vision", "Python", "SQL", "MongoDB", "BigQuery"],
  core_competencies: ["System Design", "Microservices", "Security Hardening", "Problem Solving", "Agile/Scrum"]
};

const experience = [
  {
    company: "Tata Elxsi",
    location: "Pune, India",
    role: "System Engineer",
    duration: "June 2025 — Present",
    period: "6 Months",
    responsibilities: [
      "Managing and hardening Linux servers (RHEL/Ubuntu) with CI/CD configuration using Jenkins and Ansible.",
      "Deploying and maintaining Docker and Kubernetes workloads in production.",
      "Automating CI/CD pipelines for reliable build and release processes.",
      "Handling AWS infrastructure (EC2, S3, IAM, VPC, CloudWatch).",
      "Supporting production deployments, monitoring, and incident resolution."
    ]
  },
  {
    company: "AiAdventures LLP",
    location: "Pune, India",
    role: "Associate Cloud Engineer",
    duration: "Jan 2024 - Jun 2025",
    period: "1 Year 6 Months",
    responsibilities: [
      "Assisted in developing and deploying application modules using AWS EC2, S3, IAM, and RDS.",
      "Supported end-to-end cloud infrastructure setup including networking and access management.",
      "Helped in deployment automation using shell scripts and CI/CD workflows.",
      "Participated in system monitoring and log management.",
      "Documented cloud architecture."
    ]
  },
  {
    company: "AiAdventures LLP",
    location: "Pune, India",
    role: "DevOps Intern",
    duration: "Sept 2023 - Dec 2023",
    period: "4 Months",
    responsibilities: [
      "Automated deployment steps using shell scripts.",
      "Supported basic CI/CD tasks (build testing and deployments).",
      "Assisted with monitoring setup using CloudWatch.",
      "Helped troubleshoot environment and deployment issues."
    ]
  }
];

const projects = [
  {
    title: "End-to-End DevOps Project: Java To-Do Application",
    description: "Production-style three-tier Java 17 Spring Boot to-do app with MySQL, Dockerized services, and CI/CD from commit to deploy.",
    tags: ["Java 17", "Spring Boot", "MySQL 8", "Docker", "CI/CD"],
    link: "paste-link/devops-todo-case"
  },
  {
    title: "3-Tier Full-Stack Blog",
    description: "Built using MySQL & Python with AWS VPC, EC2, RDS, and S3.",
    tags: ["MySQL", "Python", "AWS", "Full-Stack"],
    link: "paste-link/blog-case"
  },
  {
    title: "Time-Series Traffic Forecasting",
    description: "Traffic predictor system using the ARIMA ML model.",
    tags: ["ML", "ARIMA", "Python"],
    link: "paste-link/traffic-forecast"
  },
  {
    title: "WordPress Site Manager with Docker",
    description: "Managed WordPress deployments using LAMP, MariaDB, Docker, Docker-Compose, Bash scripting.",
    tags: ["Docker", "WordPress", "Bash", "LAMP"],
    link: "paste-link/wp-docker"
  }
];

const education = [
  {
    institution: "B.E Information Technology — University of Pune",
    year: "2024",
    details: "CGPA: 8.55"
  },
  {
    institution: "12th CBSE — Kendriya Vidyalaya No.3 9BRD Pune",
    details: "Percentage: 76.8%"
  },
  {
    institution: "10th CBSE — Kendriya Vidyalaya No.3 9BRD Pune",
    details: "Percentage: 85%"
  }
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Jul 2025 · Expires Jul 2028",
    id: "7442e971fbca4432b068eebc238202de",
    skills: [],
    link: "paste-link/cert-aws-cloud-practitioner"
  },
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "Issued Jun 2025",
    id: "ED571189507F39CD",
    skills: ["Agentic AI", "Generative AI", "Microsoft Azure", "API Development", "AI", "NLP", "Computer Vision", "Neural Networks"],
    link: "paste-link/cert-azure-ai-engineer"
  },
  {
    name: "MongoDB Associate Developer",
    issuer: "MongoDB",
    date: "Issued May 2025",
    id: "wpq0KqAl",
    skills: ["Python", "Flask", "AI", "API Development"],
    link: "paste-link/cert-mongodb-associate"
  },
  {
    name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    date: "Issued Jul 2024",
    id: "100722159OCI2024GAIOCP",
    skills: ["AI", "Generative AI", "Oracle Cloud"],
    link: "paste-link/cert-oci-genai"
  },
  {
    name: "Professional Certificate in Kubernetes and Cloud Native Technologies",
    issuer: "The Linux Foundation",
    date: "Issued Jul 2023",
    id: "e8728a4d404c4835af696736a40c7fac",
    skills: ["Linux Server", "Cloud-Native Architecture", "Kubernetes", "Cloud-Native Applications", "Scripting"],
    link: "paste-link/cert-linux-foundation-k8s"
  },
  {
    name: "Verified Certificate for Introduction to Cloud Infrastructure Technologies",
    issuer: "The Linux Foundation",
    date: "Issued Jun 2023",
    id: "a4736f656c294a97ac92a2339be1dbb7",
    skills: ["Cloud Computing"],
    link: "paste-link/cert-linux-foundation-cloud-intro"
  },
  {
    name: "Cloud Hero DevOps Skills",
    issuer: "Google Cloud Training Online",
    date: "Issued Mar 2023",
    id: "3387347",
    skills: [],
    link: "paste-link/cert-gcp-cloud-hero"
  },
  {
    name: "LFS101x: Introduction to Linux",
    issuer: "The Linux Foundation",
    date: "Issued Feb 2023",
    id: "542d63c2de974e8b9803087054ccd933",
    skills: [],
    link: "paste-link/cert-linux-foundation-lfs101"
  },
  {
    name: "Data Science with Python",
    issuer: "Udemy",
    date: "Issued Dec 2022",
    id: "UC-2381aba1-5f8e-42cd-8b43-34e10f95c284",
    skills: [],
    link: "paste-link/cert-udemy-data-science"
  },
  {
    name: "Big Data Computing | NPTEL",
    issuer: "Indian Institute of Technology, Kanpur",
    date: "Issued Oct 2022",
    id: "CS65S3378053010179017",
    skills: [],
    link: "paste-link/cert-nptel-big-data"
  },
  {
    name: "Data, ML, and AI Tasks in Google Cloud",
    issuer: "Google Cloud Training Online",
    date: "Issued Oct 2021",
    id: "1359826",
    skills: [],
    link: "paste-link/cert-gcp-ml-ai-tasks"
  },
  {
    name: "Engineer Data in Google Cloud",
    issuer: "Google Cloud Training Online",
    date: "Issued Oct 2021",
    id: "1373585",
    skills: [],
    link: "paste-link/cert-gcp-engineer-data"
  },
  {
    name: "Insights from Data with BigQuery",
    issuer: "Google Cloud Training Online",
    date: "Issued Oct 2021",
    id: "1365469",
    skills: [],
    link: "paste-link/cert-gcp-bigquery"
  },
  {
    name: "Cloud Computing 2.0: Embracing Kubernetes",
    issuer: "Sertifier",
    date: "Issued Jul 2021",
    id: "56102559913834",
    skills: ["Amazon Web Services (AWS)"],
    link: "paste-link/cert-sertifier-k8s"
  },
  {
    name: "Java Programming: Complete Beginner to Advanced",
    issuer: "Udemy",
    date: "Issued Jan 2021",
    id: "UC-5589346a-3c28-4220-9b3b-aeed1ca7e038",
    skills: [],
    link: "paste-link/cert-udemy-java"
  },
  {
    name: "GAIT",
    issuer: "GAIT Global Assessment of Information Technology",
    date: "Issued May 2023 · Expired May 2024",
    id: "2024V1MCOE0000000098",
    skills: [],
    link: "paste-link/cert-gait"
  }
];

// Issuer logos
const issuerLogos = {
  "Amazon Web Services (AWS)": "assets/logos/aws.svg",
  "AWS": "assets/logos/aws.svg",
  "Microsoft": "assets/logos/azure.svg",
  "Microsoft Azure": "assets/logos/azure.svg",
  "MongoDB": "assets/logos/mongodb.svg",
  "Oracle": "assets/logos/oracle.svg",
  "The Linux Foundation": "assets/logos/Linux_Foundation_Logo.png",
  "Google Cloud Training Online": "assets/logos/gcp.svg",
  "Google Cloud": "assets/logos/gcp.svg",
  "Harvard University": "assets/logos/harvard.svg",
  "Udemy": "assets/logos/udemy.svg"
};

// Logic

// DOM Elements
const heroName = document.getElementById('hero-name');
const heroRole = document.getElementById('hero-role');
const heroSummary = document.getElementById('hero-summary');
const heroSocials = document.getElementById('hero-socials');
const footerSocials = document.getElementById('footer-socials');
const aboutText = document.getElementById('about-text');
const aboutLocation = document.getElementById('about-location');
const aboutEmail = document.getElementById('about-email');
const aboutPhone = document.getElementById('about-phone');
const skillsContainer = document.getElementById('skills-container');
const experienceContainer = document.getElementById('experience-container');
const projectsContainer = document.getElementById('projects-container');
const educationContainer = document.getElementById('education-container');
const certificationsContainer = document.getElementById('certifications-container');
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

// Icons Mapping
const skillIcons = {
  cloud_infrastructure: 'fa-cloud',
  devops_automation: 'fa-server',
  ai_data: 'fa-brain',
  core_competencies: 'fa-check-circle'
};

// Render Content
function render() {
  // Hero
  if (heroName) heroName.textContent = `Hi, I'm ${personalDetails.name}`;
  if (heroRole) heroRole.textContent = personalDetails.role;
  if (heroSummary) heroSummary.textContent = personalDetails.summary;

  // Socials
  const xIcon = `
    <svg aria-hidden="true" viewBox="0 0 24 24" class="icon-x">
      <path fill="currentColor" d="M16.7 3H20l-7.3 8.3L20.8 21H15l-4.4-5.5L5.7 21H2.4l7.8-8.9L3.5 3h5l4 5 4.2-5z"/>
    </svg>
  `;
  const socialHTML = `
    <a href="${personalDetails.socials.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
    <a href="${personalDetails.socials.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
    <a href="${personalDetails.socials.twitter}" target="_blank" aria-label="X / Twitter">${xIcon}</a>
  `;
  if (heroSocials) heroSocials.innerHTML = socialHTML;
  if (footerSocials) footerSocials.innerHTML = socialHTML;

  // About
  if (aboutText) aboutText.textContent = personalDetails.summary;
  if (aboutLocation) aboutLocation.textContent = personalDetails.location;
  if (aboutEmail) aboutEmail.textContent = personalDetails.email;
  if (aboutPhone) aboutPhone.textContent = personalDetails.phone;

  // Skills
  if (skillsContainer) {
    Object.entries(skills).forEach(([category, items]) => {
      const card = document.createElement('div');
      card.className = 'card skill-category';
      const iconClass = skillIcons[category] || 'fa-code';

      card.innerHTML = `
        <h3><i class="fas ${iconClass}"></i> ${category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h3>
        <div class="skill-tags">
          ${items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      `;
      skillsContainer.appendChild(card);
    });
  }

  // Experience
  if (experienceContainer) {
    experience.forEach(job => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>${job.role}</h3>
            <span class="timeline-date">${job.duration}</span>
          </div>
          <div class="timeline-company">${job.company} - ${job.location}</div>
          <ul>
            ${job.responsibilities.map(res => `<li>${res}</li>`).join('')}
          </ul>
        </div>
      `;
      experienceContainer.appendChild(item);
    });
  }

  // Projects
  if (projectsContainer) {
    projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'card project-card';
      card.innerHTML = `
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <div class="project-tags">
          ${proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        ${proj.link ? `<a class="project-link" href="${proj.link}" target="_blank" rel="noopener">Open case</a>` : ''}
      `;
      projectsContainer.appendChild(card);
    });
  }

  // Education
  if (educationContainer) {
    education.forEach(edu => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h4>${edu.institution}</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem;">${edu.year ? edu.year + ' | ' : ''} ${edu.details}</p>
      `;
      educationContainer.appendChild(div);
    });
  }

  // Certifications
  if (certificationsContainer) {
    const getLogoMarkup = (cert) => {
      const logo = issuerLogos[cert.issuer] || issuerLogos[cert.name];
      if (logo) {
        return `<div class="cert-logo"><img src="${logo}" alt="${cert.issuer || cert.name} logo"></div>`;
      }
      const letter = (cert.issuer || cert.name || '?').trim().charAt(0).toUpperCase();
      return `<div class="cert-logo fallback">${letter}</div>`;
    };

    certifications.forEach(cert => {
      const div = document.createElement('div');
      div.className = 'card cert-card';

      div.innerHTML = `
        <div class="cert-top">
          ${getLogoMarkup(cert)}
          <div>
            <h4 class="cert-title">${cert.name}</h4>
            <p class="cert-issuer">${cert.issuer}</p>
          </div>
        </div>
        <div class="cert-meta">
          <span class="cert-date">${cert.date}</span>
          ${cert.id ? `<code class="cert-id">ID: ${cert.id}</code>` : ''}
        </div>
        ${cert.skills && cert.skills.length > 0 ? `
        <div class="cert-skill-tags">
            ${cert.skills.map(s => `<span class="cert-skill">${s}</span>`).join('')}
        </div>
        ` : ''}
        ${cert.link ? `<div class="cert-link-wrap"><a class="cert-link" href="${cert.link}" target="_blank" rel="noopener">View credential</a></div>` : ''}
      `;
      certificationsContainer.appendChild(div);
    });
  }
}

// Theme Toggle
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  if (!themeToggle) return;
  const icon = themeToggle.querySelector('i');
  if (theme === 'dark') {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
}

// Mobile Menu
if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  render();
  initTheme();
});
