import React from 'react';
import Image from 'next/image';

// Placeholder logos - replace with actual client logos or remove if not applicable
const clientLogos = [
  { src: "https://via.placeholder.com/150x60?text=Cliente+A", alt: "Logo Cliente A" },
  { src: "https://via.placeholder.com/150x60?text=Cliente+B", alt: "Logo Cliente B" },
  { src: "https://via.placeholder.com/150x60?text=Cliente+C", alt: "Logo Cliente C" },
  { src: "https://via.placeholder.com/150x60?text=Cliente+D", alt: "Logo Cliente D" },
  { src: "https://via.placeholder.com/150x60?text=Cliente+E", alt: "Logo Cliente E" },
];

export function Clients() {
  return (
    <section id="clientes" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Alguns de Nossos Clientes</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clientLogos.map((logo, index) => (
            <div key={index} className="opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:filter-none">
               {/* Use next/image if logos are local, otherwise regular img */}
               {logo.src.startsWith('https') ? (
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        width={150} // Adjust as needed
                        height={60}  // Adjust as needed
                        className="object-contain" // Ensures logo fits
                    />
                ) : (
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={150} // Adjust as needed
                        height={60}  // Adjust as needed
                        objectFit="contain"
                        // data-ai-hint="client company logo" // Add hint if using placeholder generation
                    />
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
