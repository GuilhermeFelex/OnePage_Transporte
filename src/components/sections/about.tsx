import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function AboutUs() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Sobre Nós</h2>
            <p className="text-lg mb-4 text-foreground">
              A CargaFlex é especialista em transporte rodoviário de cargas de grande porte. Com anos de experiência no mercado, garantimos a entrega segura e pontual da sua mercadoria em todo o território nacional.
            </p>
            <p className="text-lg mb-4 text-foreground">
              Nossa frota moderna e equipe qualificada estão prontas para atender às suas necessidades logísticas mais complexas, oferecendo soluções personalizadas e eficientes.
            </p>
            <p className="text-lg text-foreground">
              Valorizamos a transparência, a confiança e o compromisso com cada cliente, buscando sempre superar expectativas.
            </p>
          </div>
          <div className="flex justify-center">
             <Card className="overflow-hidden shadow-lg rounded-lg">
                <CardContent className="p-0">
                    <Image
                        src="https://picsum.photos/600/400"
                        alt="Equipe ou Sede CargaFlex"
                        width={600}
                        height={400}
                        objectFit="cover"
                        className="rounded-lg transition-transform duration-300 hover:scale-105"
                        data-ai-hint="truck logistics warehouse"
                    />
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
