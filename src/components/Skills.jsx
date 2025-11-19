export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 88 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'FastAPI', level: 78 },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Keahlian</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
              <div className="flex items-center justify-between">
                <p className="text-white font-medium">{s.name}</p>
                <p className="text-blue-300 text-sm">{s.level}%</p>
              </div>
              <div className="mt-3 h-2 rounded bg-white/5 overflow-hidden">
                <div className="h-full rounded bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
