import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Tentang' },
    { href: '#projects', label: 'Proyek' },
    { href: '#skills', label: 'Keahlian' },
    { href: '#contact', label: 'Kontak' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-white font-bold text-xl tracking-tight">
              <span className="text-blue-400">/</span> Portfolio
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/80">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-blue-100/80 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-blue-100/80 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg text-sm transition-colors">
                <Mail size={16} /> Kontak
              </a>
            </div>

            <button className="md:hidden p-2 text-blue-100 hover:text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <nav className="flex flex-col gap-3 text-blue-100/90">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-2 py-2 rounded-lg hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-blue-100/80 hover:text-white transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-blue-100/80 hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
