import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, TrendingUp, CheckCircle } from 'lucide-react';
import { GoogleLogo } from '@/components/google-logo'; // Import the Google logo component

const googleReviewRating = 4.7; // Static rating
const googleReviewCount = 81; // Static count
const googleReviewLink = "https://www.google.com/search?q=google+reviews+placeholder#lrd=0x0:0x0,1"; // Placeholder link - REPLACE with actual link

const internalMetrics = [
  { value: "9.6/10", label: "Satisfação Geral", icon: Star },
  { value: "99%", label: "Entregas no Prazo", icon: CheckCircle },
  { value: "55K+", label: "Viagens Concluídas", icon: TrendingUp },
];

export function Reviews() {
  // Function to generate star icons based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
    }
    // In this simplified version, we'll just use full stars for simplicity
    // Add half-star logic if needed
    // if (halfStar) {
    //   stars.push(<StarHalf key="half" className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
    // }
     for (let i = 0; i < 5 - fullStars; i++) { // Fill remaining with empty or full based on rounding
        if (i === 0 && rating % 1 >= 0.25) { // Simple rounding for visual half-star effect
             stars.push(<Star key={`half-ish-${i}`} className="h-5 w-5 text-yellow-400 fill-yellow-400 opacity-70" />); // Visually represent near-half
        } else {
             stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
        }
    }

    return stars.slice(0, 5); // Ensure only 5 stars max
  };


  return (
    <section id="avaliacoes" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Nossa Reputação</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Google Reviews Card */}
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                 <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
                   <GoogleLogo className="h-6 w-6" />
                   Avaliações no Google
                 </CardTitle>
                 <a href={googleReviewLink} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Ver todas</a>
              </div>
               <CardDescription className="text-lg">Baseado em feedback real de nossos clientes.</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
               <div className="flex items-center justify-center mb-3">
                 <span className="text-5xl font-bold mr-2 text-foreground">{googleReviewRating.toFixed(1)}</span>
                 <div className="flex flex-col items-start">
                    <div className="flex">
                        {renderStars(googleReviewRating)}
                    </div>
                    <span className="text-sm text-muted-foreground">({googleReviewCount} avaliações)</span>
                 </div>
               </div>

              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4" asChild>
                <a href={googleReviewLink} target="_blank" rel="noopener noreferrer">
                  Leia Nossas Avaliações no Google
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Internal Metrics Card */}
          <Card className="shadow-lg">
             <CardHeader>
                 <CardTitle className="text-2xl font-semibold text-primary">Nossas Métricas</CardTitle>
                 <CardDescription className="text-lg">Compromisso com a excelência em cada entrega.</CardDescription>
             </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {internalMetrics.map((metric, index) => (
                  <div key={index} className="flex flex-col items-center">
                     <div className="bg-accent text-accent-foreground rounded-full p-3 mb-2 inline-block">
                        <metric.icon className="h-6 w-6" />
                     </div>
                    <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
