import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Settings2, Mic2, CheckCircle2, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Fast, accessible, and beautiful websites built with modern tech and ethical practices.",
    features: [
      "Custom website design and development",
      "E-commerce solutions",
      "Web application development",
      "Performance optimization",
      "Accessibility compliance",
      "SEO optimization"
    ]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Brand Design",
    description: "Strategic identity design that captures your essence and connects with your audience.",
    features: [
      "Brand strategy development",
      "Visual identity design",
      "Logo design",
      "Brand guidelines",
      "Marketing collateral",
      "Social media templates"
    ]
  },
  {
    icon: <Settings2 className="w-8 h-8" />,
    title: "Systems Consulting",
    description: "Streamline your operations with smart, integrated solutions that scale with you.",
    features: [
      "Business systems audit",
      "Workflow optimization",
      "Tool selection and setup",
      "Automation implementation",
      "Team training",
      "Documentation creation"
    ]
  },
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: "Audio Tech",
    description: "Professional audio solutions for podcasts, events, and digital content.",
    features: [
      "Podcast setup and consulting",
      "Audio equipment selection",
      "Recording space optimization",
      "Post-production workflow",
      "Live streaming setup",
      "Audio branding"
    ]
  }
];

function Services() {
  return (
    <div className="pt-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Services
          </h1>
          <p className="text-lg text-neutral-900/80 mb-12">
            Comprehensive solutions designed to help your business thrive in the digital space. Each service is tailored to your specific needs and goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg"
            >
              <div className="text-primary mb-6">
                {service.icon}
              </div>
              <h2 className="font-display text-2xl font-bold text-neutral-900 mb-4">
                {service.title}
              </h2>
              <p className="text-neutral-900/80 mb-8">
                {service.description}
              </p>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                Learn More
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-neutral-900 text-white p-8 md:p-12 rounded-lg text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your project and see how we can work together.
          </p>
          <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Book a Free Consult
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;