import { ExternalLink } from 'lucide-react'

const sampleProjects = [
  {
    title: 'Aplikasi E‑Commerce',
    desc: 'Platform belanja modern dengan cart, checkout, dan dashboard admin.',
    tags: ['React', 'Tailwind', 'FastAPI'],
    link: '#'
  },
  {
    title: 'Dashboard Analytics',
    desc: 'Visualisasi data realtime dengan grafik interaktif dan filter dinamis.',
    tags: ['Next.js', 'D3.js', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'SaaS Landing Page',
    desc: 'Landing page dengan performa tinggi dan A/B testing terintegrasi.',
    tags: ['Vite', 'Tailwind', 'SEO'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Proyek Pilihan</h2>
          <a href="#" className="text-blue-300 hover:text-white transition-colors text-sm">Lihat semua</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sampleProjects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 transition-colors overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-400/10" />
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">{p.title}</h3>
                <p className="text-blue-100/80 text-sm mt-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs text-blue-200/70 bg-white/5 border border-white/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-blue-300 group-hover:gap-2 transition-all text-sm">
                  Kunjungi <ExternalLink size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
