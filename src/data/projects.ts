export type Project = {
  slug: string;
  kind: "quantum" | "velexar" | "markets" | "curriculum" | "gradia";
  title: string;
  meta: string;
  year: string;
  summary: string;
  shortDescription: string;
  repository?: string;
  live?: string;
  languages: string[];
  tools: string[];
  role: string;
  status: string;
  problem: string;
  approach: string;
  contributions: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    slug: "quantumlearn", kind: "quantum", title: "QuantumLearn", meta: "Research · AI learning", year: "2026",
    summary: "An agentic learning system for introductory quantum computing, grounded in executable simulations.",
    shortDescription: "Agentic tutoring for quantum computing with simulation-grounded feedback.",
    repository: "https://github.com/akshatporwal002/Monash-Honours-Project",
    languages: ["Python", "TypeScript", "JavaScript"], tools: ["React", "RAG", "Quantum simulation", "Evaluation pipelines"],
    role: "Researcher and full-stack engineer", status: "Research in progress",
    problem: "Quantum concepts are abstract, while generic AI tutors can produce fluent explanations without checking whether their reasoning matches the underlying system.",
    approach: "Pair an agentic teaching workflow with executable quantum simulations, then use the resulting evidence to ground feedback and evaluation.",
    contributions: ["Designed the learning and agent workflow around inspectable simulation evidence.", "Built the Python research system and TypeScript learning interface as one product loop.", "Developed evaluation paths for feedback quality instead of relying on conversational fluency alone."],
    outcomes: ["A working research platform for testing agent-guided quantum learning.", "A reusable architecture for connecting lessons, tools, feedback, and evaluation."],
  },
  {
    slug: "velexar", kind: "velexar", title: "Velexar", meta: "Career intelligence · Full stack", year: "2026",
    summary: "A career intelligence platform for CV analysis, job recommendation, and AI-assisted career workflows.",
    shortDescription: "Career intelligence built around fast retrieval, matching, and streaming feedback.",
    languages: ["Python", "TypeScript", "SQL"], tools: ["FastAPI", "PostgreSQL", "Redis", "Vector search", "SSE"],
    role: "Full-stack and backend engineer", status: "Active development",
    problem: "Career tools commonly treat CV feedback and job discovery as separate workflows, while slow retrieval and generic matching make the experience difficult to trust.",
    approach: "Connect CV analysis, job ingestion, and vector-based matching through asynchronous FastAPI services, indexed PostgreSQL data, Redis caching, and streamed responses.",
    contributions: ["Designed asynchronous backend services for high-throughput API ingestion.", "Implemented vector search and retrieval pipelines for job-user matching.", "Developed PostgreSQL schemas, indexing strategies, Redis caching, and SSE response streaming."],
    outcomes: ["Reduced system latency by 40% through caching and streamed responses.", "Balanced retrieval quality, response latency, and distributed-system scalability in one product workflow."],
  },
  {
    slug: "stonks-in-hand", kind: "markets", title: "Stonks in Hand", meta: "Team product · Infrastructure", year: "2026",
    summary: "Evidence-first equity event intelligence with a production-minded AWS deployment path.",
    shortDescription: "Equity event intelligence that keeps evidence, uncertainty, and deployment visible.",
    repository: "https://github.com/Monash-FIT3170/2026W1-Stocks-In-Hand",
    languages: ["Python", "TypeScript", "SQL"], tools: ["AWS SAM", "Lambda", "CloudFormation", "Supabase"],
    role: "Full-stack and deployment engineer", status: "Team project",
    problem: "Market analysis products often present model output as certainty and hide the operational path that turns a prototype into a dependable product.",
    approach: "Build the interface around source evidence and uncertainty while treating staging infrastructure, persistence, and deployment permissions as part of the product.",
    contributions: ["Built the first MVP interface for the team workflow.", "Added secure AWS staging deployment with Supabase persistence.", "Resolved CloudFormation, ECR, Lambda memory, concurrency, and rollback issues across a sequence of reviewed pull requests."],
    outcomes: ["A deployable staging path rather than a local-only demonstration.", "Nine merged pull requests spanning product UI and cloud infrastructure."],
  },
  {
    slug: "ai-engineering-from-scratch", kind: "curriculum", title: "AI Engineering from Scratch", meta: "Open source · Education", year: "2026",
    summary: "An open-source, build-first curriculum for understanding and shipping modern AI systems.",
    shortDescription: "A practical curriculum for building modern AI systems from first principles.",
    repository: "https://github.com/akshatporwal002/ai-engineering-from-scratch", live: "https://aiengineeringfromscratch.com",
    languages: ["Python", "TypeScript", "Rust", "Julia"], tools: ["Agents", "MCP", "LLMs", "RAG", "Evaluation"],
    role: "Open-source contributor", status: "Active contribution",
    problem: "AI education is commonly split between high-level demos and isolated theory, leaving engineers without a coherent path from fundamentals to working systems.",
    approach: "Organise learning as a build loop: derive the idea, implement it, test it, and keep the resulting artifact. The curriculum spans fundamentals through agent systems and deployment.",
    contributions: ["Developed and refined the Codeology learning interface and its editorial visual system.", "Improved CV analysis provider handling, failure explanations, and model configuration.", "Contributed across the curriculum application while preserving the build-from-first-principles teaching model."],
    outcomes: ["A public curriculum containing 503 lessons across 20 phases.", "A multi-language learning system covering Python, TypeScript, Rust, and Julia."],
  },
  {
    slug: "gradia", kind: "gradia", title: "Gradia", meta: "Learning product · MVP", year: "2026",
    summary: "An AI learning platform that turns uploaded source documents into structured lesson assets.",
    shortDescription: "A production content pipeline for turning source documents into reliable lessons.",
    repository: "https://github.com/akshatporwal002/GradiaWeb",
    languages: ["Python", "JavaScript", "SQL"], tools: ["PostgreSQL", "AWS RDS", "LLM pipelines", "Document processing"],
    role: "AI and product engineer", status: "Active development",
    problem: "Turning large collections of PDFs and DOCX files into consistent learning material is slow, difficult to validate, and prone to rendering failures.",
    approach: "Orchestrate document extraction, semantic tagging, generation, validation, and persistence as an asynchronous multi-stage content pipeline.",
    contributions: ["Built the end-to-end pipeline for transforming uploaded documents into structured lesson assets.", "Designed PostgreSQL/RDS schemas for metadata, semantic tags, version history, and generated outputs.", "Added automated validation across multi-stage LLM workflows to improve reliability."],
    outcomes: ["Processed more than 1,000 documents and asynchronous workloads exceeding 1,000 pages.", "Reduced manual lesson creation time by 80%, rendering failures by 40%, and average processing time by 35%."],
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
