const partners = [
  {
    name: "Google Cloud Platform",
    logo: "GCP",
    color: "from-primary to-primary/80",
  },
  {
    name: "Amazon Web Services",
    logo: "AWS",
    color: "from-secondary to-secondary/80",
  },
  {
    name: "Microsoft Azure",
    logo: "Azure",
    color: "from-primary to-secondary",
  },
];

export const PartnersSection = () => {
  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
            Official Cloud Partners
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-card shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${partner.color} flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">{partner.logo}</span>
              </div>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
