import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Eco-friendly Brand Redesign",
    description: "Complete brand overhaul and e-commerce platform for a sustainable fashion company.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    tags: ["Branding", "Web Development", "E-commerce"]
  },
  {
    title: "Podcast Production Suite",
    description: "Custom audio workflow and website for an independent podcast network.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
    tags: ["Audio Tech", "Web Development"]
  },
  {
    title: "Business Systems Overhaul",
    description: "Streamlined operations and customer management for a growing consultancy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Systems Consulting", "Automation"]
  }
];

function Portfolio() {
  return (
    <div className="pt-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Selected Work</h1>
          <p className="text-lg text-neutral-900/80 max-w-2xl mb-12">
            A collection of projects where design, technology, and strategy come together to create meaningful impact.
          </p>
        </motion.div>

        <div className="grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="aspect-[4/3] bg-neutral-200 rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-neutral-900 mb-4">{project.title}</h2>
                <p className="text-neutral-900/80 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-neutral-200 rounded-full text-sm text-neutral-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                  View Case Study
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;