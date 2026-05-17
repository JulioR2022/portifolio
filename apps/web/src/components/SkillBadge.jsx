import React from 'react';
import { Badge } from '@/components/ui/badge';

function SkillBadge({ skill, variant = "secondary" }) {
  return (
    <Badge 
      variant={variant}
      className="px-3 py-1 text-sm font-medium transition-all duration-200 hover:scale-105"
    >
      {skill}
    </Badge>
  );
}

export default SkillBadge;