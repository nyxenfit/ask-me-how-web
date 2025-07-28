import { Button } from "@/components/ui/button";

const DailyTips = () => {
  return (
    <section className="py-16 bg-tertiary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">Daily Health Tips</h2>
        <p className="text-2xl font-semibold text-secondary mb-8">"Less Sugar, Healthy Life"</p>
        <Button variant="coral" size="lg">Explore More</Button>
      </div>
    </section>
  );
};

export default DailyTips;