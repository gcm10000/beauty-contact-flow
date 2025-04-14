
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, WhatsApp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create formatted message
    const formattedMessage = `
*Contato do Site - Bella Beauty*
👤 *Nome*: ${formData.name}
📧 *Email*: ${formData.email}
📞 *Telefone*: ${formData.phone}
💇 *Serviço*: ${formData.service}
💬 *Mensagem*: ${formData.message}
    `.trim();
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(formattedMessage);
    
    // WhatsApp phone number (replace with actual phone number)
    const phoneNumber = "5511999999999";
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Show success toast
    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp para finalizar o envio.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Estamos ansiosos para atendê-lo e transformar seu visual. Entre em contato para agendar seu horário.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">contato@bellabeleza.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">Endereço</h4>
                  <p className="text-muted-foreground">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Segunda a Sexta:</span> 9h às 20h</p>
                <p><span className="font-medium">Sábado:</span> 9h às 18h</p>
                <p><span className="font-medium">Domingo:</span> Fechado</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Corte de Cabelo">Corte de Cabelo</option>
                  <option value="Coloração">Coloração</option>
                  <option value="Tratamento Capilar">Tratamento Capilar</option>
                  <option value="Maquiagem">Maquiagem</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detalhes do seu pedido ou perguntas..."
                  className="min-h-32"
                />
              </div>
              
              <Button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90">
                <WhatsApp className="h-5 w-5" />
                Enviar via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
