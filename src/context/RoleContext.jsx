/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ROLES, getRoleConfig } from '../content/roles'

const RoleContext = createContext({ role: 'default', config: getRoleConfig('default') })

// Reads ?role=<slug> from the URL and exposes the matching role config.
// Initial render is always 'default' to avoid SSR/CSR hydration mismatch;
// the effect reconciles on mount.
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState('default')
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const r = params.get('role')
    // Intentional post-mount setState: the first render must match the
    // server-rendered 'default' shell to avoid a hydration mismatch, then we
    // reconcile to the URL's role. This is the recommended SSR-safe pattern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRole(r && ROLES[r] ? r : 'default')
  }, [location.search])

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

