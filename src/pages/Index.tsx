import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Video, Palette, TrendingUp, Zap } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Video,
      title: "Video Production",
      description: "High-quality video content that captures attention and drives engagement across all platforms."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Eye-catching graphics and designs that make your brand stand out in crowded feeds."
    },
    {
      icon: TrendingUp,
      title: "Social Strategy",
      description: "Data-driven strategies that grow your audience and increase your brand's reach."
    },
    {
      icon: Zap,
      title: "Content Creation",
      description: "Compelling content that resonates with your audience and builds lasting connections."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-brand py-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              GREYFRAME MEDIA
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto">
              Scroll-stopping content for brands that mean business.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/packages">
                <Button size="lg" className="bg-white text-foreground hover:bg-white/90 text-lg px-8 py-6">
                  View Packages
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6">
                  See Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="gradient-brand w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-bold gradient-text mb-2">100+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold gradient-text mb-2">50+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold gradient-text mb-2">2M+</h3>
                <p className="text-muted-foreground">Content Views</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to elevate your brand?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create content that stops the scroll and drives results for your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-brand text-white hover:opacity-90 transition-opacity text-lg px-8 py-6">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
