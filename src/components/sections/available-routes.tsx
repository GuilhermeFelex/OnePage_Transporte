import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Box, Calendar } from 'lucide-react';

interface Route {
  origin: string;
  destination: string;
  space: string;
  forecast: string;
}

// Static data for available routes
const availableRoutes: Route[] = [
  {
    origin: "São Paulo (SP)",
    destination: "Recife (PE)",
    space: "10m³ / 5 Ton",
    forecast: "Próxima Semana"
  },
  {
    origin: "Curitiba (PR)",
    destination: "Belo Horizonte (MG)",
    space: "Caminhão Completo",
    forecast: "15/07/2024"
  },
   {
    origin: "Rio de Janeiro (RJ)",
    destination: "Porto Alegre (RS)",
    space: "Espaço parcial (aprox. 15m³)",
    forecast: "Final de Julho"
  },
];

export function AvailableRoutes() {
  return (
    <section id="rotas" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Oportunidades de Frete de Retorno</h2>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Aproveite nossas rotas com espaço disponível para otimizar seus custos de transporte. Confira algumas oportunidades atuais:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {availableRoutes.map((route, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent"/> Rota Disponível
                </CardTitle>
                 <CardDescription>De {route.origin} para {route.destination}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                 <div className="flex items-center gap-2 text-foreground">
                     <MapPin className="h-4 w-4 text-muted-foreground" />
                     <span><strong>Origem:</strong> {route.origin}</span>
                 </div>
                 <div className="flex items-center gap-2 text-foreground">
                     <MapPin className="h-4 w-4 text-muted-foreground" />
                     <span><strong>Destino:</strong> {route.destination}</span>
                 </div>
                 <div className="flex items-center gap-2 text-foreground">
                     <Box className="h-4 w-4 text-muted-foreground" />
                     <span><strong>Espaço:</strong> {route.space}</span>
                 </div>
                 <div className="flex items-center gap-2 text-foreground">
                     <Calendar className="h-4 w-4 text-muted-foreground" />
                     <span><strong>Previsão:</strong> {route.forecast}</span>
                 </div>

              </CardContent>
               <div className="p-6 pt-0 mt-auto">
                   <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                     <a href="#cotacao">Consultar Detalhes</a>
                   </Button>
               </div>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
             <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
               <a href="#cotacao">
                 Não encontrou sua rota? Solicite uma cotação!
               </a>
             </Button>
         </div>
      </div>
    </section>
  );
}
