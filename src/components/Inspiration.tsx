import { Button } from "@/components/ui/button";

const Inspiration = () => {
  const inspirationCards = [
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
      title: "Read the Latest",
      description: "Global fitness trends and success stories.",
      buttonText: "Click & Dig In"
    },
    {
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop&crop=center",
      title: "\"I Can Eat Fish\"",
      description: "Nutrition guides tailored to your preferences.",
      buttonText: "Generate Plan"
    }
  ];

  return (
    <section className="py-20 bg-gradient-tertiary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Find Your <span className="text-primary">Inspiration</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {inspirationCards.map((card, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{card.title}</h3>
                <p className="text-muted-foreground mb-4">{card.description}</p>
                <Button variant="outline" className="w-full">{card.buttonText}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspiration;