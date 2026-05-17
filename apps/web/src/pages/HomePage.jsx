import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Julio Roberto - Desenvolvedor Full Stack</title>
        <meta name="description" content="Portfolio profissional de Julio Roberto, desenvolvedor full stack especializado em React, Node.js e tecnologias modernas." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1644995520656-e9b9a807ffbe" 
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto space-y-6"
              >
                <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">
                  Olá, eu sou Julio Roberto
                </h2>
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Desenvolvedor full stack criando experiências digitais excepcionais
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Especializado em React, Node.js e tecnologias modernas para construir aplicações web escaláveis e performáticas
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    asChild 
                    size="lg"
                    className="transition-all duration-200 active:scale-[0.98]"
                  >
                    <Link to="/projetos">
                      Explorar projetos
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="transition-all duration-200 active:scale-[0.98]"
                  >
                    <Link to="/contato">
                      Entre em contato
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;