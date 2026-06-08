// Role variants for the home page.
// Activated via ?role=<slug> in the URL. Unknown or missing falls back to 'default'.
//
// Adding a new role: append an entry below with the same shape as the others.
// projectOrder lists project titles in the order they should appear; titles
// not in the list are hidden. skillsOrder lists Skills section titles in the
// order they should appear; titles not listed fall through to the end in
// their original order.

export const ROLES = {
  default: {
    seoTitle: 'Tolulope Babajide, AI Systems Engineer',
    seoDescription:
      'Tolulope Babajide is an AI Systems Engineer based in London, UK, building production-grade AI products, backend systems, and multi-agent pipelines.',
    heroHeadline:
      'AI Systems Engineer building AI products, backend systems, and multi-agent orchestration pipelines, based in London, UK.',
    heroSubCopy: [
      'Curiosity has taken me across entrepreneurship, education, sales, hospitality, and computing. I have run a footwear brand, mentored young learners, led sales teams, and built digital systems.',
      "Those experiences shaped how I approach technology today. I work to understand people, understand systems, and build things that create value. I'm now focused on AI-powered applications, backend systems, and cybersecurity.",
    ],
    resumeUrl: '/resume.pdf',
    projectOrder: ['OPSARA', 'Awade', 'Planacle', 'BookOrbit', 'Agentic Team Template'],
    showCyberLabs: true,
    skillsOrder: [
      'AI & Data Systems',
      'Solutions Engineering / Pre-Sales',
      'Systems Dev',
      'Design & Logic',
      'Quality & Security',
      'Cloud & Infrastructure',
      'Agent Orchestration',
    ],
    // Experience reordered by relevance, keyed by company. Default is reverse-chronological.
    experienceOrder: [
      'CyBlack',
      'Agencies Across London',
      'Sendmeglobal',
      'LIFEPAGE Global',
      'Leathern by Jyde',
    ],
  },

  engineering: {
    seoTitle: 'Tolulope Babajide, AI Systems Engineer',
    seoDescription:
      'Engineer building LLM applications, backend systems, and multi-agent pipelines. FastAPI, React, RAG, Claude Agent SDK.',
    heroHeadline:
      'AI Systems Engineer building LLM products, backend systems, and multi-agent pipelines.',
    heroSubCopy: [
      'I design and ship production systems: FastAPI services, PostgreSQL data models, RAG pipelines, and agentic workflows built for real use.',
      'Based in London. Currently building Awade (RAG-based lesson generation), Planacle (real-time AI planning), and an autonomous DevOps agent stack.',
    ],
    resumeUrl: '/resume-eng.pdf',
    projectOrder: ['Awade', 'OPSARA', 'Agentic Team Template', 'Planacle', 'BookOrbit'],
    showCyberLabs: false,
    skillsOrder: [
      'AI & Data Systems',
      'Systems Dev',
      'Agent Orchestration',
      'Cloud & Infrastructure',
      'Design & Logic',
      'Quality & Security',
      'Solutions Engineering / Pre-Sales',
    ],
    experienceOrder: [
      'CyBlack',
      'Sendmeglobal',
      'LIFEPAGE Global',
      'Leathern by Jyde',
      'Agencies Across London',
    ],
  },

  security: {
    seoTitle: 'Tolulope Babajide, Security Engineer',
    seoDescription:
      'Security-minded engineer working on vulnerability assessment, threat intelligence, and hardened cloud systems. Nessus, Zabbix, OWASP, APT analysis.',
    heroHeadline:
      'Security-minded engineer working on secure systems, vulnerability assessment, and threat intelligence.',
    heroSubCopy: [
      'Hands-on with Nessus, Zabbix, OWASP labs, and APT threat modeling. I build software with hardening, RBAC, and ACID guarantees designed in from the start.',
      'Based in London. I bring engineering rigor to practical security testing and incident-ready operations.',
    ],
    resumeUrl: '/resume-sec.pdf',
    projectOrder: ['Planacle', 'Awade', 'Agentic Team Template', 'BookOrbit'],
    showCyberLabs: true,
    skillsOrder: [
      'Quality & Security',
      'Cloud & Infrastructure',
      'Systems Dev',
      'AI & Data Systems',
      'Design & Logic',
      'Agent Orchestration',
      'Solutions Engineering / Pre-Sales',
    ],
    experienceOrder: [
      'CyBlack',
      'Sendmeglobal',
      'Agencies Across London',
      'LIFEPAGE Global',
      'Leathern by Jyde',
    ],
  },

  customer: {
    seoTitle: 'Tolulope Babajide, Solutions & Customer Engineering',
    seoDescription:
      'Technical bridge between product, customers, and engineering. Solutions Engineering, Customer Success, Technical Account Management.',
    heroHeadline:
      'Technical bridge between product, customers, and engineering, working in Solutions Engineering, Customer Success, and Technical Account Management.',
    heroSubCopy: [
      'A career across entrepreneurship, sales, hospitality, education, and engineering. I translate complex technology into outcomes, and people problems into systems.',
      "I've led sales teams, mentored learners, run a footwear brand, and shipped AI products. My approach stays the same: understand the person, then design the solution.",
    ],
    resumeUrl: '/resume-cs.pdf',
    projectOrder: ['OPSARA', 'Awade', 'Planacle', 'Agentic Team Template'],
    showCyberLabs: false,
    skillsOrder: [
      'Solutions Engineering / Pre-Sales',
      'AI & Data Systems',
      'Design & Logic',
      'Systems Dev',
      'Cloud & Infrastructure',
      'Agent Orchestration',
      'Quality & Security',
    ],
    experienceOrder: [
      'LIFEPAGE Global',
      'Agencies Across London',
      'Leathern by Jyde',
      'CyBlack',
      'Sendmeglobal',
    ],
  },
}

ROLES.general = ROLES.default

export const getRoleConfig = (slug) => ROLES[slug] || ROLES.default
