import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg"; // make sure your hero image is hero.jpg in src/assets

export default function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 bg-gradient-to-r from-purple-500 to-teal-400">
      <div className="md:w-1/2 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 text-white"
        >
          Hi, I'm Basil
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-100 max-w-xl"
        >
          A passionate developer ready to build modern and powerful projects.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
      >
        <img
          src={heroImg}
          alt="Hero"
          className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-xl"
        />
      </motion.div>
    </section>
  );
}
