import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is 'Shadow AI' in testing organizations?",
    options: [
      "Unauthorized use of AI tools without organizational approval",
      "AI systems that run on dark servers",
      "AI models that generate dark-themed test cases",
      "AI systems that only work at night"
    ],
    correctAnswer: 0,
    explanation: "Shadow AI refers to the unauthorized use of AI tools without organizational approval or oversight. This poses risks to data security, compliance, and quality consistency."
  },
  {
    id: 2,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a key criterion for selecting an LLM for a testing task?",
    options: [
      "The model's color scheme",
      "The model's training location",
      "The model's file size",
      "The model's performance on the task, cost, and context window size"
    ],
    correctAnswer: 3,
    explanation: "Key criteria for selecting an LLM include: performance on the specific task, cost per token, context window size, and latency. These factors determine whether the model is suitable for the testing use case."
  },
  {
    id: 3,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of a phased approach to GenAI adoption?",
    options: [
      "To reduce the number of testers needed",
      "To implement all tools simultaneously",
      "To manage risks, build skills, and demonstrate value incrementally",
      "To avoid using any AI tools"
    ],
    correctAnswer: 2,
    explanation: "A phased approach to GenAI adoption manages risks by starting with pilot projects, building team skills, and demonstrating value before scaling. This reduces disruption and allows lessons to be learned."
  },
  {
    id: 4,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a key skill for testers in a GenAI-enabled team?",
    options: [
      "Ability to manually write all test cases without tools",
      "Prompt engineering and critical evaluation of AI-generated outputs",
      "Avoiding all AI tools",
      "Working in isolation"
    ],
    correctAnswer: 1,
    explanation: "Testers in GenAI-enabled teams need prompt engineering skills and the ability to critically evaluate AI-generated outputs. This includes identifying hallucinations, verifying coverage, and ensuring quality."
  },
  {
    id: 5,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of a 'GenAI adoption roadmap'?",
    options: [
      "To plan phased implementation, identify use cases, and manage risks",
      "To immediately replace all testers with AI",
      "To avoid using any AI tools",
      "To reduce testing budgets to zero"
    ],
    correctAnswer: 0,
    explanation: "A GenAI adoption roadmap plans phased implementation, identifies high-value use cases, and manages risks. It ensures that GenAI adoption is strategic, controlled, and aligned with organizational goals."
  },
  {
    id: 6,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a criterion for selecting between an LLM and an SLM?",
    options: [
      "The model's logo color",
      "The model's training location",
      "The model's age",
      "The task complexity, cost constraints, and latency requirements"
    ],
    correctAnswer: 3,
    explanation: "Selection criteria include task complexity (simple tasks may use SLMs), cost constraints (SLMs are cheaper), and latency requirements (SLMs are faster). Complex reasoning tasks may require LLMs despite higher costs."
  },
  {
    id: 7,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a risk of Shadow AI in testing?",
    options: [
      "It reduces testing costs",
      "It improves test coverage",
      "It may lead to data security violations and inconsistent quality",
      "It eliminates the need for human testers"
    ],
    correctAnswer: 2,
    explanation: "Shadow AI may lead to data security violations (sensitive data sent to unauthorized APIs) and inconsistent quality (different tools used by different team members). This requires governance and oversight."
  },
  {
    id: 8,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of change management in GenAI adoption?",
    options: [
      "To prevent any changes from occurring",
      "To help teams adapt to new processes, tools, and responsibilities",
      "To eliminate all testing roles",
      "To reduce the number of testers"
    ],
    correctAnswer: 1,
    explanation: "Change management helps teams adapt to new processes, tools, and responsibilities. It addresses resistance, provides training, and ensures that GenAI adoption is successful and sustainable."
  }
];

