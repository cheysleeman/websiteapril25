import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Zap, Users } from 'lucide-react';

function About() {
  return (
    <div className="pt-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Hey, I'm Chey
            </h1>
            <div className="prose prose-lg text-neutral-900/80">
              <p className="mb-6">
                I'm a designer, developer, and systems thinker who believes in using technology ethically to help small businesses thrive.
              </p>
              <p className="mb-6">
                With over a decade of experience in digital design and development, I've learned that the best solutions come from understanding people first, technology second.
              </p>
              <p>
                When I'm not crafting websites or streamlining systems, you'll find me recording music, tending to my plant collection, or advocating for neurodiversity in tech.
              </p>
            </div>
          </div>
          <div className="aspect-[3/4] bg-neutral-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
              alt="Chey Sleeman portrait" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <h2 className="font-display text-3xl font-bold text-neutral-900 mb-12">Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg">
              <Heart className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">Human-First</h3>
              <p className="text-neutral-900/80">Technology should serve people, not the other way around.</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <Coffee className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">Anti-Hustle</h3>
              <p className="text-neutral-900/80">Sustainable growth over burnout culture.</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">Accessibility</h3>
              <p className="text-neutral-900/80">Design that works for everyone, no exceptions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">Community</h3>
              <p className="text-neutral-900/80">Building connections that matter.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;