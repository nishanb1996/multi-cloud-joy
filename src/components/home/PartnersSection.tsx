import { GCPLogo, AWSLogo, AzureLogo } from "@/components/logos";

const partners = [
  {
    name: "Google Cloud Platform",
    shortName: "GCP",
    Logo: GCPLogo,
  },
  {
    name: "Amazon Web Services",
    shortName: "AWS",
    Logo: AWSLogo,
  },
  {
    name: "Microsoft Azure",
    shortName: "Azure",
    Logo: AzureLogo,
  },
];

export const PartnersSection = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-muted/30 border-y border-border">
      <div className="container-custom">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
            Official Cloud Partners
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-card shadow-sm hover:shadow-md transition-all border border-border/50 w-full sm:w-auto"
            >
              <partner.Logo className="h-6 sm:h-8 w-auto flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                <span className="sm:hidden">{partner.shortName}</span>
                <span className="hidden sm:inline">{partner.name}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
