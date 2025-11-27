import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";

const Portfolio = () => {
  const projects = [
    { title: "Brand Campaign", category: "Video Production" },
    { title: "Product Launch", category: "Social Graphics" },
    { title: "Corporate Video", category: "Video Production" },
    { title: "Instagram Series", category: "Content Creation" },
    { title: "Brand Identity", category: "Design & Branding" },
    { title: "Event Coverage", category: "Video Production" },
  ];

  const testimonials = [
    {
      quote: "Greyframe Media transformed our social presence completely. Their creative approach and attention to detail exceeded our expectations.",
      author: "Sarah Johnson",
      company: "TechStart Inc."
    },
    {
      quote: "Working with Greyframe was a game-changer. They understood our vision and delivered content that truly resonates with our audience.",
      author: "Michael Chen",
      company: "Bloom Wellness"
    },
    {
      quote: "The team's professionalism and creativity are unmatched. Every project is delivered on time and beyond our expectations.",
      author: "Emily Rodriguez",
      company: "Urban Lifestyle Co."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-brand py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Work
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              See what we've created for brands like yours
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-video gradient-brand flex items-center justify-center relative overflow-hidden">
                    <span className="text-white text-2xl font-semibold opacity-50 group-hover:opacity-0 transition-opacity">
                      Coming Soon
                    </span>
                    <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">View Project</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="p-6">
                    <Quote className="w-10 h-10 text-primary mb-4" />
                    <p className="text-foreground mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Like what you see? Let's create something amazing together.
            </h2>
            <Link to="/contact">
              <Button size="lg" className="gradient-brand text-white hover:opacity-90 transition-opacity text-lg px-8 py-6">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
