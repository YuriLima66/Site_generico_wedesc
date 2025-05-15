
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portal Empresarial XYZ",
    category: "Desenvolvimento Web",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=1470",
    description: "Desenvolvimento de portal corporativo completo com área de cliente e integração de APIs."
  },
  {
    id: 2,
    title: "Aplicativo de Delivery",
    category: "Aplicativo Mobile",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=1470",
    description: "App de entrega para restaurante local com sistema de pedidos e pagamento integrado."
  },
  {
    id: 3,
    title: "Dashboard Analítico",
    category: "Software",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80&w=1470",
    description: "Sistema de análise de dados em tempo real para empresa do setor financeiro."
  },
  {
    id: 4,
    title: "E-commerce Premium",
    category: "Desenvolvimento Web",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1470",
    description: "Plataforma de vendas online com integração a múltiplos meios de pagamento."
  },
  {
    id: 5,
    title: "Sistema de Gestão ERP",
    category: "Software",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&q=80&w=1470",
    description: "Sistema completo para gestão empresarial com módulos personalizados."
  },
  {
    id: 6,
    title: "Aplicativo de Saúde",
    category: "Aplicativo Mobile",
    image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&q=80&w=1470",
    description: "Aplicativo de monitoramento de saúde com integração a dispositivos IoT."
  }
];

const CasesSection = () => {
  const [filter, setFilter] = useState("todos");
  const categories = ["todos", "Desenvolvimento Web", "Aplicativo Mobile", "Software"];
  
  const filteredProjects = filter === "todos" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="cases" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Sucesso</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Conheça alguns dos projetos que desenvolvemos e os resultados alcançados.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md ${
                  filter === category 
                    ? "bg-primary text-white" 
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setFilter(category)}
              >
                {category === "todos" ? "Todos" : category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group card-hover">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium">Ver detalhes</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
