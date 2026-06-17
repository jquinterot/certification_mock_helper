import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Questions 1-10 (Test Set 1)
  {
    id: 1,
    domain: "Chapter 5: Test Management",
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
    id: 2,
    domain: "Chapter 5: Test Management",
    question: "Which of the following is a risk-based testing approach?",
    options: [
      "Testing all features equally without prioritization",
      "Prioritizing testing based on the likelihood and impact of potential failures",
      "Testing only the features that are easiest to test",
      "Testing only the features that have the most test cases"
    ],
    correctAnswer: 1,
    explanation: "Risk-based testing prioritizes testing based on the likelihood and impact of potential failures. High-risk areas are tested first or more thoroughly."
  },
  {
    id: 3,
    domain: "Chapter 5: Test Management",
    question: "What does the test estimation process typically involve?",
    options: [
      "Guessing the time needed without any analysis",
      "Using historical data, expert judgment, or estimation techniques to predict the effort required for testing",
      "Only counting the number of test cases",
      "Using only the number of developers to estimate testing effort"
    ],
    correctAnswer: 1,
    explanation: "Test estimation involves using historical data, expert judgment, or estimation techniques (e.g., metrics-based, expert-based) to predict the effort required for testing."
  },
  {
    id: 4,
    domain: "Chapter 5: Test Management",
    question: "What is the purpose of test monitoring?",
    options: [
      "To write test cases for new features",
      "To check the status of testing activities and compare actual progress against the plan",
      "To fix defects found during testing",
      "To design the test environment"
    ],
    correctAnswer: 1,
    explanation: "Test monitoring involves checking the status of testing activities and comparing actual progress against the plan. It provides information for test control."
  },
  {
    id: 5,
    domain: "Chapter 5: Test Management",
    question: "Which of the following is a test exit criterion?",
    options: [
      "The test plan has been approved",
      "All high-priority test cases have been executed and the defect density is below a defined threshold",
      "The test environment has been set up",
      "All test cases have been written"
    ],
    correctAnswer: 1,
    explanation: "Test exit criteria define when testing can be considered complete. An example is that all high-priority test cases have been executed and the defect density is below a defined threshold."
  },
  {
    id: 6,
    domain: "Chapter 5: Test Management",
    question: "What is the main purpose of test control?",
    options: [
      "To design test cases",
      "To take corrective actions when monitoring shows deviations from the plan",
      "To execute test cases manually",
      "To write test scripts"
    ],
    correctAnswer: 1,
    explanation: "Test control involves taking corrective actions when monitoring shows deviations from the plan. For example, reprioritizing tests or adjusting resources."
  },
  {
    id: 7,
    domain: "Chapter 5: Test Management",
    question: "Which of the following is a typical test deliverable?",
    options: [
      "Source code",
      "Test plan and test cases",
      "User manual",
      "Design document"
    ],
    correctAnswer: 1,
    explanation: "Test deliverables include documents such as the test plan, test design specification, test cases, and test summary report."
  },
  {
    id: 8,
    domain: "Chapter 5: Test Management",
    question: "What is a test policy?",
    options: [
      "A detailed document describing how to test a specific feature",
      "A high-level document describing the principles, approach, and major objectives of testing for the organization",
      "A document listing all test cases for a project",
      "A document describing the coding standards for developers"
    ],
    correctAnswer: 1,
    explanation: "A test policy is a high-level document describing the principles, approach, and major objectives of testing for the organization."
  },
  {
    id: 9,
    domain: "Chapter 5: Test Management",
    question: "Which of the following is a test independence benefit?",
    options: [
      "Testers are always more familiar with the code than developers",
      "Independent testers can recognize different kinds of failures and defects compared to developers",
      "Independent testers do not need to follow the test plan",
      "Independent testers always work faster than developers"
    ],
    correctAnswer: 1,
    explanation: "Independent testers can recognize different kinds of failures and defects compared to developers because they have a different perspective and are less likely to make the same assumptions."
  },
  {
    id: 10,
    domain: "Chapter 5: Test Management",
    question: "What is the difference between product risk and project risk?",
    options: [
      "Product risk is related to the project schedule, while project risk is related to the quality of the work product",
      "Product risk is related to the quality of the work product, while project risk is related to the project management and execution",
      "Product risk is only found during testing, while project risk is only found during planning",
      "There is no difference between product risk and project risk"
    ],
    correctAnswer: 1,
    explanation: "Product risks are related to the quality of the work product (e.g., defects, performance issues). Project risks are related to the project management and execution (e.g., delays, lack of resources, budget overruns)."
  }
];

