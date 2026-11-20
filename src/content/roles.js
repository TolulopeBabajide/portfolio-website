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
    seoTitle: 'Tolulope Babajide | Systems & Data Developer',
    seoDescription:
      'Systems & Data Developer at the UK Semiconductor Centre, leading ongoing ChipScape development across software delivery, data quality, and automation.',
    heroHeadline:
      'I build dependable digital systems and turn complex data into useful products.',
    heroSubCopy: [
      'I’m a Systems & Data Developer at the UK Semiconductor Centre (UKSC), leading the ongoing development of ChipScape from requirements and design through implementation, testing, deployment work, and continuous improvement.',
      'My work brings together software delivery, data quality, and automation: building reliable ingestion, matching, validation, and review workflows with clear provenance.',
    ],
    resumeUrl: '/resume.pdf',
    contactLine:
      'Connect with me about digital products, dependable data systems, and practical automation.',
    projectOrder: ['ChipScape', 'Awade', 'Planacle', 'OPSARA', 'Agentic Team Template', 'BookOrbit'],
    showCyberLabs: true,
    skillsOrder: [
      'AI & Data Systems',
      'Solutions Engineering / Pre-Sales',
      'Systems Dev',
      'Design & Logic',
      'Quality & Testing',
      'Security & Threat Intel',
      'Cloud & Infrastructure',
      'Agent Orchestration',
    ],
    // Experience reordered by relevance, keyed by company. Default is reverse-chronological.
    experienceOrder: [
      'UK Semiconductor Centre (UKSC)',
      'CyBlack',
      'Agencies Across London',
      'Sendmeglobal',
      'LIFEPAGE Global',
      'Leathern by Jyde',
    ],
  },

  engineering: {
    seoTitle: 'Tolulope Babajide | AI & Backend Engineer',
    seoDescription:
      'Engineer building LLM applications, backend systems, and multi-agent pipelines. FastAPI, React, PostgreSQL, Claude Agent SDK.',
    heroHeadline:
      'AI & Backend Engineer building dependable products, APIs, and agentic workflows.',
    heroSubCopy: [
      'I design and ship production systems: FastAPI backends, PostgreSQL data models, LLM generation pipelines, and agentic workflows built for real use.',
      'At the UK Semiconductor Centre (UKSC), I lead ongoing ChipScape development across requirements, design, implementation, testing, deployment work, and continuous improvement, with a focus on data quality and automation.',
    ],
    resumeUrl: '/resume.pdf', // TODO(H-12): point to /resume-eng.pdf once the role-specific CV exists in public/
    contactLine:
      'Connect with me about software delivery, data engineering, and practical AI applications.',
    projectOrder: ['ChipScape', 'Awade', 'OPSARA', 'Agentic Team Template', 'Planacle', 'BookOrbit'],
    showCyberLabs: false,
    skillsOrder: [
      'AI & Data Systems',
      'Systems Dev',
      'Agent Orchestration',
      'Cloud & Infrastructure',
      'Design & Logic',
      'Quality & Testing',
      'Security & Threat Intel',
      'Solutions Engineering / Pre-Sales',
    ],
    experienceOrder: [
      'UK Semiconductor Centre (UKSC)',
      'CyBlack',
      'Sendmeglobal',
      'LIFEPAGE Global',
      'Leathern by Jyde',
      'Agencies Across London',
    ],
  },

  security: {
    seoTitle: 'Tolulope Babajide | Cybersecurity Solutions Specialist',
    seoDescription:
      'Cybersecurity solutions specialist with hands-on vulnerability assessment, threat intelligence (MITRE ATT&CK), GRC against ISO 27001 and PCI DSS, and AI-powered security products.',
    heroHeadline:
      'Cybersecurity Solutions Specialist with hands-on experience in vulnerability assessment, threat intelligence, and AI-powered security products.',
    heroSubCopy: [
      'I run client-facing security engagements end to end: threat analysis with MITRE ATT&CK, IAM and API review across cloud environments, and GRC gap assessments against ISO 27001 and PCI DSS, translated into board-level risk summaries.',
      'My current role is Systems & Data Developer at the UK Semiconductor Centre (UKSC), leading ongoing ChipScape development with an emphasis on reliable data, provenance, validation, and review workflows.',
    ],
    resumeUrl: '/resume-sec.pdf',
    contactLine:
      'Connect with me about secure systems, data integrity, and translating technical risk into practical improvements.',
    projectOrder: ['ChipScape', 'Cyber Threat Intelligence & GRC', 'Planacle', 'Awade', 'Agentic Team Template', 'BookOrbit'],
    // The featured "Cyber Threat Intelligence & GRC" card already represents the
    // security work here and links to the full case study, so the labs grid below
    // would duplicate it. Default view keeps the grid (its only security surface).
    showCyberLabs: false,
    skillsOrder: [
      'Security & Threat Intel',
      'Solutions Engineering / Pre-Sales',
      'Cloud & Infrastructure',
      'Quality & Testing',
      'Systems Dev',
      'AI & Data Systems',
      'Design & Logic',
      'Agent Orchestration',
    ],
    experienceOrder: [
      'UK Semiconductor Centre (UKSC)',
      'CyBlack',
      'Sendmeglobal',
      'Agencies Across London',
      'LIFEPAGE Global',
      'Leathern by Jyde',
    ],
  },

  customer: {
    seoTitle: 'Tolulope Babajide | Solutions & Customer Engineering',
    seoDescription:
      'Technical bridge between product, customers, and engineering. Solutions Engineering, Customer Success, Technical Account Management.',
    heroHeadline:
      'Technical bridge between product, customers, and engineering, working in Solutions Engineering, Customer Success, and Technical Account Management.',
    heroSubCopy: [
      'A career across entrepreneurship, sales, hospitality, education, and engineering. I translate complex technology into outcomes, and people problems into systems.',
      'At the UK Semiconductor Centre (UKSC), I lead ongoing ChipScape development, turning requirements into software and data workflows while documenting decisions and communicating delivery progress.',
    ],
    resumeUrl: '/resume.pdf', // TODO(H-12): point to /resume-cs.pdf once the role-specific CV exists in public/
    contactLine:
      'Connect with me about understanding user needs, improving digital workflows, and delivering useful products.',
    projectOrder: ['ChipScape', 'OPSARA', 'Awade', 'Planacle', 'Agentic Team Template'],
    showCyberLabs: false,
    skillsOrder: [
      'Solutions Engineering / Pre-Sales',
      'AI & Data Systems',
      'Design & Logic',
      'Systems Dev',
      'Cloud & Infrastructure',
      'Agent Orchestration',
      'Quality & Testing',
      'Security & Threat Intel',
    ],
    experienceOrder: [
      'UK Semiconductor Centre (UKSC)',
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
