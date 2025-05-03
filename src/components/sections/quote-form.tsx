"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

// Define Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos." }),
  origin: z.string().min(2, { message: "Origem é obrigatória." }),
  destination: z.string().min(2, { message: "Destino é obrigatório." }),
  dimensions: z.string().optional(), // Made optional, user might use weight
  weight: z.string().optional(), // Made optional, user might use dimensions
  cargoType: z.string().min(3, { message: "Descreva brevemente a carga." }),
  deliveryType: z.enum(['normal', 'urgente'], { required_error: "Selecione o tipo de entrega." }),
});

type FormData = z.infer<typeof formSchema>;

// Email configuration
const recipientEmail = "orcamentos@transnovag.com.br"; // REPLACE with your actual email
const emailSubject = "Solicitação de Cotação de Frete - TransnovaG";

export function QuoteForm() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      origin: "",
      destination: "",
      dimensions: "",
      weight: "",
      cargoType: "",
      deliveryType: "normal",
    },
  });

 const onSubmit: SubmitHandler<FormData> = (data) => {
    // Basic check if either dimensions or weight is filled
    if (!data.dimensions && !data.weight) {
        form.setError("dimensions", { type: "manual", message: "Informe Dimensões (m³) ou Peso (Kg)." });
        form.setError("weight", { type: "manual", message: "Informe Dimensões (m³) ou Peso (Kg)." });
        toast({
            title: "Erro de Validação",
            description: "Por favor, informe as Dimensões (m³) ou o Peso (Kg) da carga.",
            variant: "destructive",
         });
        return; // Stop submission
    } else {
         // Clear errors if validation passes
        form.clearErrors("dimensions");
        form.clearErrors("weight");
    }

    // Construct mailto link body
    const emailBody = `
Solicitação de Cotação de Frete:
-----------------------------------
Nome: ${data.name}
Email: ${data.email}
Telefone/WhatsApp: ${data.phone}
-----------------------------------
Origem: ${data.origin}
Destino: ${data.destination}
-----------------------------------
Dimensões (m³): ${data.dimensions || 'N/A'}
Peso (Kg): ${data.weight || 'N/A'}
Tipo/Descrição da Carga: ${data.cargoType}
Tipo de Entrega: ${data.deliveryType === 'normal' ? 'Normal' : 'Urgente'}
-----------------------------------
    `.trim(); // Trim whitespace

    // Encode subject and body for URL
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the mail client
     try {
        window.location.href = mailtoLink;
        toast({
            title: "Quase lá!",
            description: "Seu aplicativo de email foi aberto. Por favor, verifique e envie a solicitação.",
        });
        // Optionally reset form after a delay, assuming submission intent
        setTimeout(() => form.reset(), 2000);

     } catch (error) {
         console.error("Erro ao abrir link mailto:", error);
         toast({
            title: "Erro",
            description: "Não foi possível abrir seu aplicativo de email automaticamente. Por favor, envie um email para " + recipientEmail,
            variant: "destructive",
         });
     }
  };

  return (
    <section id="cotacao" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Solicite sua Cotação</CardTitle>
            <CardDescription className="text-lg mt-2">
              Preencha o formulário abaixo e nossa equipe entrará em contato com um orçamento personalizado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-4">
                   <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo *</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                   <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone/WhatsApp *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(XX) XXXXX-XXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>

                {/* Origin / Destination */}
                 <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="origin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Origem (Cidade/Estado) *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: São Paulo/SP" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="destination"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Destino (Cidade/Estado) *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Recife/PE" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                 </div>

                 {/* Cargo Details */}
                 <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="dimensions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cubagem (m³) (Opcional)</FormLabel>
                          <FormControl>
                             <Input type="number" step="0.1" placeholder="Ex: 10.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="weight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Peso (Kg) (Opcional)</FormLabel>
                           <FormControl>
                                <Input type="number" step="1" placeholder="Ex: 5000" {...field} />
                           </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                 </div>
                 {(form.formState.errors.dimensions || form.formState.errors.weight) && !form.formState.errors.dimensions?.ref && !form.formState.errors.weight?.ref && ( // Show general error if specific fields don't have focus
                    <p className="text-sm font-medium text-destructive">Informe Dimensões (m³) ou Peso (Kg).</p>
                 )}


                 <FormField
                    control={form.control}
                    name="cargoType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Carga / Descrição Breve *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Ex: Maquinário industrial, Paletes de alimentos não perecíveis" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                {/* Delivery Type */}
                <FormField
                    control={form.control}
                    name="deliveryType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Tipo de Entrega *</FormLabel>
                         <FormControl>
                           <RadioGroup
                             onValueChange={field.onChange}
                             defaultValue={field.value}
                             className="flex flex-col space-y-1 md:flex-row md:space-y-0 md:space-x-4"
                           >
                             <FormItem className="flex items-center space-x-3 space-y-0">
                               <FormControl>
                                 <RadioGroupItem value="normal" />
                               </FormControl>
                               <FormLabel className="font-normal">
                                 Normal
                               </FormLabel>
                             </FormItem>
                             <FormItem className="flex items-center space-x-3 space-y-0">
                               <FormControl>
                                 <RadioGroupItem value="urgente" />
                               </FormControl>
                               <FormLabel className="font-normal">
                                 Urgente
                               </FormLabel>
                             </FormItem>
                           </RadioGroup>
                         </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                </Button>
                 <p className="text-xs text-center text-muted-foreground mt-4">
                    Ao clicar em "Enviar Solicitação", seu aplicativo de email será aberto com os dados preenchidos. Revise e envie o email para concluir.
                 </p>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
