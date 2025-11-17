export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white/10 p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-bold mb-2">Project One</h3>
          <p className="text-gray-300">A modern and clean web design.</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-bold mb-2">Project Two</h3>
          <p className="text-gray-300">Fast and responsive portfolio site.</p>
        </div>
      </div>
    </section>
  );
}
