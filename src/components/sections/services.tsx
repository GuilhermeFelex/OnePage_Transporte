import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Package, Clock, AlertTriangle, Truck } from 'lucide-react'; // Added Truck icon

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Package,
    title: "Cargas Gerais",
    description: "Transporte eficiente e seguro para diversos tipos de mercadorias não perecíveis e sem exigências especiais."
  },
  {
    icon: Clock,
    title: "Cargas Urgentes",
    description: "Agilidade e prioridade para suas entregas com prazo apertado, garantindo a chegada no tempo certo."
  },
  {
    icon: AlertTriangle,
    title: "Cargas Perigosas/Especiais",
    description: "Manuseio e transporte especializado para cargas que exigem cuidados redobrados e conformidade com normas."
  },
   {
    icon: Truck, // Added another service block
    title: "Carga Lotação (FTL)",
    description: "Oferecemos caminhões dedicados exclusivamente para sua carga, garantindo maior segurança e agilidade."
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Nossos Serviços</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center">
                 <div className="bg-primary text-primary-foreground rounded-full p-3 mb-4 inline-block">
                    <service.icon className="h-8 w-8" />
                 </div>
                <CardTitle className="text-xl font-semibold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-md text-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
