import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLink from './SocialLink.jsx';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {currentYear} Julio Roberto. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-2">
            <SocialLink 
              href="https://github.com/JulioR2022" 
              icon={Github} 
              label="GitHub"
            />
            <SocialLink 
              href="https://www.linkedin.com/in/julio-roberto-b94136301/" 
              icon={Linkedin} 
              label="LinkedIn"
            />
            <SocialLink 
              href="mailto:dev@example.com" 
              icon={Mail} 
              label="Email"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;