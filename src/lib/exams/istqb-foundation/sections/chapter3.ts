import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Questions 1-10 (Test Set 1)
  {
    id: 1,
    domain: "Chapter 3: Static Testing",
    question: "Which of the following is a static testing technique?",
    options: [
      "Unit testing",
      "Integration testing",
      "Code review",
      "System testing"
    ],
    correctAnswer: 2,
    explanation: "Code review is a static testing technique. Static testing involves examining work products without executing the code."
  },
  {
    id: 2,
    domain: "Chapter 3: Static Testing",
    question: "What is the main difference between static analysis and dynamic testing?",
    options: [
      "Static analysis requires the code to be executed, while dynamic testing does not",
      "Static analysis does not require the code to be executed, while dynamic testing does",
      "Static analysis is only performed by developers, while dynamic testing is only performed by testers",
      "Static analysis finds only syntax errors, while dynamic testing finds only logic errors"
    ],
    correctAnswer: 1,
    explanation: "Static analysis examines code without executing it, while dynamic testing requires the code to be executed. Both can find various types of defects."
  },
  {
    id: 3,
    domain: "Chapter 3: Static Testing",
    question: "Which of the following is a typical benefit of static testing?",
    options: [
      "It requires specialized hardware to execute the code",
      "It can find defects early in the development cycle",
      "It can only be performed after the code is complete",
      "It cannot find defects in requirements documents"
    ],
    correctAnswer: 1,
    explanation: "Static testing can find defects early in the development cycle, often before the code is executed. This makes defects cheaper and easier to fix."
  },
  {
    id: 4,
    domain: "Chapter 3: Static Testing",
    question: "What is a formal review characterized by?",
    options: [
      "No documentation is required",
      "Individual preparation, defined roles, and documented results",
      "Only the author is present",
      "It is always performed by automated tools"
    ],
    correctAnswer: 1,
    explanation: "Formal reviews are characterized by individual preparation, defined roles (e.g., moderator, author, reviewer), and documented results."
  },
  {
    id: 5,
    domain: "Chapter 3: Static Testing",
    question: "Which of the following is a common review type?",
    options: [
      "Informal review",
      "Walkthrough",
      "Technical review",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Common review types include informal review, walkthrough, technical review, and inspection. Each has different levels of formality and objectives."
  },
  {
    id: 6,
    domain: "Chapter 3: Static Testing",
    question: "What is the primary role of the moderator in a formal review?",
    options: [
      "To write the code being reviewed",
      "To ensure the review process is followed and to manage the review meeting",
      "To fix all defects found during the review",
      "To approve the release of the software"
    ],
    correctAnswer: 1,
    explanation: "The moderator (or facilitator) is responsible for ensuring the review process is followed, scheduling the review meeting, and managing the review process. The author is the creator of the work product, reviewers examine the work product, and the manager may authorize resources but does not typically run the review."
  },
  {
    id: 7,
    domain: "Chapter 3: Static Testing",
    question: "Which of the following is a typical activity in a walkthrough review?",
    options: [
      "Collecting metrics and formal follow-up",
      "The author guiding participants through the work product to gather feedback",
      "Formal entry and exit criteria evaluation",
      "A trained moderator leading the review without the author"
    ],
    correctAnswer: 1,
    explanation: "In a walkthrough, the author typically guides participants through the work product to gather feedback and explain the content. Walkthroughs are less formal than inspections and do not typically involve formal metrics, entry/exit criteria, or a trained moderator leading without the author."
  },
  {
    id: 8,
    domain: "Chapter 3: Static Testing",
    question: "What is a review checklist used for?",
    options: [
      "To list all the participants in the review",
      "To guide reviewers in identifying specific types of defects",
      "To document the test results",
      "To schedule the review meeting"
    ],
    correctAnswer: 1,
    explanation: "A review checklist is used to guide reviewers in identifying specific types of defects during a review. It helps ensure consistency and thoroughness in the review process."
  },
  {
    id: 9,
    domain: "Chapter 3: Static Testing",
    question: "Which of the following is a benefit of using static analysis tools?",
    options: [
      "They can find defects without executing the code",
      "They can only be used after the code is deployed",
      "They require user interaction to test the user interface",
      "They can only find syntax errors"
    ],
    correctAnswer: 0,
    explanation: "Static analysis tools can find defects without executing the code. They analyze source code, bytecode, or binary code for potential defects, including coding standard violations, security vulnerabilities, and complexity issues."
  },
  {
    id: 10,
    domain: "Chapter 3: Static Testing",
    question: "What is cyclomatic complexity?",
    options: [
      "The number of lines of code in a program",
      "The number of linearly independent paths through a program's source code",
      "The number of defects found in a program",
      "The number of test cases needed for full coverage"
    ],
    correctAnswer: 1,
    explanation: "Cyclomatic complexity measures the number of linearly independent paths through a program's source code. It is a metric used in static analysis to assess code complexity and maintainability."
  }
];

