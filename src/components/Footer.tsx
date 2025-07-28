const Footer = () => {
  const footerLinks = {
    Products: [
      "AI Stress Plan",
      "Fitness Ratings", 
      "Expert Coaching",
      "Blogs"
    ],
    Company: [
      "About Us",
      "Become a Partner"
    ],
    Contact: [
      "Help Center",
      "+880 1572906511"
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4 relative">
                {category}
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary mt-2"></div>
              </h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">© 2025 NyxenFit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;