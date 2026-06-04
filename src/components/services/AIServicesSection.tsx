import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  MessageSquare,
  Database,
  Eye,
  Cpu,
  Sparkles,
  ArrowRight,
  Bot,
  LineChart,
} from "lucide-react";

const aiServices = [
  {
    icon: Brain,
    title: "Generative AI & LLM Integration",
    description: "Integrate state-of-the-art large language models into your products and workflows.",
    details: [
      "OpenAI, Anthropic, Gemini APIs",
      "Custom GPT & assistant development",
      "Prompt engineering & fine-tuning",
      "Multi-model orchestration",
    ],
    gradient: "from-violet-500/10 to-fuchsia-500/10",
  },
  {
    icon: Database,
    title: "RAG & Vector Search",
    description: "Build retrieval-augmented systems that ground AI responses in your private data.",
    details: [
      "Pinecone, Weaviate, pgvector",
      "Document ingestion pipelines",
      "Semantic search & embeddings",
      "Knowledge base chatbots",
    ],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Agents",
    description: "Deploy intelligent conversational agents that automate support and operations.",
    details: [
      "Multi-channel chatbots",
      "Autonomous AI agents",
      "Tool calling & workflows",
      "Voice & text interfaces",
    ],
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: Cpu,
    title: "MLOps & Model Deployment",
    description: "Operationalize machine learning with scalable training and serving infrastructure.",
    details: [
      "SageMaker, Vertex AI, Azure ML",
      "Model versioning & registry",
      "Automated training pipelines",
      "Real-time & batch inference",
    ],
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Extract insights from images and video with custom vision models.",
    details: [
      "Object detection & OCR",
      "Image classification",
      "Video analytics",
      "Edge deployment",
    ],
    gradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics & Data Science",
    description: "Turn raw data into forecasts and intelligent decisions that drive business value.",
    details: [
      "Forecasting & recommendation",
      "Anomaly detection",
      "Customer segmentation",
      "Business intelligence dashboards",
    ],
    gradient: "from-indigo-500/10 to-blue-500/10",
  },
];

export const AIServicesSection = () => {
  return (
    <section id="ai-services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            AI & Machine Learning
          </div>
          <h2 className="text-responsive-lg font-display font-bold mb-4">
            Build Intelligent, AI-Powered Products
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            From generative AI to MLOps, we help you harness artificial intelligence
            to automate workflows, unlock insights, and deliver next-generation experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {aiServices.map((service) => (
            <Card
              key={service.title}
              className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${service.gradient} p-5 sm:p-6`}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-background/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="p-5 sm:p-6 bg-background">
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="text-xs sm:text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="btn-gradient w-full sm:w-auto">
            <Link to="/contact">
              <Bot className="mr-2 h-4 w-4" />
              Start Your AI Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
