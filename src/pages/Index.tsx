import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import ForWho from "@/components/sections/ForWho";
import Integration from "@/components/sections/Integration";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Problems />
      <Solution />
      <HowItWorks />
      <Features />
      <ForWho />
      <Integration />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
