import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, FileDown, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useRole, useRoleHref, ROLE_PATHS } from '../context/RoleContext'

const NAV_LINKS = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const { theme, toggleTheme } = useTheme()
    const { config } = useRole()
    const roleHref = useRoleHref()
    const { pathname } = useLocation()
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const onHome = pathname === '/' || Boolean(ROLE_PATHS[pathname])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
                scrolled
                    ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur border-b border-gray-200/70 dark:border-slate-800/70'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <nav aria-label="Main" className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
                <Link
                    to={roleHref('/')}
                    className="font-display font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap"
                >
                    Tolulope<span className="text-cyan-600 dark:text-cyan-400"> Babajide</span>
                </Link>

                {onHome && (
                    <div className="hidden md:flex items-center gap-7">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}

                <div className="flex items-center gap-2 sm:gap-3">
                    <a
                        href={config.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-gray-300 dark:border-slate-700 hover:border-cyan-500/50 transition-colors"
                    >
                        <FileDown size={14} />
                        CV
                    </a>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-gray-200 dark:border-slate-700 hover:border-cyan-500/50 transition-colors text-slate-600 dark:text-slate-300 shadow-sm"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>
                    {onHome && (
                        <button
                            type="button"
                            onClick={() => setMobileOpen((open) => !open)}
                            className="rounded-lg border border-gray-200 bg-white/80 p-2 text-slate-600 shadow-sm backdrop-blur transition-colors hover:border-cyan-500/50 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 md:hidden"
                            aria-label="Toggle navigation"
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    )}
                </div>
            </nav>
            {onHome && mobileOpen && (
                <div className="border-t border-gray-200/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/95 md:hidden">
                    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-cyan-500/10 hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-400"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
