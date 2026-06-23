import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "According to the syllabus, which of the following is a risk of shadow AI that testing organizations should address?",
    options: [
      "AI tools generate too many test cases",
      "Compliance and regulatory issues from using unapproved AI tools that may lead to non-compliance with industry standards and regulations",
      "AI tools are too fast for testers to review",
      "AI tools only work in English"
    ],
    correctAnswer: 1,
    explanation: "The syllabus identifies three risks of shadow AI: (1) Information security and data privacy weaknesses — personal AI tools may lack robust security; (2) Compliance and regulatory issues — using unapproved AI tools can lead to non-compliance with industry standards and regulations; (3) Vague intellectual property — unclear licensing agreements can expose users to IP disputes."
  },
  {
    id: 2,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which change management approach is MOST effective when introducing GenAI test case generation to a team resistant to adopting AI?",
    options: [
      "Mandate immediate AI usage for all testing tasks",
      "Replace resistant team members with AI-friendly staff",
      "Start with volunteer champions on low-risk tasks, demonstrate value through results, provide hands-on training, and address fears about job displacement transparently",
      "Deploy AI tools without any communication or training"
    ],
    correctAnswer: 2,
    explanation: "Effective change management starts with volunteer champions who pilot low-risk tasks, demonstrate concrete value through measurable results, provide hands-on training to build confidence, and transparently address fears about job displacement by emphasizing AI as an augmentation tool."
  },
  {
    id: 3,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is a 'human-in-the-loop' (HITL) checkpoint in a GenAI testing pipeline and when should it be mandatory?",
    options: [
      "It allows humans to push a button every time the LLM generates text",
      "It requires human review and approval before AI-generated test cases proceed to the next stage, mandatory for safety-critical, regulated, or high-risk applications",
      "It is a method for humans to write test cases alongside AI",
      "It is an optional step that can always be skipped"
    ],
    correctAnswer: 1,
    explanation: "A human-in-the-loop checkpoint requires human review and approval before AI-generated test cases proceed. It is mandatory for safety-critical systems (medical devices, automotive), regulated industries (finance, healthcare), and high-risk applications where incorrect test cases could lead to severe consequences."
  },
  {
    id: 4,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a critical element of a GenAI governance policy specifically for testing organizations?",
    options: [
      "A policy that bans all AI tool usage permanently",
      "Clear guidelines on what data can be sent to LLMs, mandatory human review processes, approved tools list, prompt versioning requirements, and audit trails",
      "A policy that requires all test cases to be AI-generated",
      "A policy that only the testing lead can use AI tools"
    ],
    correctAnswer: 1,
    explanation: "A GenAI governance policy for testing must include: data classification rules, mandatory human review processes, an approved tools list to prevent Shadow AI, prompt versioning requirements for reproducibility, and audit trails for compliance and quality tracking."
  },
  {
    id: 5,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "An organization uses a public LLM API for test case generation. After switching to a self-hosted open-source model to save costs, test case quality drops significantly. What is the BEST first step to remediate?",
    options: [
      "Switch back to the public API immediately",
      "Fine-tune the self-hosted model on the organization's historical test cases and implement RAG with project-specific knowledge",
      "Increase the temperature to maximum",
      "Abandon AI-assisted testing entirely"
    ],
    correctAnswer: 1,
    explanation: "When a self-hosted open-source model underperforms, the best first step is fine-tuning it on the organization's historical test cases (domain-specific knowledge) and implementing RAG with project-specific artifacts. This bridges the capability gap while maintaining data privacy and cost savings."
  },
  {
    id: 6,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which approach to scaling GenAI testing tools across multiple teams is MOST likely to maintain quality and consistency?",
    options: [
      "Each team chooses and deploys their own LLM tools independently",
      "Establish a centralized platform team that provides approved tools, shared prompt libraries, and best practices while allowing team-level customization",
      "Deploy identical configurations to all teams with no customization allowed",
      "Only allow one team to use GenAI until perfect results are achieved"
    ],
    correctAnswer: 1,
    explanation: "A centralized platform team providing approved tools, shared prompt libraries, and best practices ensures consistency and compliance while allowing team-level customization for specific testing needs. A GenAI strategy should include process guidelines, approved tools, and best practices to maintain quality and compliance across teams."
  }
];