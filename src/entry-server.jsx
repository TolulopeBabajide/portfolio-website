import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { RoleProvider, resolveRole } from './context/RoleContext'
import { getRoleConfig } from './content/roles'

const PROJECT_META = {
  '/projects/planacle': {
    title: 'Planacle — AI Group Event Planning | Tolulope Babajide',
    description:
      'Real-time AI group planning with Schulze voting algorithm, Gale-Shapley stable matching, and Gemini-powered itinerary generation. Built with React, Firebase, and Google Genkit.',
  },
  '/projects/awade': {
    title: 'Awade — AI Learning Guides for Parents | Tolulope Babajide',
    description:
      'Curriculum-grounded LLM generation of learning guides for African parents supporting learning at home. FastAPI, PostgreSQL, role-based access, and structured outputs.',
  },
  '/projects/bookorbit': {
    title: 'BookOrbit — Library Management System | Tolulope Babajide',
    description:
      'Full-stack library management and marketplace with cloud storage, payment integration, and ACID-safe transactional flows.',
  },
  '/projects/cybersecurity': {
    title: 'Cyber Threat Intelligence & GRC | Tolulope Babajide',
    description:
      'Enterprise threat analysis with MITRE ATT&CK, IAM and API authentication review, and GRC gap assessments against ISO 27001 and PCI DSS.',
  },
  '/projects/agentic-team': {
    title: 'Agentic Team Template — Multi-Agent DevOps | Tolulope Babajide',
    description:
      'Autonomous 3-agent loop (dev / code-review / QA) that ships features to live products and self-heals on test failure. Built with the Claude Agent SDK.',
  },
  '/projects/opsara': {
    title: 'OPSARA — Offline-First Hospitality OS | Tolulope Babajide',
    description:
      'Offline-first hospitality OS prototype covering POS, kitchen display, bookings, inventory, and analytics — built for African SME restaurants and hotels.',
  },
  '/projects/awade-security': {
    title: 'Awade Security Case Study | Tolulope Babajide',
    description:
      'Security review of Awade covering identity, child-data ownership, sessions, AI safeguards, and secure document generation.',
  },
  '/projects/planacle-security': {
    title: 'Planacle Security Case Study | Tolulope Babajide',
    description:
      'Security review of Planacle covering Firebase authorization, ballot integrity, privileged operations, and bounded AI planning.',
  },
}

export function render(url) {
  const [pathname, search = ''] = url.split('?')

  const appHtml = renderToString(
    <StaticRouter location={url}>
      <RoleProvider>
        <AppRoutes />
      </RoleProvider>
    </StaticRouter>
  )

  // Use per-project meta for project routes; fall back to role-based meta elsewhere.
  const projectMeta = PROJECT_META[pathname]
  if (projectMeta) {
    return {
      appHtml,
      title: projectMeta.title,
      description: projectMeta.description,
    }
  }

  const config = getRoleConfig(resolveRole(pathname, search))
  return {
    appHtml,
    title: config.seoTitle,
    description: config.seoDescription,
  }
}
