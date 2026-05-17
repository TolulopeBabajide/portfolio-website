/**
 * prerender.mjs
 *
 * Post-build script that renders each route to a static HTML file.
 * Run after: vite build && vite build --ssr src/entry-server.jsx
 *
 * Output: dist/<route>/index.html for every route in the `routes` array.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, '..', p)

const routes = [
  '/',
  '/projects/awade',
  '/projects/planacle',
  '/projects/bookorbit',
  '/projects/cybersecurity',
  '/projects/agentic-team',
]

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
  const appHtml = render(url)

  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )

  const routePath = url === '/' ? '/index.html' : `${url}/index.html`
  const filePath = toAbsolute(`dist${routePath}`)

  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, html)

  console.log(`  ✅ ${url.padEnd(35)} → dist${routePath}`)
}

console.log('\n✨ Pre-rendering complete.')
