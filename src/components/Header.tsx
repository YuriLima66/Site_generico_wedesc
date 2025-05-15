
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">WeDesc</h1>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium text-gray-800 hover:text-primary transition-colors">Home</a>
          <a href="#servicos" className="font-medium text-gray-800 hover:text-primary transition-colors">Serviços</a>
          <a href="#sobre" className="font-medium text-gray-800 hover:text-primary transition-colors">Sobre</a>
          <a href="#cases" className="font-medium text-gray-800 hover:text-primary transition-colors">Cases</a>
          <a href="#contato" className="font-medium text-gray-800 hover:text-primary transition-colors">Contato</a>
          <Button className="bg-primary hover:bg-primary-dark text-white">Fale conosco</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#servicos" className="font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
            <a href="#sobre" className="font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href="#cases" className="font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Cases</a>
            <a href="#contato" className="font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contato</a>
            <Button className="bg-primary hover:bg-primary-dark text-white w-full">Fale conosco</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
