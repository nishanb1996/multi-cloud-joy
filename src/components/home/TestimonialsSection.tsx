import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    content: "Clouignitia transformed our infrastructure. Their multi-cloud strategy reduced our costs by 40% while improving performance across the board.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "VP Engineering, DataFlow",
    content: "The DevOps expertise they brought to our team was exceptional. Our deployment time went from days to minutes.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Director of IT, GlobalRetail",
    content: "Working with Clouignitia has been a game-changer. Their 24/7 support and proactive monitoring give us peace of mind.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it — hear from the businesses we've
            helped transform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border-0 shadow-lg card-hover bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="w-10 h-10 text-primary/20" />

                <p className="text-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
