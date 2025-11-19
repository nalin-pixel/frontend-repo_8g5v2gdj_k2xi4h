export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-4">Tentang Saya</h2>
            <p className="text-blue-100/90 leading-relaxed">
              Tulis deskripsi singkat tentang diri Anda di sini. Ceritakan pengalaman, minat,
              dan fokus utama Anda dalam mengembangkan produk digital. Jelaskan nilai yang Anda bawa
              ke tim dan proyek yang Anda kerjakan.
            </p>
            <p className="text-blue-100/90 leading-relaxed mt-4">
              Misalnya: "Saya berpengalaman dalam React, Node.js, dan desain sistem. Saya suka membangun
              pengalaman pengguna yang halus dan performa tinggi, dengan praktik terbaik dan testing."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Frontend", "Backend", "UI/UX", "DevOps"].map((label) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <p className="text-blue-300 text-sm">Fokus</p>
                <p className="text-white font-semibold text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
