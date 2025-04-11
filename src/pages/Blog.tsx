import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    title: "Designing for Neurodiversity: A Guide for Small Businesses",
    excerpt: "How to make your digital presence more accessible and inclusive for neurodivergent users.",
    date: "March 15, 2025",
    category: "Accessibility",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Ethics of Modern Web Design",
    excerpt: "Exploring the intersection of beautiful design and ethical technology practices.",
    date: "March 10, 2025",
    category: "Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Streamlining Your Business Systems",
    excerpt: "Simple steps to automate and optimize your daily operations without losing the human touch.",
    date: "March 5, 2025",
    category: "Systems",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  }
];

function Blog() {
  return (
    <div className="pt-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Blog</h1>
          <p className="text-lg text-neutral-900/80 max-w-2xl mb-12">
            Thoughts on design, technology, and building ethical businesses in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden"
            >
              <div className="aspect-[16/9] bg-neutral-200">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-neutral-900/60">{post.date}</span>
                  <span className="px-2 py-1 bg-neutral-100 rounded-full text-xs text-neutral-900">
                    {post.category}
                  </span>
                </div>
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-2">{post.title}</h2>
                <p className="text-neutral-900/80 mb-4">{post.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                  Read More
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;