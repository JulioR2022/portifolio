import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';

function ProjetosPage() {
  const projects = [
    {
      title: 'Sistema de Monitoramento com IA',
      description: 'Sistema fullstack abrangente para detecção de objetos com IA. Permite o upload de imagens no frontend, processamento via API REST no backend utilizando o modelo YOLOv8, armazenamento dos resultados em banco de dados e retorno da imagem processada com as detecções (bounding boxes) para visualização do usuário.',
      features: [
        'Detecção Avançada: Identificação e contagem de objetos utilizando YOLOv8.',
        'Filtro de Classes: Seleção personalizada de quais objetos detectar.',
        'Ajuste de Confiança/Threshold: Controle deslizante para reduzir falsos positivos.',
        'Dashboard de Estatísticas: Painel em tempo real com imagens processadas e ranking de objetos.',
        'Histórico Persistente: Tabela completa de histórico de predições armazenada em MySQL.',
        'Gerenciamento de Dados: Opções de exportação para CSV e limpeza do banco de dados.'
      ],
      images: [
        'https://horizons-cdn.hostinger.com/1de777e7-96a7-4c27-8a51-2b028a154b8a/a89e23f78cc4fe2ac7a6a6ca52d072bb.png',
        'https://horizons-cdn.hostinger.com/1de777e7-96a7-4c27-8a51-2b028a154b8a/a45434cf6d9a09f2efcbbffd2084e865.png',
        'https://horizons-cdn.hostinger.com/1de777e7-96a7-4c27-8a51-2b028a154b8a/0d95eb6d8ef38b0c83d6a4153bb37f19.png'
      ],
      technologies: [
        'Frontend (React + Vite)', 
        'Backend (Python + FastAPI)', 
        'IA (Ultralytics YOLOv8 + OpenCV)', 
        'Database (PostgresSQL)', 
        'Infrastructure (Docker e Docker Compose)'
      ],
      liveLink: 'https://monitoramento-frontend.onrender.com/'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`Projetos - Julio Roberto`}</title>
        <meta name="description" content="Explore meus projetos de desenvolvimento web, incluindo IA, e-commerce, dashboards, aplicativos de gerenciamento e muito mais." />
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
                Meus projetos
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Uma seleção dos meus trabalhos mais recentes e significativos
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ProjetosPage;