import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(1000px_500px_at_top_right,rgba(59,130,246,0.25)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(900px_500px_at_bottom_left,rgba(14,165,233,0.25)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-300/80 font-medium">Halo, saya</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Nama Anda
            </h1>
            <p className="mt-4 text-blue-100/90 text-lg leading-relaxed">
              Saya seorang Frontend/Backend/Full‑Stack Developer yang fokus pada pembuatan
              produk digital yang cepat, elegan, dan berdampak.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                Lihat Proyek <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-blue-100 hover:text-white font-medium px-4 py-2 rounded-lg transition-colors">
                Kontak
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-blue-200/80 hover:text-white font-medium px-4 py-2 rounded-lg transition-colors">
                <Download size={18} /> Unduh CV
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1600&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-xl bg-blue-500/20 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-xl bg-cyan-400/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
