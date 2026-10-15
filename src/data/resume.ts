// Content updated from AkshatPorwalResume.pdf. Impact estimates retain their qualifications.
export const resume = {
  "name": "Akshat Porwal",
  "summary": "Software Engineering and Commerce (Actuarial Studies) student at Monash University in Melbourne. I build agentic AI applications, cloud infrastructure and financial intelligence systems, with a focus on solution architecture and reliable delivery.",
  "education": {
    "university": "Monash University",
    "location": "Melbourne, Australia",
    "degree": "Software Engineering / Commerce (Actuarial Studies)",
    "dates": "January 2023 – November 2027 (expected)"
  },
  "skills": [
    {
      "title": "Languages",
      "text": "Python, Java, JavaScript, SQL, NoSQL (MongoDB)"
    },
    {
      "title": "Backend",
      "text": "FastAPI, REST APIs, asynchronous systems, API design"
    },
    {
      "title": "Frontend",
      "text": "React, Next.js"
    },
    {
      "title": "Databases",
      "text": "PostgreSQL, Redis, indexing, query optimisation"
    },
    {
      "title": "Cloud / Infrastructure",
      "text": "AWS (server-based and serverless), Docker, Kubernetes, Terraform"
    },
    {
      "title": "Systems",
      "text": "Distributed systems, Redis caching, SSE streaming, concurrency"
    },
    {
      "title": "ML / Analytics",
      "text": "RAG pipelines, vector search, embedding systems, model evaluation, PCA, MCMC"
    },
    {
      "title": "Orchestration",
      "text": "LangChain, LangGraph (LearnLens)"
    }
  ],
  "experience": [
    {
      "title": "Freelance Web Developer",
      "organisation": "Independent Business",
      "dates": "August 2026 – Present",
      "points": [
        "Delivered a responsive business website by gathering client requirements and refining the design through stakeholder feedback.",
        "Integrated a RAG customer-support chatbot to retrieve service information, answer enquiries and guide prospective customers.",
        "Implemented website analytics, conversion tracking and SEO to monitor visitor behaviour, track enquiries and support organic visibility."
      ]
    }
  ],
  "projects": [
    {
      "slug": "engram",
      "title": "Engram",
      "year": "Personal project",
      "stack": "SwiftUI, RAG, LLM tool calling, SQLite, FSRS",
      "points": [
        "Built a native learning app for iPhone, iPad and Mac using SwiftUI, SQLite and FSRS spaced repetition, with AI assistance grounded in notes and PDFs.",
        "Built an agentic assistant that navigates screens, creates and edits decks and notes, changes study settings and generates question variants through LLM function calling and typed application APIs.",
        "Implemented multi-step orchestration with tool-result feedback, saved conversation state and streamed responses, with execution limits, version checks and human review for sensitive actions.",
        "Grounded responses using scoped lexical retrieval and page/section citations; recorded changes in an action history with confirmation and undo.",
        "Implemented BKT, DAS3H, dynamic Rasch and DINA learner models using Bayesian inference, logistic regression, ridge fitting and expectation-maximisation, evaluated with held-out log loss, Brier score and calibration reports.",
        "Separated AI, scheduling and storage into Swift modules; protected records with SQLite WAL, optimistic concurrency and idempotent operations, with Anki import/export and OpenAI/Gemini integrations.",
        "Impact estimate: approximately 95% less flashcard-preparation time (2 hours versus 5 minutes for 50+ cards, including AI generation and review)."
      ],
      "href": "/projects/engram"
    },
    {
      "slug": "stonks-in-hand",
      "title": "Stonks-in-Hand",
      "year": "February 2026 – Present",
      "stack": "AWS Lambda, SQS, EventBridge, S3, Bedrock, FinBERT, FastAPI, Supabase, SAM",
      "points": [
        "Led solution architecture for a team of 15 building ASX announcement, news and public-discussion intelligence for investor watchlists.",
        "Created Potential Solution Architecture documentation comparing four stacks for AI support, source traceability, reliability and cost; guided the move from EC2/RDS to serverless Lambda/SQS.",
        "Projected approximately 80% lower monthly hosting costs ($50 to under $10) through event-driven processing and Supabase PostgreSQL.",
        "Enabled independent retries for discovery, download, analysis and notifications through SQS/dead-letter queues, EventBridge schedules and native S3 events.",
        "Combined Playwright/PRAW ingestion, Bedrock summaries and FinBERT sentiment with FastAPI, Pydantic and SQLAlchemy; automated deployment and rollback with SAM, CloudFormation and GitHub Actions.",
        "Impact estimate: approximately 55% less announcement-review effort (50 versus 22 minutes for 10 documents, including human review)."
      ],
      "href": "/projects/stonks-in-hand"
    },
    {
      "slug": "quantumlearn",
      "title": "LearnLens",
      "year": "July 2026 – Present",
      "stack": "React, TypeScript, FastAPI, SQLAlchemy, SQLite/Alembic, Qiskit Aer, Vertex AI, LangChain, LangGraph, GCP",
      "points": [
        "Led architecture for a team of five building AI-generated activities, Qiskit Aer circuit simulations and personalised feedback, with documented API contracts.",
        "Designed RAG for PDF, DOCX and PPTX using heading-aware chunking, 384-dimensional bge-small-en-v1.5 embeddings through FastEmbed/ONNX Runtime, cosine similarity and hybrid keyword/heading ranking.",
        "Connected generation and feedback to Gemini through Vertex AI with service-account authentication, structured-output validation, token metering and budget controls.",
        "Coordinated retrieval, generation and feedback with learner context and saved state; bounded Qiskit execution and separated AI feedback from final assessment through fixed criteria and human review.",
        "Deployed on GCP Compute Engine with Docker/nginx, Artifact Registry and GitHub Actions CI/CD, using Workload Identity Federation, readiness checks and background-worker recovery.",
        "Used LangChain/LangGraph for stateful graph workflows, tool integration, checkpointing and human review.",
        "Impact estimate: approximately 94% less activity-preparation time (3 hours versus 10 minutes including educator review). Assumed timings; not measured."
      ],
      "href": "/projects/quantumlearn"
    },
    {
      "slug": "fraud-detection",
      "title": "Fraud Detection System",
      "year": null,
      "stack": "Python, machine learning, feature engineering, model evaluation",
      "points": [
        "Built a fraud-detection pipeline for 250K+ transaction records with 3% fraud prevalence, using preprocessing, feature engineering and five-fold cross-validation.",
        "Compared Logistic Regression, KNN and ensemble models, improving precision-recall AUC from 0.81 to 0.92; reduced false positives by 28% and inference latency by 35% through feature selection and dimensionality reduction."
      ],
      "href": "/projects/fraud-detection"
    },
    {
      "slug": "bayesian-insurance",
      "title": "Bayesian Insurance Risk Modelling",
      "year": null,
      "stack": "Gibbs sampling, MCMC, DIC, actuarial risk analysis",
      "points": [
        "Modelled insurance claim severity using Gibbs sampling and MCMC; identified heavy-tailed losses through exploratory analysis of claims exceeding $547K, with kurtosis above 175 and skewness above 11.",
        "Evaluated fit using DIC, sensitivity analysis and convergence diagnostics across 1M+ MCMC iterations to support premium pricing, reserve estimation and actuarial risk analysis."
      ],
      "href": "/projects/bayesian-insurance"
    },
    {
      "slug": "asx-stock-analysis",
      "title": "ASX Stock Data Analysis",
      "year": null,
      "stack": "PCA, correlation analysis, time-series statistics, quantitative analysis",
      "points": [
        "Analysed 10 ASX-listed stocks with PCA, correlation analysis and time-series statistics, explaining 77%+ of dataset variance and identifying three stock clusters.",
        "Examined volatility alongside macroeconomic events and developed diversified, defensive and high-risk portfolio strategies through quantitative analysis."
      ],
      "href": "/projects/asx-stock-analysis"
    }
  ]
};

export const credentials = [
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", description: "Cloud foundations and AWS services.", category: "Certification" },
  { title: "IBM Machine Learning", issuer: "IBM", description: "Machine learning and applied model development.", category: "Learning programme" },
];
