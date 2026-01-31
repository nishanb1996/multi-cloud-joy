import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    content: "Cloudignitia transformed our infrastructure. Their multi-cloud strategy reduced our costs by 40% while improving performance across the board.",
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
    content: "Working with Cloudignitia has been a game-changer. Their 24/7 support and proactive monitoring give us peace of mind.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4">
          <p className="text-primary font-medium mb-2 text-sm sm:text-base">Testimonials</p>
          <h2 className="text-responsive-lg font-display font-bold mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Don't just take our word for it — hear from the businesses we've
            helped transform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border-0 shadow-lg card-hover bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/20" />

                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex gap-0.5 sm:gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <div className="pt-3 sm:pt-4 border-t border-border">
                  <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
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
