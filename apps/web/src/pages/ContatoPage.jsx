import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SocialLink from '@/components/SocialLink';

function ContatoPage() {
  return (
    <>
      <Helmet>
        <title>{`Contato - DevPortfolio`}</title>
        <meta name="description" content="Entre em contato para discutir projetos, oportunidades de colaboração ou apenas para dizer olá." />
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
                Tem um projeto em mente? Vamos conversar sobre como posso ajudar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Envie uma mensagem</CardTitle>
                    <CardDescription>
                      Preencha o formulário abaixo e entrarei em contato em breve
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Informações de contato</CardTitle>
                    <CardDescription>
                      Outras formas de entrar em contato
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-card-foreground">Email</p>
                        <a 
                          href="mailto:dev@example.com" 
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          juliobsb792@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-card-foreground">Telefone</p>
                        <p className="text-muted-foreground">+55 (61) 98372-0516</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-card-foreground">Localização</p>
                        <p className="text-muted-foreground">Distrito Federal, Brasil</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Redes sociais</CardTitle>
                    <CardDescription>
                      Conecte-se comigo nas redes sociais
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <SocialLink 
                        href="https://github.com" 
                        icon={Github} 
                        label="GitHub"
                      />
                      <SocialLink 
                        href="https://linkedin.com" 
                        icon={Linkedin} 
                        label="LinkedIn"
                      />
                      <SocialLink 
                        href="https://twitter.com" 
                        icon={Twitter} 
                        label="Twitter"
                      />
                      <SocialLink 
                        href="mailto:dev@example.com" 
                        icon={Mail} 
                        label="Email"
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