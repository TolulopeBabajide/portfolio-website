import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { RoleProvider, resolveRole } from './context/RoleContext'
import { getRoleConfig } from './content/roles'

export function render(url) {
  const [pathname, search = ''] = url.split('?')

  const appHtml = renderToString(
    <StaticRouter location={url}>
      <RoleProvider>
        <AppRoutes />
      </RoleProvider>
    </StaticRouter>
  )

  // Resolve role-correct meta so the prerenderer can bake it into <head>.
  const config = getRoleConfig(resolveRole(pathname, search))
  return {
    appHtml,
    title: config.seoTitle,
    description: config.seoDescription,
  }
}
