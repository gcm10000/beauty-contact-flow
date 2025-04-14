
import React from 'react';
import { Scissors, Sparkles, Paintbrush, Palette } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Scissors className="h-10 w-10 text-accent" />,
    title: "Cortes & Estilização",
    description: "Cortes modernos e estilização de cabelo que valorizam sua beleza natural e estilo pessoal."
  },
  {
    icon: <Palette className="h-10 w-10 text-accent" />,
    title: "Coloração",
    description: "Transforme seu visual com nossas técnicas de coloração exclusivas, desde tons naturais até cores vibrantes."
  },
  {
    icon: <Sparkles className="h-10 w-10 text-accent" />,
    title: "Tratamentos",
    description: "Recupere a vitalidade dos seus cabelos com nossos tratamentos especializados para todos os tipos."
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-accent" />,
    title: "Maquiagem",
    description: "Realce sua beleza com maquiagens para qualquer ocasião, desde o natural ao glamouroso."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Oferecemos uma variedade de serviços premium para realçar sua beleza natural e garantir uma experiência incrível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border border-border/50 bg-white">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
