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
  Workflow,
  ShieldCheck,
  Zap,
} from "lucide-react";

const aiServices = [
  {
    icon: Bot,
    title: "Agentic AI & Autonomous Workflows",
    description:
      "Deploy goal-driven AI agents that plan, reason, and execute multi-step tasks across your tools and APIs.",
    details: [
      "LangGraph, CrewAI, AutoGen frameworks",
      "Tool calling & function execution",
      "Multi-agent orchestration",
      "Human-in-the-loop guardrails",
    ],
    gradient: "from-violet-500/10 to-fuchsia-500/10",
  },
  {
    icon: Brain,
    title: "Generative AI & LLM Engineering",
    description:
      "Integrate frontier models — GPT-5, Claude, Gemini 2.5 — with prompt engineering, evals, and fine-tuning.",
    details: [
      "OpenAI, Anthropic, Google, Mistral APIs",
      "Custom GPTs & assistant APIs",
      "LoRA / QLoRA fine-tuning",
      "Prompt evals & observability",
    ],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Database,
    title: "RAG 2.0 & Vector Search",
    description:
      "Build retrieval-augmented systems with hybrid search, reranking, and graph-aware context.",
    details: [
      "Pinecone, Weaviate, Qdrant, pgvector",
      "Hybrid BM25 + semantic retrieval",
      "GraphRAG & knowledge graphs",
      "Document ingestion pipelines",
    ],
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Copilots",
    description:
      "Ship conversational copilots for support, sales, and internal ops — across web, voice, and Slack.",
    details: [
      "Multi-channel & multilingual",
      "Voice agents (Whisper, ElevenLabs)",
      "CRM & Helpdesk integrations",
      "Streaming, citations & memory",
    ],
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    icon: Cpu,
    title: "MLOps & LLMOps",
    description:
      "Operationalize ML and LLMs with scalable training, evaluation, and inference infrastructure.",
    details: [
      "SageMaker, Vertex AI, Azure ML, Bedrock",
      "Model registry & versioning",
      "GPU autoscaling & quantization",
      "Drift detection & evals",
    ],
    gradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: Eye,
    title: "Multimodal & Computer Vision",
    description:
      "Process images, video, and audio with vision-language models and custom CV pipelines.",
    details: [
      "VLMs (GPT-4o, Gemini, Claude vision)",
      "Object detection, OCR & segmentation",
      "Video analytics & summarization",
      "Edge & on-device deployment",
    ],
    gradient: "from-indigo-500/10 to-blue-500/10",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics & Forecasting",
    description:
      "Turn data into forecasts, recommendations, and decisions that move business metrics.",
    details: [
      "Demand & revenue forecasting",
      "Anomaly & fraud detection",
      "Recommendation engines",
      "Customer segmentation & churn",
    ],
    gradient: "from-cyan-500/10 to-sky-500/10",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "Automate document, email, and back-office workflows with AI-native pipelines.",
    details: [
      "Document understanding & IDP",
      "n8n, Zapier, Make AI workflows",
      "Email triage & summarization",
      "Approval & routing agents",
    ],
    gradient: "from-lime-500/10 to-emerald-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI & Governance",
    description:
      "Ship AI you can trust — with security, evals, red-teaming, and compliance built-in.",
    details: [
      "PII redaction & data isolation",
      "Prompt injection defense",
      "Bias, safety & hallucination evals",
      "EU AI Act & SOC 2 readiness",
    ],
    gradient: "from-amber-500/10 to-yellow-500/10",
  },
];

export const AIServicesSection = () => {
  return (
    <section id="ai-services" className="section-padding bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            AI, GenAI & Machine Learning
          </div>
          <h2 className="text-responsive-lg font-display font-bold mb-4">
            Build <span className="gradient-text">Production-Grade AI</span> on Your Cloud
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            From agentic workflows and RAG to MLOps and Responsible AI — we help you
            move beyond prototypes and ship AI that's secure, scalable, and measurable.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[
              "Agentic AI",
              "GPT-5 / Claude / Gemini",
              "RAG 2.0",
              "LLMOps",
              "Vector DBs",
              "Fine-tuning",
              "Multimodal",
              "Responsible AI",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-border bg-background/60 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
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
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trending use cases strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: Zap,
              title: "AI-Powered SaaS",
              copy: "Embed copilots, smart search, and automations into your product.",
            },
            {
              icon: Bot,
              title: "Enterprise AI Assistants",
              copy: "Private ChatGPT-style assistants grounded in your internal data.",
            },
            {
              icon: Workflow,
              title: "Process Automation",
              copy: "Replace manual back-office work with agentic AI pipelines.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card/50 p-5 flex gap-4 items-start hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-1">{item.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.copy}</p>
              </div>
            </div>
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
