import { GCPLogo, AWSLogo, AzureLogo } from "@/components/logos";

const partners = [
  {
    name: "Google Cloud Platform",
    Logo: GCPLogo,
  },
  {
    name: "Amazon Web Services",
    Logo: AWSLogo,
  },
  {
    name: "Microsoft Azure",
    Logo: AzureLogo,
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

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-card shadow-sm hover:shadow-md transition-all border border-border/50"
            >
              <partner.Logo className="h-8 w-auto" />
              <span className="font-medium text-foreground group-hover:text-primary transition-colors hidden sm:inline">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
