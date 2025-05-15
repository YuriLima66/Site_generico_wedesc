
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA0IiBoZWlnaHQ9IjEwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiIGN4PSI1MiIgY3k9IjUyIiByPSI1MiIvPjwvZz48L3N2Zz4=')] bg-repeat opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Entre em contato conosco hoje mesmo para uma consulta gratuita e descubra como podemos ajudar a sua empresa a crescer no ambiente digital.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-gray-100">Solicitar orçamento</Button>
            <Button className="bg-transparent text-white border border-white hover:bg-white/10">
              Fale com um consultor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
