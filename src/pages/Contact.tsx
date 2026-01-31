import { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, Clock } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  { value: "gcp", label: "Google Cloud Platform" },
  { value: "aws", label: "Amazon Web Services" },
  { value: "azure", label: "Microsoft Azure" },
  { value: "devops", label: "DevOps Solutions" },
  { value: "consulting", label: "Cloud Consulting" },
  { value: "other", label: "Other" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent via-background to-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center px-4">
            <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</p>
            <h1 className="text-responsive-xl font-display font-bold mb-4 sm:mb-6">
              Let's Start Your
              <span className="gradient-text block">Cloud Journey</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Ready to transform your infrastructure? Get in touch with our team
              for a free consultation and discover how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-5 sm:p-6 md:p-8">
                  <h2 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="name" className="text-sm">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`text-sm sm:text-base ${errors.name ? "border-destructive" : ""}`}
                        />
                        {errors.name && (
                          <p className="text-xs sm:text-sm text-destructive">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="email" className="text-sm">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`text-sm sm:text-base ${errors.email ? "border-destructive" : ""}`}
                        />
                        {errors.email && (
                          <p className="text-xs sm:text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="company" className="text-sm">Company (Optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="text-sm sm:text-base"
                        />
                      </div>

                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="service" className="text-sm">
                          Service Interest <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={formData.service}
                          onValueChange={handleServiceChange}
                        >
                          <SelectTrigger
                            className={`text-sm sm:text-base ${errors.service ? "border-destructive" : ""}`}
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.service && (
                          <p className="text-xs sm:text-sm text-destructive">{errors.service}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="message" className="text-sm">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project and requirements..."
                        rows={5}
                        className={`text-sm sm:text-base ${errors.message ? "border-destructive" : ""}`}
                      />
                      {errors.message && (
                        <p className="text-xs sm:text-sm text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="btn-gradient w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-semibold">Contact Information</h3>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">Email</p>
                        <a
                          href="mailto:info@cloudignitia.com"
                          className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          info@cloudignitia.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">Phone</p>
                        <a
                          href="tel:+15551234567"
                          className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">Address</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          123 Cloud Street<br />
                          Tech City, TC 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">Business Hours</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Mon - Fri: 9:00 AM - 6:00 PM<br />
                          24/7 Support Available
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-5 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Follow Us</h3>
                  <div className="flex gap-3 sm:gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        aria-label={social.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Map placeholder - Add your location
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
