
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Equipe especializada em tecnologia",
    "Mais de 100 projetos entregues",
    "Suporte técnico 24/7",
    "Metodologias ágeis e entregas rápidas",
    "Foco na satisfação do cliente",
    "Soluções personalizadas para cada negócio"
  ];
  
  return (
    <section id="sobre" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1470" 
                alt="Nossa equipe" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-primary/10 rounded-lg -z-10"></div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a WeDesc</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-700 text-lg mb-6">
              Desde 2015, a WeDesc tem desenvolvido soluções tecnológicas inovadoras que ajudam empresas de todos os portes a transformarem seus negócios digitalmente.
            </p>
            <p className="text-gray-700 mb-8">
              Nossa missão é proporcionar tecnologia acessível e de qualidade, com foco em resultados mensuráveis para nossos clientes. Trabalhamos com metodologias ágeis e processos transparentes, garantindo entregas eficientes e comunicação clara.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-primary mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="btn-primary">Conheça nossa história</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
