import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

function ProjectCard({ project, index }) {
  const hasMultipleImages = project.images && project.images.length > 0;
  const displayImage = project.image || (hasMultipleImages ? project.images[0] : '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-56 overflow-hidden bg-muted group">
          {hasMultipleImages ? (
            <Carousel className="w-full h-full" opts={{ loop: true }}>
              <CarouselContent>
                {project.images.map((img, idx) => (
                  <CarouselItem key={idx} className="h-56">
                    <img 
                      src={img} 
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </div>
            </Carousel>
          ) : (
            <img 
              src={displayImage} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">{project.title}</CardTitle>
          <CardDescription className="text-base leading-relaxed mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 space-y-6">
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Funcionalidades</h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => {
                  const [title, ...descParts] = feature.split(':');
                  const desc = descParts.join(':');
                  return (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>
                        <strong className="text-foreground font-medium">{title}:</strong>{desc}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Tecnologias</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs py-1 px-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-auto pt-6 border-t">
          <Button 
            asChild 
            className="w-full transition-all duration-200 active:scale-[0.98]"
            size="lg"
          >
            <a href={project.link || project.liveLink} target="_blank" rel="noopener noreferrer">
              Acessar Aplicação
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;