export const questions2: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of a 'GenAI adoption strategy' in a test organization?",
    options: [
      "To define how GenAI will be used, managed, and governed in testing",
      "To immediately replace all testers with AI",
      "To avoid using any AI tools",
      "To reduce testing budgets to zero"
    ],
    correctAnswer: 0,
    explanation: "A GenAI adoption strategy defines how GenAI will be used, managed, and governed in testing. It addresses tool selection, data security, quality control, and team skills."
  },
  {
    id: 2,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a risk of rapid GenAI adoption without proper planning?",
    options: [
      "It always improves test quality",
      "It reduces testing time",
      "It eliminates the need for test management",
      "It may lead to inconsistent practices, security risks, and wasted resources"
    ],
    correctAnswer: 3,
    explanation: "Rapid GenAI adoption without proper planning may lead to inconsistent practices, security risks, and wasted resources. A phased approach with proper governance is essential."
  },
  {
    id: 3,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a skill that becomes more important for testers in a GenAI-enabled team?",
    options: [
      "Manual test case creation without tools",
      "Avoiding all AI tools",
      "Critical evaluation of AI-generated outputs and prompt engineering",
      "Working in isolation"
    ],
    correctAnswer: 2,
    explanation: "Critical evaluation of AI-generated outputs and prompt engineering become more important for testers. These skills ensure that AI tools are used effectively and that quality is maintained."
  },
  {
    id: 4,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of governance in GenAI adoption?",
    options: [
      "To prevent all use of AI tools",
      "To ensure AI tools are used responsibly, securely, and consistently",
      "To eliminate all testing roles",
      "To reduce testing budgets"
    ],
    correctAnswer: 1,
    explanation: "Governance in GenAI adoption ensures that AI tools are used responsibly, securely, and consistently. It addresses data privacy, security, compliance, and quality control."
  },
  {
    id: 5,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a characteristic of successful GenAI adoption in testing?",
    options: [
      "Combining AI tools with human expertise and oversight",
      "Replacing all human testers",
      "Using AI tools without any evaluation",
      "Avoiding all AI tools"
    ],
    correctAnswer: 0,
    explanation: "Successful GenAI adoption combines AI tools with human expertise and oversight. AI tools enhance productivity, but human testers provide critical evaluation, domain knowledge, and quality assurance."
  },
  {
    id: 6,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of a pilot project in GenAI adoption?",
    options: [
      "To immediately deploy AI across all teams",
      "To avoid using any AI tools",
      "To eliminate all testing roles",
      "To test GenAI tools on a small scale, learn lessons, and demonstrate value"
    ],
    correctAnswer: 3,
    explanation: "A pilot project tests GenAI tools on a small scale, allowing the organization to learn lessons, identify risks, and demonstrate value before scaling to larger teams."
  },
  {
    id: 7,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a best practice for managing GenAI tools in a testing team?",
    options: [
      "Allowing each tester to use any tool they want without oversight",
      "Avoiding all AI tools",
      "Establishing approved tools, usage guidelines, and review processes",
      "Using only one tool for all tasks"
    ],
    correctAnswer: 2,
    explanation: "Establishing approved tools, usage guidelines, and review processes ensures that GenAI tools are used consistently and responsibly. This prevents Shadow AI and maintains quality."
  },
  {
    id: 8,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a metric for measuring ROI of GenAI tools in testing?",
    options: [
      "Number of testers fired",
      "Time saved in test case generation, defect detection rate improvement, and cost per test case",
      "Number of AI tools purchased",
      "Lines of code written"
    ],
    correctAnswer: 1,
    explanation: "ROI of GenAI tools in testing is measured by time saved in test case generation, defect detection rate improvement, and cost per test case. These metrics demonstrate whether the tool investment is delivering value."
  },
  {
    id: 9,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which role is MOST responsible for integrating LLM-based tools into existing test automation frameworks?",
    options: [
      "Test automation engineer",
      "Manual tester",
      "Business analyst",
      "Project manager"
    ],
    correctAnswer: 0,
    explanation: "Test automation engineers are most responsible for integrating LLM-based tools into existing test automation frameworks. They have the technical skills to build APIs, handle tool integration, and maintain the automation infrastructure."
  },
  {
    id: 10,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is essential for successful GenAI adoption in a testing team?",
    options: [
      "Replacing all human testers with AI",
      "Using AI tools without any evaluation",
      "Avoiding all AI tools",
      "Combining AI tools with human expertise, oversight, and governance"
    ],
    correctAnswer: 3,
    explanation: "Successful GenAI adoption combines AI tools with human expertise, oversight, and governance. AI tools enhance productivity, but human testers provide critical evaluation, domain knowledge, and quality assurance."
  },
  {
    id: 11,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a change management challenge when introducing GenAI to testing teams?",
    options: [
      "Testers will automatically adapt without any issues",
      "AI tools are always accepted immediately",
      "Resistance to change, fear of job displacement, and need for new skills training",
      "No training is needed"
    ],
    correctAnswer: 2,
    explanation: "Change management challenges include resistance to change, fear of job displacement, and the need for new skills training. Addressing these through communication, training, and demonstrating value is essential for successful adoption."
  },
  {
    id: 12,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of governance policies for GenAI usage in testing organizations?",
    options: [
      "To prevent all use of AI tools",
      "To ensure responsible, secure, and compliant use of AI tools across the organization",
      "To eliminate all testing roles",
      "To reduce testing budgets"
    ],
    correctAnswer: 1,
    explanation: "Governance policies for GenAI usage ensure responsible, secure, and compliant use of AI tools. They address data privacy, security, compliance, quality control, and ethical considerations."
  },
  {
    id: 13,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a best practice for integrating GenAI tools with existing test management systems?",
    options: [
      "Use APIs and connectors to integrate AI tools while maintaining current workflows",
      "Replace all existing systems immediately",
      "Avoid all integration",
      "Use only manual data transfer"
    ],
    correctAnswer: 0,
    explanation: "Using APIs and connectors to integrate AI tools with existing test management systems preserves current workflows while adding AI capabilities. This minimizes disruption and allows gradual adoption."
  },
  {
    id: 14,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a risk of using public LLM APIs for testing in regulated industries?",
    options: [
      "The model is always more accurate",
      "The model is always faster",
      "The model is always cheaper",
      "Sensitive data may be exposed to third-party providers"
    ],
    correctAnswer: 3,
    explanation: "Using public LLM APIs for testing in regulated industries may expose sensitive data to third-party providers. This requires data anonymization, use of private LLMs, or on-premise deployment."
  },
  {
    id: 15,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "A test manager is creating a GenAI adoption strategy for their team. They should start with which phase?",
    options: [
      "Immediate deployment to all teams",
      "Avoiding all AI tools",
      "Pilot project with a small team to test and evaluate",
      "Replacing all testers with AI"
    ],
    correctAnswer: 2,
    explanation: "A pilot project with a small team is the recommended starting phase for GenAI adoption. This allows the organization to test tools, identify risks, and demonstrate value before scaling to larger teams."
  },
  {
    id: 16,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a key consideration when scaling GenAI adoption in testing?",
    options: [
      "Replacing all human testers immediately",
      "Training, governance, and continuous evaluation of AI tools",
      "Avoiding all AI tools",
      "Using only one LLM provider"
    ],
    correctAnswer: 1,
    explanation: "Scaling GenAI adoption requires training (building team skills), governance (ensuring responsible use), and continuous evaluation (monitoring quality and ROI). These factors ensure sustainable adoption."
  }
];
