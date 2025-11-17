export default function Services() {
  return (
    <section id="services" className="py-24 bg-white/5 max-w-full px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-white/10 rounded-xl border border-white/10">
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-gray-300">Modern and professional websites.</p>
        </div>

        <div className="p-6 bg-white/10 rounded-xl border border-white/10">
          <h3 className="text-xl font-bold mb-2">UI Design</h3>
          <p className="text-gray-300">Clean, modern and user-friendly UI.</p>
        </div>

        <div className="p-6 bg-white/10 rounded-xl border border-white/10">
          <h3 className="text-xl font-bold mb-2">Animations</h3>
          <p className="text-gray-300">Smooth Framer Motion animations.</p>
        </div>
      </div>
    </section>
  );
}
