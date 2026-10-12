export const researchPapers = [
  {
    "id": "learnlens-education",
    "title": "LearnLens — Adaptive Agentic AI for Quantum Computing Education",
    "venue": "ACE 2027",
    "areas": "AI in education, large language models (LLMs), multi-agent AI systems, adaptive learning, intelligent tutoring systems, quantum computing education, learner modelling, AI-supported feedback and assessment.",
    "question": "Can an adaptive, agent-based AI learning system improve students’ conceptual understanding and learning progression in introductory quantum computing compared with fixed AI support or search-based learning?",
    "overview": [
      "LearnLens coordinates specialised AI roles to prepare learning activities, provide reviewed hints and feedback, and support decisions about a learner’s next activity. It is designed to guide students’ reasoning without simply supplying answers.",
      "The planned study compares LearnLens with standalone AI chat support and search-based learning. Learning will be assessed at baseline, during learning checkpoints, immediately after the activities, and at a seven-day follow-up. Assessments include conceptual explanations and basic quantum circuit tasks. The study will also examine assessment reliability, student experience, and whether the research procedures work as intended."
    ],
    "authors": "Akshat Porwal, Jordan Tran, Raveen Victor Munasinghe, Arv Surana, Mahissh Pranav Surendhar Rajasudha",
    "supervisor": "Charith Jayasekara",
    "status": "In development. The study protocol, assessment materials, analysis plan, and ethics requirements are still being finalised. This paper has not been represented as submitted or accepted."
  },
  {
    "id": "learnlens-architecture",
    "title": "LearnLens — System Architecture and Technology",
    "venue": "ICSE 2027",
    "areas": "Agentic AI, multi-agent systems, large language models (LLMs), retrieval-augmented generation (RAG), AI system design, educational technology, human-centred AI, software engineering.",
    "question": "How can a specialised, agent-based AI system coordinate activity generation, learner support, feedback review, and progression decisions while providing structured learning support and preserving student independence?",
    "overview": [
      "This paper focuses on the design and implementation of LearnLens as a software system. The platform separates learning tasks across specialised AI roles, including activity generation, tutoring, feedback generation, and feedback quality review. It uses course materials and learner activity to ground support, applies review and fallback processes to feedback, and uses explicit rules to determine when learner evidence can inform activity suggestions.",
      "The paper will describe the system architecture, workflows, evidence handling, quality checks, and safeguards for independent student work. It concerns the technical design of LearnLens; educational effectiveness should only be claimed if supported by study findings."
    ],
    "authors": "Akshat Porwal, Jordan Tran, Raveen Victor Munasinghe, Arv Surana, Mahissh Pranav Surendhar Rajasudha",
    "supervisor": "Charith Jayasekara",
    "status": "In development. The specific technical contribution and evaluation method should be confirmed against the technology paper draft. This paper has not been represented as submitted or accepted."
  },
  {
    "id": "adaptive-practice",
    "title": "Adaptive Practice for Transfer to Unseen Questions",
    "venue": "To be determined",
    "areas": "Artificial intelligence in education, learner modelling, spaced repetition, large language models, question generation, transfer learning, educational assessment.",
    "question": "Among learners studying the same concepts for the same amount of time, does an adaptive practice system combining spaced repetition, learner models, and reviewed AI-generated questions improve delayed performance on unseen assessment questions compared with FSRS-based flashcard practice?",
    "overview": [
      "This project investigates whether combining spaced review with learner-model-guided practice and AI-generated question variants helps learners apply studied concepts to questions they have not previously encountered. The study will distinguish performance on practiced flashcards from transfer to new questions, and will assess outcomes using a fixed content blueprint and validated scoring criteria. It will also examine question quality, study time, and delayed retention."
    ],
    "authors": "Akshat Porwal",
    "supervisor": "Charith Jayasekara",
    "status": "Research question in development. The study design, assessment materials, analysis plan, and ethics requirements remain to be finalised. This project has not been represented as submitted or accepted."
  },
  {
    "id": "deadline-scheduling",
    "title": "Deadline-Aware Scheduling for Short-Term Learning",
    "venue": "To be determined",
    "areas": "Artificial intelligence in education, personalized learning, learner modelling, spaced repetition, learning analytics, educational assessment, scheduling algorithms.",
    "question": "For learners studying a defined set of concepts under a fixed study-time budget, does a personalized review schedule based on the learning deadline and target assessment performance increase deadline assessment scores, compared with FSRS and transparent scheduling baselines?",
    "overview": [
      "This project examines how practice should be scheduled when learners have a specific deadline and a defined performance goal. It will compare scheduling policies using equivalent learning content and assessments that represent the intended concepts and difficulty levels. The study will measure assessment performance at the deadline, study time, target attainment, and retention after the deadline. Model forecasts will be evaluated separately from observed assessment results."
    ],
    "authors": "Akshat Porwal",
    "supervisor": "Charith Jayasekara",
    "status": "Research question in development. The study design, target definition, assessment materials, analysis plan, and ethics requirements remain to be finalised. This project has not been represented as submitted or accepted."
  }
] as const;
