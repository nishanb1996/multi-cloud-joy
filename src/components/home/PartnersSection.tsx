import { GCPLogo, AWSLogo, AzureLogo } from "@/components/logos";

const partners = [
  {
    name: "Google Cloud Platform",
    shortName: "GCP",
    Logo: GCPLogo,
    description: "Premier Partner",
  },
  {
    name: "Amazon Web Services",
    shortName: "AWS",
    Logo: AWSLogo,
    description: "Advanced Partner",
  },
  {
    name: "Microsoft Azure",
    shortName: "Azure",
    Logo: AzureLogo,
    description: "Gold Partner",
  },
];

export const PartnersSection = () => {
  return (
    <section className="py-10 sm:py-12 bg-muted/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest mb-2">
            Trusted Partnerships
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold">
            Official Cloud <span className="gradient-text">Partners</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative card-premium p-6 sm:p-8 text-center card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
                  <partner.Logo className="w-full h-full" />
                </div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  <span className="sm:hidden">{partner.shortName}</span>
                  <span className="hidden sm:inline">{partner.name}</span>
                </h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
