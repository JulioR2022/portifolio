import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import imgMonitoramento1 from '@/assets/images/image1.png';
import imgMonitoramento2 from '@/assets/images/image2.png';
import imgMonitoramento3 from '@/assets/images/image3.png';
import imgMiniHeroku1 from '@/assets/images/image4.png';
import imgMiniHeroku2 from '@/assets/images/image5.png';
import imgMiniHeroku3 from '@/assets/images/image6.png';
import imgMiniHeroku4 from '@/assets/images/image7.png';


function ProjetosPage() {
  const projects = [
    {
      title: 'Sistema de Monitoramento com IA',
      description: 'Sistema fullstack abrangente para detecção de objetos com IA. Permite o upload de imagens no frontend, processamento via API REST no backend utilizando o modelo YOLOv8, armazenamento dos resultados em banco de dados e retorno da imagem processada com as detecções (bounding boxes) para visualização do usuário. Link do repositorio github: https://github.com/JulioR2022/monitoramento',
      features: [
        'Detecção Avançada: Identificação e contagem de objetos utilizando YOLOv8.',
        'Filtro de Classes: Seleção personalizada de quais objetos detectar.',
        'Ajuste de Confiança/Threshold: Controle deslizante para reduzir falsos positivos.',
        'Dashboard de Estatísticas: Painel em tempo real com imagens processadas e ranking de objetos.',
        'Histórico Persistente: Tabela completa de histórico de predições armazenada em MySQL.',
        'Gerenciamento de Dados: Opções de exportação para CSV e limpeza do banco de dados.'
      ],
      images: [
        imgMonitoramento1,
        imgMonitoramento2,
        imgMonitoramento3
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
    ,
    {
      title: 'Mini-Heroku (PaaS)',
      description: 'Plataforma como Serviço (PaaS) inspirada na arquitetura do Heroku. O sistema possui uma arquitetura baseada em micro-serviços com filas assíncronas no Redis para deploy e orquestração de containers Docker, além de streaming de logs em tempo real via WebSockets. Link do repositorio github: https://github.com/JulioR2022/mini-heroku',
      features: [
        'Processamento Assíncrono: Separação de tarefas em workers dedicados (build-worker para deploys e fast-worker para stop/delete) consumindo filas do Redis.',
        'Logs em Tempo Real: Transmissão de logs de build e execução via WebSockets + Redis Pub/Sub com histórico temporário mantido por 1 hora.',
        'Deploy Automatizado: Clonagem de repositórios Git, build de imagens Docker e alocação dinâmica de portas do Host.',
        'Gerenciamento de Recursos: Configuração de variáveis de ambiente pela UI e alocação de CPU/RAM de acordo com o plano do usuário (Free/Premium).',
        'Autenticação & Modelagem Relacional: Sistema de login com JWT e ORM SQLAlchemy em PostgreSQL para usuários, projetos e histórico de deployments.'
      ],
      images: [
        imgMiniHeroku1,
        imgMiniHeroku2,
        imgMiniHeroku3,
        imgMiniHeroku4
      ],
      technologies: [
        'Frontend (React + TypeScript + Vite)',
        'Backend (Python + FastAPI + WebSockets)',
        'Filas & Mensageria (Redis + Pub/Sub)',
        'Orquestração (Docker SDK + GitPython)',
        'Banco de Dados (PostgreSQL + SQLAlchemy)',
        'Segurança (JWT + Bcrypt)'
      ],
      liveLink: 'https://github.com/JulioR2022/mini-heroku'
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