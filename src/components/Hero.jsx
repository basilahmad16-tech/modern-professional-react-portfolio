import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex justify-center items-center text-center px-6">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Basil
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-300 max-w-xl mx-auto"
        >
          A passionate developer ready to build modern and powerful projects.
        </motion.p>
      </div>
    </section>
  );
}
