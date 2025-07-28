import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold">
            <span className="text-primary">Nyxen</span>
            <span className="text-secondary">Fit</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Blogs</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Fitness Plans</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Stress Mentor</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Contact Experts</a>
          </nav>
          
          <Button variant="outline" className="gap-2">
            <User className="w-4 h-4" />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;