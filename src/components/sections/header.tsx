"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react'; // Import Menu icon for mobile trigger

export function Header() {
  return (
    <header id="inicio" className="relative h-[60vh] md:h-[80vh] text-white flex flex-col">
      {/* Background Image */}
      <Image
        src="https://picsum.photos/1600/900"
        alt="Caminhões TransnovaG"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority // Add priority to LCP image
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
            {/* Removed Contato link as it duplicates footer info and quote form purpose */}
            {/* <a href="#contato" className="hover:text-accent transition-colors">Contato</a> */}
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" size="sm" asChild>
              <a href="#cotacao">Solicitar Cotação</a>
            </Button>
          </nav>

           {/* Mobile Menu Trigger using Sheet */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden text-white focus:outline-none">
               <Button variant="ghost" size="icon">
                 <Menu className="h-6 w-6" />
                 <span className="sr-only">Abrir Menu</span>
               </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground border-l border-primary-foreground/20 w-[250px] sm:w-[300px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="flex items-center gap-2 text-xl font-bold text-primary-foreground">
                   <Truck className="h-7 w-7 text-accent" />
                   TransnovaG
                </SheetTitle>
                {/* Optional Description */}
                {/* <SheetDescription>Navegação</SheetDescription> */}
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                <SheetClose asChild>
                  <a href="#sobre" className="hover:text-accent transition-colors py-2">Sobre Nós</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#servicos" className="hover:text-accent transition-colors py-2">Serviços</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#avaliacoes" className="hover:text-accent transition-colors py-2">Avaliações</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#rotas" className="hover:text-accent transition-colors py-2">Rotas</a>
                </SheetClose>
                 <SheetClose asChild>
                   <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full mt-4" size="sm" asChild>
                     <a href="#cotacao">Solicitar Cotação</a>
                   </Button>
                 </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Hero Content */}
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Transporte de Carga Grande com Eficiência e Segurança
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
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
          <p className="text-lg font-semibold">+55K VIAGENS FEITAS COM SUCESSO</p>
        </div>
      </div>
       {/* Responsive height adjustments */}
       <style jsx>{`
        @media (max-width: 767px) {
            header { height: 70vh; }
        }
      `}</style>
    </header>
  );
}
