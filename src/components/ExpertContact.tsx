import { Button } from "@/components/ui/button";

const ExpertContact = () => {
  const experts = ["Doctor", "Nutritionist", "Gym"];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-card p-8 rounded-2xl shadow-soft">
          <h2 className="text-3xl font-bold text-center mb-4">Generate your fitness plan</h2>
          <p className="text-center text-muted-foreground mb-8">
            Or <Button variant="link" className="p-0 h-auto">log in</Button> to track your fitness journey
          </p>
          
          <div className="mb-6">
            <p className="text-lg text-center mb-6">Need more help? Contact the experts</p>
            <div className="flex flex-wrap justify-center gap-4">
              {experts.map((expert, index) => (
                <Button key={index} variant="outline" className="min-w-32">
                  {expert}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertContact;