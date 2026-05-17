import React from 'react';
import { motion } from 'framer-motion';

function ExperienceItem({ title, company, period, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium">{company}</span>
          <span className="hidden sm:inline">•</span>
          <span>{period}</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default ExperienceItem;