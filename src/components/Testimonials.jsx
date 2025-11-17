import React from 'react'
import { motion } from 'framer-motion'

const notes = [
  { name: 'Client A', msg: 'Great work and fast delivery.' },
  { name: 'Client B', msg: 'Very professional and organised.' }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-r from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Testimonials</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((t) => (
            <motion.blockquote key={t.name} whileHover={{ y: -4 }} className="p-6 bg-white rounded-xl shadow">
              <p className="text-sm">“{t.msg}”</p>
              <footer className="mt-3 text-xs">— {t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}