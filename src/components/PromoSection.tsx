import { Button } from "@/components/ui/button";

const PromoSection = () => {
  return (
    <section className="py-16 bg-gradient-tertiary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-card p-10 rounded-2xl shadow-elegant text-center">
          <h2 className="text-3xl font-bold mb-4">Trending products for well-being</h2>
          <p className="text-lg text-muted-foreground mb-2">
            For the best rate go to <strong className="text-primary">Nyxenfit super-shop</strong>
          </p>
          <p className="text-primary mb-8 cursor-pointer hover:underline">Click & shopping one</p>
          
          <div className="border-t pt-8">
            <p className="text-lg mb-4">Subscribe to our weekly newsletter</p>
            <Button variant="default" size="lg">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;