export const questions2: ExamQuestion[] = [
  // Questions 11-20 (Test Set 2)
  {
    id: 1,
    domain: "Chapter 3: Static Testing",
    question: "Which review type is the most formal, uses defined roles, and requires documented results and metrics?",
    options: [
      "Informal review",
      "Walkthrough",
      "Technical review",
      "Inspection"
    ],
    correctAnswer: 3,
    explanation: "Inspection is the most formal review type. It uses defined roles (e.g., moderator, author, reader), requires documented results, collects metrics, and follows a formal process. Informal reviews are ad-hoc, walkthroughs are led by the author, and technical reviews are less formal than inspections."
  },
  {
    id: 2,
    domain: "Chapter 3: Static Testing",
    question: "What is the primary benefit of conducting reviews early in the SDLC?",
    options: [
      "It eliminates the need for dynamic testing",
      "It finds defects before they propagate to later phases, reducing rework costs",
      "It ensures the code is automatically optimized",
      "It replaces the need for a test plan"
    ],
    correctAnswer: 1,
    explanation: "Reviews conducted early in the SDLC find defects before they propagate to later phases, reducing rework costs. Early defect detection is significantly cheaper than finding defects during testing or in production. Reviews do not eliminate dynamic testing, optimize code, or replace test plans."
  },
  {
    id: 3,
    domain: "Chapter 3: Static Testing",
    question: "Which of the following is a typical static analysis technique?",
    options: [
      "Data flow analysis",
      "Load testing",
      "User interface testing",
      "System integration testing"
    ],
    correctAnswer: 0,
    explanation: "Data flow analysis is a static analysis technique that examines the flow of data through the code to identify potential issues such as unused variables, uninitialized variables, and potential null pointer dereferences. Load testing, UI testing, and system integration testing are dynamic testing techniques."
  },
  {
    id: 4,
    domain: "Chapter 3: Static Testing",
    question: "What is control flow analysis?",
    options: [
      "A technique that tests the user interface flow",
      "A static analysis technique that examines the sequence of execution of statements in the code",
      "A technique that tests the data flow between systems",
      "A dynamic testing technique for web applications"
    ],
    correctAnswer: 1,
    explanation: "Control flow analysis is a static analysis technique that examines the sequence of execution of statements in the code. It helps identify unreachable code, infinite loops, and other control flow issues."
  },
  {
    id: 5,
    domain: "Chapter 3: Static Testing",
    question: "What is linting?",
    options: [
      "A dynamic testing technique for web applications",
      "A static analysis technique that checks code for potential errors, style violations, and suspicious constructs",
      "A review technique that involves walking through the code with the author",
      "A test management technique for tracking defects"
    ],
    correctAnswer: 1,
    explanation: "Linting is a static analysis technique that checks code for potential errors, style violations, and suspicious constructs. It is often automated and integrated into the development environment or build process."
  },
  {
    id: 6,
    domain: "Chapter 3: Static Testing",
    question: "Which of the following is a typical review role?",
    options: [
      "The author",
      "The reviewer",
      "The moderator",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Typical review roles include the author (creator of the work product), reviewer (examines the work product), moderator (manages the review process), and manager (may authorize resources)."
  },
  {
    id: 7,
    domain: "Chapter 3: Static Testing",
    question: "What is the difference between static testing and dynamic testing?",
    options: [
      "Static testing requires the code to be executed, while dynamic testing does not",
      "Static testing examines work products without executing the code, while dynamic testing requires execution",
      "Static testing is only performed by developers, while dynamic testing is only performed by testers",
      "Static testing is only used for unit testing, while dynamic testing is only used for system testing"
    ],
    correctAnswer: 1,
    explanation: "Static testing examines work products without executing the code, such as reviews, walkthroughs, and static analysis. Dynamic testing requires the code to be executed, such as unit testing, integration testing, and system testing."
  },
  {
    id: 8,
    domain: "Chapter 3: Static Testing",
    question: "What is a technical review?",
    options: [
      "A formal review that uses defined roles and collects metrics",
      "A peer review that focuses on technical content and is typically led by a technical expert",
      "An informal review that is performed without any preparation",
      "A review that is only performed by automated tools"
    ],
    correctAnswer: 1,
    explanation: "A technical review is a peer review that focuses on technical content and is typically led by a technical expert. It is less formal than an inspection but more formal than a walkthrough or informal review."
  },
  {
    id: 9,
    domain: "Chapter 3: Static Testing",
    question: "Which of the following is a benefit of tool-supported static analysis?",
    options: [
      "It can only find defects that are visible during execution",
      "It can identify potential defects that may be difficult to find during dynamic testing",
      "It requires manual execution of each test case",
      "It can only be used for unit testing"
    ],
    correctAnswer: 1,
    explanation: "Tool-supported static analysis can identify potential defects that may be difficult to find during dynamic testing, such as coding standard violations, security vulnerabilities, and unreachable code. It does not require execution and can be applied to various types of code."
  },
  {
    id: 10,
    domain: "Chapter 3: Static Testing",
    question: "A team is reviewing a requirements document before development begins. Which type of testing is being performed?",
    options: [
      "Unit testing",
      "Integration testing",
      "Static testing",
      "System testing"
    ],
    correctAnswer: 2,
    explanation: "Reviewing a requirements document before development begins is a form of static testing. Static testing involves examining work products without executing the code, and it can be applied to requirements, designs, code, and other documents."
  }
];
