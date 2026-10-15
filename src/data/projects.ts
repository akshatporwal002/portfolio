import { resume } from "./resume";

export type Project = {

  slug: string;

  kind: "quantum" | "velexar" | "markets" | "curriculum" | "gradia" | "engram" | "analysis";

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

  screenshots?: {

    src: string;

    alt: string;

    position?: string;
    group?: string;
    width?: number;
    height?: number;

  }[];

};



export const archivedProjects: Project[] = [

  {

    slug: "quantumlearn", kind: "quantum", title: "Learn Lens", meta: "Research · AI learning", year: "2026",

    summary: "An agentic learning system for introductory quantum computing, grounded in executable simulations.",

    shortDescription: "Agentic tutoring for quantum computing with simulation-grounded feedback.",

    repository: "https://github.com/akshatporwal002/Monash-Honours-Project",

    languages: ["Python", "TypeScript", "JavaScript"], tools: ["React", "RAG", "Quantum simulation", "Evaluation pipelines"],

    role: "Researcher and full-stack engineer", status: "Research in progress",

    problem: "Quantum concepts are abstract, while generic AI tutors can produce fluent explanations without checking whether their reasoning matches the underlying system.",

    approach: "Pair an agentic teaching workflow with executable quantum simulations, then use the resulting evidence to ground feedback and evaluation.",

    contributions: ["Designed the learning and agent workflow around inspectable simulation evidence.", "Built the Python research system and TypeScript learning interface as one product loop.", "Developed evaluation paths for feedback quality instead of relying on conversational fluency alone."],

    outcomes: ["A working research platform for testing agent-guided quantum learning.", "A reusable architecture for connecting lessons, tools, feedback, and evaluation."],

    screenshots: [{

      src: "/projects/learn-lens-dashboard.png",

      alt: "Learn Lens student dashboard showing a guided quantum foundations learning pathway.",

      position: "center top",

    }, {

      src: "/projects/learn-lens-activity.png",

      alt: "Learn Lens quantum learning activity asking students to identify a superposition statement.",

      position: "center top",

    }, {

      src: "/projects/learn-lens-sign-in.png",

      alt: "Learn Lens sign-in screen with student, educator, and admin workspace options.",

      position: "center",

    }],

  },

  {

    slug: "velexar", kind: "velexar", title: "Velexar", meta: "Career intelligence · Full stack", year: "2026",

    summary: "A career intelligence platform for CV analysis, job recommendation, and AI-assisted career workflows.",

    shortDescription: "Career intelligence built around fast retrieval, matching, and streaming feedback.",

    live: "https://velexar.com",

    languages: ["Python", "TypeScript", "SQL"], tools: ["FastAPI", "PostgreSQL", "Redis", "Vector search", "SSE"],

    role: "Full-stack and backend engineer", status: "Active development",

    problem: "Career tools commonly treat CV feedback and job discovery as separate workflows, while slow retrieval and generic matching make the experience difficult to trust.",

    approach: "Connect CV analysis, job ingestion, and vector-based matching through asynchronous FastAPI services, indexed PostgreSQL data, Redis caching, and streamed responses.",

    contributions: ["Designed asynchronous backend services for high-throughput API ingestion.", "Implemented vector search and retrieval pipelines for job-user matching.", "Developed PostgreSQL schemas, indexing strategies, Redis caching, and SSE response streaming."],

    outcomes: ["Reduced system latency by 40% through caching and streamed responses.", "Balanced retrieval quality, response latency, and distributed-system scalability in one product workflow."],

    screenshots: [{

      src: "/projects/velexar-home.png",

      alt: "Velexar landing page introducing its career intelligence workflow.",

      position: "center top",

    }, {

      src: "/projects/velexar-career-hub.png",

      alt: "Velexar Career Hub with CV analysis, refinement, project, and interview pathways.",

      position: "left top",

    }, {

      src: "/projects/velexar-sign-in.png",

      alt: "Velexar sign-in page with Google and LinkedIn authentication options.",

      position: "center",

    }],

  },

  {

    slug: "stonks-in-hand", kind: "markets", title: "Stonks in Hand", meta: "Team product · Infrastructure", year: "2026",

    summary: "Evidence-first equity event intelligence with a production-minded AWS deployment path.",

    shortDescription: "Equity event intelligence that keeps evidence, uncertainty, and deployment visible.",

    repository: "https://github.com/Monash-FIT3170/2026W1-Stocks-In-Hand", live: "https://d3jvmwgqcfm4qn.cloudfront.net/sign-in/",

    languages: ["Python", "TypeScript", "SQL"], tools: ["AWS SAM", "Lambda", "CloudFormation", "Supabase"],

    role: "Full-stack and deployment engineer", status: "Team project",

    problem: "Market analysis products often present model output as certainty and hide the operational path that turns a prototype into a dependable product.",

    approach: "Build the interface around source evidence and uncertainty while treating staging infrastructure, persistence, and deployment permissions as part of the product.",

    contributions: ["Built the first MVP interface for the team workflow.", "Added secure AWS staging deployment with Supabase persistence.", "Resolved CloudFormation, ECR, Lambda memory, concurrency, and rollback issues across a sequence of reviewed pull requests."],

    outcomes: ["A deployable staging path rather than a local-only demonstration.", "Nine merged pull requests spanning product UI and cloud infrastructure."],

    screenshots: [{

      src: "/projects/stonks-in-hand-sign-in.png",

      alt: "StonksInHand sign-in screen with a centered authentication card and green product branding.",

      position: "center top",

    }],

  },

  {

    slug: "ai-engineering-from-scratch", kind: "curriculum", title: "AI Engineering from Scratch", meta: "Open source · Education", year: "2026",

    summary: "An open-source, build-first curriculum for understanding and shipping modern AI systems.",

    shortDescription: "A practical curriculum for building modern AI systems from first principles.",

    repository: "https://github.com/akshatporwal002/ai-engineering-from-scratch", live: "https://learn.akshatporwal.dev",

    languages: ["Python", "TypeScript", "Rust", "Julia"], tools: ["Agents", "MCP", "LLMs", "RAG", "Evaluation"],

    role: "Open-source contributor", status: "Active contribution",

    problem: "AI education is commonly split between high-level demos and isolated theory, leaving engineers without a coherent path from fundamentals to working systems.",

    approach: "Organise learning as a build loop: derive the idea, implement it, test it, and keep the resulting artifact. The curriculum spans fundamentals through agent systems and deployment.",

    contributions: ["Developed and refined the Codeology learning interface and its editorial visual system.", "Improved CV analysis provider handling, failure explanations, and model configuration.", "Contributed across the curriculum application while preserving the build-from-first-principles teaching model."],

    outcomes: ["A public curriculum containing 503 lessons across 20 phases.", "A multi-language learning system covering Python, TypeScript, Rust, and Julia."],

    screenshots: [{

      src: "/projects/codeology-home.png",

      alt: "Codeology homepage showing its learn, build, and prove learning model.",

      position: "center top",

    }],

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

    screenshots: [

      { src: "/projects/gradia-atlas.jpg", alt: "Gradia world map for navigating learning regions.", position: "center 18%" },

      { src: "/projects/gradia-study-hub.jpg", alt: "Gradia active-recall study hub with grouped reviews.", position: "center 12%" },

      { src: "/projects/gradia-profile.jpg", alt: "Gradia learner profile with level progress and skill chart.", position: "center 8%" },

      { src: "/projects/gradia-dashboard.jpg", alt: "Gradia daily-focus dashboard and current lesson route.", position: "center 9%" },

      { src: "/projects/gradia-domains.jpg", alt: "Gradia learning-domain selection screen.", position: "center 10%" },

      { src: "/projects/gradia-route.jpg", alt: "Gradia regression lesson route and module summary.", position: "center 10%" },

    ],

  },

];





