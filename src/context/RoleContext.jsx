/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ROLES, getRoleConfig } from '../content/roles'

const RoleContext = createContext({ role: 'default', config: getRoleConfig('default') })

// Dedicated paths that map to a role. These are prerendered with role-correct
// <head> meta and SSR body, so search engines and link-preview crawlers see the
// right card. The ?role=<slug> query param still works as a client-side alias.
export const ROLE_PATHS = {
  '/engineering': 'engineering',
  '/security': 'security',
  '/customer': 'customer',
  '/general': 'general',
}

// Resolve the active role from the URL: a dedicated path wins, then ?role=,
// otherwise 'default'.
export const resolveRole = (pathname, search) => {
  if (ROLE_PATHS[pathname]) return ROLE_PATHS[pathname]
  const r = new URLSearchParams(search || '').get('role')
  return r && ROLES[r] ? r : 'default'
}

export const RoleProvider = ({ children }) => {
  const location = useLocation()
  // Path-based roles are resolved synchronously so SSR and the first client
  // render agree (crawler-correct AND hydration-safe). Query-param roles start
  // at 'default' to match the default-rendered shell, then reconcile in the
  // effect below.
  const [role, setRole] = useState(() => ROLE_PATHS[location.pathname] || 'default')

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRole(resolveRole(location.pathname, location.search))
  }, [location.pathname, location.search])

  return (
    <RoleContext.Provider value={{ role, config: getRoleConfig(role) }}>
      {children}
    </RoleContext.Provider>
  )
}

export const useRole = () => useContext(RoleContext)

// Build an internal href that preserves the active role query param.
// Pass a plain path like '/projects/awade' to get '/projects/awade?role=customer'
// when the user is on a non-default role, or the path unchanged otherwise.
export const useRoleHref = () => {
  const { role } = useRole()
  return (path) => {
    if (role === 'default' || role === 'general') return path
    const sep = path.includes('?') ? '&' : '?'
    return `${path}${sep}role=${role}`
  }
}

