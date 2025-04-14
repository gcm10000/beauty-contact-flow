
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  {
    name: "Sofia Oliveira",
    role: "Cabeleireira Chefe",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    bio: "Especialista em técnicas modernas de corte e coloração com mais de 10 anos de experiência."
  },
  {
    name: "Lucas Santos",
    role: "Estilista",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    bio: "Especializado em penteados para eventos e transformações completas de visual."
  },
  {
    name: "Juliana Costa",
    role: "Maquiadora",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    bio: "Artista de maquiagem com formação internacional e experiência em produções editoriais."
  },
  {
    name: "André Lima",
    role: "Especialista em Tratamentos",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    bio: "Especialista em recuperação capilar com foco em tratamentos naturais e sustentáveis."
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Conheça nossos talentosos profissionais dedicados a transformar sua experiência de beleza.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <Avatar className="w-40 h-40 border-4 border-accent/20 mb-6 transition-all duration-300 group-hover:border-accent">
                <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-accent font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4 max-w-xs">{member.bio}</p>
              <div className="flex space-x-4">
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
