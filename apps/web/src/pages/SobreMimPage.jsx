import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SkillBadge from '@/components/SkillBadge.jsx';
import myPhoto from '@/assets/images/eu.png';


function SobreMimPage() {
  const skills = {
    languages: ['Python (Pandas, NumPy, Scikit-learn)', 'Java', 'C'],
    databases: ['MySQL', 'SQL'],
    ml_ai: ['PyTorch', 'Deep Learning', 'EDA'],
    devops: ['Docker', 'Git'],
    idiomas: ['Inglês (Intermediário: escrita, leitura, conversação)', 'Espanhol (Intermediário: escrita, leitura, conversação)'],
    frontend: ['React', 'Vite'],
    backend: ['Python', 'FastAPI'],
    ia_visao: ['YOLOv8', 'Ultralytics', 'OpenCV'],
    db_new: ['MySQL 8.0'],
    infra: ['Docker', 'Docker Compose']
  };

  return (
    <>
      <Helmet>
        <title>{`Sobre mim - Julio Roberto`}</title>
        <meta name="description" content="Conheça mais sobre a trajetória profissional, habilidades técnicas e experiência de Julio Roberto como desenvolvedor." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Biography Section */}
            <section className="mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={myPhoto} 
                    alt="Julio Roberto portrait"
                    className="w-full rounded-2xl shadow-lg object-cover aspect-square md:aspect-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h1 
                    className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Sobre mim
                  </h1>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Olá, sou o Julio Roberto. Sou desenvolvedor e busco minha primeira oportunidade de estágio para contribuir em projetos inovadores e aprimorar meu aprendizado.
                    </p>
                    <p>
                      Sou apaixonado por resolver problemas através da tecnologia, seja estruturando a lógica de um software ou analisando dados para extrair insights valiosos. Tenho expandido meu repertório técnico combinando boas práticas de desenvolvimento com o estudo de algoritmos de Machine Learning e soluções baseadas em IA.
                    </p>
                    <p>
                      Estou sempre em busca de novos desafios que me permitam aplicar meus conhecimentos, aprender com profissionais experientes e contribuir para projetos inovadores.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-semibold text-foreground">Habilidades técnicas</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-3">Linguagens de Programação</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-3">Machine Learning & IA</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.ml_ai.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-3">Banco de Dados</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-3">DevOps & Versionamento</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.devops.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-3">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-3">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-3">IA & Visão Computacional</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.ia_visao.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-3">Banco de Dados (Relacional)</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.db_new.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-3">Infraestrutura</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.infra.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} />
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="text-xl font-medium text-foreground mb-3">Idiomas</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.idiomas.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Education Section */}
            <section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-semibold text-foreground">Formação</h2>
                
                <div className="bg-card rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Ensino Superior em Tecnologia
                  </h3>
                  <p className="text-muted-foreground mb-2">Em andamento</p>
                  <p className="text-card-foreground/80 leading-relaxed">
                    Foco em desenvolvimento de software, análise de dados e inteligência artificial.
                  </p>
                </div>
              </motion.div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default SobreMimPage;