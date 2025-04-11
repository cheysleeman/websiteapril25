import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Book, Video } from 'lucide-react';

const resources = [
  {
    title: "Website Planning Guide",
    description: "A comprehensive checklist for planning your next website project.",
    icon: <FileText className="w-6 h-6" />,
    type: "PDF Guide",
    category: "Web Development"
  },
  {
    title: "Brand Strategy Template",
    description: "Define your brand strategy with this fillable workbook.",
    icon: <Book className="w-6 h-6" />,
    type: "Template",
    category: "Branding"
  },
  {
    title: "Systems Audit Worksheet",
    description: "Evaluate and optimize your business systems.",
    icon: <FileText className="w-6 h-6" />,
    type: "Worksheet",
    category: "Systems"
  },
  {
    title: "Podcast Setup Guide",
    description: "Essential equipment and setup tips for quality audio recording.",
    icon: <Video className="w-6 h-6" />,
    type: "Video Guide",
    category: "Audio"
  }
];

function Resources() {
  return (
    <div className="pt-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Resources</h1>
          <p className="text-lg text-neutral-900/80 max-w-2xl mb-12">
            Free tools and guides to help you build a stronger business. No email required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg"
            >
              <div className="text-primary mb-4">
                {resource.icon}
              </div>
              <h2 className="font-display text-xl font-bold text-neutral-900 mb-2">
                {resource.title}
              </h2>
              <p className="text-neutral-900/80 mb-4">
                {resource.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-900/60">{resource.type}</span>
                <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-white rounded-lg"
        >
          <h2 className="font-display text-2xl font-bold text-neutral-900 mb-4">
            Need Custom Resources?
          </h2>
          <p className="text-neutral-900/80 mb-6">
            I create custom templates and guides for businesses. Let's talk about what you need.
          </p>
          <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Resources;