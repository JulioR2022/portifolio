import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SocialLink from '@/components/SocialLink.jsx';

function ContatoPage() {
  return (
    <>
      <Helmet>
        <title>{`Contato - Julio Roberto`}</title>
        <meta name="description" content="Entre em contato para discutir projetos, oportunidades de colaboração." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h1 
                className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance"
                style={{ letterSpacing: '-0.02em' }}
              >
                Entre em contato
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tem um projeto em mente ou uma oportunidade? Vamos conversar!
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <Card className="shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Informações de contato</CardTitle>
                    <CardDescription className="text-base">
                      Sinta-se à vontade para me contatar através dos canais abaixo
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8 pt-4">
                    <div className="flex flex-col items-center justify-center gap-6">
                      <a 
                        href="mailto:dev@example.com" 
                        className="flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors duration-200"
                      >
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        juliobsb792@gmail.com
                      </a>
                    </div>

                    <div className="pt-6 border-t flex justify-center gap-4">
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
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContatoPage;