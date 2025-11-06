import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
          opacity: 0.95
        }}
      />
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }} 
      />
      
      <div className="container mx-auto px-4 z-10 text-center text-white animate-fade-in py-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Не планируй.<br />Путешествуй.<br />Будь как дома.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Строит путешествие как твой идеальный плейлист
        </p>
        <Button 
          size="lg" 
          className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-secondary hover:bg-secondary/90 animate-scale-in"
        >
          Создать путешествие <Icon name="ArrowRight" className="ml-2" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
