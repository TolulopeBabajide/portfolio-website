import SecurityCaseStudy from '../components/SecurityCaseStudy'

const study = {
    title: 'Securing Planacle: collaborative data and bounded AI planning',
    lede: 'A source-backed security review of a real-time planning product where identity, shared state, ranked voting, privileged Cloud Functions, and Gemini all cross distinct trust boundaries.',
    reviewDate: '23 August 2026',
    scope: 'event lifecycle, Firestore and Storage rules, voting, and Genkit planning',
    productName: 'Planacle',
    path: '/projects/planacle-security',
    productPath: '/projects/planacle',
    thesis: [
        'Planacle combines Firebase Authentication, direct Firestore access, authenticated callable functions, external location data, and a Gemini planning pipeline. The browser is therefore a participant in the system—not its security boundary.',
        'I traced creation, joining, preferences, ballots, winner resolution, deletion, public sharing, and AI invocation to the rule or server check that actually enforces each decision. Client-side guards were treated only as user-experience controls.',
    ],
    boundaries: [
        'Firebase Authentication establishes caller identity; Firestore rules constrain direct reads and a deliberately small set of client writes.',
        'Privileged and concurrency-sensitive operations move into authenticated Cloud Functions that re-check membership, role, bounds, and request budgets.',
        'Event joining and capacity changes execute transactionally so concurrent callers cannot bypass limits through a race condition.',
        'The planning pipeline treats preferences and provider content as untrusted before Gemini use, then validates and scrubs generated output.',
        'Public sharing uses a separate server-generated projection containing presentation fields rather than exposing the private event document.',
    ],
    controls: [
        { area: 'Event creation', detail: 'Only authenticated, non-pure-anonymous users may create events, and the stored host identity must match the caller.' },
        { area: 'Joining', detail: 'Client participant creation is denied. A callable authenticates, validates bounded input, rate-limits attempts, assigns roles server-side, enforces capacity transactionally, and rejects final-phase joins.' },
        { area: 'Participant privacy', detail: 'Availability summaries and activity data remain participant-only and server-written where appropriate.' },
        { area: 'Ballot integrity', detail: 'Participants may update only their own ballot fields; ranked lists are capped and voting is gated by event phase and server-time deadline.' },
        { area: 'Winner resolution', detail: 'Tallying and tie resolution are server-side, host-triggered, rate-limited, and validated against live candidates and recorded co-winners.' },
        { area: 'Destructive actions', detail: 'Client deletion is denied. The callable authenticates the caller, verifies stored host ownership, applies a request budget, and recursively deletes the event tree.' },
        { area: 'AI authorization', detail: 'The planning wrapper rejects unauthenticated users and verifies that the caller has a participant record for the requested event.' },
        { area: 'AI consumption', detail: 'Per-user quotas, concurrency caps, flow and narrative timeouts, turn limits, token caps, sanitisation, Zod schemas, and explicit model-safety settings bound execution.' },
    ],
    scenarios: [
        { threat: 'A guest self-assigns the host role', control: 'Participant creation is server-only. The join function derives the effective role from the event’s stored host identity.', outcome: 'Blocked by server-owned role assignment' },
        { threat: 'Concurrent joiners exceed event capacity', control: 'Event state, participant existence, and count are evaluated inside one Firestore transaction before writes commit.', outcome: 'Bounded transactionally' },
        { threat: 'A participant overwrites another ballot', control: 'Direct ballot updates require the authenticated UID to match the participant path and restrict the writable fields.', outcome: 'Blocked by Firestore rules' },
        { threat: 'An authenticated outsider invokes AI for another event', control: 'The callable verifies the caller’s participant document before starting the planning flow, with quotas and instance caps behind it.', outcome: 'Blocked in the production path' },
    ],
    validation: [
        { value: '94', label: 'focused root rule and client-service tests passed' },
        { value: '150', label: 'focused Cloud Function and planning tests passed' },
        { value: '0', label: 'new Critical or High findings identified by the review' },
        { value: '1 known', label: 'planning-behaviour regression remained visible rather than being presented as a clean run' },
    ],
    risks: [
        { title: 'Avatar upload constraints', status: 'High · tracked', treatment: 'Add authoritative file-size, image MIME-type, and canonical-path checks alongside client validation.' },
        { title: 'Event-create field surface', status: 'Medium', treatment: 'Move creation behind a callable or strictly allowlist initial fields, types, and sizes in Firestore rules.' },
        { title: 'Preference payload bounds', status: 'Medium', treatment: 'Add item-count, string-length, numeric-range, and location-marker caps to shared and server schemas.' },
        { title: 'Pre-join capability link', status: 'Low · accepted', treatment: 'The unguessable event ID currently acts as a capability before generation. Use a restricted pre-join projection if future data requires stronger confidentiality.' },
    ],
}

const PlanacleSecurityProject = () => <SecurityCaseStudy study={study} />

export default PlanacleSecurityProject