const cvProjects: Project[] = [

  {

    "slug": "engram",

    "title": "Engram",

    "kind": "engram",

    "meta": "Agentic AI · Native learning",

    "year": "Personal project",

    "summary": "Native learning, grounded AI and a lasting memory.",

    "shortDescription": "Native learning, grounded AI and a lasting memory.",

    "languages": [

      "Swift"

    ],

    "tools": [

      "SwiftUI",

      "RAG",

      "LLM tool calling",

      "SQLite",

      "FSRS"

    ],

    "role": "Personal project",

    "status": "In development",

    "problem": "Learning material, AI assistance and recall scheduling need to share trustworthy context.",

    "approach": "Connect scoped retrieval and typed application tools with native Swift modules, SQLite and FSRS.",

    "contributions": [

      "Built a native learning app for iPhone, iPad and Mac using SwiftUI, SQLite and FSRS spaced repetition, with AI assistance grounded in notes and PDFs.",

      "Built an agentic assistant that navigates screens, creates and edits decks and notes, changes study settings and generates question variants through LLM function calling and typed application APIs.",

      "Implemented multi-step orchestration with tool-result feedback, saved conversation state and streamed responses, with execution limits, version checks and human review for sensitive actions.",

      "Grounded responses using scoped lexical retrieval and page/section citations; recorded changes in an action history with confirmation and undo.",

      "Implemented BKT, DAS3H, dynamic Rasch and DINA learner models using Bayesian inference, logistic regression, ridge fitting and expectation-maximisation, evaluated with held-out log loss, Brier score and calibration reports.",

      "Separated AI, scheduling and storage into Swift modules; protected records with SQLite WAL, optimistic concurrency and idempotent operations, with Anki import/export and OpenAI/Gemini integrations."

    ],

    "outcomes": [

      "Impact estimate: approximately 95% less flashcard-preparation time (2 hours versus 5 minutes for 50+ cards, including AI generation and review)."

    ]

  },

  {

    "slug": "stonks-in-hand",

    "title": "Stonks-in-Hand",

    "kind": "markets",

    "meta": "Solution architecture · Fintech",

    "year": "February 2026 – Present",

    "summary": "Financial intelligence with traceable sources and event-driven delivery.",

    "shortDescription": "Financial intelligence with traceable sources and event-driven delivery.",

    "languages": [

      "Python",

      "TypeScript",

      "SQL"

    ],

    "tools": [

      "AWS Lambda",

      "SQS",

      "EventBridge",

      "S3",

      "Bedrock",

      "FinBERT",

      "FastAPI",

      "Supabase",

      "SAM"

    ],

    "role": "Solution Architect · University team of 15",

    "status": "In development",

    "problem": "Investors need financial information with source traceability while ingestion and analysis remain reliable and affordable.",

    "approach": "Use event-driven Lambda/SQS stages with independent retries, source evidence, Bedrock summaries and FinBERT sentiment.",

    "contributions": [

      "Led solution architecture for a team of 15 building ASX announcement, news and public-discussion intelligence for investor watchlists.",

      "Created Potential Solution Architecture documentation comparing four stacks for AI support, source traceability, reliability and cost; guided the move from EC2/RDS to serverless Lambda/SQS.",

      "Projected approximately 80% lower monthly hosting costs ($50 to under $10) through event-driven processing and Supabase PostgreSQL.",

      "Enabled independent retries for discovery, download, analysis and notifications through SQS/dead-letter queues, EventBridge schedules and native S3 events.",

      "Combined Playwright/PRAW ingestion, Bedrock summaries and FinBERT sentiment with FastAPI, Pydantic and SQLAlchemy; automated deployment and rollback with SAM, CloudFormation and GitHub Actions."

    ],

    "outcomes": [

      "Impact estimate: approximately 55% less announcement-review effort (50 versus 22 minutes for 10 documents, including human review)."

    ]

  },

  {

    "slug": "quantumlearn",

    "title": "LearnLens",

    "kind": "quantum",

    "meta": "Solution architecture · AI research",

    "year": "July 2026 – Present",

    "summary": "Quantum learning grounded in simulations and teaching material.",

    "shortDescription": "Quantum learning grounded in simulations and teaching material.",

    "languages": [

      "Python",

      "TypeScript",

      "SQL"

    ],

    "tools": [

      "React",

      "TypeScript",

      "FastAPI",

      "SQLAlchemy",

      "SQLite/Alembic",

      "Qiskit Aer",

      "Vertex AI",

      "LangChain",

      "LangGraph",

      "GCP"

    ],

    "role": "Solution Architect · Student research team of 5",

    "status": "In development",

    "problem": "AI-generated quantum activities need grounded retrieval, bounded simulations and educator review.",

    "approach": "Connect document RAG, Gemini generation and Qiskit execution through documented contracts and stateful orchestration.",

    "contributions": [

      "Led architecture for a team of five building AI-generated activities, Qiskit Aer circuit simulations and personalised feedback, with documented API contracts.",

      "Designed RAG for PDF, DOCX and PPTX using heading-aware chunking, 384-dimensional bge-small-en-v1.5 embeddings through FastEmbed/ONNX Runtime, cosine similarity and hybrid keyword/heading ranking.",

      "Connected generation and feedback to Gemini through Vertex AI with service-account authentication, structured-output validation, token metering and budget controls.",

      "Coordinated retrieval, generation and feedback with learner context and saved state; bounded Qiskit execution and separated AI feedback from final assessment through fixed criteria and human review.",

      "Deployed on GCP Compute Engine with Docker/nginx, Artifact Registry and GitHub Actions CI/CD, using Workload Identity Federation, readiness checks and background-worker recovery.",

      "Used LangChain/LangGraph for stateful graph workflows, tool integration, checkpointing and human review."

    ],

    "outcomes": [

      "Impact estimate: approximately 94% less activity-preparation time (3 hours versus 10 minutes including educator review). Assumed timings; not measured."

    ]

  },

  {

    "slug": "fraud-detection",

    "title": "Fraud Detection System",

    "kind": "analysis",

    "meta": "Financial modelling · Machine learning",

    "year": "Analysis project",

    "summary": "Finding fraud in an imbalanced transaction dataset.",

    "shortDescription": "Finding fraud in an imbalanced transaction dataset.",

    "languages": [],

    "tools": [

      "Python",

      "machine learning",

      "feature engineering",

      "model evaluation"

    ],

    "role": "Data analysis project",

    "status": "Completed analysis",

    "problem": "Only 3% of the transaction dataset represents fraud, making reliable model comparison and false-positive reduction essential.",

    "approach": "Compare classifiers using preprocessing, feature engineering and five-fold cross-validation.",

    "contributions": [

      "Built a fraud-detection pipeline for 250K+ transaction records with 3% fraud prevalence, using preprocessing, feature engineering and five-fold cross-validation.",

      "Compared Logistic Regression, KNN and ensemble models, improving precision-recall AUC from 0.81 to 0.92; reduced false positives by 28% and inference latency by 35% through feature selection and dimensionality reduction."

    ],

    "outcomes": [

      "Compared Logistic Regression, KNN and ensemble models, improving precision-recall AUC from 0.81 to 0.92; reduced false positives by 28% and inference latency by 35% through feature selection and dimensionality reduction."

    ]

  },

  {

    "slug": "bayesian-insurance",

    "title": "Bayesian Insurance Risk Modelling",

    "kind": "analysis",

    "meta": "Financial modelling · Bayesian inference",

    "year": "Analysis project",

    "summary": "Understanding heavy-tailed insurance losses.",

    "shortDescription": "Understanding heavy-tailed insurance losses.",

    "languages": [],

    "tools": [

      "Gibbs sampling",

      "MCMC",

      "DIC",

      "actuarial risk analysis"

    ],

    "role": "Data analysis project",

    "status": "Completed analysis",

    "problem": "Extreme claims make severity modelling and uncertainty analysis important for actuarial decisions.",

    "approach": "Fit Bayesian severity models with Gibbs sampling and assess convergence, sensitivity and DIC.",

    "contributions": [

      "Modelled insurance claim severity using Gibbs sampling and MCMC; identified heavy-tailed losses through exploratory analysis of claims exceeding $547K, with kurtosis above 175 and skewness above 11.",

      "Evaluated fit using DIC, sensitivity analysis and convergence diagnostics across 1M+ MCMC iterations to support premium pricing, reserve estimation and actuarial risk analysis."

    ],

    "outcomes": [

      "Evaluated fit using DIC, sensitivity analysis and convergence diagnostics across 1M+ MCMC iterations to support premium pricing, reserve estimation and actuarial risk analysis."

    ]

  },

  {

    "slug": "asx-stock-analysis",

    "title": "ASX Stock Data Analysis",

    "kind": "analysis",

    "meta": "Financial modelling · Data analysis",

    "year": "Analysis project",

    "summary": "Patterns, volatility and diversification across ASX stocks.",

    "shortDescription": "Patterns, volatility and diversification across ASX stocks.",

    "languages": [],

    "tools": [

      "PCA",

      "correlation analysis",

      "time-series statistics",

      "quantitative analysis"

    ],

    "role": "Data analysis project",

    "status": "Completed analysis",

    "problem": "Portfolio analysis needs a clear view of correlated stocks, volatility and macroeconomic events.",

    "approach": "Use PCA, correlations and time-series statistics to identify clusters and compare portfolio strategies.",

    "contributions": [

      "Analysed 10 ASX-listed stocks with PCA, correlation analysis and time-series statistics, explaining 77%+ of dataset variance and identifying three stock clusters.",

      "Examined volatility alongside macroeconomic events and developed diversified, defensive and high-risk portfolio strategies through quantitative analysis."

    ],

    "outcomes": [

      "Examined volatility alongside macroeconomic events and developed diversified, defensive and high-risk portfolio strategies through quantitative analysis."

    ]

  }

];



