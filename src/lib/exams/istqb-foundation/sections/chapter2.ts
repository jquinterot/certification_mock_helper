import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Questions 1-10 (Test Set 1)
  {
    id: 1,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "In the V-model, which test level corresponds to the requirements specification phase?",
    options: [
      "Unit testing",
      "Integration testing",
      "System testing",
      "Acceptance testing"
    ],
    correctAnswer: 3,
    explanation: "In the V-model, acceptance testing corresponds to the requirements specification phase. Each development phase has a corresponding testing phase on the opposite side of the V."
  },
  {
    id: 2,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "Which test level is typically performed by the developers themselves?",
    options: [
      "System testing",
      "Acceptance testing",
      "Unit testing",
      "Regression testing"
    ],
    correctAnswer: 2,
    explanation: "Unit testing is typically performed by the developers themselves. It tests the smallest testable components of the software."
  },
  {
    id: 3,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "What is the main focus of integration testing?",
    options: [
      "Testing individual functions in isolation",
      "Testing interfaces and interactions between components or systems",
      "Testing the complete system against user requirements",
      "Testing the system under heavy load conditions"
    ],
    correctAnswer: 1,
    explanation: "Integration testing focuses on interfaces and interactions between integrated components or systems. It verifies that components work together correctly."
  },
  {
    id: 4,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "Which of the following best describes acceptance testing?",
    options: [
      "Testing performed by developers to verify individual code units",
      "Testing performed by end users or customers to validate the system meets their needs",
      "Testing performed to verify system performance under load",
      "Testing performed to check if the system is compatible with other systems"
    ],
    correctAnswer: 1,
    explanation: "Acceptance testing is typically performed by end users or customers to validate that the system meets their business needs and requirements."
  },
  {
    id: 5,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "Which of the following is a type of non-functional testing?",
    options: [
      "Usability testing",
      "Component testing",
      "Integration testing",
      "System testing"
    ],
    correctAnswer: 0,
    explanation: "Usability testing is a type of non-functional testing. Non-functional testing focuses on characteristics such as performance, usability, reliability, and security."
  },
  {
    id: 6,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "What is the main purpose of maintenance testing?",
    options: [
      "To verify that the software still meets user requirements after changes",
      "To test the software during the initial development phase",
      "To replace the need for regression testing",
      "To verify that the development team is following coding standards"
    ],
    correctAnswer: 0,
    explanation: "Maintenance testing verifies that the software still meets requirements after changes (corrections, enhancements, or environment changes) and includes regression testing."
  },
  {
    id: 7,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "What is the primary goal of shift-left testing?",
    options: [
      "To delay testing until the end of the development cycle",
      "To start testing as early as possible in the software development lifecycle",
      "To move testing to the right side of the V-model",
      "To eliminate the need for unit testing"
    ],
    correctAnswer: 1,
    explanation: "Shift-left testing is the approach of starting testing as early as possible in the software development lifecycle. This helps find defects early when they are cheaper to fix and reduces the risk of late-stage issues."
  },
  {
    id: 8,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "Which of the following is a characteristic of functional testing?",
    options: [
      "It tests the internal structure of the software",
      "It tests what the system does, based on requirements and specifications",
      "It tests the performance of the system under load",
      "It tests the compatibility of the system with other systems"
    ],
    correctAnswer: 1,
    explanation: "Functional testing tests what the system does, based on requirements and specifications. It verifies that the software functions correctly according to the specified requirements."
  },
  {
    id: 9,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "What is the difference between black-box and white-box testing?",
    options: [
      "Black-box testing is performed by developers, while white-box testing is performed by testers",
      "Black-box testing is based on requirements and specifications, while white-box testing is based on the internal structure of the software",
      "Black-box testing is only used for unit testing, while white-box testing is only used for system testing",
      "There is no difference between black-box and white-box testing"
    ],
    correctAnswer: 1,
    explanation: "Black-box testing is based on requirements and specifications, without knowledge of the internal code. White-box testing is based on the internal structure of the software, such as code, architecture, and data flow."
  },
  {
    id: 10,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "Which of the following is a type of change-related testing?",
    options: [
      "Performance testing",
      "Regression testing",
      "Usability testing",
      "Security testing"
    ],
    correctAnswer: 1,
    explanation: "Regression testing is a type of change-related testing. It verifies that existing functionality still works after changes have been made to the software. Other types of change-related testing include confirmation testing (re-testing)."
  }
];

