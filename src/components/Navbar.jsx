import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="fixed top-4 right-4 z-50">
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-gray-200 dark:border-slate-700 hover:border-cyan-500/50 transition-colors text-slate-600 dark:text-slate-300 shadow-sm"
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
        </div>
    )
}

export default Navbar
