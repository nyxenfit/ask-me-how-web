import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-tertiary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              All in One <span className="text-primary">Health Solution</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              AI-powered stress management, personalized fitness plans, and expert guidance at minimal cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="coral">Get Started</Button>
              <Button size="lg" variant="outline">Find Your Rating</Button>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center" 
                alt="AI Health Dashboard" 
                className="w-full rounded-2xl shadow-elegant hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;