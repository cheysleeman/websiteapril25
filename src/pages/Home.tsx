import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Palette, Settings2, Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="px-6 pt-32 pb-16 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
            Web. Strategy.<br />Systems. For People.
          </h1>
          <p className="text-lg md:text-xl text-neutral-900/80 max-w-2xl mb-8">
            Helping small businesses scale with ethical tech, smart systems, and bold identity design. No jargon, no fluff—just real solutions for real growth.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Book a Free Consult
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-12">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<Code2 className="w-6 h-6" />}
              title="Web Development"
              description="Fast, accessible, and beautiful websites built with modern tech and ethical practices."
            />
            <ServiceCard 
              icon={<Palette className="w-6 h-6" />}
              title="Brand Design"
              description="Strategic identity design that captures your essence and connects with your audience."
            />
            <ServiceCard 
              icon={<Settings2 className="w-6 h-6" />}
              title="Systems Consulting"
              description="Streamline your operations with smart, integrated solutions that scale with you."
            />
            <ServiceCard 
              icon={<Mic2 className="w-6 h-6" />}
              title="Audio Tech"
              description="Professional audio solutions for podcasts, events, and digital content."
            />
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-12">Selected Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[4/3] bg-neutral-200 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=800&q=80" 
                alt="Project preview" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[4/3] bg-neutral-200 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Project preview" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;