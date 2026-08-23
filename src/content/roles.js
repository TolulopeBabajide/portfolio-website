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
    seoTitle: 'Tolulope Babajide | Product & Solutions Engineer',
    seoDescription:
      'Product & Solutions Engineer turning complex customer problems into secure, production-minded digital products and systems.',
    heroHeadline:
      'I turn complex customer problems into secure, production-minded digital products and systems.',
    heroSubCopy: [
      'I’m a Product & Solutions Engineer based in London, combining full-stack engineering, cloud security, and commercial experience to take products from discovery through architecture and delivery.',
      'I build AI-powered applications, secure backend systems, and operational tools—using AI where it creates genuine value.',
    ],
    resumeUrl: '/resume.pdf',
    contactLine:
      "I'm currently open to product engineering, solutions engineering, and security-minded systems roles.",
    projectOrder: ['Awade', 'Planacle', 'OPSARA', 'Agentic Team Template', 'BookOrbit'],
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
      'Based in London. Currently building Awade (curriculum-matched learning guides), Planacle (real-time AI planning), and an autonomous DevOps agent stack.',
    ],
    resumeUrl: '/resume.pdf', // TODO(H-12): point to /resume-eng.pdf once the role-specific CV exists in public/
    contactLine:
      "I'm currently open to AI engineering, backend, and platform roles.",
    projectOrder: ['Awade', 'OPSARA', 'Agentic Team Template', 'Planacle', 'BookOrbit'],
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
      'Based in London. I pair hands-on testing (Nessus, Zabbix, OWASP, APT analysis) with the consultative, stakeholder-facing side of security work.',
    ],
    resumeUrl: '/resume-sec.pdf',
    contactLine:
      "I'm currently open to cybersecurity, solutions engineering, and customer enablement roles.",
    projectOrder: ['Cyber Threat Intelligence & GRC', 'Planacle', 'Awade', 'Agentic Team Template', 'BookOrbit'],
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
      "I've led sales teams, mentored learners, run a footwear brand, and shipped AI products. My approach stays the same: understand the person, then design the solution.",
    ],
    resumeUrl: '/resume.pdf', // TODO(H-12): point to /resume-cs.pdf once the role-specific CV exists in public/
    contactLine:
      "I'm currently open to solutions engineering, customer success, and technical account management roles.",
    projectOrder: ['OPSARA', 'Awade', 'Planacle', 'Agentic Team Template'],
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
