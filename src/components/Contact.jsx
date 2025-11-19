import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Mengirim...')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    }

    try {
      // In real app, send to backend or service. Here we'll just simulate.
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Terkirim! Saya akan menghubungi Anda kembali.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Gagal mengirim. Coba lagi ya.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">Kontak</h2>
            <p className="text-blue-100/90">Tertarik bekerja sama atau ingin berdiskusi? Kirim pesan Anda.</p>

            <div className="mt-6 flex items-center gap-3 text-blue-200">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-blue-300">
                <Mail size={18} />
              </div>
              <a href="mailto:you@example.com" className="hover:text-white transition-colors">you@example.com</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm text-blue-200/80 mb-1">Nama</label>
                <input name="name" required className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Nama lengkap" />
              </div>
              <div>
                <label className="block text-sm text-blue-200/80 mb-1">Email</label>
                <input type="email" name="email" required className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="email@domain.com" />
              </div>
              <div>
                <label className="block text-sm text-blue-200/80 mb-1">Pesan</label>
                <textarea name="message" rows="4" required className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Tulis pesan Anda" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 justify-center bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                <Send size={18} /> Kirim
              </button>
              {status && <p className="text-sm text-blue-200/90">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