export const questions2: ExamQuestion[] = [
  // Questions 11-20 (Test Set 2)
  {
    id: 1,
    domain: "Chapter 5: Test Management",
    question: "Which of the following is typically included in a test plan?",
    options: [
      "The detailed code of the system under test",
      "The test scope, approach, resources, and schedule",
      "The user manual for the application",
      "The source code repository URL"
    ],
    correctAnswer: 1,
    explanation: "A test plan typically includes the test scope, approach, resources, and schedule. It may also include test levels, entry and exit criteria, and risk assessment. It does not include the detailed code, user manual, or repository URL."
  },
  {
    id: 2,
    domain: "Chapter 5: Test Management",
    question: "A test manager uses historical data from similar projects to estimate the testing effort. Which estimation technique is being used?",
    options: [
      "Expert-based estimation",
      "Metrics-based estimation",
      "Top-down estimation",
      "Bottom-up estimation"
    ],
    correctAnswer: 1,
    explanation: "Metrics-based estimation (also known as analogous or formula-based estimation) uses historical data and metrics from similar projects to estimate effort. Expert-based estimation relies on the experience of experts. Top-down and bottom-up are approaches to breaking down estimation work."
  },
  {
    id: 3,
    domain: "Chapter 5: Test Management",
    question: "What are exit criteria used for in test management?",
    options: [
      "To determine when to start testing",
      "To define the conditions that must be met to conclude a test level",
      "To identify the test environment requirements",
      "To specify the test data needed for execution"
    ],
    correctAnswer: 1,
    explanation: "Exit criteria define the conditions that must be met to conclude a test level or test phase. They help determine when testing is complete and whether the system is ready for the next phase. Entry criteria determine when to start testing, not exit criteria."
  },
  {
    id: 4,
    domain: "Chapter 5: Test Management",
    question: "In defect management, what does severity indicate?",
    options: [
      "The order in which the defect should be fixed",
      "The impact of the defect on the system's functionality",
      "The tester who reported the defect",
      "The estimated time to fix the defect"
    ],
    correctAnswer: 1,
    explanation: "Severity indicates the impact of the defect on the system's functionality. Priority indicates the order in which the defect should be fixed. Severity is typically assigned by the tester, while priority is assigned by the project manager or development team."
  },
  {
    id: 5,
    domain: "Chapter 5: Test Management",
    question: "Which of the following is a product risk in risk-based testing?",
    options: [
      "Delays in test environment availability",
      "A defect in the login functionality that prevents user access",
      "Lack of skilled testers on the project",
      "Budget overruns due to extended testing"
    ],
    correctAnswer: 1,
    explanation: "Product risks are risks related to the quality of the work product (e.g., defects, performance issues). A defect in the login functionality is a product risk. Project risks (delays, lack of resources, budget overruns) relate to the project management and execution."
  },
  {
    id: 6,
    domain: "Chapter 5: Test Management",
    question: "Which test activity involves comparing actual test results with expected results and documenting discrepancies?",
    options: [
      "Test planning",
      "Test monitoring",
      "Test execution",
      "Test completion"
    ],
    correctAnswer: 2,
    explanation: "Test execution involves running test cases, comparing actual results with expected results, and documenting discrepancies as defects. Test planning defines the approach, test monitoring tracks progress, and test completion involves finalizing test activities and reporting."
  },
  {
    id: 7,
    domain: "Chapter 5: Test Management",
    question: "What is the primary purpose of test monitoring?",
    options: [
      "To create test cases",
      "To track test progress and identify deviations from the plan",
      "To execute test cases",
      "To fix defects found during testing"
    ],
    correctAnswer: 1,
    explanation: "Test monitoring is the activity of tracking test progress and identifying deviations from the test plan. It involves collecting metrics, comparing actual progress against planned progress, and reporting status. It does not involve creating test cases, executing them, or fixing defects."
  },
  {
    id: 8,
    domain: "Chapter 5: Test Management",
    question: "Which document is typically used to track the lifecycle of a defect from discovery to closure?",
    options: [
      "Test plan",
      "Test case specification",
      "Defect report",
      "Test strategy"
    ],
    correctAnswer: 2,
    explanation: "A defect report (or bug report) is used to track the lifecycle of a defect from discovery to closure. It includes details such as the defect description, severity, priority, status, and resolution. The test plan defines the overall approach, test cases specify test steps, and the test strategy defines high-level testing guidelines."
  },
  {
    id: 9,
    domain: "Chapter 5: Test Management",
    question: "What is configuration management in the context of testing?",
    options: [
      "A process for managing the test team",
      "A process for managing the versions of test items and test work products",
      "A process for managing the test budget",
      "A process for managing the test schedule"
    ],
    correctAnswer: 1,
    explanation: "Configuration management is a process for managing the versions of test items and test work products. It ensures that the correct versions of test items and test work products are used and that changes are tracked and controlled."
  },
  {
    id: 10,
    domain: "Chapter 5: Test Management",
    question: "A test manager is evaluating whether testing can be concluded. Which of the following is an example of an entry criterion?",
    options: [
      "All high-priority test cases have been executed",
      "The test environment is available and stable",
      "The defect density is below a defined threshold",
      "All critical defects have been fixed"
    ],
    correctAnswer: 1,
    explanation: "Entry criteria define the conditions that must be met before testing can begin. An available and stable test environment is an example of an entry criterion. The other options are examples of exit criteria."
  }
];
