export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-white/10 border border-white/10 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-white/10 border border-white/10 rounded-lg"
        />

        <textarea
          placeholder="Message"
          className="w-full p-3 bg-white/10 border border-white/10 rounded-lg h-32"
        ></textarea>

        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold">
          Send Message
        </button>
      </form>
    </section>
  );
}
