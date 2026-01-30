import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, Rocket } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "We constantly explore cutting-edge technologies to deliver forward-thinking solutions that give our clients a competitive edge.",
  },
  {
    icon: Award,
    title: "Reliability",
    description: "Our commitment to stability and uptime means you can trust us with your most critical infrastructure needs.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We believe in building lasting relationships, becoming an extension of your team rather than just a vendor.",
  },
];

const milestones = [
  { year: "2014", title: "Founded", description: "Started with a vision to simplify cloud adoption" },
  { year: "2016", title: "First Major Partnership", description: "Became certified partners with AWS" },
  { year: "2018", title: "Multi-Cloud Launch", description: "Expanded to GCP and Azure partnerships" },
  { year: "2020", title: "DevOps Excellence", description: "Launched dedicated DevOps practice" },
  { year: "2022", title: "100+ Clients", description: "Celebrated serving over 100 businesses" },
  { year: "2024", title: "Global Expansion", description: "Opened offices across multiple regions" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent via-background to-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center px-4">
            <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">About Clouignitia</p>
            <h1 className="text-responsive-xl font-display font-bold mb-4 sm:mb-6">
              Igniting Cloud
              <span className="gradient-text block">Transformations</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              We are a team of passionate cloud architects, DevOps engineers, and
              technology enthusiasts dedicated to helping businesses harness the
              full potential of cloud computing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <Card className="border-0 shadow-lg card-hover">
              <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl font-display font-bold">Our Mission</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To empower organizations of all sizes to leverage cloud
                  technologies effectively, reducing complexity and accelerating
                  innovation while maintaining security and cost efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover">
              <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                </div>
                <h2 className="text-xl sm:text-2xl font-display font-bold">Our Vision</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To be the most trusted cloud and DevOps partner for businesses
                  worldwide, known for our technical excellence, customer-first
                  approach, and innovative solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4">
            <p className="text-primary font-medium mb-2 text-sm sm:text-base">Our Values</p>
            <h2 className="text-responsive-lg font-display font-bold mb-3 sm:mb-4">
              What Drives Us
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Our core values shape everything we do, from how we approach
              challenges to how we build relationships with our clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="border-0 shadow-md card-hover text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto">
                    <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-medium mb-2 text-sm sm:text-base">Our Team</p>
              <h2 className="text-responsive-lg font-display font-bold mb-4 sm:mb-6">
                Expert Cloud Professionals
              </h2>
              <div className="space-y-4 sm:space-y-6 text-muted-foreground text-sm sm:text-base">
                <p>
                  Our team comprises certified professionals with deep expertise
                  across all major cloud platforms. With backgrounds spanning
                  enterprise IT, startups, and consulting, we bring diverse
                  perspectives to every project.
                </p>
                <p>
                  We invest heavily in continuous learning and hold certifications
                  including AWS Solutions Architect Professional, Google Cloud
                  Professional Architect, Azure Solutions Expert, and Kubernetes
                  Administrator.
                </p>
                <p>
                  Beyond technical skills, we pride ourselves on communication and
                  collaboration. We work as an extension of your team, not just
                  external consultants.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
                <div className="text-center p-3 sm:p-4 rounded-xl bg-muted/50">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">50+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Engineers</p>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-muted/50">
                  <p className="text-2xl sm:text-3xl font-bold text-secondary">200+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Certifications</p>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-muted/50">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">15+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Countries</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center space-y-3 sm:space-y-4 p-6">
                  <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-primary mx-auto" />
                  <p className="text-lg sm:text-xl font-medium text-foreground">
                    Passionate About Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4">
            <p className="text-primary font-medium mb-2 text-sm sm:text-base">Our Journey</p>
            <h2 className="text-responsive-lg font-display font-bold mb-3 sm:mb-4">
              Milestones
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              A decade of growth, innovation, and client success stories.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-4 sm:gap-6 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ml-10 sm:ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="inline-block border-0 shadow-md">
                      <CardContent className="p-4 sm:p-6">
                        <p className="text-primary font-bold text-base sm:text-lg mb-1">
                          {milestone.year}
                        </p>
                        <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">{milestone.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary transform -translate-x-1/2 ring-4 ring-background" />

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
