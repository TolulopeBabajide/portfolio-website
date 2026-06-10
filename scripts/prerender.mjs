/**
 * prerender.mjs
 *
 * Post-build script that renders each route to a static HTML file.
 * Run after: vite build && vite build --ssr src/entry-server.jsx
 *
 * Output: dist/<route>/index.html for every route in the `routes` array.
 * Role-tailored paths (/security, /engineering, ...) also get role-correct
 * <head> meta (title, description, OG, Twitter) injected so crawlers and
 * link-preview bots see the right card.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, '..', p)

const SITE_URL = 'https://tolulopebabajide.com'

const routes = [
  '/',
  '/engineering',
  '/security',
  '/customer',
  '/general',
  '/projects/awade',
  '/projects/planacle',
  '/projects/bookorbit',
  '/projects/cybersecurity',
  '/projects/agentic-team',
  '/projects/opsara',
]

// Escape a string for use inside an HTML double-quoted attribute / text node.
const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// Replace the content of a known head tag, leaving everything else intact.
const replaceAttr = (html, regex, value) => html.replace(regex, (m, pre, post) => `${pre}${value}${post}`)

const injectMeta = (template, { title, description, url }) => {
  const t = escapeHtml(title)
  const d = escapeHtml(description)
  let html = template
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
  html = replaceAttr(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, d)
  html = replaceAttr(html, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, t)
  html = replaceAttr(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, d)
  html = replaceAttr(html, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, escapeHtml(url))
  html = replaceAttr(html, /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, t)
  html = replaceAttr(html, /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, d)
  return html
}

console.log('🔄 Pre-rendering routes...\n')

// Read the built client HTML shell (produced by vite build)
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

// Import the SSR bundle (produced by vite build --ssr src/entry-server.jsx --outDir dist/server)
const ssrBundle = toAbsolute('dist/server/entry-server.js')
if (!fs.existsSync(ssrBundle)) {
  console.error(`❌ SSR bundle not found at ${ssrBundle}`)
  console.error('   Run: vite build --ssr src/entry-server.jsx')
  process.exit(1)
}

const { render } = await import(ssrBundle)

for (const url of routes) {
  const { appHtml, title, description } = render(url)

  let html = injectMeta(template, {
    title,
    description,
    url: url === '/' ? SITE_URL : `${SITE_URL}${url}`,
  })
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const routePath = url === '/' ? '/index.html' : `${url}/index.html`
  const filePath = toAbsolute(`dist${routePath}`)

  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, html)

  // Also emit a flat sibling (e.g. dist/security.html) so hosts that resolve
  // "/security" without a trailing slash serve the role-correct file directly,
  // not the SPA fallback. Belt-and-suspenders across Netlify/Vercel/static.
  if (url !== '/') {
    const flatPath = toAbsolute(`dist${url}.html`)
    fs.mkdirSync(path.dirname(flatPath), { recursive: true })
    fs.writeFileSync(flatPath, html)
  }

  console.log(`  ✅ ${url.padEnd(35)} → dist${routePath}`)
}

console.log('\n✨ Pre-rendering complete.')
