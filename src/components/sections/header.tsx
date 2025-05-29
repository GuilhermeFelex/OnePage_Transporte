
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, Truck, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

export function Header() {
  return (
    <header id="inicio" className="relative min-h-[70vh] md:min-h-[80vh] text-white flex flex-col">
      {/* Background Image */}
      <Image
        src="https://placehold.co/1600x900.png"
        alt="Caminhões TransnovaG"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
        className="absolute inset-0 z-0 brightness-50"
        data-ai-hint="trucks highway"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-6 flex flex-col justify-between h-full z-20 relative">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 text-2xl font-bold">
             <Truck className="h-8 w-8 text-accent" />
             <span>TransnovaG</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#sobre" className="hover:text-accent transition-colors">Sobre Nós</a>
            <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
            <a href="#avaliacoes" className="hover:text-accent transition-colors">Avaliações</a>
            <a href="#rotas" className="hover:text-accent transition-colors">Rotas</a>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" size="sm" asChild>
              <a href="#cotacao">Solicitar Cotação</a>
            </Button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background text-foreground p-6 flex flex-col">
                <SheetHeader className="mb-4">
                  <SheetTitle className="text-2xl font-bold text-primary flex items-center justify-between">
                    Menu
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" aria-label="Fechar menu">
                         <X className="h-5 w-5" />
                       </Button>
                    </SheetClose>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 flex-grow">
                  <SheetClose asChild>
                    <a href="#sobre" className="text-lg hover:text-accent transition-colors py-2 block">Sobre Nós</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#servicos" className="text-lg hover:text-accent transition-colors py-2 block">Serviços</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#avaliacoes" className="text-lg hover:text-accent transition-colors py-2 block">Avaliações</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#rotas" className="text-lg hover:text-accent transition-colors py-2 block">Rotas</a>
                  </SheetClose>
                </nav>
                <SheetClose asChild>
                  <Button variant="default" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-auto py-3 text-base" asChild>
                    <a href="#cotacao">Solicitar Cotação</a>
                  </Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Transporte de Carga Grande com Eficiência e Segurança
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl">
            Sua solução completa para fretes de grande porte em todo o Brasil.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="#cotacao">
              Solicitar Cotação Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Social Proof */}
        <div className="text-center pb-4">
          <p className="text-sm md:text-lg font-semibold">+55K VIAGENS FEITAS COM SUCESSO</p>
        </div>
      </div>
       <style jsx>{`
        @media (max-width: 767px) { /* md breakpoint */
          header {
             min-height: max(60vh, 450px); /* Ensure enough space for content on smaller viewports */
          }
          h1 {
            font-size: 2rem; /* Adjusted h1 size for mobile */
            line-height: 1.2;
          }
          .container > div:nth-child(2) p { /* Targeting hero paragraph */
            font-size: 0.95rem; /* Adjusted paragraph size for mobile */
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </header>
  );
}
