import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    content: "Cloudignitia transformed our infrastructure. Their multi-cloud strategy reduced our costs by 40% while improving performance across the board.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "VP Engineering, DataFlow",
    content: "The DevOps expertise they brought to our team was exceptional. Our deployment time went from days to minutes.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Director of IT, GlobalRetail",
    content: "Working with Cloudignitia has been a game-changer. Their 24/7 support and proactive monitoring give us peace of mind.",
    rating: 5,
    avatar: "ER",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-widest">Testimonials</p>
          <h2 className="text-responsive-lg font-bold mb-6">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it — hear from the businesses we've
            helped transform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 stagger-children">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="card-premium card-hover border-0 shadow-xl bg-card overflow-hidden"
            >
              <CardContent className="p-6 sm:p-8 space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed text-base">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-border flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
