import React from 'react';
import { Button } from '@/components/ui/button';

function SocialLink({ href, icon: Icon, label }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      asChild
      className="transition-all duration-200 hover:scale-110 hover:text-primary"
    >
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon className="h-5 w-5" />
      </a>
    </Button>
  );
}

export default SocialLink;