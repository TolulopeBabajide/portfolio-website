import { useEffect } from 'react'

const SITE_URL = 'https://btgideon.dev'
const DEFAULT_OG_IMAGE = '/og-default.png'
const DEFAULT_DESCRIPTION = 'Tolulope Babajide is an AI Systems Engineer based in London, UK, building production-grade AI products, backend systems, and multi-agent orchestration pipelines.'

const SEO = ({ title, description = DEFAULT_DESCRIPTION, url, ogImage = DEFAULT_OG_IMAGE }) => {
  useEffect(() => {
    document.title = title

    const setMeta = (key, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const resolvedUrl = url ? `${SITE_URL}${url}` : window.location.href
    const resolvedImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', resolvedUrl)

    setMeta('description', description)
    setMeta('og:type', 'website', 'property')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', resolvedUrl, 'property')
    setMeta('og:image', resolvedImage, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', resolvedImage)
  }, [title, description, url, ogImage])

  return null
}

export default SEO