export const questions2: ExamQuestion[] = [
  // Questions 11-20 (Test Set 2)
  {
    id: 1,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "Which SDLC model is characterized by short iterations, incremental delivery, and close collaboration between cross-functional teams?",
    options: [
      "Waterfall model",
      "V-model",
      "Agile model",
      "Spiral model"
    ],
    correctAnswer: 2,
    explanation: "The Agile model is characterized by short iterations, incremental delivery, and close collaboration between cross-functional teams. The Waterfall model is sequential, the V-model is an extension of Waterfall with corresponding test levels, and the Spiral model focuses on risk analysis."
  },
  {
    id: 2,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "What is the primary goal of regression testing?",
    options: [
      "To verify that new features work correctly",
      "To verify that existing functionality still works after changes have been made",
      "To verify that the system meets user requirements",
      "To verify that the system performs under load"
    ],
    correctAnswer: 1,
    explanation: "Regression testing verifies that existing functionality still works after changes have been made to the software. It is performed to ensure that new changes have not introduced defects in the existing code."
  },
  {
    id: 3,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "What is confirmation testing?",
    options: [
      "Testing that confirms the system meets all requirements",
      "Re-testing a defect after it has been fixed to verify that the fix works",
      "Testing that confirms the test plan is complete",
      "Testing that confirms the project is on schedule"
    ],
    correctAnswer: 1,
    explanation: "Confirmation testing (also known as re-testing) is the process of testing a defect after it has been fixed to verify that the fix works and that the defect is no longer present."
  },
  {
    id: 4,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "What is the main difference between smoke testing and sanity testing?",
    options: [
      "Smoke testing is performed daily, while sanity testing is performed weekly",
      "Smoke testing is a shallow and wide approach to verify the critical functionalities, while sanity testing is a narrow and deep approach to verify specific functionality after changes",
      "Smoke testing is performed by developers, while sanity testing is performed by testers",
      "There is no difference between smoke testing and sanity testing"
    ],
    correctAnswer: 1,
    explanation: "Smoke testing is a shallow and wide approach to verify the critical functionalities of the system. Sanity testing is a narrow and deep approach to verify specific functionality after changes. Both are types of change-related testing."
  },
  {
    id: 5,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "Which test activity is typically performed during the test planning phase?",
    options: [
      "Designing test cases",
      "Executing test cases",
      "Defining the test scope, approach, and schedule",
      "Analyzing test results"
    ],
    correctAnswer: 2,
    explanation: "During the test planning phase, the test scope, approach, resources, and schedule are defined. Test case design is part of test design, test execution involves running test cases, and analyzing test results is part of test completion."
  },
  {
    id: 6,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "In an iterative SDLC, when should testing activities ideally begin?",
    options: [
      "Only after all code is written",
      "As early as possible in the lifecycle",
      "Only after the first iteration is complete",
      "Only during the final iteration before release"
    ],
    correctAnswer: 1,
    explanation: "Testing activities should begin as early as possible in the lifecycle (shift-left testing). Early testing helps identify defects when they are cheaper to fix and prevents the accumulation of defects. In iterative models, testing is performed continuously throughout each iteration."
  },
  {
    id: 7,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "What is a test approach?",
    options: [
      "A document that describes the test environment",
      "The implementation of the test strategy for a specific project, including the test techniques and test levels to be used",
      "A list of all test cases for the project",
      "A report that summarizes the test results"
    ],
    correctAnswer: 1,
    explanation: "A test approach is the implementation of the test strategy for a specific project. It includes the test techniques, test levels, and test types to be used. The test strategy is a higher-level document, while the test approach is tailored to the specific project."
  },
  {
    id: 8,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "Which test level is typically performed in a test environment that is similar to the production environment?",
    options: [
      "Component testing",
      "Integration testing",
      "System testing",
      "Acceptance testing"
    ],
    correctAnswer: 2,
    explanation: "System testing is typically performed in a test environment that is similar to the production environment. It verifies the complete system against the specified requirements and includes both functional and non-functional testing."
  },
  {
    id: 9,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "What is the main purpose of a test plan?",
    options: [
      "To document the test cases for a specific feature",
      "To describe the scope, approach, resources, and schedule of testing activities",
      "To record the defects found during testing",
      "To provide a detailed report of test results"
    ],
    correctAnswer: 1,
    explanation: "A test plan describes the scope, approach, resources, and schedule of testing activities. It is a high-level document that guides the testing process."
  },
  {
    id: 10,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "A software team is working on an iterative project using Scrum. At the end of each sprint, the team demonstrates the working software to the product owner. Which test level is most likely being performed during this demonstration?",
    options: [
      "Component testing",
      "Integration testing",
      "System testing",
      "Acceptance testing"
    ],
    correctAnswer: 3,
    explanation: "During the sprint review, the team demonstrates working software to the product owner. This is a form of acceptance testing, where the product owner validates that the implemented features meet the user stories and acceptance criteria."
  }
];
