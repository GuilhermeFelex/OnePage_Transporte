import { Header } from '@/components/sections/header';
import { AboutUs } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Reviews } from '@/components/sections/reviews';
import { AvailableRoutes } from '@/components/sections/available-routes';
import { QuoteForm } from '@/components/sections/quote-form';
import { Clients } from '@/components/sections/clients';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <AboutUs />
      <Services />
      <Reviews />
      <AvailableRoutes />
      <QuoteForm />
      <Clients /> {/* Optional: Remove if no client logos */}
      <Footer />
    </main>
  );
}