// CV order is the public allowlist; archived project data and media stay in the repository.

export const projectLiveUrls: Record<string,string> = {"stonks-in-hand":"https://stonksinhand.info", "quantumlearn":"https://learnlens.akshatporwal.dev"};
export const projectOrder = resume.projects.map(project => project.slug);

export const projects: Project[] = projectOrder.map(slug => {

 const current = cvProjects.find(project => project.slug === slug)!;

 const previous = archivedProjects.find(project => project.slug === slug);

 return {...previous, ...current, live: projectLiveUrls[slug] ?? current.live ?? previous?.live, screenshots: slug === "engram" ? [
  {
    "src": "/projects/engram/today.png",
    "alt": "Daily study dashboard",
    "group": "Study and recall"
  },
  {
    "src": "/projects/engram/notebook.png",
    "alt": "Notes and questions in one notebook",
    "group": "Study and recall"
  },
  {
    "src": "/projects/engram/recall.png",
    "alt": "Mathematical notation and spaced recall",
    "group": "Study and recall"
  },
  {
    "src": "/projects/engram/quiz.png",
    "alt": "Architecture practice with multiple-choice questions",
    "group": "Practice and progress"
  },
  {
    "src": "/projects/engram/questions.png",
    "alt": "Answers and explanations alongside study notes",
    "group": "Practice and progress"
  },
  {
    "src": "/projects/engram/activity.png",
    "alt": "Weekly review activity",
    "group": "Practice and progress"
  },
  {
    "src": "/projects/engram/settings.png",
    "alt": "Study settings and AI connections",
    "group": "Settings and AI"
  },
  {
    "src": "/projects/engram/assistant.png",
    "alt": "AI assistant conversation",
    "group": "Settings and AI"
  },
  {
    "src": "/projects/engram/agent.png",
    "alt": "Assistant working across the application",
    "group": "Settings and AI"
  }
] : current.screenshots ?? previous?.screenshots};

});

export function getProject(slug: string) { return projects.find(project => project.slug === slug); }
