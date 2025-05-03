import React from 'react';
import { Phone, Mail, MessageCircle, Truck } from 'lucide-react'; // Using MessageCircle for WhatsApp

const phoneNumber = "+5511999998888"; // REPLACE with actual phone
const whatsappNumber = "+5511999998888"; // REPLACE with actual WhatsApp number (including country code)
const emailAddress = "contato@cargaflex.com.br"; // REPLACE with actual email
const companyName = "CargaFlex Transportes Ltda."; // REPLACE with actual company name
const cnpj = "00.000.000/0001-00"; // REPLACE with actual CNPJ if applicable

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <a href="#inicio" className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold mb-4">
              <Truck className="h-7 w-7 text-accent" />
              <span>CargaFlex</span>
            </a>
            <p className="text-sm">{companyName}</p>
            {cnpj && <p className="text-sm">CNPJ: {cnpj}</p>}
          </div>

          {/* Quick Links (Optional) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#rotas" className="hover:text-accent transition-colors">Rotas Disponíveis</a></li>
              <li><a href="#cotacao" className="hover:text-accent transition-colors">Solicitar Cotação</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Entre em Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="hover:text-accent transition-colors">{phoneNumber}</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MessageCircle className="h-4 w-4 text-accent" />
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp: {whatsappNumber}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href={`mailto:${emailAddress}`} className="hover:text-accent transition-colors">{emailAddress}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs text-primary-foreground/70">
          © {currentYear} {companyName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
