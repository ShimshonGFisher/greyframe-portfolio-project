import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-brand py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to grow your brand? Let's talk.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone (Optional)
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+972-50-551-6297" 
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="package" className="block text-sm font-medium mb-2">
                        Package Interest
                      </label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a package" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border border-border z-50">
                          <SelectItem value="testimonials">Testimonials Pack</SelectItem>
                          <SelectItem value="starter">Starter Pack</SelectItem>
                          <SelectItem value="basic">Basic Pack</SelectItem>
                          <SelectItem value="growth">Growth Pack</SelectItem>
                          <SelectItem value="pro">Pro Pack</SelectItem>
                          <SelectItem value="custom">Custom / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project..." 
                        rows={5}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full gradient-brand text-white hover:opacity-90 transition-opacity"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Direct Contact */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Prefer to reach out directly?</h2>
                </div>

                <Card className="bg-secondary border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="gradient-brand p-3 rounded-lg flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a 
                          href="mailto:greywoolfproductions@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          greywoolfproductions@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="gradient-brand p-3 rounded-lg flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <a 
                          href="https://wa.me/972505516297"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +972-50-551-6297
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary border-none">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        <div className="gradient-brand p-3 rounded-lg flex-shrink-0">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Book a Call</h3>
                          <p className="text-muted-foreground mb-3">
                            Schedule a consultation
                          </p>
                        </div>
                      </div>
                      <a href="#CALENDLY-PLACEHOLDER">
                        <Button 
                          className="w-full gradient-brand text-white hover:opacity-90 transition-opacity"
                        >
                          Book a Call
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Common Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-background rounded-lg px-6 border-none">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-semibold text-left">How long does a project take?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Timelines vary based on package and scope. Most projects are delivered within 2-4 weeks.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="bg-background rounded-lg px-6 border-none">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-semibold text-left">Do you offer custom packages?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! Contact us to discuss your specific needs and we'll create a tailored solution for your brand.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="bg-background rounded-lg px-6 border-none">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-semibold text-left">What platforms do you work with?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We create content for YouTube, Instagram, TikTok, Facebook, LinkedIn, Threads, and X/Twitter.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
