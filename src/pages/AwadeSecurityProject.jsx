import SecurityCaseStudy from '../components/SecurityCaseStudy'

const study = {
    title: 'Securing Awade: identity, child data, and AI-generated learning content',
    lede: 'An evidence-backed review of an education platform whose friendly experience sits on top of sensitive identity, child-profile, administrative, and model boundaries.',
    reviewDate: '23 August 2026',
    scope: 'authentication, ownership, sessions, AI generation, and PDF export',
    productName: 'Awade',
    path: '/projects/awade-security',
    productPath: '/projects/awade',
    thesis: [
        'Awade helps parents support a child’s learning at home. That makes account identity, child-profile ownership, and generated educational content primary security concerns rather than secondary infrastructure details.',
        'I reviewed the application from the browser through FastAPI, PostgreSQL, Redis, and its OpenAI/Gemini provider layer. Authentication, active-account status, roles, ownership, and model safety are separate controls because each answers a different security question.',
    ],
    boundaries: [
        'The React client sends a JWT through an HttpOnly cookie or bearer header; the API—not the browser—authenticates and authorizes the request.',
        'FastAPI dependencies verify the token, load the active user, reject suspended accounts, and enforce the exact route audience.',
        'Owner-scoped service queries constrain access to child profiles, guides, and exports; administrative access follows a separate elevated path.',
        'AI inputs cross sanitisation and delimiter boundaries before provider use; model output crosses JSON, schema, PII, and child-safety validation before persistence.',
        'PDF generation is treated as a separate trust boundary because rendering engines can introduce file, network, and unsafe-HTML risks.',
    ],
    controls: [
        { area: 'Authentication', detail: 'Fixed-algorithm JWT verification, HttpOnly-cookie support, production fail-closed secret configuration, active-user lookup, and suspended-account rejection.' },
        { area: 'Authorization', detail: 'Explicit parent, educator, admin, and super-admin dependencies are combined with owner-scoped child-data queries to prevent cross-account access.' },
        { area: 'Sessions', detail: 'Logout blacklists refresh tokens in Redis before deleting authentication cookies; token and cookie behaviour is covered by focused tests.' },
        { area: 'Account protection', detail: 'Generic registration and password-reset responses reduce enumeration, while authentication and recovery routes use dedicated request budgets.' },
        { area: 'AI input', detail: 'User context is truncated, delimiter tags are removed, sensitive patterns are redacted, injection phrases are scrubbed, and content is placed inside explicit data boundaries.' },
        { area: 'AI output', detail: 'Responses are parsed and schema-checked, then screened for PII, jailbreak indicators, and clearly harmful child-facing material before use.' },
        { area: 'Bounded execution', detail: 'Provider calls have explicit timeouts and token limits. The model receives no tools or direct write authority; application code controls persistence.' },
        { area: 'Document export', detail: 'Authorization, request limits, unsafe-content checks, and focused PDF security tests protect the export boundary.' },
    ],
    scenarios: [
        { threat: 'A parent requests another family’s child profile', control: 'The request flows through authenticated parent context and owner-scoped service queries rather than trusting a client-supplied identifier.', outcome: 'Blocked at the ownership boundary' },
        { threat: 'A standard user calls an administrative route', control: 'Administrative routers require an elevated dependency and keep sensitive actions behind explicit role checks and request limits.', outcome: 'Blocked at the API boundary' },
        { threat: 'User text attempts to override the model instructions', control: 'Context is scrubbed, bounded, and placed inside data-only delimiters; suspicious output is independently screened.', outcome: 'Materially reduced through layered gates' },
        { threat: 'A revoked refresh token is reused', control: 'Logout records the token in Redis before clearing cookies, allowing later refresh attempts to be rejected.', outcome: 'Blocked by session revocation' },
    ],
    validation: [
        { value: '166', label: 'backend authentication, access-control, AI, and PDF security tests passed' },
        { value: '16', label: 'frontend sanitizer and API-client tests passed' },
        { value: '0', label: 'new Critical or High findings identified' },
        { value: 'Clean', label: 'secret and sensitive-file checks in the security review' },
    ],
    risks: [
        { title: 'AI provider key rotation evidence', status: 'Open · tracked', treatment: 'Record the last rotation, rotate if the date is unknown or overdue, and maintain a recurring evidence-backed schedule.' },
        { title: 'AI safeguards remain probabilistic', status: 'Continuous risk', treatment: 'Retain layered input/output gates, red-team fixtures, rate limits, model pinning, and human review of educational content.' },
        { title: 'Child-privacy obligations vary by country', status: 'Governance', treatment: 'Review applicable GDPR, COPPA, and local African data-protection requirements before launching in each jurisdiction.' },
        { title: 'Dependency evolution', status: 'Maintenance', treatment: 'Assess breaking SDK and framework upgrades through the dependency-security workflow rather than forcing untested major updates.' },
    ],
}

const AwadeSecurityProject = () => <SecurityCaseStudy study={study} />

export default AwadeSecurityProject
