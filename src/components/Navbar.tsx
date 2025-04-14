
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white bg-opacity-95 shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary-foreground">
            <span className="font-playfair">Bella</span> 
            <span className="text-accent font-playfair">Beauty</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-accent transition-colors">
            Home
          </a>
          <a href="#services" className="text-foreground hover:text-accent transition-colors">
            Serviços
          </a>
          <a href="#team" className="text-foreground hover:text-accent transition-colors">
            Equipe
          </a>
          <a href="#gallery" className="text-foreground hover:text-accent transition-colors">
            Galeria
          </a>
          <a href="#contact" className="text-foreground hover:text-accent transition-colors">
            Contato
          </a>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-foreground hover:text-accent py-2 transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-accent py-2 transition-colors">
              Serviços
            </a>
            <a href="#team" className="text-foreground hover:text-accent py-2 transition-colors">
              Equipe
            </a>
            <a href="#gallery" className="text-foreground hover:text-accent py-2 transition-colors">
              Galeria
            </a>
            <a href="#contact" className="text-foreground hover:text-accent py-2 transition-colors">
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
