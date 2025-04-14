
import React from 'react';
import { Instagram, Facebook, Twitter, Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-accent mr-2"><Scissors /></span>
              Bella Beauty
            </h3>
            <p className="text-gray-400 mb-4">
              Transformando belezas e realçando a sua melhor versão desde 2010.
              Especialistas em cuidados capilares, tratamentos e maquiagem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-accent transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-accent transition-colors">Equipe</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-accent transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-accent transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">Cortes & Estilização</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">Coloração</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">Tratamentos Capilares</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">Maquiagem</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">Cuidados com as Unhas</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Av. Paulista, 1000 - Bela Vista</p>
              <p>São Paulo - SP, 01310-100</p>
              <p>Telefone: (11) 99999-9999</p>
              <p>Email: contato@bellabeleza.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Bella Beauty. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
