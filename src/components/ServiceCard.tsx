import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-neutral-100 rounded-lg hover:shadow-lg transition-shadow"
    >
      <div className="mb-4 text-primary">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
        {title}
      </h3>
      <p className="text-neutral-900/80">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;