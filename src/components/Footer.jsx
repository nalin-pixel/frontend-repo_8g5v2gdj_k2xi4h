export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-200/70">
        <p>© {new Date().getFullYear()} Nama Anda. Semua hak dilindungi.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-white transition-colors">Ke atas</a>
          <a href="/test" className="hover:text-white transition-colors">Cek Backend</a>
        </div>
      </div>
    </footer>
  )
}
