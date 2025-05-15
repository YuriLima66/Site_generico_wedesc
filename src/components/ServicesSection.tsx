
import { MonitorSmartphone, Code, LineChart, Database, Lock, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="p-6 card-hover text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe size={32} />,
      title: "Desenvolvimento Web",
      description: "Sites modernos e responsivos com foco em experiência do usuário e performance."
    },
    {
      icon: <MonitorSmartphone size={32} />,
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android com interfaces intuitivas."
    },
    {
      icon: <Code size={32} />,
      title: "Desenvolvimento de Software",
      description: "Criamos sistemas personalizados que atendem às necessidades do seu negócio."
    },
    {
      icon: <LineChart size={32} />,
      title: "Marketing Digital",
      description: "Estratégias de marketing focadas em resultados para aumentar sua presença online."
    },
    {
      icon: <Database size={32} />,
      title: "Hospedagem & Suporte",
      description: "Soluções de infraestrutura e suporte técnico para manter seus sistemas operando."
    },
    {
      icon: <Lock size={32} />,
      title: "Segurança Digital",
      description: "Proteção de dados e prevenção contra ataques virtuais para seu negócio."
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Oferecemos soluções completas em tecnologia para impulsionar seu negócio no ambiente digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
