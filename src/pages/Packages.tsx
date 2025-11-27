import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Packages = () => {
  const packages = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses getting started with social media",
      features: [
        "8 social media posts per month",
        "2 video edits per month",
        "Basic content calendar",
        "Email support",
      ]
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing brands that need consistent content",
      features: [
        "16 social media posts per month",
        "5 video edits per month",
        "Advanced content strategy",
        "Priority support",
        "Monthly analytics report",
        "Brand guidelines",
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Comprehensive solution for established brands",
      features: [
        "Unlimited social media posts",
        "12 video edits per month",
        "Full content strategy & planning",
        "24/7 priority support",
        "Weekly analytics reports",
        "Dedicated account manager",
        "Campaign management",
        "Influencer outreach",
      ]
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
              Our Packages
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Choose the perfect package for your brand's needs
            </p>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card 
                  key={index}
                  className={`relative ${pkg.popular ? 'border-primary shadow-xl scale-105' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="gradient-brand text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <div className="mb-2">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/contact">
                      <Button 
                        className={`w-full ${pkg.popular ? 'gradient-brand text-white hover:opacity-90' : ''}`}
                        variant={pkg.popular ? 'default' : 'outline'}
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Can I switch packages?</h3>
                  <p className="text-muted-foreground">
                    Yes! You can upgrade or downgrade your package at any time. Changes will take effect at the start of your next billing cycle.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What's included in video edits?</h3>
                  <p className="text-muted-foreground">
                    Our video edits include color correction, sound design, transitions, text overlays, and music. Each video is optimized for social media platforms.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Do you offer custom packages?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! If none of our standard packages fit your needs, we can create a custom solution tailored to your specific requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still not sure which package is right for you?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's have a conversation about your goals and find the perfect solution for your brand.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-brand text-white hover:opacity-90 transition-opacity text-lg px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Packages;
