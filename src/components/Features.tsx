import { Brain, Users, Dumbbell } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "AI Stress Mentor",
      description: "Color-coded stress maps and real-time insights."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Fitgroup Community",
      description: "Connect with peers for shared motivation."
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-primary" />,
      title: "Know Your Health",
      description: "Specialized joint care plans."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Your <span className="text-primary">Journey Starts Here</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;