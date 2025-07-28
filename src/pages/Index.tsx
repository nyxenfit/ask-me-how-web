import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DailyTips from "@/components/DailyTips";
import Inspiration from "@/components/Inspiration";
import ExpertContact from "@/components/ExpertContact";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <DailyTips />
      <Inspiration />
      <ExpertContact />
      <PromoSection />
      <Footer />
    </div>
  );
};

export default Index;
